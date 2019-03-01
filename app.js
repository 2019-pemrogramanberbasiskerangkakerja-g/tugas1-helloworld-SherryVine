var express = require('express'),
    nano = require('nano')('http://localhost:5984'),
    users = nano.db.use('users'),
    qs = require('querystring'),
    data = []

var app = express()
app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/login', function(req, res){
    res.sendFile(__dirname + '/view/login.html')
})

app.post('/login', function(req, res){
    res.send('login post')
})

app.get('/register', function(req, res){
    res.sendFile(__dirname + '/view/register.html')
})

app.post('/register', function(req, res){
    var body = ''
    req.setEncoding('utf-8')
    req.on('data', function(chunk){
        body += chunk
    })
    req.on('end', function(){
        var data = qs.parse(body)
        if(data.password == data.password_confirm){
            users.insert({ username: data.username, password: data.password }, null, function (err, body) {
                if (err) console.log(err)
                else console.log(body)
            })
            res.send('Register sukses')
        }
        else res.send('Password gak bener nih')
    })
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
