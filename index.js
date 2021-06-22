/*----------- Node Core Module -----------*/
const http = require('http');


/***** Application  Module ----------*/
const app = require('./app');
const logger = require('./core/logger');



http
.createServer(app)
.listen(
    app.get('host'),
    app.get('port'),
    (err) => {
        if(err){
            logger.error(err);
            process.exit(1);
        }else{
            logger.info(`Server Listening on ${app.get('host'):app.get('port')} ; press Ctrl-C to terminate `);
        }
    });



