const Discord = require("discord.js")
const TOKEN = "OTM1ODkzNjEyMzQ3MTQ2MzMw.YfFQ2Q.4UBfMaiLszhsZXbcdE41g-sBPRU"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log('Logged in as Xiao#5479')
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello!")
    }
    else {
        if (message.content == "hello"){
            message.reply("Hi!")
        }
    }
})

client.login(TOKEN)