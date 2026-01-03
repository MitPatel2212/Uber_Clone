require('dotenv').config();
const http = require('http');
const app = require('./app');
const connectToDb = require('./db/db');
const port = process.env.PORT || 4000;

connectToDb();

const server = http.createServer(app);


server.listen(port, () => {
    console.log(`server id running on ${port} `);
});