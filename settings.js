'use strict'

module.exports = {
  name: process.env.SERVICE_NAME,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  monitor_port: process.env.MONITOR_PORT,
  metrics: process.env.METRICS
}
