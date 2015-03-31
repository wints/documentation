require "byebug"
require "pp"

module Jekyll

  class PlatformPage < Page
    def initialize(site, base, type, page, platform)
      @site = site
      @base = base

      if platform != '' then
        @dir = File.join(type + 's', page.name.split(".")[0])
        @name = platform + '.html'
      else
        @dir = type + 's'
        @name = page.name.split(".")[0] + '.html'
      end

      self.read_yaml(File.join(base, type + 's'), page.name)
      self.process(@name)

      self.data[platform] = true
      self.data['platform'] = platform
    end
  end

  class PlatformGenerator < Generator
    def generate(site)
      filtered_pages = site.pages.select { |page| page.data['type'] == 'recipe' or page.data['type'] == 'ingredient' }
      site.pages.reject! { |page| page.data['type'] == 'recipe' or page.data['type'] == 'ingredient' }

      filtered_pages.each do |page|
        if page.data['platforms'] then
          page.data['platforms'].each do |platform|
            site.pages << PlatformPage.new(site, site.source, page.data['type'], page, platform)
          end
        else
          site.pages << PlatformPage.new(site, site.source, page.data['type'], page, "")
        end
      end
    end
  end
end
