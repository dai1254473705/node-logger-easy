/**
 * test
 * index.js
 * ['black','red','green','yellow','blue','magenta','cyan','white','gray','redBright','greenBright','yellowBright','blueBright','magentaBright','cyanBright','whiteBright']
 */
var nodeLoggerEasy = require('../index');
var logger = new nodeLoggerEasy({
    format: {
        datePattern: 'YYYYMMDDHHmm',
        encoding: 'utf-8',
        extension: 'log',// [log,txt]file extension
        type: 'json', // string || json(颜色不生效) || jsonString 
        params: ['time','serverIp','level','message','pid'], //输出格式顺序
        console: true, // 是否在控制台输出,默认true
    },
    // 日志文件设置 TODO
    file: {
        save: true, // 是否生成文件，默认false 
        path: './logs/',// 日志文件地址,多级文件自动生成
        saveLevel: ['error','warn','haha'],//需要分级保存的登记,如果不填则不分级保存，默认 []
        saveDay: 7,// 保存时间 || 0不删除，默认0
    },
    color: {
        trance: 'yellow',
        debug: 'blue',
        info: 'cyan',
        warn: 'white',
        error: 'gray',
        fatal: 'redBright'
    }
});
logger.trance('哈哈哈哈哈哈哈',{color: 'blue'});
logger.debug('哈哈哈哈哈哈哈',{color: 'redBright'});
logger.info('哈哈哈哈哈哈哈');
logger.warn('哈哈哈哈哈哈哈');
logger.error('哈哈哈哈哈哈哈');
logger.fatal('哈哈哈哈哈哈哈');
logger.warn({haha: 213,asdf: 'sdf'},{color: 'blue',json: true});