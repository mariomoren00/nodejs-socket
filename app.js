var express = require('express');
var app = express();
var http = require('http').Server(express);
var io = require('socket.io')(http);
const fs = require('fs')



// Declare folder path
const folderPath = __dirname + '/app'

// Declare port
var PORT = process.env.PORT || 3000;

// Mount your static paths
// Renders your image, title, paragraph and index.html
app.use(express.static(folderPath))

// Start the app.
app.listen(PORT,function(){
	console.log('Listening localhost:3000')
})

// Read file index and send
app.get('/',function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
})

io.on('connection', function (socket) {
  console.log('Un cliente se ha conectado');

  socket.emit('news', [ "Hi, Im Mario Moreno.", "I am Creative.", "I Love Design.", "I Love to Develop." ]);

  /*socket.on('my other event', function (data) {
    console.log(data);
  });*/

});
