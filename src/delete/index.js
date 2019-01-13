/** 
 * read all logs
 * daiyunzhou 2019-01-13 9:57
 * last modify author: daiyunzhou
 * last modify date: 2019-01-13 9:57
 */

const singleDelete = require('./singleDelete');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
 /** 
  * @params { String } `dirPath<required>`: The logs fileDir; 
  * @params { String } `saveTime<required>`: How many days that the file while be save; 
  * @params { Boolean } `debug<required>`: debug 
  * @params { Function } `callback`: callback=>err
  */
module.exports = function (dirPath,saveTime,debug,callback){
    try {
        // check params 
        if (!dirPath) {
            callback('The logs fileDir is required!',null);
            return ;
        }
        if (!saveTime) {
            callback('filePath is required!',null);
            return ;
        }
        if (!callback) {
            callback = function (){};
        }
        // read all files 
        fs.readdir(dirPath,{encoding: 'utf8',withFileTypes: false}, function (err,files){
            if (err) {
                callback(err,null);
                return ;
            }
            _.forEach(files, function (value) {
                singleDelete(path.join(dirPath,value),saveTime,function (err,data){
                    if (debug) {
                        if (err && data) {
                            console.log(err+':'+data.filePath);
                            return;
                        }
                        if (err) {
                            console.log(err);
                        } else {
                            console.log(data);
                        }
                    }
                });
            });
        });
    } catch (error) {
        if (callback)callback(error);
    }
};