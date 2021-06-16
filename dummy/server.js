const DB = 'database.json'
const PORT = 1337
const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'database.json'))
const middlerware = jsonServer.defaults()

server.use(middlerware)
server.use(router)
server.listen(PORT, () => {
	console.log(`Dummy JSON server is running on port ${PORT}! Yoohoo`)
})
