const express = require('express');
const path = require('path');

const port = process.env.PORT || 5006;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log(`Rendering 'pages/index' for route '/'`);
  res.render('pages/index');
});

// Only start the server if not in test mode
let server;
if (process.env.NODE_ENV !== 'test') {
  server = app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });

  // KeepAlive configuration
  server.keepAliveTimeout = 95 * 1000;

  process.on('SIGTERM', async () => {
    console.log('SIGTERM signal received: gracefully shutting down');
    if (server) {
      server.close(() => {
        console.log('HTTP server closed');
      });
    }
  });
}

// Export both app and server (for testing)
module.exports = { app, server };