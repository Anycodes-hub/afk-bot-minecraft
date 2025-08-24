const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: process.env.MC_HOST || "scholgroup.aternos.me",
    port: parseInt(process.env.MC_PORT) || 25565,
    username: process.env.MC_USERNAME || "AFK_Bot"
  })

  bot.on('spawn', () => {
    console.log("✅ Bot has joined the server!")
    bot.chat("I am AFK to keep server alive 😴")
  })

  bot.on('end', () => {
    console.log("❌ Bot disconnected, reconnecting...")
    setTimeout(createBot, 5000)
  })
}

createBot()
