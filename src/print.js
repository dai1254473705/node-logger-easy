/**
 * 输出日志到控制台
 * daiyunzhou 2018-12-08 13:24
 * last modify author: daiyunzhou
 * last modify date: 2018-12-08 13:24
 */
const chalk = require('chalk');
const _ = require('lodash');

/**
 * @export
 * @param {string} [level='trance']
 * @param {*} data
 */
function Print(props){
    
    // ['black','red','green','yellow','blue','magenta','cyan','white','gray','redBright','greenBright','yellowBright','blueBright','magentaBright','cyanBright','whiteBright']
    this.color= function (){
        let res = props.color;
        let defaultColor = {
            trance: chalk.white,
            debug: chalk.blueBright,
            info: chalk.greenBright,
            warn: chalk.yellowBright,
            error: chalk.redBright,
            fatal: chalk.bold.redBright
        };
        if ( _.isPlainObject(res) ) {
            return {
                trance: chalk[res.trance] || chalk.white,
                debug: chalk[res.debug] || chalk.blueBright,
                info: chalk[res.info] || chalk.greenBright,
                warn: chalk[res.warn] || chalk.yellowBright,
                error: chalk[res.error] || chalk.redBright,
                fatal: chalk[res.fatal] || chalk.bold.redBright
            };
        }
        return defaultColor;
    };

    this.output = function (level = 'trance',data){
        try {
            switch (level){
                case 'trance':
                    console.log('trance:',this.color().trance(data));
                    break;
                case 'debug':
                    console.log('debug:',this.color().debug(data));
                    break;
                case 'info':
                    console.log('info:',this.color().info(data));
                    break;
                case 'warn':
                    console.log('warn:',this.color().warn(data));
                    break;
                case 'error':
                    console.log('error:',this.color().error(data));
                    break;
                case 'fatal':
                    console.log('fatal:',this.color().fatal(data));
                    break;
                default:
                    console.log('trance:',this.color().trance(data));
            }
        } catch (e){
            throw new Error(e);
        }
    };
};
module.exports = Print;