/**
 * output logs to file
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
const moment = require('moment');

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
            return [];
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

            // only the level had been setted can be write;
            if (result.indexOf(level) === -1) {
                return ;
            }

            // create dir
            fse.ensureDir(path, function (err){
                if (err) {
                    throw new Error(err);
                } else {
                    // create dir success
                    // write: true , cancel color 
                    let log = this.format(level,data,{write: true});
                    this.outputLogToFile(path,log);
                }
            }.bind(this));
        } catch (error) {
            this.catchErr(error);
        }
    };
    // get file path 
    this.filePath = function (path){
        try {
            let format = props.format || {};
            let time = format.datePattern || 'YYYY-MM-DD';
            let extension = format.extension || 'log';
            let fileName = moment().format(time);
            return path + '/' + fileName + '.' + extension;
        } catch (error) {
            this.catchErr(error);
            return false;
        }
    };
    // write logs to file 
    this.outputLogToFile = function (path,data){
        try {
            let filepath = this.filePath(path);
            if (!filepath) {
                return ;
            }
            // With a callback:
            fs.appendFile(filepath, data+'\n', function (err){
                if (err) throw err;
            });
        } catch (error) {
            this.catchErr(error);
        }
    };
    
}

module.exports = WriteFile;