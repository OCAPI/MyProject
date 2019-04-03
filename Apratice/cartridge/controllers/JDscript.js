/**
* Description of the Controller and the logic it provides
*
* @module  controllers/JDscript
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
// * @see {@link module:controllers/JDscript~myFunction} */
//exports.MyFunction = myFunction;
var ISML = require('dw/template/ISML');
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');
var myModel = require('~/cartridge/scripts/myModel'); 


function start()

{	
	// var parameterId = request.httpParameterMap.pid.stringValue;
	 var co=myModel();
	 
	
	ISML.renderTemplate
	
	(	      
			'dscript.isml',
			//'Cdatascript.isml',
			//'getscript.isml',
			{
				message:co
			}
			
		   
	);  	
	
};
exports.Start = guard.ensure(['get'], start);

