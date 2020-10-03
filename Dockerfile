FROM jekyll/jekyll

COPY Gemfile .
COPY Gemfile.lock .
RUN gem install bundler:1.17.2; bundle install

CMD ["jekyll", "serve"]
