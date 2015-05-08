module Jekyll
  class ReferenceTag < Liquid::Tag
  	START_HIGHLIGHT_REGEX = /```\s*(?<lang>[a-z]+)/
  	END_HIGHLIGHT_REGEX = /```\n/
    def initialize(tag_name, text, tokens)
      super
      @asset = text.strip
    end

    def render(context)
      file = File.read(File.join("_includes/", @asset))

      file = file.gsub(/```\s*(?<lang>[a-z_#]+)\n/, '{% highlight \k<lang> %}')
      file = file.gsub(/```\n/, '{% endhighlight %}')

      puts file

      Liquid::Template.parse(file).render!(context)
    end
  end
end

Liquid::Template.register_tag('reference', Jekyll::ReferenceTag)
