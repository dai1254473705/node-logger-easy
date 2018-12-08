/**
 * init
 * daiyunzhou 2018-12-08 13:24
 * last modify author: daiyunzhou
 * last modify date: 2018-12-08 13:24
/**
 *
 *
 * @param {*} props
 */
function Init (props){
    console.log('-----props------');
    console.log(props);
    // catch logger error 
    this.catchErr= function (error) {
        throw new Error(error);
    };

    this.format= function (){

    };

}
module.exports = Init;