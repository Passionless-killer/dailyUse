const { query } = require('express');
let express = require('express')
let route = express.Router()
let fs = require('fs')
let util = require('./util')
route.get('/', function (req, res) {
    res.render('index.html', {
        message: 'hello'
    });
});

route.get('/list', function (req, res) {
    fs.readFile('./mock.json', 'utf8', function (err, data) {
        res.render('list.html', {
            list: JSON.parse(data).students
        });

    })
});

route.get('/delet', function (req, res) {
    const query = req.url.split('=')
    util.delet(query[1], function (data) {
        res.redirect('/list')

    })
})

route.get('/create', function (req, res) {
    console.log('req', req.query);
    if (req.query?.date) {
        const value = JSON.parse(req.query.date)
        console.log('query', req.query.date, value);
        res.render('create.html', {
            name: value.firstName,
            email: value.email,
            id: value.id
        });
    }
    res.render('create.html')
})

route.get('/add', function (req, res) {
    console.log(req.query);
    util.add(req.query, function (data) {
        res.redirect('/list')
    })
})

route.get('/edit', function (req, res) {
    const query = req.url.split('=')
    util.edit(query[1], function (data) {
        data ? res.redirect(`/create?date=${JSON.stringify(data)}`) : null
    })
})
module.exports = route