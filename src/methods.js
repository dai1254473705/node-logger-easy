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
const delteFile = require('./delete');

function Logger (props){

    Init.call(this,props);
    Print.call(this,props);
    WriteFile.call(this,props);

    // check today had delete
    this.shouldCheckDelete = function (){
        try {
            if (!props.file || !props.file.path) {
                if (this.state.debug) {
                    console.log('format.file was not setted,so,the logs will not to be delete');
                }
                return ;
            }
            if (props.file.saveDay == 0) {
                if (this.state.debug) {
                    console.log('you set saveDay to 0,the logs file will not delete');
                }
                return;
            }
            if (this.state.todayHaveDelete) {
                if (this.state.debug) {
                    console.log('today have been delete the oldfile of logs once');
                }
                return ;
            }
            delteFile(props.file.path,props.file.saveDay,this.state.debug);
            this.state.todayHaveDelete = true;
        } catch (error) {
            this.catchErr(error);
        }
    };
    this.trance= function (data,options){
        try {
            // 控制台输出
            this.output('trance',data,options);
            //文件输出
            this.write('trance',data,{write: true});
            // 判断今天是否已经清理过过期文件
            this.shouldCheckDelete(options);
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
            // 判断今天是否已经清理过过期文件
            this.shouldCheckDelete(options);
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
            // 判断今天是否已经清理过过期文件
            this.shouldCheckDelete(options);
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
            // 判断今天是否已经清理过过期文件
            this.shouldCheckDelete(options);
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
            // 判断今天是否已经清理过过期文件
            this.shouldCheckDelete(options);
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
            // 判断今天是否已经清理过过期文件
            this.shouldCheckDelete(options);
        } catch (error) {
            this.catchErr(error);
        }
    };
}
module.exports = Logger;