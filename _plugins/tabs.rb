require 'open3'
require 'kramdown'
require 'nokogiri'

def to_jsx(content)
  attr_translate = { "for" => "htmlFor", "class" => "className" }

  if content.text? then
    "{" + ("" + content).to_json + "}"
  elsif content.element?
    res = "<" + content.name + (content.attributes.map { |_,attr| ' ' + (attr_translate[attr.name] or attr.name) + '=' + attr.value.to_json }.join '')
    if content.children.count then
      res + '>' + (content.children.map { |child| to_jsx(child) }.join '') + '</' + content.name + '>'
    else
      res + ' />'
    end
  else
    ""
  end
end

module Jekyll

  class TabsTag < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
      @markup = markup.gsub(/[^a-z_0-9\-]/, "")
    end

    def render(context)
      context.registers[:tabs] = []
      super

      html = context.registers[:tabs].join("\n")
      html = '<Tabs>' + html + '</Tabs>'

      data, s = Open3.capture2("node _plugins/render.js renderReact", :stdin_data => to_jsx(Nokogiri::XML(html).children[0]), :binmode => true)
      data
    end
  end

  class TabTag < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
      @markup = markup.gsub(/[^a-z_0-9\-]/, "")
    end

    def render(context)
      site = context.registers[:site]
      contents = Kramdown::Document.new(super).to_html
      context.registers[:tabs].push('<Tab name="' + @markup + '" >' + contents + '</Tab>')
      ""
    end
  end

end

Liquid::Template.register_tag('tabs', Jekyll::TabsTag)
Liquid::Template.register_tag('tab', Jekyll::TabTag)
