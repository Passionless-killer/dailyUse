const fs = require('fs')

delet = (id, callback) => {
    fs.readFile('./mock.json', 'utf8', function (err, data) {
        const date = JSON.parse(data)
        const a = date.students.map(function (item, index) {
            if (parseInt(id) == item.id) return index
        }).filter(item => item === 0 || !!item)
        date.students.splice(a[0], 1)
        fs.writeFile('./mock.json', JSON.stringify(date), err => { console.log('错误'); })
        callback(date)
    })
}

add = (param, callback) => {
    fs.readFile('./mock.json', 'utf8', function (err, data) {
        let date = JSON.parse(data)
        if (param.id) {
            const a = date.students.map(function (item, index) {
                if (parseInt(param.id) == item.id) return index
            }).filter(item => item === 0 || !!item)
            date.students[a[0]] = param
        } else date.students.push(param)
        fs.writeFile('./mock.json', JSON.stringify(date), err => { console.log('错误'); })
        callback(date)
    })
}

edit = (id, callback) => {
    fs.readFile('./mock.json', 'utf8', function (err, data) {
        const date = JSON.parse(data)
        const a = date.students.map(function (item, index) {
            if (parseInt(id) == item.id) return index
        }).filter(item => item === 0 || !!item)
        callback(date.students[a[0]])
    })
}
module.exports = {
    add, delet, edit
}
