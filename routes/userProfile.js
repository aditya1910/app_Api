var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log(req.db);
  var data = req.body.data;
  let db = req.db;
  db.collection('userProfile').insertOne({data},(error,result)=>{
  	if(error){
  		res.status(500).json({status:"failed"});
  	}
  	else{
  		res.status(200).json({status:"success"});
  	}
  })
});

module.exports = router;
