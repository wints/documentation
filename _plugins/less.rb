require 'less'
require 'byebug'

module Jekyll
  class LessConverter < Converter
    safe true
    priority :high
    
    def matches(ext)
      ext =~ /less|lcss/i
    end
    
    def output_ext(ext)
      ".css"
    end
    
    def convert(content)
      begin
        parser = Less::Parser.new :paths => [ Jekyll.sanitized_path(@config["source"], "less") ]
        parser.parse(content).to_css
      rescue => e
        puts "Less Exception: #{e.message}"
      end
    end
  end
end
