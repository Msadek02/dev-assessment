const express = require("express");
var app        = express(); 
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; 

var router = express.Router(); 

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome!!' });   
});

router.get('/user/:userName', function(req, res) {
    res.json({name: req.params.userName });   
});

router.put('/logout/:userName', function(req, res) {
    res.json({name: req.params.userName, message: "You are loged out"});   
});

router.post('/signup', function(req, res) {
    res.json({ message: 'You are signed up' });   
});

router.post('/auth', function(req, res) {
    res.json({ message: "Missing Authentication Token"} );   
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);