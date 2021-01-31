const Discord = require('discord.js');
const client = new Discord.Client();
const token = require(__dirname + "/secrets.js"); 
let connected = false;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  
});

client.on('voiceStateUpdate', async (oldState, newState) => {

    if(client.channels.cache.get("770659922840256525").members.size >= 2) {
      if(!connected) {
        const connection = await client.channels.cache.get("770659922840256525").join();
        connection.play('audio.mp3', {volume: 0.7});
        connected = true;
      }
    } else {
      client.channels.cache.get("770659922840256525").leave()
      connected = false;
    }

})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(token.token);