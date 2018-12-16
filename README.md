# node-logger-easy
Export the log to the console or file, customize the output log format, support sending mail to the designated mailbox;

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

## desciption 

## Installation
```sh
`npm install node-logger-easy --save` || `cnpm install node-logger-easy --save`
```
## USE

> colors

![colors](./src/images/color.jpg)

## API

## example

```sh
var logger = new nodeLoggerEasy({
    format: {
        datePattern: 'YYYY-MM-DD HH:mm:ss',
        encoding: 'utf-8',
        type: 'json', // string || json(颜色不生效) || jsonString 
        params: ['time','serverIp','level','message','pid'], //输出格式顺序
        console: true, // 是否在控制台输出,默认true
    },
    // 日志文件设置 TODO 未完成保存文件功能
    file: {
        save: true, // 是否生成文件，默认false 
        path: './logs/',// 日志文件地址,多级文件自动生成
        saveLevel: ['error','warn'],//需要分级保存的登记,如果不填则不分级保存，默认 []
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
```
### attention
Not completed, ongoing updates

## License

[MIT](LICENSE)

Copyright (c) 2018-present, Yunzhou Dai

[npm-image]: https://img.shields.io/npm/v/node-logger-easy.svg
[npm-url]: https://npmjs.org/package/node-logger-easy
[node-version-image]: https://img.shields.io/node/v/node-logger-easy.svg
[node-version-url]: https://nodejs.org/en/download/
[coveralls-image]: https://img.shields.io/coveralls/jshttp/node-logger-easy/master.svg
[downloads-image]: https://img.shields.io/npm/dm/node-logger-easy.svg
[downloads-url]: https://npmjs.org/package/node-logger-easy

