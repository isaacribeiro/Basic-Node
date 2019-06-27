const Twilio = require('twilio')

const [,,...args] = process.argv

const sid = args[0]
const token = args[1]
const sender = args[2]
const receiver = args[3]
const message = args[4] || 'Default Body Message'

const twilio = new Twilio(sid, token)

twilio.messages.create({
  from: sender,
  to: receiver,
  body: message
})
.then((message) => {
  console.log('My first SMS')
  console.log(message.sid)
})
