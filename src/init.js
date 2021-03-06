/**
 * init
 * daiyunzhou 2018-12-08 13:24
 * last modify author: daiyunzhou
 * last modify date: 2018-12-08 13:24
 * 
    // ['black','red','green','yellow','blue','magenta','cyan','white','gray','redBright','greenBright','yellowBright','blueBright','magentaBright','cyanBright','whiteBright']
 * 
 
/**
 *
 *
 * @param {*} props
 */
const chalk = require('chalk');
const _ = require('lodash');
const moment = require('moment');
const ip = require('ip');

function Init (props) {
	// set default state
	this.state = {
		params: ['time', 'serverIp', 'level', 'message', 'pid'], //output params
		type: 'string', // output type : `json` or `string`,default:string
		datePattern: '', // time format
		paramsTimeFormat: props.format.paramsTimeFormat || null,
		level: ['trance', 'debug', 'info', 'warn', 'error', 'fatal'], // all type
		debug: !!props.debug,
		todayHaveDelete: false // today is delete old files 
	};

	// ['black','red','green','yellow','blue','magenta','cyan','white','gray','redBright','greenBright','yellowBright','blueBright','magentaBright','cyanBright','whiteBright']
	// appenders
	this.format = function (level, dataObj, options) {
		try {
			let data = typeof dataObj === 'object' ? JSON.stringify(dataObj) : dataObj;
			let res = props.format || {};

			let paramsTimeFormat = null || this.state.paramsTimeFormat;
			let type = res.type || this.state.type;
			let params = res.params || this.state.params;
			let time = moment().format(paramsTimeFormat);
			let address = ip.address();

			// Default all parameters
			let defaultResult = {
				time: time,
				serverIp: address,
				level: level,
				message: data,
				pid: process.pid,
			};

			if (type === 'json' || type === 'jsonString') {
				let myResult = {};

				// Current parameters to be output
				for (let i in params) {
					if (defaultResult[params[i]]) {
						myResult[params[i]] = defaultResult[params[i]];
					}
				}

				// when wirte logs to file,need not set color
				if (options.write) {
					return JSON.stringify(myResult);
				}

				if (type === 'json') {
					return myResult;
				} else {
					// check color 
					let colord = function (){
						if (options.color) {
							return options.color;
						}
						if (props.color[level]) {
							return props.color[level];
						}
						return false;
					};
					return colord() ? chalk[colord()](JSON.stringify(myResult)) : JSON.stringify(myResult);
				}
			} else {
				// let levels = this.color()[level](level);
				let stringResult = '';

				// Current parameters to be output
				for (let j in params) {
					if (defaultResult[params[j]]) {
						stringResult += defaultResult[params[j]] + '-';
					}
				}
				let dataString = stringResult.replace(/-$/, '');
				// when wirte logs to file,need not set color
				if (options.write) {
					return dataString;
				}
				// check color 
				let colord = function (){
					if (options.color) {
						return options.color;
					}
					if (props.color[level]) {
						return props.color[level];
					}
					return false;
				};
				//  check whether you need to set the color
				return colord() ? chalk[colord()](dataString) : dataString;
			}
		} catch (error) {
			this.catchErr(error);
		}
	};

	// console.log('-----props------');
	// console.log(props);
	// catch logger error
	this.catchErr = function (error) {
		throw new Error(error);
	};
}
module.exports = Init;
