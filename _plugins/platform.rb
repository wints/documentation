require 'json'

module Jekyll
  class PlatformPage < Page
    def initialize(site, base, type, page, platform, default)
      @site = site
      @base = base
      if platform != '' and !default then
        @dir = File.join(type + 's', page.name.split(".")[0])
        @name = platform + '.md'
      else
        @dir = type + 's'
        @name = page.name.split(".")[0] + '.md'
      end

      self.read_yaml(File.join(base, type + 's'), page.name)
      self.process(@name)

      formatted_platforms = {
        "ios" => "iOS",
        "android" => "Android",
        "web" => "Web"
      }

      self.data[platform] = true
      self.data['platform'] = platform
      self.data['platform_formatted'] = formatted_platforms[platform] or platform
      self.data['default'] = default
      self.data['layout'] = type
      self.data['current_path'] = type + 's' + '/' + page.name.split(".")[0]

    end
  end

  class PlatformGenerator < Generator
    def buildGroups(site)
      group_pages = site.pages.select { |page| ['recipe', 'overview', 'domain', 'reference'].include?(page.data['type']) }
      site.data['groups'] = {
        'overview' => { 'title' => 'Overview', 'pages' => Array.new },
        'recipe' => { 'title' => 'Building with Branch (Recipes)', 'pages' => Array.new },
        'domain' => { 'title' => 'Feature (Domains)', 'pages' => Array.new },
        'reference' => { 'title' => 'API Reference', 'pages' => Array.new }
      }

      group_pages.each do |page|
        if page.data['platforms'] then
            site.data['groups'][page.data['type']]['pages'].push({
              'path' => page.name.split(".")[0],
              'title' => page.data['title'],
              'platforms' => Hash[page.data['platforms'].zip(page.data['platforms'].map {|i| true })]
            })
        end
      end

      site.data['groups'].each do |key, value|
        value['type'] = key;
      end
      site.data['groups'] = site.data['groups'].values
    end

    def generate(site)
      buildGroups(site)
      filtered_pages = site.pages.select { |page| ['recipe', 'overview', 'domain', 'reference'].include?(page.data['type']) }
      site.pages.reject! { |page| page.data['type'] == 'recipe' or page.data['type'] == 'ingredient' }

      filtered_pages.each do |page|
        if page.data['platforms'] then
          # add a default page as the first value in the array
          site.pages << PlatformPage.new(site, site.source, page.data['type'], page, page.data['platforms'][0], true)
          page.data['platforms'].each do |platform|
            site.pages << PlatformPage.new(site, site.source, page.data['type'], page, platform, false)
          end
        else
          site.pages << PlatformPage.new(site, site.source, page.data['type'], page, page.data['platforms'][0] || "", false)
        end
      end
    end
  end
end
