require 'json'

module Jekyll
  class PlatformPage < Page
    def initialize(site, base, type, page, platform, isDefault)
      @site = site
      @base = base
      # set the type to empty if overview so that overview pages will be at root
      types = if type != 'overview' then type + 's' else '' end

      if platform != '' and !isDefault then
        @dir = File.join(types, page.name.split(".")[0])
        @name = platform + '.md'
      else
        @dir = types
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
      self.data['default'] = isDefault
      self.data['layout'] = type

      path_page_name = page.name.split(".")[0]
      if path_page_name == 'index' then path_page_name = '' end

      self.data['current_path'] = if types.length > 0 && path_page_name.length > 0 then types + '/' + path_page_name else '' end

    end
  end

  class PlatformGenerator < Generator
    def buildSiteMap(site)
      group_pages = site.pages.select { |page| ['recipe', 'overview', 'domain', 'reference' ].include?(page.data['type']) }
      site.data['site_map'] = {
        'overview' => { 'title' => 'Overview', 'pages' => Hash.new },
        'recipe' => { 'title' => 'Building with Branch (Recipes)', 'pages' => Hash.new },
        'domain' => { 'title' => 'Feature (Domains)', 'pages' => Hash.new },
        'reference' => { 'title' => 'API Reference', 'pages' => Hash.new }
      }

      group_pages.each do |page|
        page_platforms = if page.data['platforms'] then page.data['platforms'] else [] end

        path = page.name.split(".")[0]
        if path == 'index' then path = '' end

        site.data['site_map'][page.data['type']]['pages'][path] = {
          'path' => path,
          'title' => page.data['title'],
          'platforms' => Hash[page_platforms.zip(page_platforms.map {|i| true })]
        }
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
      filtered_pages = site.pages.select { |page| ['recipe', 'overview', 'domain', 'reference' ].include?(page.data['type']) }
      site.pages.reject! { |page| page.data['type'] == 'recipe' or page.data['type'] == 'ingredient' }

      filtered_pages.each do |page|
        if page.data['platforms'] then
          page.data['platforms'].each do |platform|
            site.pages << PlatformPage.new(site, site.source, page.data['type'], page, platform, false)
          end
        end
        # add a default page as the first value in the array
        default_platform = if page.data['platforms'] then page.data['platforms'][0] else '' end
        site.pages << PlatformPage.new(site, site.source, page.data['type'], page, default_platform, true)
      end

    end
  end
end
