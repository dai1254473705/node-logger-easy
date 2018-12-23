/**
 * logger
 * daiyunzhou 2018-12-08 14:16
 * last modify author: daiyunzhou
 * last modify date: 2018-12-08 13:24
 * [trance,debug,info,warn,error,fatal]
 */

const Init = require('./init');
const Print = require('./print');
const WriteFile = require('./writeFile');


function Logger (props){

    Init.call(this,props);
    Print.call(this,props);
    WriteFile.call(this,props);
    
    this.trance= function (data,options){
        try {
            // 控制台输出
            this.output('trance',data,options);
            //文件输出
            this.write('trance',data,{write: true});
        } catch (error) {
            this.catchErr(error);
        }
    };
    this.debug= function (data,options){
        try {
            // 控制台输出
            this.output('debug',data,options);
            //文件输出
            this.write('debug',data,{write: true});
        } catch (error) {
            this.catchErr(error);
        }
    };

    this.info=function (data,options){
        try {
            // 控制台输出
            this.output('info',data,options);
            //文件输出
            this.write('info',data,{write: true});
        } catch (error) {
            this.catchErr(error);
        }
    };
    this.warn =function (data,options){
        try {
            // 控制台输出
            this.output('warn',data,options);
            //文件输出
            this.write('warn',data,{write: true});
        } catch (error) {
            this.catchErr(error);
        }
    };
    this.error= function (data,options){
        try {
            // 控制台输出
            this.output('error',data,options);
            //文件输出
            this.write('error',data,{write: true});
        } catch (error) {
            this.catchErr(error);
        }
    };
    this.fatal =function (data,options){
        try {
            // 控制台输出
            this.output('fatal',data,options);
            //文件输出
            this.write('fatal',data,{write: true});
        } catch (error) {
            this.catchErr(error);
        }
    };
}
module.exports = Logger;