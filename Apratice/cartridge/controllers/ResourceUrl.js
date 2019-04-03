/**
* Description of the Controller and the logic it provides
*
* @module  controllers/ResourceUrl
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
// * @see {@link module:controllers/ResourceUrl~myFunction} */
//exports.MyFunction = myFunction;

var ISML = require('dw/template/ISML');
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');

function start()

{	
	 var parameterId = request.httpParameterMap.pid.stringValue;
	
	
	
	return ISML.renderTemplate
	
	(	      
			'Resource.isml',
			{
				
				message:parameterId
			}
			
			//'Cdatascript.isml',
			//'getscript.isml',
		
    ) 	
	
};
exports.Start = guard.ensure(['get'], start);