/**
* Description of the Controller and the logic it provides
*
* @module  controllers/ISMLcontrol
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
// * @see {@link module:controllers/ISMLcontrol~myFunction} */
//exports.MyFunction = myFunction;
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');	

function start()

{	
	
	ISML.renderTemplate
	
	(	      
			'Helloworld.isml', 
			{         
		
		myParameter:"Hello from Controllers"
			
			}    
	);  	
	
};
	exports.Start = guard.ensure(['get'], start);
