require 'nokogiri'
require 'singleton'
require 'socket'
require 'digest/md5'


class BranchUtils
  include Singleton
  attr_accessor :jsx

  def initialize
    @_react = {}

    sock = Dir.mktmpdir + '/' + (0...10).map { ('a'..'z').to_a[rand(26)] }.join

    @pid = fork do
      exec 'node', File.dirname(__FILE__) + '/_render.js', sock
    end
    sleep 1

    @s1 = UNIXSocket.new(sock)

  end

  def bundle(content)
    _node("bundle", content)
  end

  def react(content)
    if @_react[content] then
      @_react[content]
    else
      @_react[content] = _node("react", _to_jsx(Nokogiri::XML(content).children[0]))
    end
  end


  def _node(type, data)
    @s1.send JSON.generate({ :type => type, :data => data }), 0

    length = Integer(@s1.recv(10).sub(/^0+/, ''))
    out = ""
    while out.length < length do
      out += @s1.recv([length - out.length, 10000].max)
    end

    JSON.parse('[' + out + ']')[0]
  end

  def _to_jsx(content)
    attr_translate = { "for" => "htmlFor", "class" => "className" }
  
    if content.text? then
      "{" + ("" + content).to_json + "}"
    elsif content.element?
      res = "<" + content.name + (content.attributes.map { |_, attr|
        ' ' + (attr_translate[attr.name] or attr.name) + '=' + (attr.value.start_with?('json:') ? '{' + attr.value[5..-1] + '}' : attr.value.to_json)
      }.join '')

      if content.children.count then
        res + '>' + (content.children.map { |child| _to_jsx(child) }.join '') + '</' + content.name + '>'
      else
        res + ' />'
      end
    else
      ""
    end
  end

  def json_property(obj)
    doc = Nokogiri::XML "<root></root>"
    doc.root.content = JSON.generate(obj)
    '"json:' + doc.root.inner_html.gsub('"', '&quot;') + '"'
  end
end
