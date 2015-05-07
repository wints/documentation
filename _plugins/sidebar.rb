require 'open3'
require_relative '_utils.rb'

module Jekyll

  class SidebarTag < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      @markup = markup.gsub(/[^a-z_0-9\-]/, "")
    end

    def render(context)
      site_layout = context.registers[:site].data['site_layout']
      current_path = context.environments.first['page']['current_path'] || '/'

      return BranchUtils.instance.react(
        '<Sidebar
          current_path="' + current_path + '"
          site_layout=' + BranchUtils.instance.json_property(site_layout) + '/>')
    end
  end

end

Liquid::Template.register_tag('sidebar', Jekyll::SidebarTag)
