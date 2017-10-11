const authentication = require('./authentication.json');
const client = require('twilio')(authentication.sid, authentication.token);
client.messages.create(
    {
        to: '+17323050757',
        from: '+19083325411',
        body: "This is a twilio test",
    })
    .then((message) => console.log(message.sid));