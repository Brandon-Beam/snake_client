const net = require('net')
const connect = () => {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
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