const { Telegraf } = require('telegraf')

const express = require('express')

// webhook
const app = express()
app.use(express.json())

app.post('/', (req, res) => {
  console.log('received webhook', req.body)
  res.sendStatus(200)
})

const port = process.env.PORT || 9000
app.listen(port, () => console.log(`Node.js server started on port ${port}.`))

// telegram bot
const token = process.env.BOT_TOKEN
const bot = new Telegraf(token)

const webhookDomain = 'https://prickly-coat-mite.cyclic.app/'
app.use(await bot.createWebhook({ domain: webhookDomain }))
bot.on("text", ctx => ctx.reply("Hello"))
