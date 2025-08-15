const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook/actionCompleted', (req, res) => {
  console.log('收到 Webhook:', req.body);
  res.sendStatus(200);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Webhook server running on port ${port}`);
});
