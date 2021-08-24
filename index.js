const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  client.user.setPresence({ activity: {name:"puzzles"}})
});


client.on('message', message => {
    if (message.content === 'puzzle') {
        message.channel.send('https://lichess.org/training/daily%27);
    } 
});
