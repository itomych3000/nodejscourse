import http from "http"

const host = "127.0.0.1"
const port = 3000

const server = http.createServer((request, response) => {
   response.statusCode = 200
   response.setHeader("Content-Type", "text/plain")
   response.end("Hello, this is test server!\n")
})

server.listen(port, host, () => {
   console.log(`Server is running at http://${host}:${port}/`)
})