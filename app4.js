'use-strict'

const app = require('koa')()
const port = process.argv[2]
const parse = require('co-body')
const fs = require('fs')

app.use( function *(next) {
  if (this.path !== '/stream') {
    return yield next
  }

  this.body = fs.createReadStream(process.argv[3])
})

app.use( function *(next) {
  if (this.path !== '/json') {
    return yield next
  }

  this.body = {
    foo: 'bar'
  }
})


app.listen(port)
