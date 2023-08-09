const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: "loloplox.aternos.me", // servidor de Minecraft
    port: 20039,        // puerto estándar de Minecraft
    username: "herobrine:v",    // nombre de usuario del bot
    version: "1.20"
});

bot.once("login", () => {
    setTimeout(() => {
        bot.setControlState('jump', true)
        bot.setControlState('sneak', true)
    }, 1000)

    bot.on('chat', (username, message) => {
        if (username === bot.username) return

        if (message === "ven aca mrd") {
            bot.chat("voy patroncito")
            bot.chat(`/tp ${username}`)
            bot.chat("ya llegue patroncito")
        }
    })
})


bot.on("error", console.error)
bot.on("kicked", console.error)
