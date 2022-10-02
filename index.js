const express = require('express')
const TelegramBot = require('node-telegram-bot-api')

const port = process.env.PORT || 3000

const app = express()

const BOT_TOKEN = process.env.BOT_TOKEN | "5421681843:AAGeQcrYjBU4Qa-GdDeMgh9tjKu3RRCucJo"
const PAYMENT_TOKEN = process.env.PAYMENT_TOKEN | "284685063:TEST:NjQ1ZjMxNTEwYmRj"

const telegramBot = new TelegramBot(BOT_TOKEN, { polling: true })

telegramBot.on('error', msg => console.log(`[bot] error`, msg))
telegramBot.on('polling_error', msg => console.log(`[bot] polling_error`, msg))
telegramBot.on('webhook_error', msg => console.log(`[bot] webhook_error`, msg))

telegramBot.setMyCommands([{
  command: 'list',
  description: 'show products'
}])

telegramBot.onText(/\/list/, async (msg, match) => {
  telegramBot.sendMessage(msg.chat.id, 'Select a product', {
    reply_markup: {
      inline_keyboard: [
        'test'
      ]
    }
  })
})


app.listen(port, () => console.log(`Telegram ShopBot listening at ${port}`))
