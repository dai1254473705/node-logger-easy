/**
 * output logs to console
 * daiyunzhou 2018-12-08 13:24
 * last modify author: daiyunzhou
 * last modify date: 2018-12-08 13:24
 */
const chalk = require('chalk');
const _ = require('lodash');
const moment = require('moment');
const ip = require('ip');
const WriteFile = require('./writeFile');

/**
 * @export
 * @param {string} [level='trance']
 * @param {*} data
 */
function Print (props){

    WriteFile.call(this,props);

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

        // Default all parameters
        let defaultResult = {
            time: time,
            serverIp: address,
            level: level,
            message: data,
            pid: process.pid
        };

        if (type === 'json' || type === 'jsonString') {
            let myResult = {};

            // Current parameters to be output
            for (let i in params) {
                if (defaultResult[params[i]]) {
                    myResult[params[i]] = defaultResult[params[i]];
                }
            }

            // when wirte logs to file,need not set color 
            if (options.write) {
                return JSON.stringify(myResult);
            }

            if (type === 'json') {
                return myResult;
            } else {
                return options.color ? chalk[options.color](JSON.stringify(myResult)) : JSON.stringify(myResult);
            }
        } else {
            // let levels = this.color()[level](level);
            let stringResult = '';
            
            // Current parameters to be output
            for (let j in params) {
                if (defaultResult[params[j]]) {
                    stringResult += defaultResult[params[j]]+'-';
                }
            }
            let dataString = stringResult.replace(/-$/,'');
            // when wirte logs to file,need not set color 
            if (options.write) { 
                return dataString;
            }
            //  check whether you need to set the color
            return options.color ? chalk[options.color](dataString) : dataString;
        }
    };

    // options [color<String>,json:<Boolean>]
    this.output = function (_level,_data,_options){
        try {
            let level = _level || 'trance' ;//default: trance
            let data = _data || '' ; // default : '';
            let options = _options ||{
                color: false,// default :false,no need to set color,
                write: false, // wirte log to file, will not set color 
            };
            let res = props.format || {};
            if (!res.console && typeof res.console === 'boolean'){
                return false;
            }
            switch (level){
                case 'trance':
                    console.log(this.format(level,data,options));
                    this.write(this.format(level,data,{write: true}));
                    break;
                case 'debug':
                    console.log(this.format(level,data,options));
                    this.write(this.format(level,data,{write: true}));
                    break;
                case 'info':
                    console.log(this.format(level,data,options));
                    this.write(this.format(level,data,{write: true}));
                    break;
                case 'warn':
                    console.log(this.format(level,data,options));
                    this.write(this.format(level,data,{write: true}));
                    break;
                case 'error':
                    console.log(this.format(level,data,options));
                    this.write(this.format(level,data,{write: true}));
                    break;
                case 'fatal':
                    console.log(this.format(level,data,options));
                    this.write(this.format(level,data,{write: true}));
                    break;
                default:
                    console.log(this.format(level,data,options));
                    this.write(this.format(level,data,{write: true}));
            }
        } catch (e){
            throw new Error(e);
        }
    };
}

module.exports = Print;