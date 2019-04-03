'use strict';

/**
 * Controller example for a product review form.
 */

/* Script Modules */
var app = require('app_sitegenesis_controllers/cartridge/scripts/app');
var guard = require('app_sitegenesis_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');
var URLUtils = require('dw/web/URLUtils');
var Customobj = require('dw/object/CustomObjectMgr');
var txn = require('dw/system/Transaction');
var ProductMgr = require('dw/customer/CustomerMgr');
var Mail = require('dw/net/Mail');
var Site = require('dw/system/Site');
var Template = require('dw/util/Template');


function start() {
	app.getView({
	    ContinueURL: URLUtils.https('HelloForm-HandleForm')
	    }).render('helloform');
}

function handleForm() {
    app.getForm('helloform').handleAction({
        cancel: function () {
    	    
            app.getForm('helloform').clear();
            response.redirect(URLUtils.https('Home-Show'));
        },
        
        submit: function (e) {
        	app.getView().render('helloformresult');
        	
        	var getemail=e.email.value;
        	
        //	var getContact=e.Contact.value;
        	
        	
          var mail: Mail = new dw.net.Mail();
	     mail.addTo(getemail);
	     mail.setFrom("addyknap0@gmail.com");
	     mail.setSubject("verification");
	     // sets the content of the mail as plain string
	     mail.setContent("hi i m adnan");
	     mail.send();
        	
        	
	     
        	
        }
      
        	
        	    
       
        	   
    
        	
        	
        	//txn.wrap(function()
        			
        		//	{	
        		
         
        		//var obj=Customobj.createCustomObject("registrationid",dw.util.UUIDUtils.createUUID())
        		
        			
        		
        			//   obj.custom.Firstname=e.nickname.value;
        		
        		
        		  
        		  
        		
        	//	obj.custom.Contact=e.Contact.value;
        		
        		
                  
    });
}

/** Shows the template page. */
exports.Start = guard.ensure(['get'], start);
exports.HandleForm = guard.ensure(['post'], handleForm);

