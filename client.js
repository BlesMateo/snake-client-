const net = require('net');

const {connect} = require('./play');


  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.on('connect', ()=> {
    conn.write("Name: BAM");
  })
