FROM ruby:2.3.1-slim
# Run updates
RUN apt-get update -qq && apt-get install -y build-essential nodejs npm bash-completion
ENV APP_HOME=/usr/src/app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME
ADD Gemfile* $APP_HOME/
RUN bundle install
ADD . $APP_HOME
RUN npm install
