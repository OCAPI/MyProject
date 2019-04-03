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
var guard=require('app_sitegenesis_controllers/cartridge/scripts/guard');
var ISML=require('dw/template/ISML');


function start()
{
	var myParam =request.httpParameterMap.pid;	
      if (myParam.stringValue != null)      
      {
    	  ISML.renderTemplate
    	  (
    			  'Tvalue.isml',
    			  {
    				  myParameter:myParam.stringValue				  
    			  } 
    	  );	  	
	}		
	else
	{	            
		ISML.renderTemplate
		(	                
				'TNvalue.isml', 
			{
			   myParameter1:'param not found' 
			}  	   				
		);		
	}
};
exports.Start = guard.ensure(['get'], start);

