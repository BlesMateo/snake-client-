const net = require('net');

const {connect} = require('./play');


  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.on('connect', ()=> {
    conn.write("Name: BAM");

      //setTimeout(() => {conn.write('Move: up')}, 500);
      setTimeout(() => {conn.write('Move: left')}, 100);
      setTimeout(() => {conn.write('Move: down')}, 150);
      setTimeout(() => {conn.write('Move: left')}, 200);
      //setTimeout(() => {conn.write('Move: up')}, 250);
      setTimeout(() => {conn.write('Move: left')}, 300);
      setTimeout(() => {conn.write('Move: down')}, 350);
      setTimeout(() => {conn.write('Move: left')}, 400);

  });

  return conn;