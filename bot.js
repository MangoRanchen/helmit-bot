const Discord = require('discord.js');
const client = new Discord.Client();

const Discord = require('discord.js');
 const client = new Discord.Client();
 
 client.on('ready', () => {
     console.log('I am ready!');
 });
 
 client.on('message', message => {
     if (message.content === 'ping') {
     	message.reply('pong');
   	}
 });

client.on('message', message => {
     if (message.content === 'pong') {
     	message.reply('dude your like 6 years old boy say ping instand');
   	}
 });
 
 client.on('message', message => {
     if (message.content === 'your mom') {
     	message.reply('dont make fun of my mom thx');
   	}
 });
 
 client.on('message', message => {
     if (message.content === 'faggot') {
     	message.reply('no u');
   	}
 });
 
 client.on('message', message => {
     if (message.content === 'fuk u') {
     	message.reply('no u');
   	}
 });
 
 client.on('message', message => {
     if (message.content === 'nigga') {
     	message.reply('lol');
   	}
 });
 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
