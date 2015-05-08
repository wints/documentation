
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

      if context.environments.first['site']['environment'] == 'development' then
        file = file.gsub(/```\s*(?<lang>[a-z_#]+)\n/, '{% highlight \k<lang> %}')
        file = file.gsub(/```\n/, '{% endhighlight %}')
      end

      Liquid::Template.parse(file).render!(context)
    end
  end
end

Liquid::Template.register_tag('reference', Jekyll::ReferenceTag)
