# syntax=docker/dockerfile:1
FROM ruby:latest

RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get update -qq && apt-get install -y nodejs yarn postgresql-client

WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN bundle install

COPY . .

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

USER "$USER"

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
