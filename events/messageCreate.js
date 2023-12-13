const { Events } = require('discord.js');
const request = require('../requests');
const { cbCevaplar, kufurler } = require('../jsonFiles/templateAnswers.json');
const {ardaId,sefaId,dzgId,boId} = require('../jsonFiles/id.json');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        // Ignore messages from the bot itself
        if (message.author.bot) return;
        // Check if the message is in a guild and not in DMs
        if (!message.guild) return;

        const response = await request.execute(message.content.toLowerCase());
        const isSenderBot = message.author.bot;

        const noncbCevaplar = [` adam gibi konus ${message.author} serefine kaydirtma ogggggglum. Kufur yok dedik.`,
        ` la ${message.author} kufur etme demedik mi agzinin yayini si si.`,
        ` adam gibi konus ${message.author} serefine kaydirtma ogggggglum. Kufur yok dedik.`,
        ` bilader ${message.author} serefine haysiyetine adam gibi konussana.`,
        ` oglum ${message.author} siparis misin bize kufur yok diyoruz ebleh oe.`,
        ` awrat gibi zirr zirr bi sus aq ${message.author} `,
        ` lan ne kari kilikli adamsin dir dir ${message.author}`,
        ` kisir kahpe ${message.author} kufur yok demiyoz mu kit misin amq.`,
        ` ana baci mi yapalim illa ${message.author} laftan anlamaz misin sen kamil?`,
        ` sen dcde erkeksin ${message.author} `,
        ` gozlerim kapkarrrra icim kasssvet  ${message.author}`,
        ` sabahlari kizla trrafik aksam da dizzzZlaaa ${message.author}`,
        ` denk duselim got ${message.author} varsa cesaret.`,
        `ekibe gerekli nakit o yuzden surtuge ayiramiyorum vakittt.`,
        `BIZE PAYIMIZI VERCEKSIN ${message.author}`,
        `kokuyu aldim ${message.author} kannnn istahlandim.`,
        `mahallende 4 tur turluyosak bil ${message.author} SANA SALDIRCAK YER ARIYORUZ.`,
        `densiz pust ${message.author}`

        ]


        const cevaplar = [...noncbCevaplar, ...cbCevaplar]

        const cbMiYazdi = message.guild.ownerId === message.author.id;

        const mesaj = message.content.toLowerCase().replace(/ö/g, 'o')
            .replace(/ü/g, 'u')
            .replace(/ı/g, 'i')
            .replace(/ç/g, 'c')
            .replace(/ş/g, 's');

        const edilmisKufurler = kufurler.filter((kufur) => mesaj.includes(kufur));

        const cevapSet = edilmisKufurler.map((kufur) => kufur + 'i').join(' ');

        if (mesaj.includes("kimsin") || mesaj.includes("nesin") || mesaj.includes("ne ayaks")) {
            await message.reply("Küfürbaz gizemli rapci, 26 arefesi yorgun bekci. Iskeletler diyarinda bir et parcasi..");
        }

        else if ((mesaj.includes('sa') && mesaj.length === 2) || mesaj.includes('selam')) {
            await message.reply('WAaleynaaleykümselam agabey.');
        }

        else if (mesaj.includes("orospuluk satandadir met")) {
            await message.reply("OROSPULUK ANANDADIR NET");
        }

        else if (mesaj.includes("guzel") && (mesaj.includes("dzg") || mesaj.includes("yenge"))) {

            message.client.users.fetch(dzgId).then(user => {
                message.channel.send(`vallahi agabey yengemin <@${user.id}> guzellik asalet saka mi. Rab sahibine bagislasin insallah..`);
            })
            //console.log(message);
        }

        else {
            const cevap = response.pop()
            //console.log(`response: ${cevap}, type: ${Object.prototype.toString.call(cevap)}, length: ${cevap.length}`);
            const dice = Math.floor(Math.random() * 10);

            if (!isSenderBot && (cevap === 'True' || cevapSet.length > 0)) {
                if (cbMiYazdi) {
                    const random = Math.floor(Math.random() * cbCevaplar.length);

                    if (dice < 5) {
                        await message.reply('ha onu iyi dedin agzin pittik yesin agabey.');
                    }
                    else {
                        await message.channel.send(cbCevaplar[random]);
                    }
                }
                else {
                    const random = Math.floor(Math.random() * cevaplar.length);

                    if (message.author.id === sefaId && dice > 8) { //sefaysa
                        const random = Math.floor(Math.random() * 10);
                        await message.reply('Atildi kanka');

                    }
                    else if (message.author.id === ardaId && dice > 8) { //ardaysa
                        const random = Math.floor(Math.random() * 10);
                        await message.reply('la ardaaao okul isi noldu simdi son durum? var mi yökten gelen giden YOK mu :))))');

                    }
                    else if (message.author.id === dzgId && dice > 8) { //dzgyse
                        const random = Math.floor(Math.random() * 10);
                        await message.reply('Nasildi gunun güzeller güzeli kralice yengem gergin gibisin? Abim seni hep cok merak ediyor..');

                    }
                    else if (message.author.id === boId && dice > 7) { //böyse
                        const random = Math.floor(Math.random() * 10);
                        await message.reply('ooo beyimiz de tesrife etmisler. Napiyon lan malhan detoks isleri mi yine??');

                    }

                    else {
                        await message.channel.send(cevaplar[random]);
                    }

                }
            }
        }



    },
};
