/**
 * test
 * index.js
 * ['black','red','green','yellow','blue','magenta','cyan','white','gray','redBright','greenBright','yellowBright','blueBright','magentaBright','cyanBright','whiteBright']
 */
var nodeLoggerEasy = require('../index');
var logger = new nodeLoggerEasy({
    format: {
        date: 'YYYY-MM-DD'
    },
    color: {
        // trance: 'yellow',
        // debug: 'blue',
        // info: 'cyan',
        // warn: 'white',
        // error: 'gray',
        // fatal: 'redBright'
    }
});
logger.trance('哈哈哈哈哈哈哈');
logger.debug('哈哈哈哈哈哈哈');
logger.info('哈哈哈哈哈哈哈');
logger.warn('哈哈哈哈哈哈哈');
logger.error('哈哈哈哈哈哈哈');
logger.fatal('哈哈哈哈哈哈哈');