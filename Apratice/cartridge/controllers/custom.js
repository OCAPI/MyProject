/**
* Description of the Controller and the logic it provides
*
* @module  controllers/custom
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
// * @see {@link module:controllers/custom~myFunction} */
//exports.MyFunction = myFunction;
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
var Customobj = require('dw/object/CustomObjectMgr');
var txn = require('dw/system/Transaction');

function start()

{	
	
	
	txn.wrap(function()
			{	
		
		//.var obj=Customobj.createCustomObject("student",2)
		var obj=Customobj.createCustomObject("student",5)
		  
		    obj.custom.studentname="adnan";
		    obj.custom.Contact= "ahsan";
		
		
			});
	
 	
	
};
exports.Start = guard.ensure(['get'], start);

