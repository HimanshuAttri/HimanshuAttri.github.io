var express = require('express');
var app = express();
var app1 = express();

app.set('port', (process.env.PORT || 3009));

app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.json({ 'message': 'sfsdsd'})
});



app.get('/', function() {
	console.log('Running', app.get('port'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

