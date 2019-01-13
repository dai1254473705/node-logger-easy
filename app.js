const express = require('express');
const app = express();
const logger = require('./demo');
const cluster = require('cluster');

app.get('/', function (req, res) {
    logger.trance('哈哈哈哈哈哈哈',{color: 'blue'});
    logger.debug('哈哈哈哈哈哈哈',{color: 'redBright'});
    logger.info('哈哈哈哈哈哈哈');
    logger.warn('哈哈哈哈哈哈哈');
    logger.error('哈哈哈哈哈哈哈');
    logger.fatal('哈哈哈哈哈哈哈');
    logger.warn({haha: 213,asdf: 'sdf'},{color: 'blue'});
    res.send('Hello World!');
});

app.listen(3000,function (){
    console.log('---------3000-----------');
});