'use-strict'

const app = require('koa')()
const port = process.argv[2]

app.use( function *(next) {

  if(this.request.is('json')) {

    this.body = {
      message: 'hi!'
    }

  } else {
    this.body = 'ok'
  }
})


app.listen(port)
