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

      self.data[platform] = true
      self.data['platform'] = platform
      self.data['default'] = default
      self.data['layout'] = type
    end
  end

  class PlatformGenerator < Generator
    def generate(site)
      filtered_pages = site.pages.select { |page| page.data['type'] == 'recipe' or page.data['type'] == 'ingredient' }
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
