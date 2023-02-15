var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let jsonResponse = {
    "handsetCards": [
      { title: "card 1", cols: 2, rows: 1 },
      { title: "card 2", cols: 2, rows: 1 },
      { title: "card 3", cols: 2, rows: 1 },
      { title: "card 4", cols: 2, rows: 1 },
    ],
    "webCards": [
      { title: "card 1", cols: 2, rows: 1 },
      { title: "card 2", cols: 2, rows: 1 },
      { title: "card 3", cols: 2, rows: 1 },
      { title: "card 4", cols: 2, rows: 1 },

    ],
  }
  res.json(jsonResponse)
});

router.put('/:id', (req, res) => {
  res.json({
    id: req.params.id,
    title: req.body.title

  })
})


module.exports = router;
