require 'open3'

module Jekyll
  class BrowserifyConverter < Converter
    safe true
    priority :low

    def matches(ext)
      ext =~ /^\.jsx?$/i
    end

    def output_ext(ext)
      ".js"
    end

    def convert(content)
      data, s = Open3.capture2("node _plugins/render.js bundle", :stdin_data => content, :binmode => true)
      data
    end
  end
end
