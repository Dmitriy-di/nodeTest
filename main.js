const fetchAndFs = require('./fetchAndFs')
const http = require('http')

http
  .createServer(async (request, response) => {
    if (request.url === '/todos') {
      todos = await fetchAndFs.getData('todos')
      response.write(todos)
      response.end()
    }
    response.end()
  })
  .listen(3000)
