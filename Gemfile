source 'https://rubygems.org'
ruby '2.1.1'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
gem "sass", :path => "./vendor/ruby/2.1.0/gems/sass-3.3.14" 

group :test do
  gem 'kramdown'
  gem 'jekyll'
  gem 'html-proofer'
  gem 'rake'
  gem 'jekyll-redirect-from'
  gem 'jekyll-sitemap'
end
