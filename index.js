const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

// setup the bot
// hello function handles updates(messages) sent from Telegram to the webhook API
module.exports.hello = async event => {
  // using a try/catch block
  try {
    // process event data
    const body = JSON.parse(event.body);

    // bot handles processed data from the event body
    await bot.handleUpdates(body);

    // return an Ok response
  } catch (err) {
    // handle any errors

    // return any Err responses
  }
}

// setWebhook function handles initial webhook setup for Telegram
module.exports.setWebhook = async event => {
  // using a try/catch block
  try {
    // process webhook url based on event data
    let url = 'https://' + event.headers.Host + '/' + event.requestContext.stage
      + '/webhook';

    // use bot methods to set the webhook url
    await bot.telegram.setWebhook(url);

    // return an Ok response
  } catch (err) {
    // handle any errors

    // return any Err responses
  }
}

// telegram bot
//method for invoking start command

bot.command('start', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
  })
})

// bot handles processed data from the event body
await bot.handleUpdates(body)
