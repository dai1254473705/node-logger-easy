/** 
 * delete old files
 * daiyunzhou 2019-01-13 9:04
 * last modify author: daiyunzhou
 * last modify date: 2019-01-13 9:57
 */
const fs = require('fs');

 /** 
  * @params { String } `filePath`: The file of path; 
  * @params { String } `saveTime`: How many days that the file while be save; 
  * @params { Function } `callback`:  if delete =>[null,{filePath:''}] else =>[err,null]; 
  */
module.exports = function (filePath,saveTime,callback){
    try {
        // check params 
        if (!filePath) {
            callback('filePath is required!',null);
            return ;
        }
        if (!saveTime) {
            callback('filePath is required!',null);
            return ;
        }
        if (!callback) {
            callback = function (){};
        }

        // check file path is exist
        try {
            fs.accessSync(filePath);
        } catch (error) {
            callback(error,null);
            return ;
        }

        // get the file created time;
        let fileStat = fs.statSync(filePath);
        let birthTime = fileStat.birthtimeMs;
        let timeCheck =  birthTime + saveTime * 86400000;
        let nowTime = new Date().getTime();
        let isOldFile = timeCheck < nowTime ? true : false;

        if (!isOldFile) {
            callback('The file is not old file!',{filePath: filePath});
            return ;
        }

        // delete old file
        // 假设 'path/file.txt' 是常规文件。
        fs.unlink(filePath, function (err){
            if (err) {
                callback(err,null);
                return ;
            }
            callback(null,{filePath: filePath});
        });
    } catch (error) {
        if (callback)callback(error,null);
    }
};