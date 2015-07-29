var express = require('express')
var exphbs = require('express-handlebars')
var app = express()
var hbs = exphbs.create({defaultLayout: 'main'})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', function (req, res) {
  var date = new Date()

  res.render('home', {
    year: date.getFullYear(),
    copyrightHolder: process.env.COPYRIGHT_HOLDER || '<your name here>'
  })
})

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
