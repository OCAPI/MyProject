/**
* Description of the Controller and the logic it provides
*
* @module  controllers/JBasket
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
// * @see {@link module:controllers/JBasket~myFunction} */
//exports.MyFunction = myFunction;
var ISML = require('dw/template/ISML');/* get ISML object from dw.template package */  
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');	 
var BasketMgr =require('dw/order/BasketMgr');/* get BasketMgr from dw.order package */
function start()

{	
	var basket=BasketMgr.getCurrentBasket();
	
	ISML.renderTemplate
	
	(	      
			'Showbasket.isml', 
			{         
		
		         Basket:basket
			
			}    
	);  	
	
};
	exports.Start = guard.ensure(['get'], start);

