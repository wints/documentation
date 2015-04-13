require 'open3'
require 'kramdown'
require_relative '_utils.rb'

module Jekyll

  class SidebarTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      @markup = markup.gsub(/[^a-z_0-9\-]/, "")
    end

    def render(context)
    	# todo pass in page_name
      return BranchUtils.instance.react('<Sidebar />')
    end
  end

  class PlatformSelectorTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      @markup = markup.gsub(/[^a-z_0-9\-]/, "")
    end

    def render(context)
      # todo pass in page_name
      platforms = context.registers[:site].data['platforms'].to_json
      return BranchUtils.instance.react('<PlatformSelector platforms="' + platforms + '"/>')
    end
  end

end

Liquid::Template.register_tag('sidebar', Jekyll::SidebarTag)
Liquid::Template.register_tag('platform_selector', Jekyll::PlatformSelectorTag)
