var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var usocket = []; //全局变量


app.get('/',function(req,res){
	//res.send('<h1>Hello lianghui</h1>');
	res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket){
	console.log('a user connected');

    //监听join事件
    socket.on("join", function (name){
      usocket[name] = socket
      io.emit("join", name) //服务器通过广播将新用户发送给全体群聊成员，前端处理
    })

    //new addition
	socket.on("message", function (msg) {
	  io.emit("message", msg) //将新消息广播出去，交给前端处理
	})
})

http.listen(3000,function(){
	console.log('listening on port:3000');
})