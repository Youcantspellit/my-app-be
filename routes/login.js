var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
  if(!req.header('x-auth-token')) {
    return res.status(400).send('No Token');
  }
  if(req.header('x-auth-token') !== '123456') {
    return res.status(401).send('Not authorized');
  }
  res.send('Login successful');
}); 

module.exports = router;
