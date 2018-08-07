var tmi = require('tmi.js');

var options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "stefanbotv",
    password: "oauth:qf1cmby9myc2o3fchffeukok1fb34x"
  },
  channels: ["stefan4s", "claudiuhiei", "cristianangeloo"]
};

var client = new tmi.client(options);
client.connect();

client.on('chat', function(channel, user, message, self) {
  if(message === "!stefan") {
    client.action("stefan4s", "neacsustefan.me");
    client.action("claudiuhiei", "neacsustefan.me");
    client.action("cristianangeloo", "neacsustefan.me");
  }
  if(message === "Kreygasm") {
    client.action("stefan4s", "Kreygasm");
    client.action("claudiuhiei", "Kreygasm");
    client.action("cristianangeloo", "Kreygasm");
  }
  if(message === "!github") {
    client.action("stefan4s", "github.com/stefaneacsu");
    client.action("claudiuhiei", "github.com/stefaneacsu");
    client.action("cristianangeloo", "github.com/stefaneacsu");
  }
  client.action("stefan4s", user['display-name'] + " ce faci?");
  client.action("claudiuhiei", user['display-name'] + " ce faci?");
  client.action("cristianangeloo", user['display-name'] + " ce faci?");
});

client.on('connected', function(address, port) {
  client.action("stefan4s", "Salut. Eu sunt un bot.");
  client.action("claudiuhiei", "Salut. Am intrat pe canalul tau, ai 20 de secunde sa zici numele si parola sau iti sparg contul.");
  client.action("cristianangeloo", "Bun venit pe canalului celui mai mare streamer de Mario.");
});