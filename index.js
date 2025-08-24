const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: "scholgroup.aternos.me", // your Aternos server
    port: 59561,                   // default port
    username: "AFK_Bot"            // bot name
  })

  bot.on('spawn', () => {
    console.log("✅ Bot has joined the server!")
    bot.chat("")
  })

  bot.on('end', () => {
    console.log("❌ Bot disconnected, reconnecting...")
    setTimeout(createBot, 5000) // reconnect after 5s
  })
}

createBot()
