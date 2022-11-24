const net = require('net')
const { IP, PORT } = require("./constants");

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on('connect', () => {
    conn.write("Name: BB")
    console.log('connection established')
  })
  conn.on('data', (message) => {
    console.log({ message })
  });

  conn.setEncoding('utf8')
  return conn;
};
module.exports = { connect }