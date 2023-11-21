const express = require('express');
const app = express();
const cors = require('cors');
const questionsRouter = require('./routes/questions');

app.use(express.json());
app.use(cors());

app.use('/questions', questionsRouter);

app.listen(8080, () => console.log('running on 8080'));
