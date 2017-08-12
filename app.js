var express = require('express');
var app = express ();
var http = require('http').Server(app);
var io=require('socket.io')(http);

app.use(express.static('htdocs'));

io.on('conection',function(socket){
    socket.on('send_message',function(text){
	io.socket.emit('recieve_message',text);
	});
});
var port =3000;
http.listen(port,function(){
    console.log(練習　　　Expressサーバーがポート%dで起動しました。モード%d,port,app.setting.env)
});

