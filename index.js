var express = require('express');
var app = express();
var app1 = express();



app1.set('port',(process.env.PORT || 5000));

app1.use(express.static(__dirname + '/public'));
app1.set('views', __dirname + ,'/views'));
app1.set('view engine', 'ejs');


app1.get('/', function(req,res){
	res.json({'value':'key'})

});

app1.listen(app1.get('port'), function(){
	console.log("RunningOk on: ",app1.get('port'));
});