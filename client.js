const { IP, PORT } = require("./constants");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Idle:", data);

  });
  conn.on('connect', ()=> {
    console.log('Successfully connected to game server!')
    conn.write("Name: BAM");

    conn.write("Say: Hello people staying up pass midnight!")

      //setTimeout(() => {conn.write('Move: up')}, 50);
      //setTimeout(() => {conn.write('Move: left')}, 100);
      //setTimeout(() => {conn.write('Move: down')}, 150);
      //setTimeout(() => {conn.write('Move: left')}, 200);
      //setTimeout(() => {conn.write('Move: up')}, 250);
      //setTimeout(() => {conn.write('Move: left')}, 300);
      //setTimeout(() => {conn.write('Move: down')}, 350);
      //setTimeout(() => {conn.write('Move: left')}, 400);

  });
  return conn;
};

module.exports = {connect};