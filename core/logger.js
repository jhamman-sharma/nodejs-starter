class Logger {

    constructor(){
        this.Levels = { 
            emerg: 0, 
            alert: 1, 
            crit: 2, 
            error: 3, 
            warning: 4, 
            notice: 5, 
            info: 6, 
            debug: 7
        }
    }

    const log  = (msg) => {
        console.log(...arguments);
    }

     const info  = (msg) => {
        console.log(...arguments);
    }

    const error = (msg) => {
         console.error(...arguments);
    }

}

module.exports = new Logger();