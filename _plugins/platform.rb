
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
    end
  end

  class PlatformGenerator < Generator
    def buildGroups(site)
      group_pages = site.pages.select { |page| page.data['type'] }
      site.data['groups'] = {
        'overview' => ['Overview', Array.new],
        'recipe' => ['Building with Branch (Recipes)', Array.new],
        'domain' => ['Feature (Domains)', Array.new],
        'reference' => ['API Reference', Array.new]
      }

      group_pages.each do |page|
        if page.data['platforms'] then
            site.data['groups'][page.data['type']][1].push([page.name.split(".")[0], page.data['title'], Hash[page.data['platforms'].zip(page.data['platforms'].map {|i| true })]])
        end
      end
      site.data['groups_json'] = site.data['groups'].to_json
    end

    def generate(site)
      buildGroups(site)
      filtered_pages = site.pages.select { |page| page.data['type'] == 'recipe' or page.data['type'] == 'overview' or page.data['type'] == 'domain' }
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
