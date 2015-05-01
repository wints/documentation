require_relative '_utils.rb'

module Jekyll

  class SlidesTag < Liquid::Block
    def initialize(tag_name, markup, tokens)
      super
      @markup = markup.gsub(/[^a-z_0-9\-]/, "")
    end

    def render(context)
      context.registers[:slides] = []
      super

      html = context.registers[:slides].join("")
      html = '<Slides>' + html + '</Slides>'

      BranchUtils.instance.react(html)
    end
  end

  class SlideTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @asset = text.strip.split(" ").first
    end

    def render(context)
      partial = File.read(File.join("learn-more/slides", @asset))
      context.registers[:slides].push('<Slide>' + partial + '</Slide>')
      ""
    end
  end

end

Liquid::Template.register_tag('slide', Jekyll::SlideTag)
Liquid::Template.register_tag('slides', Jekyll::SlidesTag)
