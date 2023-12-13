const { Events } = require('discord.js');
const request = require('../requests');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        // Ignore messages from the bot itself
        if (message.author.bot) return;
        // Check if the message is in a guild and not in DMs
        if (!message.guild) return;

        const mesaj = message.content.toLowerCase().replace(/ö/g, 'o')
            .replace(/ü/g, 'u')
            .replace(/ı/g, 'i')
            .replace(/ç/g, 'c')
            .replace(/ş/g, 's');

        const cbMiYazdi = message.guild.ownerId === message.author.id;

        await request.execute(mesaj).then((response)=>{
            //console.log(`response: ${response}, type: ${Object.prototype.toString.call(response)}`);
            const cevap = response.pop()
            //console.log(`response: ${cevap}, type: ${Object.prototype.toString.call(cevap)}, length: ${cevap.length}`);
            
            if (cevap === "True") {
                if (cbMiYazdi) {
                    message.reply("Yoo bro why u mad doe??");
                }
                else {
                    message.channel.send("Dude chill, we dont fuck with that profanity shit around here! ");
                }
            }
            }

        );


        



    },
};