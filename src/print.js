/**
 * output logs to console
 * daiyunzhou 2018-12-08 13:24
 * last modify author: daiyunzhou
 * last modify date: 2018-12-08 13:24
 */
const chalk = require('chalk');
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

    // options [color<String>,json:<Boolean>]
    this.output = function (_level,_data,_options){
        try {
            let level = _level || 'trance' ;//default: trance
            let data = _data || '' ; // default : '';
            let options = _options ||{
                color: false// default :false,no need to set color,
            };
            let res = props.format || {};
            if (!res.console && typeof res.console === 'boolean'){
                return false;
            }
            let logs = this.format(level,data,options);
            switch (level){
                case 'trance':
                    console.log(logs);
                    break;
                case 'debug':
                    console.log(logs);
                    break;
                case 'info':
                    console.log(logs);
                    break;
                case 'warn':
                    console.log(logs);
                    break;
                case 'error':
                    console.log(logs);
                    break;
                case 'fatal':
                    console.log(logs);
                    break;
                default:
                    console.log(logs);
            }
        } catch (e){
            throw new Error(e);
        }
    };
}

module.exports = Print;