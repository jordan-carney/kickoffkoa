'use-strict'

const app = require('koa')()
const views = require('co-views')
const port = process.argv[2]

const render = views(__dirname + '/views', {
  ext: 'ejs'
})

const user = {
  name: {
    first: 'Tobi',
    last: 'Holowaychuk'
  },
  species: 'ferret',
  age: 3
};

app.use(function* () {
  this.body = yield render('user', { user: user });
});

app.listen(port)
