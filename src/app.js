const express = require('express');
const app = express();

const port = 8080;



app.use('/', function(req,res){
	var environment = process.env.environment; 
	res.send("Hello world. This is "+ environment + " environment");
});

app.listen(port, function () {
  console.log('Example app listening on port 8080!')
})