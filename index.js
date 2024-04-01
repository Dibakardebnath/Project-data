const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
 
server.use(middlewares)
server.use('', router)
server.listen(process.env.PORT || 5000, () => {
  console.log('JSON Server is running')
})

// // Data:-   https://project-data-zfxu.onrender.com/neenopal-data