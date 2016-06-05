var express = require('express');

var app = express();

var port = process.env.PORT || (3004);
var server = app.listen(port, () => {
  console.log('Server live on port ' + port);
});

app.set('views', './views')
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index');
})
