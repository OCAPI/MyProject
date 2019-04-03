/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Javascript
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
// * @see {@link module:controllers/Javascript~myFunction} */
//exports.MyFunction = myFunction;
var ISML = require('dw/template/ISML');
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');



function start()
{	
	ISML.renderTemplate	
	(	      
			'PracticeJ.isml'
			
			
			
			//'Cdatascript.isml',
			//'getscript.isml',
		
    )	
};


exports.Start = guard.ensure(['get'], start);

