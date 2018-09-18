const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setActivity(`Watching shane.exe`);
});

client.on('message', message => {
    if (message.content === 'sal') {
    	message.reply('Salutare!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
