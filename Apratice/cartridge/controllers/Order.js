/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Order
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
// * @see {@link module:controllers/Order~myFunction} */
//exports.MyFunction = myFunction;

var ISML = require('dw/template/ISML');
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');	
var productmgr=require('dw/order/OrderMgr');

function getprice()
{
	
	var parameterId =request.httpParameterMap.pid.stringValue;
	var getpara=productmgr.getOrder(parameterId);
	//var parametername=request.httpParameterMap.name.stringValue;
	//var product = productmgr.getProduct(parameterId);
	//var product = productmgr.getProductVariationAttribute('color');
	
	if (getpara===null ) 
	{       
		ISML.renderTemplate
		(	
				'productnotfound.isml', 
				{ 
					//var errorMsg=dw.web.resource.msgf('search.nohits.header', 'search', null, parameterId);
					
					//message:errorMsg
					message:'product not found'
					
				}  	                  
				
		); 	      
		
	} 	      
	
	else
	
	{	       
		
		ISML.renderTemplate
		(	                   
				
				'orderdetails.isml', 
				
				{
					 
					
					
					myProduct:getpara
					//myName:parametername
					
				}  	            
				
		); 	     
		
	}
	
	
	
	
}
exports.getproduct=guard.ensure(['get'],getprice)

