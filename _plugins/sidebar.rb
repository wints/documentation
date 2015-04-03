module Jekyll

  class SidebarGenerator < Generator
    def generate(site)
      group_pages = site.pages.select { |page| page.data['type'] }
      site.data['groups'] = {
        'overview' => ['Overview', Array.new],
        'recipe' => ['Building with Branch (Recipes)', Array.new],
        'domain' => ['Feature (Domains)', Array.new],
        'reference' => ['API Reference', Array.new]
      }

      group_pages.each do |page|
        if page.data['platforms'] then
            site.data['groups'][page.data['type']][1].push([page.name.split(".")[0], page.data['title'], Hash[page.data['platforms'].zip(page.data['platforms'].map {|i| true })]])
        end
      end
    end
  end
end
