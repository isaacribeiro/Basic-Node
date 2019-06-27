const http = require('http')
const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "application/json"})
  res.end("{ response: {description: 'teste'}} ")
})

const port = 3456
server.listen(port, () => {

  console.log(`Waiting for Request on ${port}`)
})
