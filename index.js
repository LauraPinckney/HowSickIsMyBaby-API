const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use('/', (rec, res) => {
  res.send('hello world');
});

app.listen(8080, () => console.log('running on 8080'));
