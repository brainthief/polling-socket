var express = require('express');
var _ = require('underscore');
var app = express();

var connections = [];
var title = 'Untitled';
var audience = [];

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {

 socket.once('disconnect', function () {
  var member = _.findWhere(audience, {id : this.id});
  if(member){
   audience.splice(audience.indexOf(member), 1);
   io.sockets.emit('audience', audience);
   console.log("Left: %s (%s audience member)", member.name, audience.length);
  }
  socket.disconnect();
  console.log("Disconnected: %s sockets remaining", connections.length);
 });

 socket.on('join', function (playload) {
  var newMember = {
   id: this.id,
   name: playload.name
  };
  this.emit('joined', newMember);
  audience.push(newMember);
  io.sockets.emit('audience', audience);
  console.log("Audience Joined: %s", playload.name);
 })

 socket.emit('welcome', {
  title: title
 });
 connections.push(socket);
 console.log("Connected: %s", socket.id);
});

console.log("Polling server is running at 'http://localhost:3000'");