/**
 * 输出日志到控制台
 * daiyunzhou 2018-12-08 13:24
 * last modify author: daiyunzhou
 * last modify date: 2018-12-08 13:24
 */
const chalk = require('chalk');
const _ = require('lodash');
const moment = require('moment');
const ip = require('ip');

/**
 * @export
 * @param {string} [level='trance']
 * @param {*} data
 */
function Print (props){
    this.state = {
        params: ['time','serverIp','level','message','pid'], //输出格式顺序
        type: '',// 输出格式是json或者string
        datePattern: '',// 时间格式化
    };
    // ['black','red','green','yellow','blue','magenta','cyan','white','gray','redBright','greenBright','yellowBright','blueBright','magentaBright','cyanBright','whiteBright']
    this.color= function (){
        let res = props.color || {};
        return {
            trance: res.trance ? chalk[res.trance] : chalk.white,
            debug: res.debug ? chalk[res.debug] :  chalk.blueBright,
            info: res.info ? chalk[res.info] :  chalk.greenBright,
            warn: res.warn ? chalk[res.warn] : chalk.yellowBright,
            error: res.error ? chalk[res.error] : chalk.redBright,
            fatal: res.fatal ? chalk[res.fatal] : chalk.bold.redBright
        };
    };

    // ['black','red','green','yellow','blue','magenta','cyan','white','gray','redBright','greenBright','yellowBright','blueBright','magentaBright','cyanBright','whiteBright']
    // appenders
    this.format= function (level,dataObj,options){
        let data = typeof dataObj === 'object' ? JSON.stringify(dataObj):dataObj;
        let res = props.format || {};

        let datePattern = res.datePattern || this.state.datePattern;
        let type = res.type || this.state.type;
        let params = res.params || this.state.params;

        let time = moment().format(datePattern);
        let address = ip.address();

        // 默认所有的参数
        let defaultResult = {
            time: time,
            serverIp: address,
            level: level,
            message: data,
            pid: process.pid
        };

        if (type === 'json' || type === 'jsonString') {
            let myResult = {};

            // 当前需要输出的参数
            for (let i in params) {
                if (defaultResult[params[i]]) {
                    myResult[params[i]] = defaultResult[params[i]];
                }
            }

            if (type === 'json') {
                return myResult;
            } else {
                
                return options.color ? chalk[options.color](JSON.stringify(myResult)) : JSON.stringify(myResult);
            }
        } else {
            // let levels = this.color()[level](level);
            let stringResult = '';
            // 当前需要输出的参数
            for (let j in params) {
                if (defaultResult[params[j]]) {
                    stringResult += defaultResult[params[j]]+'-';
                }
            }
            let dataString = stringResult.replace(/-$/,'');
            return options.color ? chalk[options.color](dataString) : dataString;
        }
    };

    this.output = function (level = 'trance',data,options = {}){
        try {
            let res = props.format || {};
            if (!res.console && typeof res.console === 'boolean'){
                return false;
            }
            switch (level){
                case 'trance':
                    console.log(this.format(level,data,options));
                    break;
                case 'debug':
                    console.log(this.format(level,data,options));
                    break;
                case 'info':
                    console.log(this.format(level,data,options));
                    break;
                case 'warn':
                    console.log(this.format(level,data,options));
                    break;
                case 'error':
                    console.log(this.format(level,data,options));
                    break;
                case 'fatal':
                    console.log(this.format(level,data,options));
                    break;
                default:
                    console.log(this.format(level,data,options));
            }
        } catch (e){
            throw new Error(e);
        }
    };
}

module.exports = Print;