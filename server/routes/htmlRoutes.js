const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile('/app/client/dist/index.html')
  );
