/**
 * 输出日志到指定文件
 * daiyunzhou 2018-12-08 13:24
 * last modify author: daiyunzhou
 * last modify date: 2018-12-08 13:24
 * 
 * ensureDir(dir[,options][,callback])
 *  dir <String>
    options <Integer>|<Object>
    callback <Function>
 */
const _ = require('lodash');
const fse = require('fs-extra');
const fs = require('fs');

/**
 * @export
 * @param {string} [level='trance']
 * @param {*} data
 */
function WriteFile (props){
    // Check whether the log needs to be saved and whether the path is set
    // save<Boolean>:props.file.save
    // path<String>:props.file.path
    // saveLevel<Array>:props.file.saveLevel
    this.checkWrite = function (_save,_path,_saveLevel){
        try {
            let save = _save || false;
            let path = _path || '';
            let saveLevel = _saveLevel || ['error']; // default only to save the type of error;
            
            // need not to save
            if (!save) {
                return [];
            }

            // user have forgot to set path 
            if (!path){
                throw new Error('you want to save logs ,but not set the path of logs');
            }

            // Check for conformity with preservation conditions 
            return  _.intersection(saveLevel,this.state.level);
        } catch (error) {
            this.catchErr(error);
        }
    };
    // Check if the log directory exists
    this.write = function (level,data){
        try {
            let myProps = props || {};
            let file = myProps.file || {};
            let save = file.save;
            let path = file.path;
            let saveLevel =file.saveLevel;
            let result = this.checkWrite(save,path,saveLevel);

            // create dir
            fse.ensureDir(path, function (err){
                if (err) {
                    throw new Error(err);
                } else {
                    // create dir success
                    // write: true , cancel color 
                    let log = this.format(level,data,{write: true});
                    this.outputLogToFile(path,log);
                    console.log(log);
                }
            }.bind(this));
        } catch (error) {
            this.catchErr(error);
        }
    };

    // write logs to file 
    this.outputLogToFile = function (path,data){
        try {
            // With a callback:
            fs.appendFile(path +'/2018-12-23.log', data+'\n', function (err){
                if (err) throw err;
                console.log('数据已追加到文件');
            });
        } catch (error) {
            this.catchErr(error);
        }
    };
    
}

module.exports = WriteFile;