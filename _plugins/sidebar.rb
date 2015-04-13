require 'open3'
require 'kramdown'
require_relative '_utils.rb'

module Jekyll

  class SidebarTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      @markup = markup.gsub(/[^a-z_0-9\-]/, "")
    end

    def render(context)
      site_map = context.registers[:site].data['groups']
      current_path = context.environments.first["page"]["current_path"] || '/'
      return BranchUtils.instance.react('<Sidebar current_path="' + current_path + '" site_map=' + BranchUtils.instance.json_property(site_map) + '/>')
    end
  end

  class PlatformSelectorTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      @markup = markup.gsub(/[^a-z_0-9\-]/, "")
    end

    def render(context)
      # todo pass in page_name
      platforms = context.registers[:site].data['platforms']
      return BranchUtils.instance.react('<PlatformSelector platforms=' + BranchUtils.instance.json_property(platforms) + '/>')
    end
  end

end

Liquid::Template.register_tag('sidebar', Jekyll::SidebarTag)
Liquid::Template.register_tag('platform_selector', Jekyll::PlatformSelectorTag)
