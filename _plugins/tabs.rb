require 'kramdown'

module Jekyll

  class TabsTag < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
      @markup = markup.gsub(/[^a-z_0-9\-]/, "")
    end

    def render(context)
      context.registers[:tabs] = []
      super

      # join tab contents together and convert html -> jsx
      jsx = context.registers[:tabs].join("\n").gsub(/\sclass=/, ' className=').gsub(/\sfor=/, ' htmlFor=')
      jsx = '<Tabs>' +
        jsx +
      '</Tabs>'
      # unjsxify(jsx)
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
