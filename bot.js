const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
  if (message.content.includes('@everyone')) {
    message.reply(`Please dont mention everyone`)
    message.delete()
  }
})

require('dotenv').config()
const token = process.env.BOT_TOKEN

client.login(token)
