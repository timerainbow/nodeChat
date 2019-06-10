var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
	//res.send('<h1>Hello lianghui</h1>');
	res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket){
	console.log('a user connected');
})

http.listen(3000,function(){
	console.log('listening on port:3000');
})