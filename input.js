let connection = undefined;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume(); // program is expecting to client to give inputs
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }

  if (key === "w") {
    connection.write("Move: up")
  }

  if (key === "a") {
    connection.write("Move: left")
  }

  if (key === "s") {
    connection.write("Move: down")
  }

  if (key === "d") {
    connection.write("Move: right")
  }

};





module.exports = {setupInput}
//comm with play.js