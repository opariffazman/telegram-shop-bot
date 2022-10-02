const { Telegraf } = require('telegraf')

// const express = require('express')

// // webhook
// const app = express()
// app.use(express.json())

// app.post('/', (req, res) => {
//   console.log('received webhook', req.body)
//   res.sendStatus(200)
// })

// const port = process.env.PORT || 9000
// app.listen(port, () => console.log(`Node.js server started on port ${port}.`))

// telegram bot
const bot = new Telegraf(process.env.BOT_TOKEN)
//method for invoking start command

bot.command('start', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
  })
})

bot.launch()
