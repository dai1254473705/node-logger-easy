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
    this.format= function (level,data,options){
        let res = props.format || {};
        let datePattern = res.datePattern || '';
        let time = moment().format(datePattern);
        let address = ip.address();
        let levels = this.color()[level](level);
        let dataString = options.color ? chalk[options.color](data) : data;

        return `[${time}]-[${address}]-${levels}-${dataString}`;
    };

    this.output = function (level = 'trance',data,options = {}){
        try {
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
};
module.exports = Print;