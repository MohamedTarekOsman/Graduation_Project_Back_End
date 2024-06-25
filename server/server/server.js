const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const WebSocket = require('ws'); // Change 1: Import WebSocket
const app = express();
app.use(express.json());
app.options('*', cors());
app.use(cors());
const mountRoutes = require('./routes'); // Change 2: Corrected spelling of mountRoutes

// Custom modules
dotenv.config({ path: 'config.env' });

// connect to the database
const dbconnection = require('./config/database');
dbconnection();

// Mount Routes
mountRoutes(app); // Change 3: Corrected spelling of mountRoutes

// Show mode
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log(`mode : ${process.env.NODE_ENV}`);
}

// Listen to db with specific port
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// WebSocket server
const wss = new WebSocket.Server({ server }); // Change 4: Initialize WebSocketServer with server instance

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log(JSON.parse(message))
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

// Handle Rejection outside of express
process.on('unhandledRejection', (err) => {
  console.error(`unhandledRejection Errors : ${err.name}|${err.message}`);
  server.close(() => {
    console.error(`Shutting down ....`);
    process.exit(1);
  });
});
