var express = require('express')
var fs = require('fs')

fs.readFile('./package-lock.json', function(err, data){
    if(err) throw err
    console.log(JSON.parse(data))
})

console.log('Selanjutnya...')

var app = express()
app.get('/', function (req, res) {
    res.send('Hello World!')
})
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
