






const messages = ["Log"]

module.exports = (client) => {
  console.log(`Bot ${client.user.tag} hazır. [Log Bot]`);
  
  client.user.setPresence({
      activity: {
        name: messages[0],
        type:"WATCHING"
      }
    });
};