require 'faraday'

module Jekyll
  class ChangelogTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @asset = text.strip
    end

    def render(context)
      page = context.environments.first['page']
      @github_base = 'https://raw.githubusercontent.com'
      @github_repo_path = '/BranchMetrics/' + page['repo'] + '/master'
      file = ''

      if context.environments.first['site']['environment'] == 'production' then
        conn = Faraday.new(:url => @github_base)

        response = conn.get @github_repo_path + '/ChangeLog.md'
        file = response.body.force_encoding('utf-8')

        # convert relative paths images to absolute paths
        file = file.gsub(/\!\[(?<alt>[^(]+)\]\((?!http)(?<url>\S+)\)/, '![\k<alt>](' + @github_base + @github_repo_path + '/' + '\k<url>' + ')')
      else
        file = "Changelogs don't compile in `development`. Change the enviornment variable in _config.yml to `production` to test reference guides"
      end


      Liquid::Template.parse(file).render!(context)

    end
  end
end

Liquid::Template.register_tag('changelog', Jekyll::ChangelogTag)
