'use-strict'

const app = require('koa')()
const port = process.argv[2]
app.keys = ['secret', 'keys']

app.use(function* () {

  let count = parseInt(( this.cookies.get('view', { 'signed': true }) || 0 )) + 1
  this.cookies.set('view', count, { 'signed': true })
  this.body = count + ' views'
});

app.listen(port)
