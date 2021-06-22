/*----------- Node Core Module -----------*/

/*------------ Vebdor Module -------------*/
const express = require('express');

const app = express();

/*----------- App Level Settings ----------*/
app.set('host', process.env.HOST || 'localhost');
app.set('port', process.env.PORT || 3000);


/*---------------- Middlewares --------------*/

app.get('/', (req, res) => {
    res.type('text/plain');
    res.send('Meadowlark Travel');
});

app.use(function(req, res, next){
    res.locals.showTests = app.get('env') !== 'production' &&
    req.query.test === '1'; 
    next();
});

app.get('/about', (req, res) => {
    res.type('text/plain');
    res.send('About Meadowlark Travel');
});

// custom 404 page
app.use((req, res) => { 
    res.type('text/plain');
    res.status(404); 
    res.send('404 - Not Found');
});

 // custom 500 page
app.use((err, req, res, next) => { 
    console.error(err.stack);
    res.type('text/plain'); 
    res.status(500);
    res.send('500 - Server Error');
});


module.exports = app;