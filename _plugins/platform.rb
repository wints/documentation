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
    def buildSiteMap(site)
      group_pages = site.pages.select { |page| ['recipe', 'overview', 'domain', 'reference'].include?(page.data['type']) }
      site.data['site_map'] = {
        'overview' => { 'title' => 'Overview', 'pages' => Hash.new },
        'recipe' => { 'title' => 'Building with Branch (Recipes)', 'pages' => Hash.new },
        'domain' => { 'title' => 'Feature (Domains)', 'pages' => Hash.new },
        'reference' => { 'title' => 'API Reference', 'pages' => Hash.new }
      }

      group_pages.each do |page|
        if page.data['platforms'] then
            path = page.name.split(".")[0]
            site.data['site_map'][page.data['type']]['pages'][path] = {
              'path' => path,
              'title' => page.data['title'],
              'platforms' => Hash[page.data['platforms'].zip(page.data['platforms'].map {|i| true })]
            }
        end
      end

      site.data['site_layout'] = Marshal.load( Marshal.dump(site.data['site_map']) )
      site.data['site_layout'].each do |key, value|
        value['type'] = key
        value['pages'] = value['pages'].values
      end
      site.data['site_layout'] = site.data['site_layout'].values
    end

    def generate(site)
      buildSiteMap(site)
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
