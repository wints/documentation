require 'faraday'

@conn = Faraday.new(:url => 'https://branch.io') do |faraday|
  faraday.request  :url_encoded             # form-encode POST params
  faraday.response :logger                  # log requests to STDOUT
  faraday.adapter  Faraday.default_adapter  # make requests with Net::HTTP
end

module Jekyll
  class ReferenceTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @asset = text.strip
    end

    def render(context)
      response = @conn.get '/about'
      puts response.body

    end
  end
end

Liquid::Template.register_tag('reference2', Jekyll::ReferenceTag)
