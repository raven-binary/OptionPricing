var WebSocketClient = require("websocket").client;

var client = new WebSocketClient();

client.on("connectFailed", function (error) {
  console.log("Connect Error: " + error.toString());
});

// *** This part of code sends data to the server***
client.on("connect", function (connection) {
  console.log("Websocket Client connected");
  connection.sendUTF(
    JSON.stringify({
      //Things to send to server placed
    })
  );

  connection.on("error", function (error) {
    console.log("Connection Error: " + error.toString());
    console.log(connection.closeReasonCode.toString());
  });

  connection.on("close", function () {
    console.log("Connection from WebSocket is Closed");
  });

  // ***This part of the code receives message from Server and prints it out***
  connection.on("message", function (message) {
    if (message.type === "utf8") {
      console.log("Received: '" + message.utf8Data + "'");
    }
  });

  // functions can be placed and invoked from here
});

client.connect("ws://localhost:1234/");
