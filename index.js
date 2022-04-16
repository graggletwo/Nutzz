const { Client, MessageEmbed } = require('discord.js');

const client = new Client();
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

client.on('ready', () => {
  console.log('Ready on client !');
  console.log('---------')
  console.log('by Triskaaa#9999 enjoy')

  // Setting the client's status
  client.user.setStatus('dnd');
  client.user.setActivity('n!help | Happy nutting :p', { type: 'WATCHING' });
});

// Help command
client.on('message', message => {
  if (message.content === 'n!help') {
    const embed = new MessageEmbed()
      .setTitle('Help Page')
      .setColor(0xff0000)
      .setDescription(':underage: **NSFW :** \n \`n!pussy\` Sends a random pussy picture. \n \`n!anal\` Sends a random anal picture. \n \`n!4k\` Sends a random 4k picture. \n \`n!porngif\` Sends a random porn gif. \n \`n!gonewild\` Sends a random gonewild picture. \n \n :gear: **UTILITY :** \n \`n!help\` Shows this help page. \n \`n!invite\` Gives a link to invite the bot.');
    message.channel.send(embed);
  }
});

client.on("message", async message => {
    if (message.author.bot) return false;
    if (message.content.toLowerCase() == "n!4k") {
        if (message.channel.nsfw) {
            const fourkImage = await nsfw.fourk();
            const fourkEmbed = new MessageEmbed()
            .setTitle(`4K Command :P`)
            .setColor("YELLOW")
            .setImage(fourkImage);
            message.channel.send(fourkEmbed);
        } else {
            const errorEmbed = new MessageEmbed()
            .setTitle(`Sorry, this channel isn't NSFW.`)
            .setDescription("Here's a picture of a cute cat instead.")
            .setColor("RED")
              .setImage("https://i.pinimg.com/originals/44/e2/42/44e2422c7ecf1e9234c7fa4cdf03f060.jpg");
            message.channel.send(errorEmbed);
        }
    }
});

client.on("message", async message => {
    if (message.author.bot) return false;
    if (message.content.toLowerCase() == "n!anal") {
        if (message.channel.nsfw) {
            const analImage = await nsfw.anal();
            const analEmbed = new MessageEmbed()
            .setTitle(`Anal Command :3`)
            .setColor("GREEN")
            .setImage(analImage);
            message.channel.send(analEmbed);
        } else {
            const errorEmbed = new MessageEmbed()
            .setTitle(`Sorry, this channel isn't NSFW.`)
            .setDescription("Here's a picture of a cute cat instead.")
            .setColor("RED")
              .setImage("https://i.pinimg.com/originals/44/e2/42/44e2422c7ecf1e9234c7fa4cdf03f060.jpg");
            message.channel.send(errorEmbed);
        }
    }
});

client.on("message", async message => {
    if (message.author.bot) return false;
    if (message.content.toLowerCase() == "n!pussy") {
        if (message.channel.nsfw) {
            const pussyImage = await nsfw.pussy();
            const pussyEmbed = new MessageEmbed()
            .setTitle(`Pussy Command :3`)
            .setColor("PINK")
            .setImage(pussyImage);
            message.channel.send(pussyEmbed);
        } else {
            const errorEmbed = new MessageEmbed()
            .setTitle(`Sorry, this channel isn't NSFW.`)
            .setDescription("Here's a picture of a cute cat instead.")
            .setColor("RED")
              .setImage("https://i.pinimg.com/originals/44/e2/42/44e2422c7ecf1e9234c7fa4cdf03f060.jpg");
            message.channel.send(errorEmbed);
        }
    }
});

client.on("message", async message => {
    if (message.author.bot) return false;
    if (message.content.toLowerCase() == "n!porngif") {
        if (message.channel.nsfw) {
            const pgifImage = await nsfw.pgif();
            const pgifEmbed = new MessageEmbed()
            .setTitle(`Porngif Command :3`)
            .setColor("BLUE")
            .setImage(pgifImage);
            message.channel.send(pgifEmbed);
        } else {
            const errorEmbed = new MessageEmbed()
            .setTitle(`Sorry, this channel isn't NSFW.`)
            .setDescription("Here's a picture of a cute cat instead.")
            .setColor("RED")
              .setImage("https://i.pinimg.com/originals/44/e2/42/44e2422c7ecf1e9234c7fa4cdf03f060.jpg");
            message.channel.send(errorEmbed);
        }
    }
});

client.on("message", async message => {
    if (message.author.bot) return false;
    if (message.content.toLowerCase() == "n!gonewild") {
        if (message.channel.nsfw) {
            const gonewildImage = await nsfw.gonewild();
            const gonewildEmbed = new MessageEmbed()
            .setTitle(`Gonewild Command :3`)
            .setColor("PURPLE")
            .setImage(gonewildImage);
            message.channel.send(gonewildEmbed);
        } else {
            const errorEmbed = new MessageEmbed()
            .setTitle(`Sorry, this channel isn't NSFW.`)
            .setDescription("Here's a picture of a cute cat instead.")
            .setColor("RED")
              .setImage("https://i.pinimg.com/originals/44/e2/42/44e2422c7ecf1e9234c7fa4cdf03f060.jpg");
            message.channel.send(errorEmbed);
        }
    }
});

// Invite command
client.on('message', message => {
  if (message.content === 'n!invite') {
    const invite = new MessageEmbed()
      .setTitle('Invite Page')
      .setColor(0xff0000)
      .setDescription('To invite me, use this link : https://discord.com/api/oauth2/authorize?client_id=963790463918276618&permissions=51200&scope=bot');
    message.channel.send(invite);
  }
});

client.login('UR TOKEN HERE');
