/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Webservice
*/

'use strict';

// HINT: do not put all require statements at the top of the file
// unless you really need them for all functions

/**
* Description of the function
*
* @return {String} The string 'myFunction'
*/
// var myFunction = function(){
//     return 'myFunction';
// }

/* Exports of the controller */
///**
// * @see {@link module:controllers/Webservice~myFunction} */
//exports.MyFunction = myFunction;
var ISML = require('dw/template/ISML');
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');
var weatherServiceObj = require("~/cartridge/scripts/weather.ds");


function start()
{	
	var parameterId =request.httpParameterMap.pid.stringValue;
	
	var service = weatherServiceObj.HealthStatus; 
//	var sitePort= dw.system.Site.getCurrent().getCustomPreferenceValue('healthUrl');
	
	var url = service.URL;
	service.setURL(url);
	var response = service.call();
	var parse=JSON.parse(response.object.text);
	ISML.renderTemplate	
	(	      
			'Service.isml',
			{
				
				message:parse,
				message2:parameterId
				
			}
			
			
			//'Cdatascript.isml',
			//'getscript.isml',
		
    )	
};


exports.Start = guard.ensure(['get'], start);






