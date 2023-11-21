const express = require('express');
const router = express.Router();
const fs = require('fs');

const getQuestions = () => {
  const questions = fs.readFileSync(
    require.resolve('../public/questions.json')
  );
  return JSON.parse(questions);
};

router.get('/', (req, res) => {
  const parsedQuestions = getQuestions();
  res.status(200).json(parsedQuestions);
});

module.exports = router;
