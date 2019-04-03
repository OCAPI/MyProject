/**
* Description of the Controller and the logic it provides
*
* @module  controllers/DWcontroller
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
// * @see {@link module:controllers/DWcontroller~myFunction} */
//exports.MyFunction = myFunction;

var ISML = require('dw/template/ISML');
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');	
var productmgr=require('dw/catalog/ProductMgr');

function getvariation()
{
	var parameterId =request.httpParameterMap.pid.stringValue;
	var getpara=productmgr.getProduct(parameterId);
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
				
				'productfound.isml', 
				
				{
					 
					
					
					myProduct:getpara
					//myName:parametername
					
				}  	            
				
		); 	     
		
	}
	
	
	
	
}

function orderable()
{
	var parameterId =request.httpParameterMap.pid.stringValue;
	var getpara=productmgr.getProduct(parameterId);
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
				
				'getOE.isml', 
				
				{
					 
					
					
					myProduct:getpara
					//myName:parametername
					
				}  	            
				
		); 	     
		
	}
	
	
	
	
}
function geturl()
{
	var parameterId =request.httpParameterMap.pid.stringValue;
	var getpara=productmgr.getProduct(parameterId);
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
				
				'geturl.isml', 
				
				{
					myProduct:getpara
					//myName:parametername
					
				}  	            
				
		); 	     
		
	}
	
	
	
	
}
function getimage()
{
	var parameterId =request.httpParameterMap.pid.stringValue;
	var getpara=productmgr.getProduct(parameterId);
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
				
				'getimage.isml', 
				
				{
					myProduct:getpara
					//myName:parametername
					
				}  	            
				
		); 	     
		
	}
	
	
	
	
}
function getprice()
{
	var parameterId =request.httpParameterMap.pid.stringValue;
	var getpara=productmgr.getProduct(parameterId);
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
				
				'getP.isml', 
				
				{
					myProduct:getpara
					//myName:parametername
					
				}  	            
				
		); 	     
		
	}
	
	
	
	
}

exports.getp=guard.ensure(['get'],getprice)

exports.getimg=guard.ensure(['get'],getimage)
exports.url = guard.ensure(['get'], geturl)
exports.variation = guard.ensure(['get'], getvariation)
exports.Start = guard.ensure(['get'], orderable)



