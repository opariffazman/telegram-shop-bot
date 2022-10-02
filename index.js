const express = require("express")
const router = express.Router()

const processSomething = callback => {
  setTimeout(callback, 20000)
}

router.post("/hook", (req, res, next) => {
  processSomething(() => {
    const webhookUrl = req.params.url

    console.log(`webhookUrl called`)
  });

  res.status(200).send('OK')
})

module.exports = router
