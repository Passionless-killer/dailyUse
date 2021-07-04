// let express = require('express')

// var app = express()
// app.get('/', function (err, res) {
//     res.end('hellow world')
// })
// app.use('/public', express.static('./public'))//静态资源 访问：3000/public/jinmu.jpg
// app.use(express.static('./public'))//静态资源 访问：3000/jinmu.jpg 就能访问到public下的jinmu.jpg

// app.use('/a/', express.static('./public'))//静态资源 访问：3000/a/jinmu.jpg 就能访问到public下的jinmu.jpg



// app.listen(3000, function () {
//     console.log('启动')
// })

var express = require('express');
var app = express();
var path = require('path')
var route = require('./router')
// view engine setup
app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'html');
app.use(route)
// routes


app.listen('3000', function () {
    console.log('启动')
})