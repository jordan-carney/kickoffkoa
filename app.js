'use-strict'

const app = require('koa')()
const port = process.argv[2]

app.use( function *(next) {
  this.body = 'hello koa'
})

app.listen(port)
