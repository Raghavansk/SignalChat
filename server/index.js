var express = require('express');
var socket = require('socket.io');
var path = require("path");

var app = express();

var server = app.listen(4000,function(){
})

//Static files
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection',function(socket){
    socket.on('chat',function(data){
       socket.broadcast.emit('chat',data);  
    });
})