// import dotenv from "dotenv";
require('dotenv').config();
const http = require('http');
const app = require('./app');
const connectToDB = require('./db/db');
const port = process.env.PORT || 4000;

connectToDB();

const server = http.createServer(app);


server.listen(port, () => {
    console.log(`server id running on ${port} `);
});