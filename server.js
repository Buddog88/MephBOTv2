const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ">";


client.login("NDMxNjEwNTk4OTU5MzQ5NzYw.DahVIA.u0-fgYYb69avqm1lW-MpLLQO4uo")

client.on("message", (message) => {

  if (!message.content.startsWith(prefix)) return;

   if (message.content.startsWith(prefix + "Sonadow")) {
    message.channel.send("I refuse to comply.")
  } else
   if (message.content.startsWith(prefix + "Jails")) {
    message.channel.send("Wait, that exists?")
  } else
   if (message.content.startsWith(prefix + "Tailsinite")) {
    message.channel.send("n o .")
  } else
   if (message.content.startsWith(prefix + "Commands")) {
    message.channel.send("For right now, you can do >(Character/NPC) to get my current opinion of them. Or, you could always say Hello. More stuff will be added later.")
  } else
   if (message.content.startsWith(prefix + "Ping")) {
    message.channel.send("Pong!");
  } else
   if (message.content.startsWith(prefix + "Hello")) {
    message.channel.send("Hiya!");
  } else
  if (message.content.startsWith(prefix + "Mespio")) {
    message.channel.send("It was good while it lasted.");
  } else
  if (message.content.startsWith(prefix + "Mephnic")) {
    message.channel.send("We do not speak of that!");
  } else
  if (message.content.startsWith(prefix + "Mephiles")) {
    message.channel.send("but if I'm not Mephiles, who am I?...");
  } else
  if (message.content.startsWith(prefix + "Sonic")) {
    message.channel.send("Sonic is tolerable, but if he lays a hand on me I will personally wipe him off the earth :)");
  } else
  if (message.content.startsWith(prefix + "Shadow")) {
    message.channel.send("Shadow isn't really my favorite. He always acts like he is the only one with problems.. although I have considered punching him recently.");
  } else
  if (message.content.startsWith(prefix + "BoomShadow")) {
    message.channel.send("He's okay, but always silently judges people.");
  } else
  if (message.content.startsWith(prefix + "Tikal")) {
    message.channel.send("I haven't talked with her much, but she seems very timid and peaceful. I like her.");
  } else
  if (message.content.startsWith(prefix + "Tails")) {
    message.channel.send("I barely talk with him, but he's sweet. I'm just afraid I will say something wrong in front of him.");
  } else
  if (message.content.startsWith(prefix + "Knuckles")) {
    message.channel.send("I didn't like him and I still don't.");
  } else
  if (message.content.startsWith(prefix + "Omega")) {
    message.channel.send("Well, he shot me multiple times in the gut with a minigun back in 06, so I don't exactly like him.");
  } else
  if (message.content.startsWith(prefix + "Silver")) {
    message.channel.send("Ignorant, but cute af.");
  } else
  if (message.content.startsWith(prefix + "Fleetway")) {
    message.channel.send("He's overpowered and insane. Maybe we should be friends.");
  } else
  if (message.content.startsWith(prefix + "Espio")) {
    message.channel.send(".......do I have to?.......well.... he's kind, and gentle, and sweet, he has the pret- uhhh I should stop....");
  } else
  if (message.content.startsWith(prefix + "Jet")) {
    message.channel.send("Ehhhhhh he's just some bird nerd.");
  } else
  if (message.content.startsWith(prefix + "Riders")) {
    message.channel.send("He's a bit annoying to me.");
  } else
  if (message.content.startsWith(prefix + "Amy")) {
    message.channel.send("I really miss Amy. I liked her a lot, even if I did call her crazy-hammer-lady.");
  } else
  if (message.content.startsWith(prefix + "OVA")) {
    message.channel.send("Originally Very Annoying?");
  } else
  if (message.content.startsWith(prefix + "Zero")) {
    message.channel.send("Pure hatred.");
  }
  if (message.content.startsWith(prefix + "Guash")) {
    message.channel.send("I hate that stupid furball.");
  } else
  if (message.content.startsWith(prefix + "Enola")) {
    message.channel.send("H-How d-d-do you k-know that n-n-name....?");
  } else
  if (message.content.startsWith(prefix + "Pietro")) {
    message.channel.send("He's a super cool dude.");
  } else
  if (message.content.startsWith(prefix + "Iblis")) {
    message.channel.send("My one and only brother. He's so amazing.");
  } else
  if (message.content.startsWith(prefix + "Elise")) {
    message.channel.send("Such a crybaby. She doesn't even have emotional strain.");
  } else
  if (message.content.startsWith(prefix + "Alvermina")) {
    message.channel.send("She's cute and curious, as usual.");
    }else
  if (message.content.startsWith(prefix + "Ghost")) {
    message.channel.send("Miss me with that Ghost shit")
  } else
  if (message.content.startsWith(prefix + "Hi")) {
    message.channel.send("Hello!")
  } else
  if (message.content.startsWith(prefix + "Monika")) {
    message.channel.send("Just Monika.")
  } else
  if (message.content.startsWith(prefix + "Sonika")) {
    message.channel.send("nostaph")
  } else
  if (message.content.startsWith(prefix + "Chaos")) {
    message.channel.send("I don't really have an opinion on him.")
  } else
  if (message.content.startsWith(prefix + "Blaze")) {
    message.channel.send("A firey girlio.")
  } else
  if (message.content.startsWith(prefix + "Doggo")) {
    message.channel.send("Huh?")
  } else
  if (message.content.startsWith(prefix + "Eggman")) {
    message.channel.send("First man on Mobius to discover that you can be smart and stupid at the same time.")
  } else
  if (message.content.startsWith(prefix + "Orbot")) {
    message.channel.send("Smart lil guy.")
  } else
  if (message.content.startsWith(prefix + "Cubot")) {
    message.channel.send("Dumb.")
  }

const http = require('http');
const express = require('express');
const app = express();

app.listen(8080);
setInterval(() => {
http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 300000)});
