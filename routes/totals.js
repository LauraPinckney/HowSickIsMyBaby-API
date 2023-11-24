const express = require('express');
const router = express.Router();
const fs = require('fs');

const getTotals = () => {
  const totals = fs.readFileSync(require.resolve('../public/totals.json'));
  return JSON.parse(totals);
};
router.post('/', (req, res) => {
  const { score } = req.body;
  const parsedTotals = getTotals();
  const result = parsedTotals.find(
    (quizResult) => quizResult.lower <= score && quizResult.upper >= score
  );
  console.log({ result, score });

  res.status(200).json(result);
});

module.exports = router;
