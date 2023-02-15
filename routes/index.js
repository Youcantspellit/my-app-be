var express = require('express');
var router = express.Router();

/* GET home page. */
/* router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); */

router.post('/', function(req, res){
  console.dir(req.body);

  res.send({favorite_food_input: req.body.favorite_food_input} );
}); 

module.exports = router;
