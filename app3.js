'use-strict'

const app = require('koa')()
const port = process.argv[2]
const parse = require('co-body')

app.use( function *(next) {
  if (this.path !== '/' && this.method !== 'POST') {
    return yield next
  }

  let body = yield parse(this)
  if( !body.name ) this.throw(400, 'name property is required')
  this.body = body.name.toUpperCase()
})

app.use( function *(next) {
  if (this.path !== '/404') {
    return yield next
  }

  this.body = 'page not found'
})

app.use( function *(next) {
  if (this.path !== '/500') {
    return yield next
  }

  this.body = 'internal server error'
})


app.listen(port)
