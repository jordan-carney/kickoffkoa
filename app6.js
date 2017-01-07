'use-strict'

const app = require('koa')()
const port = process.argv[2]

app.use(responseTime())
app.use(upperCase())

app.use(function* () {
  this.body = 'hello koa'
});

function responseTime() {
  return function* (next) {
    // record start time
    let start = new Date
    yield next
    // set X-Response-Time head
    this.set('X-Response-Time', new Date - start)
  };
}

function upperCase() {
  return function* (next) {
    yield next
    this.body = this.body.toUpperCase()
  };
}

app.listen(port)
