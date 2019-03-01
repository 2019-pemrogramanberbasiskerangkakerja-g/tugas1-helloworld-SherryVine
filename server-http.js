var http = require('http'), PORT = 3400

var server = http.createServer(function(req, res){
    var url_demo = "http://localhost:"+PORT+"/index.html"
    var body = "<pre>Haruskah belajar Node.js?</pre><p><h3>...Yo Mesto!!</h3></p><a href="+url_demo+">"+url_demo+"</a>"
    res.writeHead(200, {
        'Content-Length':body.length,
        'Content-Type':'text/html',
        'Pesan-Header':'Pengenalan Node.js'
    })

    res.write(body)
    res.end()
})

server.listen(PORT)

console.log("Port "+PORT+" : Node.js Server...")
