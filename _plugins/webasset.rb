module Jekyll
  class WebAssetTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @asset = text.strip.split(" ").first
      @params = text.split(" ")[1..-1].join(" ")
    end

    def render(context)
      data = {}

      @params.scan(/(\w+)='([^'\\]+(\\.[^'\\]+)*)'/).each { |m|
        data[m[0]] = Liquid::Template.parse(m[1]).render!(context)
      }

      partial = Liquid::Template.parse(File.read(File.join("_includes/branch-web-assets/components", @asset, @asset + ".html")))

      context.stack do
        context['include'] = data
        partial.render!(context)
      end
    end
  end
end

Liquid::Template.register_tag('webasset', Jekyll::WebAssetTag)
