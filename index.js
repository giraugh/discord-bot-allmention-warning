require('dotenv').config()
const bot = require('./bot')
const app = require('express')()
const token = process.env.BOT_TOKEN
const port = process.env.PORT
const redirectUrl = 'http://discordapp.com/oauth2/authorize?&client_id=442518443661721610&scope=bot&permissions=0'

bot.login(token)

app.get('/', (req, res) => res.redirect(redirectUrl))
app.listen(port, () => console.log(`WebApp running on port ${port}`))
