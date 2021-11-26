#!/usr/bin/env node
var WebSocketServer = require("websocket").server;
var http = require("http");
const bsm = require("./bsm");

var server = http.createServer(function (request, response) {
  console.log(new Date() + " Received request for " + request.url);
  response.writeHead(404);
  response.end();
});
server.listen(1234, function () {
  console.log(new Date() + " Server is listening on port 1234");
});

wsServer = new WebSocketServer({
  httpServer: server,
  // Should not use autoAcceptConnections for production
  // applications, as it defeats all standard cross-origin protection
  // facilities built into the protocol and the browser. Should
  // *always* verify the connection's origin and decide whether or not
  // to accept it.
  autoAcceptConnections: false,
});

// [ONLY FOR REFERENCE] But this function is not applicable in this project
// function originIsAllowed(origin) {
//   // put logic here to detect whether the specified origin is allowed.
//   return true;

class con {
  constructor(connection) {
    this.connection = connection;
  }
    newit ()
    {
      this.connection.on("message", function (message);
      connection.sendUTF("This is one instances of a connection.!");
    }
    // ***The following code parses message received from the client into a JSON object for further dealings.***
    //const clientConfig = JSON.parse(message.utf8Data);
  }

};

function sendNumber(min, max) {
  console.log("MAX: " + max + "MIN" + min);
  var number = Math.round(Math.random() * (max - min));
  let msgToSend = number.toString();
  //connection.sendUTF(number.toString());
  return msgToSend;
}

function sendFile() {
  let fileBSM = require("./bsm.js");
  return fileBSM;
}

wsServer.on("request", function (request) {
  var connection = request.accept();
  console.log(new Date() + " Connection accepted.");

  new con(connection).newit();

  // connection.on("message", function (message) {
  //   // ***The following a variables available throught the connection.on("message")***
  //   let min;
  //   let max;
  //   let interval;
  //   console.log(message);
  //   // ***The following code parses message received from the client into a JSON object for further dealings.***
  //   //const clientConfig = JSON.parse(message.utf8Data);

  //   connection.sendBytes(sendFile());
  // });

  // *** The followiing codes are only to applicable for binary types of data ***
  // } else if (message.type === "binary") {
  //   console.log(
  //     "Received Binary Message of " + message.binaryData.length + " bytes"
  //   );
  //   connection.sendBytes(message.binaryData);
  // }

  connection.on("close", function (reasonCode, description) {
    console.log(
      new Date() + " Peer " + connection.remoteAddress + " disconnected."
    );
  });
});
