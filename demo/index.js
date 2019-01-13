/**
 * test
 * index.js
 */
const nodeLoggerEasy = require('../index');
const logger = new nodeLoggerEasy({
    format: {
        datePattern: 'YYYYMMDDHHmmss',
        extension: 'log',// [log,txt]file extension
        type: 'jsonString', // string || json(no color) || jsonString 
        params: ['time','serverIp','level','message','pid'], //set default log params
        paramsTimeFormat: 'YYYY年MM月DD日HH时mm分ss秒',// logs time format,use moment.js ,for example[YYYYMMDDHHmmss,YYYY年MM月DD日HH时mm分ss秒]
        console: true, // if you want see the logs in terminal; default:true
    },
    // if you want to out put log to file
    file: {
        save: true, // is create log files,default:false 
        path: './logs/',// logs dir path,auto create dir
        saveLevel: ['error','warn'],//set the level you want to save,default: [] , all level: ['trance', 'debug', 'info', 'warn', 'error', 'fatal']
        saveDay: 7,// save days,if '0',will not delete;default : 0
    },
    // set color if you like 
    // ['black','red','green','yellow','blue','magenta','cyan','white','gray','redBright','greenBright','yellowBright','blueBright','magentaBright','cyanBright','whiteBright']
    color: {
        trance: 'yellow',
        debug: 'blue',
        info: 'cyan',
        warn: 'white',
        error: 'gray',
        fatal: 'redBright'
    },
    // you should set false or not set on production env;
    debug: true // some logs
});
module.exports = logger;