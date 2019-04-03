/**
* Description of the Controller and the logic it provides
*
* @module  controllers/Getproduct
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
// * @see {@link module:controllers/Getproduct~myFunction} */
//exports.MyFunction = myFunction;

var ISML = require('dw/template/ISML');
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');	
var productmgr=require('dw/catalog/ProductMgr');
function start()
{
	var parameterId =request.httpParameterMap.pid.stringValue;
	//var parametername=request.httpParameterMap.name.stringValue;
	var product = productmgr.getProduct(parameterId);

	
	if (product===null) 
	{       
		ISML.renderTemplate
		(	
				'productnotfound.isml', 
				{ 
					//var errorMsg=dw.web.resource.msgf('search.nohits.header', 'search', null, parameterId);
					
					//message:errorMsg
					message:'product with id '+parameterId+' not found'
					
				}  	                  
				
		); 	      
		
	} 	      
	
	else
	
	{	       
		
		ISML.renderTemplate
		
		(	                   
				
				'productfound.isml', 
				
				{
					myProduct:product 
					//myName:parametername
					
				}  	            
				
		); 	     
		
	}
	
	
	
	
}	
exports.Start = guard.ensure(['get'], start)

