/**
 * logger
 * daiyunzhou 2018-12-08 14:16
 * last modify author: daiyunzhou
 * last modify date: 2018-12-08 13:24
 * [trance,debug,info,warn,error,fatal]
 */

const Init = require('./init');
const Print = require('./print');
function Logger (props){
    Init.call(this,props);
    Print.call(this,props);
    this.trance= function (data){
        try {
            // 控制台输出
            this.output('trance',data);
            //文件输出
            // ...todo
        } catch (error) {
            this.catchErr(error);
        }
    };
    this.debug= function (data){
        try {
            // 控制台输出
            this.output('debug',data);
            //文件输出
            // ...todo
        } catch (error) {
            this.catchErr(error);
        }
    };

    this.info=function (data){
        try {
            // 控制台输出
            this.output('info',data);
            //文件输出
            // ...todo
        } catch (error) {
            this.catchErr(error);
        }
    };
    this.warn =function (data){
        try {
            // 控制台输出
            this.output('warn',data);
            //文件输出
            // ...todo
        } catch (error) {
            this.catchErr(error);
        }
    };
    this.error= function (data){
        try {
            // 控制台输出
            this.output('error',data);
            //文件输出
            // ...todo
        } catch (error) {
            this.catchErr(error);
        }
    };
    this.fatal =function (data){
        try {
            // 控制台输出
            this.output('fatal',data);
            //文件输出
            // ...todo
        } catch (error) {
            this.catchErr(error);
        }
    };
}
module.exports = Logger;