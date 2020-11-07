const path = require('path');
const expressEdge = require('express-edge');
const express = require('express');
 
const app = new express();
 
//app.use(express.static('public'));
//app.use(expressEdge);
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
    res.render('index');
});
 
app.listen(8000, () => {
    console.log('App listening on port 8000')
});