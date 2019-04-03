/**
* Description of the Controller and the logic it provides
*
* @module  controllers/testcode
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
// * @see {@link module:controllers/testcode~myFunction} */
//exports.MyFunction = myFunction;

var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');	
var Logger=require('dw/system/Logger');

function start()

{	
	var logger=Logger.getLogger("AdnanLogger","Status");
	try
	{
		ISML.renderTemplate
		
		(	      
				'Helloworld.isml', 
				{         
			
			myParameter:dw.web.Resource.msgf('generalerror.message','error_zh_CN',null,"hello this is placeholder")
				
				}    
		);  
	}
	catch(e)
	{
		logger.fatal("adnan", e.causeMessage );
	}
	
	
};

function ifelse()

{	
	
	ISML.renderTemplate(	      
			'condition.isml'   
	);  	
	
};
exports.Start = guard.ensure(['get'], start);

exports.Start1 = guard.ensure(['get'], ifelse);
		


