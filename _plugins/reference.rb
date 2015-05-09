
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
      page = context.environments.first['page']
      url_base = 'https://raw.githubusercontent.com/BranchMetrics/' + (page['repo'] || '') + '/master/'

      if context.environments.first['site']['environment'] == 'production' then
        # replace start of comment with highlight liquid tag
        file = file.gsub(/```\s*(?<lang>[a-z]+)\n/, '{% highlight \k<lang> %}')
        # replace end of code comment with highlight liquid tag
        file = file.gsub(/```\n/, '{% endhighlight %}')
        # remove Title from readme (i.e. # Web SDK)
        file = file.gsub(/(^|\n)#\s.*/, '')
        # convert relative paths images to absolute paths
        file = file.gsub(/\!\[(?<alt>[^(]+)\]\((?!http)(?<url>\S+)\)/, '![\k<alt>](' + url_base + '\k<url>' + ')')
      end

      Liquid::Template.parse(file).render!(context)
    end
  end
end

Liquid::Template.register_tag('reference', Jekyll::ReferenceTag)
