module Jekyll
    module TOC
        def toc_generate(html)
            _generate(html, true)
        end
        def toc_generate_no_title(html)
            _generate(html, false)
        end
        def _generate(html, hasTitle)
            toc = []
            levels = [2]
            html.gsub!(/<h([0-9]) id="(.*)">(.*)<\/h\d>/) { |m, tag, header|
                level = Regexp.last_match[1].to_i
                id = Regexp.last_match[2]
                text = Regexp.last_match[3]

                if levels.find_index(level) then toc.push({ :level => level, :id => id, :text => text, :children => [] }) end

                '<h' + level.to_s + '><a class="anchor" name="' + id + '"></a><a href="#' + id + '">' + text + '</a></h' + level.to_s + '>'
            }
            nested_toc = _nested_toc(toc)

            steps = hasTitle ? '<h4 class="toc-steps"> Steps </h4>' : ''
            "<hr/>" + steps + _render_toc(nested_toc, 1) + "<hr />" + html
        end
        def _render_toc(toc, level)
            if toc.length > 0 then
                "<ol" + (level == 2 ? ' type="a"' : "") + ">\n" +
                    toc.map { |item| '<li><a href="#' + item[:id] + '">' + item[:text] + _render_toc(item[:children], level + 1) + "</a></li>" }.join("\n") +
                    "</ol>\n"
            else
                ""
            end
        end
        def _nested_toc(toc)
            new_toc = []
            current_h2 = nil
            # This is a really janky way to do this. Eventually we can do something better
            while toc.length > 0
                item = toc.shift
                if item[:level] == 2
                    if current_h2 then new_toc.push current_h2 end
                    current_h2 = item
                elsif current_h2
                    current_h2[:children].push item
                end
            end
            new_toc.push current_h2 if current_h2
            new_toc
        end
    end
end

Liquid::Template.register_filter(Jekyll::TOC)
