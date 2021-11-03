const net = require("net");

// establishes a connection with the game server
  const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
  };

  const handleUserInput = function () {

  };

  const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", (connect)=>{
    console.log("Successfully connected to the server");

  });

  conn.on("data", (data) => {
    console.log("Idle:", data);
  });

    return conn;
};

console.log("Connecting ...");
connect();
setupInput();

module.exports = {connect}
/*
const myNumber = 42;
const myString = "hello";
const myFunction = () => {
  // myFunction's code
};

module.exports = {
  myNumber, // stores 42 as myNumber
  myString, // stores "hello" as myString
  myFunction, // stores the function as myFunction
};
*/