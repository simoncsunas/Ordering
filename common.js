// -------------------------------------------------------------------------------------------------------------------
//  START                               Global Variables Declaration
// -------------------------------------------------------------------------------------------------------------------
// -- BeginMod:EthanChee@2008-Jan-02
var g_strEventWin = "";
// -- EndMod:EthanChee@2008-Jan-02

// -- BeginMod:WKCHEAH@2008-Jan-02
var g_strlastKey = "";
// -- EndMod:WKCHEAH@2008-Jan-02

//	if (document.all)
//	{           
//	    document.onkeydown = function ()
//	    {
//	         var key_f5 = 116; // 116 = F5          
//	         if (key_f5==event.keyCode)
//	         {
//	              event.keyCode=0;
//	              jsAlert("You are not allow to refresh this page.");
//				  return false;
//	         } 
//	    }
//	}
	var MyUrl = ''; //To justify the caller is from root folder or sub-directory folder
// -------------------------------------------------------------------------------------------------------------------
//  END                                  Global Variables Declaration
// -------------------------------------------------------------------------------------------------------------------




// -------------------------------------------------------------------------------------------------------------------
//  START                                         Events
// -------------------------------------------------------------------------------------------------------------------

   // ==================================================================
   // START - Document OnLoad     
   // -- Created By   : EthanChee
   // -- Created Date : 2008-Jan-11
   // -- Desc         : IE Document Object OnLoad
   // -- Remarks      : Used for initialiaze object(s) / function(s)
   // -- Examples     : 
   /*      
         Step 1 : <body onload="jsOnload();">     
   */   
   // ===================================================================
   function jsOnload()
   {
      // -- Generate ToolTips HTML Object
      jsToolTip_Init();
   }
// -- EndMod:EthanChee@2008-Jan-11
   // ===================================================================
   // END - Document OnLoad        
   // ===================================================================    

// ---------------------------------------------------------------------------------------------------------------------
//  END                                            Events
// ---------------------------------------------------------------------------------------------------------------------	





// -------------------------------------------------------------------------------------------------------------------
//  START                                         Custom Functions
// -------------------------------------------------------------------------------------------------------------------
   
   // ===================================================================
   // START - Tooltips Routines        
   // -- Created By   : EthanChee
   // -- Created Date : 2008-Jan-11
   // -- Desc         : ToolTip Object Initialized
   // -- Remarks      : Required For Used By [jsCheckEvent(this.event);]
   // -- Examples     : 
   /*      
         Step 1 : <body onload="jsOnload();">  // --  jsToolTip_Init() is included with the jsOnload() function.  
         Step 2 : <select id="cboMySelect" name="cboMySelect" onmouseover="jsCheckEvent(this.event);" onmouseout="jsCheckEvent(this.event);" onmousemove="jsCheckEvent(this.event);"></select>
   */   
   // ===================================================================    
   function jsToolTip_Init()
   {
     // --90 Check ToolTip Div Object, Create New If Not Found.
	 
    if(document.getElementById("tooltip")!=null && document.getElementById("tooltip").value == ""){
     
     if (!document.getElementById("tooltip")) 
     {
     //alert(document.getElementById("tooltip"));
        var objElement = window.document.createElement('<div id="tooltip"></div>');                   
        window.document.body.appendChild(objElement);
     } 
     }  
   }
   // -- EndMod:EthanChee@2008-Jan-11         
   // ===================================================================
   // END - Tooltips Routines        
   // ===================================================================    
   
   
	
	function jsCancelEventRightClick(e) {

//	    if (navigator.appName == '<Netscape' && (e.which == 3 || e.which == 2)) {	      
//	        jsAlert("Right click is not allowed.");   
//	        return false;
//	    }
//	    else if (navigator.appName == 'Microsoft Internet Explorer' && (event.button == 2 || event.button == 3)) {	    //debugger;
//	        if (!MyUrl) {
//	            jsAlert("Right click is not allowed.");
//	        } else {
//	            jsParentAlert("Right click is not allowed.");   
//	        } 
//	        return false;
//	    }

	    return true;
	}

	document.onmousedown = jsCancelEventRightClick;
	if (document.layers) window.captureEvents(Event.MOUSEDOWN);
	window.onmousedown = jsCancelEventRightClick;
	
/*
BeginAdd:nik 2007/09/11
Remark: Disable all button on page (oneclick submit). 
*/

function disableAllButton() {
  for (var x=0;x<document.forms.length;x++) {
    for (var i=0;i<document.forms[x].elements.length;i++)      {
      var e = document.forms[x].elements[i];
                  if (e.type=="button") {
        e.disabled=true;
                  }
    }
  }
}
/*
EndAdd:nik 2007/09/11
*/


/*
BeginMod:kmtan 2007/05/01
Remark: 'hDataImgXml' hidden field must exist in the form. 
*/
function jsDataImageLog(){

    var objElem = document.forms[0].elements
    var strXmlDataImgLogRec
    var strXmlDataImgLog
    var strCheckboxValue 
    var objRadioGroup
    var strFieldsNames 
    var intComboIndex
    var strElemName
    var strOrgElemValue
    var strNewElemValue
    var j
    var i

    strXmlDataImgLogRec = ''
    strXmlDataImgLog = '<root>'
    strFieldsNames = ''
    for (i= 0; i<objElem.length;i++){
        strCheckboxValue = "N"
        //check for textbox input
        
        if (objElem[i].type == 'text' && objElem[i].dataImageLog == 'Y'){  
        
            strElemName = objElem[i].name
            strOrgElemValue = objElem[i].originValue
            strNewElemValue = objElem[i].value
        
           if (strOrgElemValue != strNewElemValue){
                strXmlDataImgLogRec = jsBuildDataImgXml(strElemName,strOrgElemValue,strNewElemValue);
                strXmlDataImgLog = strXmlDataImgLog + strXmlDataImgLogRec;
           }    
        }
        
         if (objElem[i].type == 'password' && objElem[i].dataImageLog == 'Y'){  
        
            strElemName = objElem[i].name
            strOrgElemValue = objElem[i].originValue
            //BeginMod:cheubc 21-October-2007
            //strNewElemValue = "**********"
            strNewElemValue = objElem[i].value
            
           if (strOrgElemValue != strNewElemValue){ 
                //set password in "*" before write to log file  
                strNewHiddenElemValue = ""            
                for (var x=1; x<=strNewElemValue.length; x++) {
                    strNewHiddenElemValue = strNewHiddenElemValue + "*";
                }   
                
                //strXmlDataImgLogRec = jsBuildDataImgXml(strElemName,strOrgElemValue,strNewElemValue);
                strXmlDataImgLogRec = jsBuildDataImgXml(strElemName,strOrgElemValue,strNewHiddenElemValue);                
                strXmlDataImgLog = strXmlDataImgLog + strXmlDataImgLogRec;
           }
           //EndMod:cheubc 21-October-2007     
        }
        
        //check for checkbox input
        if (objElem[i].type == 'checkbox' && objElem[i].dataImageLog == 'Y'){
        
        //****************** beginMod : sywong - modified,add if (!(objElem[i].checked))***************
           if (objElem[i].checked)
           {
                strCheckboxValue = "Y"        // 1 - indicate true value; 0 - false
            }
           if (!(objElem[i].checked))
           {
                strCheckboxValue = "N"        // 1 - indicate true value; 0 - false
            }
       //**********************endMod : sywong******************************
                
            strElemName = objElem[i].name
            strOrgElemValue = objElem[i].originValue
            strNewElemValue = strCheckboxValue


           if (objElem[i].originValue != strCheckboxValue){
                strXmlDataImgLogRec = jsBuildDataImgXml(strElemName,strOrgElemValue,strNewElemValue);
                strXmlDataImgLog = strXmlDataImgLog + strXmlDataImgLogRec;
            }
        }
        
        //check for radio input
        if (objElem[i].type == 'radio' && objElem[i].dataImageLog == 'Y'){         
           strNewElemValue = ""
           strElemName = objElem[i].name 
           objRadioGroup = objElem[strElemName]; // get the whole set of radio buttons.   
           
           if (strFieldsNames.indexOf(strElemName +":" + objElem[i].type + ",")==-1){
               for(j = 0 ; j < objRadioGroup.length ; ++j) {
                    if(objRadioGroup[j].checked) {
                        strNewElemValue = objRadioGroup[j].value;                 
                        break;
                    }
               }
               
               //BeginMod: cheubc 20070823 – add multiple radio groups support               
               if(objRadioGroup.length == j) {
                    strOrgElemValue = objRadioGroup[j-1].originValue
               } else {
                    strOrgElemValue = objRadioGroup[j].originValue
               }               
        
               if (strOrgElemValue != strNewElemValue){
                    strXmlDataImgLogRec = jsBuildDataImgXml(strElemName,strOrgElemValue,strNewElemValue);
                    strXmlDataImgLog = strXmlDataImgLog + strXmlDataImgLogRec;
               }
               //EndMod: cheubc 20070823
               strFieldsNames += objElem[i].name + ":" + objElem[i].type + ","
            }      
        }
        
        //check for textarea
        if (objElem[i].type == 'textarea' && objElem[i].dataImageLog == 'Y'){
            
            strOrgElemValue = objElem[i].originValue
            strNewElemValue = objElem[i].innerText
            
            if (strOrgElemValue != strNewElemValue){
            
                strElemName = objElem[i].name
                strXmlDataImgLogRec = jsBuildDataImgXml(strElemName,strOrgElemValue,strNewElemValue);
                strXmlDataImgLog = strXmlDataImgLog + strXmlDataImgLogRec;
            } 
        }
        
        //check for combo box
        if (objElem[i].type == 'select-one' && objElem[i].dataImageLog == 'Y'){

            intComboIndex = objElem[i].selectedIndex
          
            if(objElem[i].disabled==false)
            {
                if (objElem[i].item(intComboIndex).value != objElem[i].originValue){
                    
                    strElemName = objElem[i].name
                    strOrgElemValue = objElem[i].originValue
                    strNewElemValue = objElem[i].item(intComboIndex).value

                    strXmlDataImgLogRec = jsBuildDataImgXml(strElemName,strOrgElemValue,strNewElemValue); 
                    strXmlDataImgLog = strXmlDataImgLog + strXmlDataImgLogRec;
                }
            }
        }
        
         //check for list box ----suyee 13/06/07-------------
        if (objElem[i].type == 'select-multiple' && objElem[i].dataImageLog == 'Y'){
            var intListIndex=""
          
            for (j= 0; j<objElem[i].length;j++)
            {
//                intListIndex +=(objElem[i].item(j).value).substring(0,2) +  ','  
                //BEGIN MGI 20161116 Change the .Value To Text to show the Name value
               if (j != objElem[i].length - 1)
                    intListIndex +=(objElem[i].item(j).text) +  ','  
               else
                    intListIndex +=(objElem[i].item(j).text)
            }  
                      
            if (intListIndex != objElem[i].originValue){                
                strElemName = objElem[i].name
                strOrgElemValue = objElem[i].originValue
                strNewElemValue = intListIndex

                strXmlDataImgLogRec = jsBuildDataImgXml(strElemName,strOrgElemValue,strNewElemValue); 
                strXmlDataImgLog = strXmlDataImgLog + strXmlDataImgLogRec;
            }
        }
        //check for list box ----suyee 13/06/07-------------
    }  
    strXmlDataImgLog = strXmlDataImgLog + '</root>' 
    document.getElementById("hDataImgXml").value = escape(strXmlDataImgLog)

}
//EndMod:kmtan 2007/5/4


/*
BeginMod:kmtan 2007/5/4 
Remark: Construct the xml for insert data images changes
*/

function jsBuildDataImgXml(strElemName,strOrgElemValue,strNewElemValue){
        
    var strXmlDataImgLogRec = ''
    
    strXmlDataImgLogRec = strXmlDataImgLogRec + '<dataImagelog>' 
    strXmlDataImgLogRec = strXmlDataImgLogRec + '<fieldName><![CDATA[' + strElemName + ']]></fieldName>'
    strXmlDataImgLogRec = strXmlDataImgLogRec + '<originValue><![CDATA[' + strOrgElemValue + ']]></originValue>' 
    strXmlDataImgLogRec = strXmlDataImgLogRec + '<chgValue><![CDATA[' + strNewElemValue + ']]></chgValue>' 
    strXmlDataImgLogRec = strXmlDataImgLogRec + '</dataImagelog>' 
    
    return strXmlDataImgLogRec
    
}
//EndMod:kmtan 2007/5/4



/*
BeginMod:kmtan 2007/5/4
Remark: load the data image config into form element.
'hDataImgConfig' hidden field must exist in the form to store the data image config
*/
function jsLoadDataImageConfig(){
    var arrDataImgConfig = new Array()
    var strDataImgConfig = document.getElementById("hDataImgConfig").value 
    var objElement
    var intElemCount
    var j
    arrDataImgConfig = strDataImgConfig.split("|")
    for (i=0;i<arrDataImgConfig.length;i++)
    {
        objElement =  document.getElementsByName(arrDataImgConfig[i])
           
        if (objElement != null && typeof(objElement) != 'undefined'){ 
            intElemCount =  objElement.length 
              
            for (j= 0; j < intElemCount; j++){
                objElement.item(j).dataImageLog = 'Y' 
            }    
        } 
    }   
}
//EndMod:kmtan 2007/5/4

//BeginMod:kmtan 2007/5/10
function jsLeft(str, n){
	if (n <= 0)
	    return "";
	else if (n > String(str).length)
	    return str;
	else
	    return String(str).substring(0,n);
}

function jsRight(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}


function jsTrim(str){

    if(!str || typeof str != 'string')
        return '';
    
    return str.replace(/^\s+|\s+$/g,"");
}




function jsReplace(strOrgString,strSearchString,strReplaceString) {

    var strLength = strOrgString.length;
    var txtLength = strSearchString.length;
    
    if ((strLength == 0) || (txtLength == 0)) 
        return strOrgString;

    var i = strOrgString.indexOf(strSearchString);
    
    if ((!i) && (strSearchString != strOrgString.substring(0,txtLength))) 
        return strOrgString;
    if (i == -1) 
        return strOrgString;

    var newstr = strOrgString.substring(0,i) + strReplaceString;

    if (i+txtLength < strLength)
        newstr += jsReplace(strOrgString.substring(i+txtLength,strLength),strSearchString,strReplaceString);
    
    return (newstr);
}

//EndMod:kmtan 2007/5/10


/*BeginMod: pitfungl 2007/05/16
* To create common javascript function
*/

/**To validate if the value with numberic value only**/
function jsIsNumeric(str)
{
  	var sValid = "1234567890";
  	var bIsValid = true;
	var sChar = "";
	
	for(var x=0; x < str.length; x++){
		sChar = str.charAt(x);
		
		if (sValid.indexOf(sChar) == -1){
			bIsValid = false;
			break;
		}
	}
  	return bIsValid;
}

/**To validate if the vaule with numeric value with decimal point **/
function jsIsDecimal(str)
{
  	var sValid = "1234567890.";
  	var bIsValid = true;
	var sChar = "";
	
	for(var x=0; x < str.length; x++){
		sChar = str.charAt(x);
		
		if (sValid.indexOf(sChar) == -1){
			bIsValid = false;
			break;
		}
	}
  	return bIsValid;
}


/*BeginMod #02: bpteoh 22 OCT 2007 */
/**To validate if the vaule with numric value with wildcard **/
function jsIsNumericSearchField(str)
{
  	var sValid = "1234567890*";
  	var bIsValid = true;
	var sChar = "";
	
	for(var x=0; x < str.length; x++){
		sChar = str.charAt(x);
		
		if (sValid.indexOf(sChar) == -1){
			bIsValid = false;
			break;
		}
	}
  	return bIsValid;
}
/*EndMod #02: bpteoh 22 OCT 2007 */

/**To validate if the value is with alpha and numberic value only**/
function jsIsAlphaNumeric(str)
{
  	var sValid = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  	var bIsValid = true;
	var sChar = "";
    
	for(var x=0; x < str.length; x++){
		sChar = str.charAt(x);
		
		if (sValid.indexOf(sChar) == -1){
			bIsValid = false;
			break;
		}
	}	
  	return bIsValid;
}

/*BeginMod #02: bpteoh 22 OCT 2007 */
/**To validate if the value is with alpha and numberic value only  with wildcard(%)**/
function jsIsAlphaNumericSearchField(str)
{
  	var sValid = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ*";
  	var bIsValid = true;
	var sChar = "";
    
	for(var x=0; x < str.length; x++){
		sChar = str.charAt(x);
		
		if (sValid.indexOf(sChar) == -1){
			bIsValid = false;
			break;
		}
	}	
  	return bIsValid;
}
/*EndMod #02: bpteoh 22 OCT 2007 */

function jsIsAlphaNumericWithWhiteSpaceBrackets(str)
{
  	var sValid = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ() ";
  	var bIsValid = true;
	var sChar = "";
    
	for(var x=0; x < str.length; x++){
		sChar = str.charAt(x);
		
		if (sValid.indexOf(sChar) == -1){
			bIsValid = false;
			break;
		}
	}	
  	return bIsValid;
}

// Reject [\<>@":|[]{}] and allowed space
function jsIsAlphaNumericWithSpecialChar(str)
{
  	var sValid = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ~!#$%^&*()[]_+`-=;'?,./";
  	var bIsValid = true;
	var sChar = "";
    
	for(var x=0; x < str.length; x++){
		sChar = str.charAt(x);
		
		if (sValid.indexOf(sChar) == -1){
			bIsValid = false;
			break;
		}
	}	
  	return bIsValid;
}

// Reject [\<>@":|[]{}]
function jsIsAlphaNumericWithSpecialCharII(str)
{
  	var sValid = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!#$%^&*()[]_+`-=;'?,./";
  	var bIsValid = true;
	var sChar = "";
    
	for(var x=0; x < str.length; x++){
		sChar = str.charAt(x);
		
		if (sValid.indexOf(sChar) == -1){
			bIsValid = false;
			break;
		}
	}	
  	return bIsValid;
}


/**To validate if the value is date only**/

/**To validate if the value is with alpha and numberic value and space only**/
function jsIsAlphaNumericWithSpace(str)
{
  	var sValid = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  	var bIsValid = true;
	var sChar = "";
    	
	for(var x=0; x < str.length; x++){
		sChar = str.charAt(x);
		
		if (sValid.indexOf(sChar) == -1){
			bIsValid = false;
			break;
		}
	}	
  	return bIsValid;
}

/**To validate if the value is date only**/
/* EndMod:tekhaw */
function jsIsDate(objDate)
{
    var RegExPattern = /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00))))$/;
    var strDate = jsTrim(objDate.value)
    if ((strDate.match(RegExPattern)) && (strDate!='')) {
         return true;
    } else {
         return false;
    } 
}
/* EndMod:tekhaw */

/**To validate if user entering numberic value**/
function jsEnterNumeric()
{
	if (!(event.keyCode>=48 && event.keyCode<=57)) {
		jsAlert ("Please key in number [0-9] for this field.");
		event.returnValue = false;
	}
}

/**To validate if user entering alpha and numberic value**/
function jsEnterAlphaNumeric()
{
	if (!((event.keyCode>=48 && event.keyCode<=57)||(event.keyCode>=65 && event.keyCode<=90)||(event.keyCode>=97&&event.keyCode<=122)||(event.keyCode==95))) {
		event.returnValue = false;
	}
}

// Only Allowed Alpha Numeric In The String
function jsOnlyAlphaNumeric(str)
{
 // debugger;
  /* 
 var strRegExpVal = "^[\w]+$";
  
   var regEx;
   var ret;

   regEx = new RegExp("^[\w]+$");
   ret = str.test(regEx);

 
  var re = new RegExp(strRegExpVal);
  var m = re.match(str);
  
  if (m == null) return false;
  else return true;
  
  
  
  var re = new RegExp("^[\w]+$");
  if (str.match(re) == null) return false;
  else return true;

  var re = new RegExp(strRegExpVal);
  if (str.match(re)) {
    alert("Successful match");
  } else {
    alert("No match");
  }
*/
   return vbOnlyAlphaNumeric(str);
}

function jsIsComplexPassword()
{
}

function jsDatePicker()
{

}

function jsGetShortDate()
{

}

function jsValidateDateFormat()
{

}

function jsValidateDateRange()
{

}


/**To remove spaces on the left of the string**/
function jsLTrim(str)
{
   var regEx;
   var ret;
   
   regEx = new RegExp(/^\s*/g);
   ret = str.replace(regEx, "");
   return ret;
}

/**To remove spaces on the right of the string**/
function jsRTrim(str)
{
   var regEx;
   var ret;
   
   regEx = new RegExp(/\s*$/g);
   ret = str.replace(regEx, "");
   return ret;
}


/**To check if the value a cyclical pattern e.g 12345, 6789, abcd, xyz**/
function jsIsCyclical(str)
{
	var i;
	var sub;	
	var len;
	var num1,num2,num3,num4;
	
	len = str.length-3;
	for(i=0;i<len;i++){
		sub = str.substring(i, i+4);
		num1 = sub.charAt(0);	
		num2 = sub.charAt(1);	
		num3 = sub.charAt(2);	
		num4 = sub.charAt(3);							
		if(num1 == num2 && num1 == num3 && num1 == num4){
			return true;
		}else{
			num2-=1;
			num3-=2;
			num4-=3;
			if(num1 == num2 && num1 == num3 && num1 == num4){
				return true;
			}
		}
	}
	return false;
}

/**To append value at the front of the input string**/
function jsFAppend(str, len, strAppend)
{
	for(var i=len; i > str.length; i--){
		str = strAppend + str;	
	}
	return str;
}

/**To append value at the back of the input string**/
function jsBAppend(str, len, strAppend)
{
	for(var i=len; i > str.length; i--){
		str = str + strAppend;	
	}
	return str;
}

/*BeginMod: Joe 2007/07/10
/**To append value at the location of the input string**/
function jsMiddleAppend(str, location, strAppend)
{
	var strLength = str.length;
	
	if((location != 0) || (location >= str.length )){
	    str = str.substring(0, location - 1) + strAppend + str.substring(location - 1,str.length)
	}
	else if(location != 0){
	    str = strAppend + str;
	}
	else if(location == str.length){
	    str = str + strAppend;
	}
	return str;
}
/* EndMod: Joe 2007/07/10 

/**To validate if the value is a valid email format**/
function jsIsEmail(str)
{
	var flag = false
	// Note: The next expression must be all on one line...
	//       allow no spaces, linefeeds, or carriage returns!
	// BeginMod: EthanChee@2007-Nov-05
	var goodEmail = str.match(/\b(^(\S+@).+((\.com)|(\.net)|(\.edu)|(\.mil)|(\.gov)|(\.org)|(\..{2,2}))$)\b/gi);
	// EndMod: EthanChee@2007-Nov-05
	if (goodEmail)
	{
	  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (filter.test(str)) flag = true;
      else flag = false
	} 
	else 
	{
	   	flag = false
	}
	return flag
}

/**To validate if the value is a valid IP address**/
function jsIPAddress(str)
{
	var myArray= str.split(".");
	if(myArray.length != 4){
		jsAlert('This is no IP Address');
		return false;	
	}else{
		for (i=0;i<myArray.length;i++){
			if(myArray[i].length < 1){
				jsAlert('At least one digit required for each portion of IP Address');
				return false;
			}else if(myArray[i].length > 3){
				jsAlert('Not more than three digits allowed for each portion of IP Address');
				return false;
			}else if(!(myArray[i]>=0 && myArray[i] <=255)){
				jsAlert('Only 0 - 255 valid for IP Address');
				return false;
			}	
		}		
	}
	return true;
}

/**To Validate if the vale is a MAC Address**/
function jsIsMACAddress(str)
{
    /*BeginMod:sywong date: 2007/07/17 */
    var flag = false
	
	if (str!="") //if not empty
	{
	    var MacAdd= str.match(/^([0-9a-fA-F]{2}[:-]){5}[0-9a-fA-F]{2}$/i); //validate
	    if (MacAdd){
	   	    flag = true
	    } else {
	   	    flag = false
	    }
	}
	else
	    flag = true
	    
	return flag
	
	/*EndMod:sywong date: 2007/07/17 */
}

/**To convert input value to upper case value**/
function jsToUpper(str)
{
    str = str.toUpperCase();
    return str;
}

/**To convert input value to lower case value**/
function jsToLower(str)
{
    str =str.toLowerCase();
    return str;
}

/*EndMod: pitfungl 2007/05/16*/


/*BeginMod:kmtan date: 2007/5/30 desc: window open */
function jsWindowOpen(strURL, strWindowName, strWinFeature){
              
        if (typeof(strWinFeature)== "undefined" || strWinFeature== '' ) {
           strWinFeature = "width=700,height=500,left=150, top=100"; 
         }

        window.open (strURL,strWindowName, strWinFeature);
    }
/*EndMod:kmtan date: 2007/5/30 desc: window open */
    

/*BeginMod:ethan date: 2007/5/30 desc: get HTML DOM object by passed in HTML object name/id */    
function GetDOMObject(strObjID) 
   {
    if (document.getElementById) 
    {
      return (document.getElementById(strObjID));
    }
    
    if (document.all) 
    {
      return (document.all[strObjID]);
    }
   }
       
/*EndMod:ethan date: 2007/5/30 desc: get HTML DOM object by passed in HTML object name/id */ 


/*
// BeginMod: EthanChee@2007-Nov-05 
function jsIsValidUserLogin(str) 
{
  //debugger;
  	var strInvalid = "\/\"[]<>+=;,?*@";
  	var sCharAt = "";

    // Loop All Each Character In Seaching Value
    for (var x=0; x<=str.length; x++)
    {
         sCharAt = str.charAt(x);

        // Value Found                
        if (strInvalid.indexOf(sCharAt) != -1)
        {
           return false;
        }
    }
    return true;
}
// EndMod: EthanChee@2007-Nov-05
*/


/* StartMod:tekhaw date 2007/6/1 remove char from input string */
function jsRemoveChar(str){
    var sValid = "1234567890";
    var sCharAt = "";
    var iNumeric = "";

    for (var x=0; x<=str.length; x++){
         sCharAt = str.charAt(x);
               
        if (sValid.indexOf(sCharAt) == -1){ 
            
        }else{
            iNumeric = iNumeric + sCharAt;
        }
    }
    return iNumeric;
}
/* EndMod:tekhaw

/* StartMod:tekhaw date 2007/6/1 remove int from input string */
function jsRemoveInt(str){
    var sValid = "abcdefghijklmnopqrstuvwxyz";
    var sCharAt = "";
    var sChar = "";

    for (var x=0; x<=str.length; x++){
         sCharAt = str.charAt(x);
               
        if (sValid.indexOf(sCharAt) == -1){ 
            
        }else{
            sChar = sChar + sCharAt;
        }
    }
    return sChar;
}
/* EndMod:tekhaw */


//BeginMod:02-0ctober-2007 cheubc [add new parameter "optionModeAll" and condition to check and prompt alert if listbox is empty.]
/* StartMod:sywong date 2007/6/11 check listbox have selected item */
function jsSelectedCheck(strListBoxID,strListBoxName, optionMoveAll){
     var varListBoxID = document.all(strListBoxID);
     var rowCount =varListBoxID.options.length
     
     if (varListBoxID != null ){     
        
        if(optionMoveAll == true) {
            if (rowCount == 0) {
                jsAlert(strListBoxName + ' is empty');
                return false;                
            }        
        
        } else {
            if (rowCount!= 0){            
                if(varListBoxID.options.selectedIndex == -1) { // when no Item is selected the index will be -1
                    jsAlert('Please select Item(s) in '+ strListBoxName);
                    return false;
                } else {
                    return true
                }        
            } else {        
                jsAlert(strListBoxName + ' is empty');
                return false;                
            }
        }
        return false;  
     }
}
/* EndMod:sywong date 2007/6/11 check listbox have selected item */
//BeginMod:02-0ctober-2007 cheubc


/*BeginMod: pflai 20070622 password complexity checking*/

function jsIsComplexPassword(field,fieldID)
{  
    var isValid = true;
    if (!jsIsCombinationValue(field)){
//        jsAlert ("Password should contains combination of capital letters, small letters, numerals.");
        isValid = false;
    }   
    else
    {
          /*BeginMod: sywong 20070703 password match with id with 4 char continuously*/
        for(var i=0;i<fieldID.length-3;i++){                
         sChar = fieldID.substring(i,i+4);
             if(field.match(sChar))
             {
                 isValid = false;                
             }
        }
       /*EndMod: sywong 20070703 password match with id with 3 char continuously*/
////        
//////    else if (!jsIsFirstChar(field)){
//////        jsAlert ("Please key in character [A-Z],[a-z] for first field.");
//////        isValid = false;
    }
    return isValid;
}

/*Function to check if the input value contains all special character*/
function jsIsSpecialChar(field)
{
var strCode = "[]\\\"{}|';:?></.,`~!@#$%^&*()_+-=";
			 
//var strCode2 = "33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,58,59,60,61,62,63,64,91,92,93,94,95,96,123,124,125,126";
var sChar;
var tot1 = 0;
var isValid = false;
	
	for(var i=0;i<field.length;i++){
		sChar = field.charAt(i);
		
		if (strCode.indexOf(sChar) == -1){
			tot1 = tot1 + 1;
		}
	
	}
	
	if (tot1 == 0){
		isvalid = true;}
	else{
		isvalid = false;
	}
		
	return isvalid;
}

/*Function to check if the input value contains combination of capital and small caps, number and special character*/
function jsIsCombinationValue(field) //only A-Z, a-z 
{
    var validCapChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var validSmallChar = "abcdefghijklmnopqrstuvwxyz";
	var validNum = "0123456789";
	var validSpecial = "[]\\\"{}|';:?></.,`~!@#$%^&*()_+-=";
  	var tot1 = 0;
	var tot2 = 0;
	var tot3 = 0;
	var tot4 = 0;
	var isValid = true;
	var sChar;

  	//var firsrChar = field.value.substring(0,1);
  	for(var i=0;i<field.length;i++){
		sChar = field.charAt(i);
		
		if (validNum.indexOf(sChar) != -1){
			tot2=tot2+1;
		}		
		if (validCapChar.indexOf(sChar) != -1){ 	  	
	    	tot1=tot1+1;
			}			
		if (validSmallChar.indexOf(sChar) != -1){ 	  	
	    	tot3=tot3+1;
			}
		if (validSpecial.indexOf(sChar) != -1){ 	  	
	    	tot4=tot4+1;
			}			
	}	
	
	if (tot1==0 || tot2==0 || tot3==0  || tot4==0){
		isValid = false;
	}
	return isValid;
}


function jsIsFirstChar(field) //only A-Z, a-z 
{
  	var valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  	var isValid = true;

  	var firsrChar = field.substring(0,1);
  	if (valid.indexOf(firsrChar) == "-1"){ 
	  	isValid = false;
  	}
  	return isValid;
}

/*EndMod: pflai 20070622 password complexity checking*/



/*BeginMod: pflai 20070625 Create Generate Alert/Confirmation Pop Up Box*/
   function jsAlert(msg , winSet, title)
   {
        var MyArgs = "";
        var WinSettings = "";
        var url="../Common/Alert.aspx?cat=1";
        
        if (winSet == null) {
            WinSettings = "resizable:no;dialogHeight:220px;dialogWidth:330px;"
        } else {
            WinSettings = winSet
        }
        
        if (msg !=null){
            url = url + "&message="+ msg;
        }
        if (title !=null){
            url = url + "&title=" + title;
        }        
        window.showModalDialog(url, MyArgs, WinSettings);
   }
   
   function jsConfirm(msg , winSet, title)
   {        
        var MyArgs = "";
        var WinSettings = "";
        var url="../Common/Alert.aspx?cat=2";
        //20170121 Leong IE11.0.15 bug return undifided for windows .showmodaldialog
        //if (winSet == null) {
       //     WinSettings = "resizable:no;dialogHeight:220px;dialogWidth:330px;"
       // } else {
//WinSettings = winSet
//}   
        
       // if (msg !=null){
         //   url = url + "&message="+ msg;
       // }
        //if (title !=null){
//url = url + "&title=" + title;
//}        
        
       // var MyArgs = window.showModalDialog(url, MyArgs, WinSettings);
		
		
        if (confirm(msg) == true){
            return true; 
        }else{
            return false; 
        }
   }
   
/*EndMod: pflai 20070625 Create Generate Alert/Confirmation Pop Up Box*/


/* BeginMod:EthanChee@2007-Nov-01:Create Generate Info Pop Up Box*/
   function jsInfo(msg , winSet, title)
   {        
        var MyArgs = "";
        var WinSettings = "";
        var url="../Common/Alert.aspx?cat=3";
        
        if (winSet == null) {
            WinSettings = "resizable:no;dialogHeight:220px;dialogWidth:330px;"
        } else {
            WinSettings = winSet
        }   
        
        if (msg !=null){
            url = url + "&message="+ msg;
        }
        if (title !=null){
            url = url + "&title=" + title;
        }        
        
        var MyArgs = window.showModalDialog(url, MyArgs, WinSettings);
        return MyArgs;   
   }
/* EndMod:EthanChee@2007-Nov-01:Create Generate Info Pop Up Box*/


/* BeginMod:EthanChee@2007-Dec-17:Create Generate Closing Pop Up Box*/
   function jsCloseWin(msg , winSet, title)
   {        
        var MyArgs = "";
        var WinSettings = "";
        
        //if (window.name == "WIN_MAIN") var url="Common/Alert.aspx?cat=4";
        if (g_strEventWin == "MAIN")  
        {
           var url = "Common/Alert.aspx?cat=4";
           MyArgs = g_strEventWin;
        }   
        else 
        {
          var url = "../Common/Alert.aspx?cat=4";
        }  
        
        if (winSet == null) {
            WinSettings = "resizable:no;dialogHeight:220px;dialogWidth:330px;"
        } else {
            WinSettings = winSet
        }   
        
        if (msg !=null){
            url = url + "&message="+ msg;
        }
        if (title !=null){
            url = url + "&title=" + title;
        }        
        
         if (g_strEventWin == "MAIN")
         {
           var MyArgs = window.showModalDialog(url, MyArgs, WinSettings);           
           return null;
         }
         else
         {
           var MyArgs = window.showModalDialog(url, MyArgs, WinSettings);
           return MyArgs; 
         }         
   }
/* EndMod:EthanChee@2007-Dec-17:Create Generate Closing Pop Up Box*/   


/*BeginMod: pflai 20070625 Create Generate Alert/Confirmation Pop Up Box*/
   function jsParentAlert(msg , winSet, title)
   {
        var MyArgs = "";
        var WinSettings = "";
                     
        var url="Common/Alert.aspx?cat=1";
        
        if (winSet == null) {
            WinSettings = "resizable:no;dialogHeight:220px;dialogWidth:330px;"
        } else {
            WinSettings = winSet
        }
        
        if (msg !=null){
            url = url + "&message="+ msg;
        }
        if (title !=null){
            url = url + "&title=" + title;
        }        
        
        window.showModalDialog(url, MyArgs, WinSettings);
   }
   
   function jsParentConfirm(msg , winSet, title)
   {        
        var MyArgs = "";
        var WinSettings = "";
        var url="Common/Alert.aspx?cat=2";
        
        if (winSet == null) {
            WinSettings = "resizable:no;dialogHeight:220px;dialogWidth:330px;"
        } else {
            WinSettings = winSet
        }   
        
        if (msg !=null){
            url = url + "&message="+ msg;
        }
        if (title !=null){
            url = url + "&title=" + title;
        }        
        
        var MyArgs = window.showModalDialog(url, MyArgs, WinSettings);
        return MyArgs;   
   }
   
/*EndMod: pflai 20070625 Create Generate Alert/Confirmation Pop Up Box*/

/*BeginMod: sywong 20070926 check and uncheck all for custom listing page*/
   function ListingcheckAll(listingcontrolid) {     
            checkedIdArr = null;
            checkedIdArr = new Array();
            var arrCount=0;
            var objCheckBox;
              var objCheckBoxAll;
             var listingId = listingcontrolid;
             
            objCheckBoxAll = document.getElementsByName("chkCheckAll");
           objCheckBox = document.getElementsByName(listingId + "_chkBoxList")  ;
          
             var objInitNumberRecordPerPage = document.getElementById(listingId + "_hidInitNumberRecordPerPage").value
             var objInitPageNumber = document.getElementById(listingId + "_selSelectedPage").value
            var objStart = ((objInitPageNumber -1)* objInitNumberRecordPerPage) 
            var objEnd =(objInitPageNumber * objInitNumberRecordPerPage)
          
                           if  (objCheckBoxAll[0].checked ==true)
                           {
                                try{
                                    if(document.getElementsByName(listingId + "_chkBoxList")  != null){
                                     
                                            for(i=objStart; i < objEnd; i++){
                                             if(objCheckBox[i].disabled==false)
                                                objCheckBox[i].checked = true;
                                              }
                                        }
                                    }catch(e){
                                }
                            }
                            
                           if  (objCheckBoxAll[0].checked ==false)
                           {
                                try{
                                    if(document.getElementsByName(listingId + "_chkBoxList")  != null){
                                            for(i=objStart; i < objEnd; i++){
                                             if(objCheckBox[i].disabled==false)                           
                                                objCheckBox[i].checked = false;
                                            }
                                        }
                                    }catch(e){
                                }
                            }
        }

/*EndMod: sywong 20070926 check and uncheck all for custom listing page*/
 
 
/*BeginMod: kelvin Cheah 20071001 use When session expire on pop up screen, will close the window and redirect the parent*/
      
        var secs;
        var timerID = null;
        var timerRunning = false;
        var delay = 1000;

        function InitializeTimer()
        {

            var tout = document.getElementById("hSessionTimeout").value;
            // Set the length of the timer, in seconds
            secs = (tout * 60) - 5;
            StopTheClock();
            StartTheTimer();
        }

        function StopTheClock()
        {
            if(timerRunning)
                clearTimeout(timerID);
            timerRunning = false;
        }

        function StartTheTimer()
        { 
        
            //debugger;
            // IE only - other browsers will be fine
            if (window.dialogArguments) {
                window.opener = window.dialogArguments;
            }
        
            if (secs==0)
            {
                StopTheClock();
                jsAlert("Session is timeout", null, "Session expired");
                try{ 
                    if (window.dialogArguments) {
                        window.opener.closeMain("logout"); //Mod 2008-01-23 WKCHEAH 
                        window.opener.document.location.href = '../SessionExpired.aspx'; 
                        window.close();
                    }
                    else{
                        window.top.closeMain("logout"); //Mod 2008-01-23 WKCHEAH 
                        window.top.location.href = '../SessionExpired.aspx'; 
                    }
                 }
                 catch(e){
                    window.top.location.href = '../SessionExpired.aspx'; 
                 }                      
            }
            else
            {
                self.status = secs
                secs = secs - 1
                timerRunning = true
                timerID = self.setTimeout("StartTheTimer()", delay)
            }
        }
        
/*EndMod: kelvin Cheah 20071001 use When session expire on pop up screen, will close the window and redirect the parent*/

/* BeginMod: bpteoh 20071024 to validate the numeric field with one decimal point */
        function jsIsDecimal(numeric_string)
            {
                return /^[-+]?\d*\.?\d*$/.test(numeric_string);
            
            }
/*EndMod: bpteoh 20071024 */

/*BeginMod: Bpteoh 20071023 user to validate the date using regularexpression*/
        function jsIsValidDateWithRegex(date_string,format)
            {
    
                //NOTE** Please add in when you need another format
                if (format = 'DD MON YYYY')
                    return /^((31(?! (FEB|APR|JUN|SEP|NOV)))|((30|29)(?! FEB))|(29(?= FEB (((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)))))|(0?[1-9])|1\d|2[0-8]) (JAN|FEB|MAR|MAY|APR|JUL|JUN|AUG|OCT|SEP|NOV|DEC) ((1[6-9]|[2-9]\d)\d{2})$/.test(date_string);
            
                return false;
            }
/*EndMod: bpteoh 20071024 */


/*BeginMod: Bpteoh 20071226 user to validate the IP using regularexpression*/
        function jsIsValidIPWithRegex(IP_string)
            {
                        return /^(25[0-5]|2[0-4][0-9]|[1]{1}[0-9]{2}|[0]{2}[1-9]{1}|[0]{1}[1-9]{1}[0-9]{1}|[1-9]{1}[0-9]{1}|[1-9])\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[1-9]|0)\.(25[0-5]|2[0-4][0-9]|[0-1]{1}[0-9]{2}|[1-9]{1}[0-9]{1}|[0-9])$/.test(IP_string);
            }
/*EndMod: bpteoh 20071024 */


/*BeginMod: Bpteoh 20080129 use to validate the Port No address*/
        function jsIsValidPortNoWithRegex(portno_string)
            {   
                return /^(([2-9][0-9]{3})|([1-5][0-9]{4})|([6][0-5][0-5][0-3][0-5])|([6][0-5][0-5][0-2][0-9])|([6][0-5][0-4][0-9][0-9])|([6][0-4][0-9][0-9][0-9]))$/.test(portno_string);
            }
/*EndMod: bpteoh 20080129 */

/*BeginMod: tekhaw check date entry is valid including leap year*/
        function isValidDate(date_string, format) {
            var days = [31,28,31,30,31,30,31,31,30,31,30,31];
            var year;
            var month;
            var day;
            var date_parts = null;
            var rtrn = true;

            if (/^m{1}[./-]d{1}[./-]y{1}$/.test(format)) {
                //US Date (m/d/y) or (m-d-y) or (m.d.y)
                date_parts = date_string.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{2}|\d{4})$/);
                if (date_parts) {
                    month = date_parts[1];
                    day = date_parts[2];
                    year = date_parts[3];
                }
            } else if (/^m{2}[./-]d{2}[./-]y{2}$/.test(format)) {
                //US Short Date  (mm/dd/yy) or (mm-dd-yy) or (mm.dd.yy)
                date_parts = date_string.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{2})$/);
                if (date_parts) {
                    month = date_parts[1];
                    day = date_parts[2];
                    year = date_parts[3];
                }
            } else if (/^m{2}[./-]d{2}[./-]y{4}$/.test(format)) {
                //US Long Date (mm/dd/yyyy) or (mm-dd-yyyy) or (mm.dd.yyyy)
                date_parts = date_string.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);
                if (date_parts) {
                    month = date_parts[1];
                    day = date_parts[2];
                    year = date_parts[3];
                }
            } else if (/^y{1}[./-]m{1}[./-]d{1}$/.test(format)) {
                //EU Date (y/m/d) or (y-m-d) or (y.m.d)
                date_parts = date_string.match(/^(\d{2}|\d{4})[./-](\d{1,2})[./-](\d{1,2})$/);
                if (date_parts) {
                    year = date_parts[1];
                    month = date_parts[2];
                    day = date_parts[3];
                }
            } else if (/^y{2}[./-]m{2}[./-]d{2}/.test(format)) {
                //EU Short Date (yy/mm/dd) or (yy-mm-dd) or (yy.mm.dd)
                date_parts = date_string.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{1,2})$/);
                if (date_parts) {
                    year = date_parts[1];
                    month = date_parts[2];
                    day = date_parts[3];
                }
            } else if (/^y{4}[./-]m{2}[./-]d{2}/.test(format)) {
                //EU Long Date (yyyy/mm/dd) or (yyyy-mm-dd) or (yyyy.mm.dd)
                date_parts = date_string.match(/^(\d{4})[./-](\d{1,2})[./-](\d{1,2})$/);
                if (date_parts) {
                    year = date_parts[1];
                    month = date_parts[2];
                    day = date_parts[3];
                }
            } else if (/^d{2}[./-]m{2}[./-]y{2}$/.test(format)) {
                //Date entry date format (dd/mm/yy) or (dd-mm-yy) or (dd.mm.yy)
                date_parts = date_string.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{1,2})$/);
                if (date_parts) {
                    day = date_parts[1];
                    month = date_parts[2];
                    year = date_parts[3];
                }
            } else if (/^d{2}[./-]m{2}[./-]y{4}/.test(format)) {
                //Date entry date format (dd/mm/yyyy) or (dd-mm-yyyy) or (dd.mm.yyyy)
                date_parts = date_string.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);
                if (date_parts) {
                    day = date_parts[1];
                    month = date_parts[2];
                    year = date_parts[3];
                }
            } else {
                rtrn = false;
            }
            if (date_parts) {
                if (1 <= month && month <= 12) {
                    if (month == 2) {
                        if (year % 4 != 0 ? false : ( year % 100 != 0? true: (year % 1000 != 0? false : true))) {
                            rtrn = (1 <= day && day <= 29);
                        } else {
                            rtrn = (1 <= day && day <= 28);
                        }
                    } else {
                        rtrn = (1 <= day && day <= days[month -1]);
                    }
                }else {
                    rtrn = false;
                }
            } else {
                rtrn = false;
            }
            return rtrn;
        }
/*EndMod: tekhaw check date entry is valid*/


/*          Add new function on closing for ShowModelessDialog          */
// -- Handle Window OnUnload Event
/*  Begin Mod: Liew Yu Joe 2007/10/06    */
function jsDialogClosing()
{
//EndMod:EthanChee@2007-Dec-17
    // BeginMod:EthanChee@2007-Nov-02  
//    jsInfo('Please click ok to close', null, 'Information');
      //BeginMod:EthanChee@2007-Dec-17
      jsCloseWin('Close Window', null, 'Close Window');
      // EndMod:EthanChee@2007-Nov-02

    /* Begin Mod: Liew Yu Joe 2007/10/06 */
    try{
        dialogArguments.hPageId.innerHTML='';
    }
    catch(e){
    }
    finally
    {
      if (window) window.close();
    }
    /* End Mod: Liew Yu Joe 2007/10/06  */
}
/* End Mod: Liew Yu Joe 2007/10/03 */
/*  End Mod: Liew Yu Joe 2007/10/06    */



/* Begin Mod: Liew Yu Joe 2007/10/17 - Add function use xmlHttp method to update session */
function jsUpdateSession(url){
    var strResponse;
    var ohttp;
    var xmlSend;

    xmlSend = "<checkSession><Check>1</Check></checkSession>"

    try{
        ohttp = new ActiveXObject("Microsoft.XmlHttp")
    }
    catch(e){    
        jsAlert('Page does not exist', null, 'Error');
    }
    ohttp.open("POST",url,false)
    ohttp.send(xmlSend)

    strResponse = ohttp.responseText

    return strResponse;
}
/* End Mod: Liew Yu Joe 2007/10/17 */


function jsEmptyStringReplace(strValue, strReplace)
{
  try
  {
    if (strValue == "") 
    {
      return strReplace; 
    }
    else
    {
      return strValue;
    }  
  }
  catch(e)
  {
  } 
}

    //BeginMod:cheubc 29-October-2007 [Branch]
    function jsClearBranchInfo() {
        document.getElementById ("txtBank").value = ""
        document.getElementById ("txtBranchId").value = ""    
    }
    
    function jsClearDropDownListItem(objName) {
        var felm = document.forms[0].elements(objName) 
        for (var iter = felm.options.length -1; iter >= 1; --iter)
        {
            felm.options[iter] = null;
        } 
    } 
    
    //Get Branch Information
    function jsGetBranchInfo(strBranchId, intUserId, intTaskId){
        
        var url
        var strResponse
        var xmlSend
        
        xmlSend = '<record>'
        xmlSend = xmlSend + '<branchCode>' + strBranchId +  '</branchCode>'
        xmlSend = xmlSend + '<userId>' + intUserId + '</userId>'
        xmlSend = xmlSend + '<taskId>' + intTaskId + '</taskId>'
        xmlSend = xmlSend + '</record>'    
        
        url = "xmlhttpGetBranchInfo.aspx"
        try{
            var ohttp = new ActiveXObject("Microsoft.XmlHttp")
	    }
	    catch(e){    
	        //jsAlert("Fail to load xml file");
        }

        ohttp.open("POST",url,false)
        ohttp.send(xmlSend)
        strResponse = ohttp.responseText

        if (strResponse.indexOf('<data>') != -1){
            var bolSameState = "";
            var objXML= new ActiveXObject("Microsoft.XMLDOM")
            
            objXML.async="false"
            objXML.loadXML(strResponse)                    
            
            if(objXML.selectSingleNode("//data/bankOrTownExist") != null) {
                if(objXML.selectSingleNode("//data/bankOrTownExist").text == '0') {                
                    jsClearBranchInfo()         
                    jsAlert("Invalid Bank Branch Code")
                    document.forms[0].elements("txtBankBranchCode").focus();
                    document.forms[0].elements("txtBankBranchCode").select();
                    return false;    
                } 
                else {
                    if(objXML.selectSingleNode("//data/bank") != null) {
                        document.getElementById ("txtBank").value = objXML.selectSingleNode("//data/bank").text;
                    }
                    if(objXML.selectSingleNode("//data/branchId") != null) {
                        document.getElementById ("txtBranchId").value = objXML.selectSingleNode("//data/branchId").text;
                    }         
                }
            }// end if(objXML.selectSingleNode("//data/bankOrTownExist")!= null) {            
            return true;
        }
        else {
            jsClearBranchInfo()          
            jsAlert("Invalid BRSTN!")
            document.forms[0].elements("txtBankBranchCode").select();    
            return false
        }            
    }
    //EndMod:cheubc 29-October-2007 [Branch]
    
    //BeginMod:cheubc 2-November-2007 [Internal Branch]
    //Get Internal Branch Information
    function jsGetInternalBranchInfo(strBranchId, intUserId, intTaskId , strObjName, strPreviousBranchCode){
        
        var url
        var strResponse
        var xmlSend
        
        xmlSend = '<record>'
        xmlSend = xmlSend + '<branchCode>' + strBranchId +  '</branchCode>'
        //xmlSend = xmlSend + '<previousBankCode>' + strPreviousBranchCode +  '</previousBankCode>'
        xmlSend = xmlSend + '<userId>' + intUserId + '</userId>'
        xmlSend = xmlSend + '<taskId>' + intTaskId + '</taskId>'
        xmlSend = xmlSend + '</record>'    
        
        url = "xmlhttpGetInternalBranchInfo.aspx"
        //alert(url);
        try{
            var ohttp = new ActiveXObject("Microsoft.XmlHttp")
	    }
	    catch(e){    
	        //jsAlert("Fail to load xml file");
        }

        ohttp.open("POST",url,false)
        ohttp.send(xmlSend)
        strResponse = ohttp.responseText

        if (strResponse.indexOf('<data>') != -1){
            var bolSameState = "";
            var objXML= new ActiveXObject("Microsoft.XMLDOM")
            
            objXML.async="false"
            objXML.loadXML(strResponse)                    
            
            if(objXML.selectSingleNode("//data/branchExist") != null) {
                if(objXML.selectSingleNode("//data/branchExist").text == '0') {                
                    jsClearBranchInfo()
                    jsClearDropDownListItem(strObjName)            
                    jsAlert("Invalid BRSTN! !")
                    document.forms[0].elements("txtBankBranchId").focus();
                    document.forms[0].elements("txtBankBranchId").select();
                    return false;
                    
                } else {
                    if(objXML.selectSingleNode("//data/bank") != null) {
                        document.getElementById ("txtBank").value = objXML.selectSingleNode("//data/bank").text;
                    }

                    if(objXML.selectSingleNode("//data/state") != null) {
                        document.getElementById ("txtState").value = objXML.selectSingleNode("//data/state").text;
                    }
                    
                    if(objXML.selectSingleNode("//data/branchId") != null) {
                        document.getElementById ("txtBranchId").value = objXML.selectSingleNode("//data/branchId").text;
                    }
                    

                   //**********************************
                   // Populate Clearing Area
                   //**********************************                    
                    jsClearDropDownListItem(strObjName)
                    if(objXML.selectSingleNode("//data/clearingBranch") != null) {
                        var NodeList = objXML.selectNodes("//data/clearingBranch/branch")
                        
                        for (var n=0; n <NodeList.length; n++){
                            // Create an Option object                                
                            var opt = document.createElement("option");
                            var obj = document.getElementById(strObjName);
                            
                            opt.text = NodeList[n].selectSingleNode('branchDesc').text;
                            opt.value = NodeList[n].selectSingleNode('branchId').text;                              
                            if(NodeList[n].selectSingleNode('branchId').text == strPreviousBranchCode){
                                opt.selected = true;
                            }
                            obj.add(opt);
                        } //end for
                    }//end if             
                }
            
            }// end if(objXML.selectSingleNode("//data/branchExist") != null) {            
            return true;
            
        }else {
            jsClearBranchInfo()    
            jsClearDropDownListItem(strObjName)        
            jsAlert("Invalid BRSTN!")
            document.forms[0].elements("txtBankBranchId").select();    
            return false
        }            

    }
    
    //EndMod:cheubc 2-November-2007 [Internal Branch]   

    function jsValidateMacAddress(macaddr) {
        var reg1 = /^[A-Fa-f0-9]{2}\:[A-Fa-f0-9]{2}\:[A-Fa-f0-9]{2}\:[A-Fa-f0-9]{2}\:[A-Fa-f0-9]{2}\:[A-Fa-f0-9]{2}$/;
       //var reg1 = /^[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}\-[A-Fa-f0-9]{1,2}$/;
       //var reg2 = /^[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}\:[A-Fa-f0-9]{1,2}$/;
       if (reg1.test(macaddr)) {
           return true;
       //}else if (reg2.test(macaddr)) {
       //    return true;
       } else {
           return false;
       }
    }
    
    //BeginMod:cheubc 31-10-2007
    // This function checks the mouse event
    function jsCheckEvent(e) {
        if (!e) var e = window.event;
        if (e.target) targ = e.target;
        else if (e.srcElement) targ = e.srcElement;
        jsShowHideToolTip(targ, e, e.type)        
    }

    // This function shows/hides the tooltip
    function jsShowHideToolTip (theDropDown, e, eType){
        //prevention on drag action where selectedIndex become undefined
        if(theDropDown.selectedIndex > 0) {
            var toolTipObj = new Object();
            toolTipObj = document.getElementById("tooltip"); 
            toolTipObj.innerHTML = theDropDown.options[theDropDown.selectedIndex].text;
                    
            if(eType == "mouseout"){
                toolTipObj.style.display = "none";
            } else {
                toolTipObj.style.display = "inline";
                toolTipObj.style.top = e.y + 10;
                toolTipObj.style.left = e.x + 20;
            }
        }
    }
    //EndMod:cheubc 31-10-2007 
      
     function jsUpdateProcessDate(intDay, intMonth, intYear) {
        window.parent.document.getElementById('Topbar1_lblProcessDate').innerHTML = jsFormatProcessDate(intDay,intMonth,intYear,false);
     }
     
     function jsFormatProcessDate(intDay, intMonth, intYear, blnWriteHtml) {
        //debugger;
        var month=new Array(12)
        month[0]="Jan"
        month[1]="Feb"
        month[2]="Mar"
        month[3]="Apr"
        month[4]="May"
        month[5]="Jun"
        month[6]="Jul"
        month[7]="Aug"
        month[8]="Sep"
        month[9]="Oct"
        month[10]="Nov"
        month[11]="Dec"
 
        if (!blnWriteHtml) {
            //return processDate.toString();
            return intDay + ' ' + month[intMonth-1] + ' ' + intYear;
        } else {
            document.write(intDay + ' ' + month[intMonth-1] + ' ' + intYear);
        }
     }
     
     
     function jsGetFormatDate(intDay, intMonth, intYear) {
        //debugger;
        var month=new Array(12);
        month[0]="JAN";
        month[1]="FEB";
        month[2]="MAR";
        month[3]="APR";
        month[4]="MAY";
        month[5]="JUN";
        month[6]="JUL";
        month[7]="AUG";
        month[8]="SEP";
        month[9]="OCT";
        month[10]="NOV";
        month[11]="DEC";

        var strDay = intDay.toString();
        if (strDay.length < 2) { strDay = "0" + intDay ;}
        return strDay + ' ' + month[intMonth-1] + ' ' + intYear;

     }
     

     
     
     function jsFormatProcessDateToDigit(strDate){
        var d = new Date(strDate);
        var mValue = d.getMonth() + 1;
        var dValue = d.getDate();
        
        var strMonth;
        var strDay;
        
        strMonth = mValue.toString();
        strDay = dValue.toString();
        
        if(strMonth.length < 2){
            strMonth = "0" + strMonth;
        }
        
        if(strDay.length < 2){
            strDay = "0" + strDay;
        }
        
        return d.getYear() + strMonth + strDay;
     }
     
    //BeginMod:cheubc 10-Nov-2007 
    function jsValidateInput(string) {
        //***************************************
        // Disallowed Special character list
        //***************************************
        //  " = 34
        //  : = 58 
        //  < = 60
        //  > = 62
        //  @ = 64
        //  \ = 92
        //  {= 123
        //  |= 124
        //  } = 125
        //***************************************
        var strChar = ""
        var bolAllow = false
        var arrInput = new Array()
        var key_code = window.event.keyCode;
        var list = new Array()
        list[0] = 34
        list[1] = 58
        list[2] = 60    
        list[3] = 62 
        list[4] = 64 
        list[5] = 92 
        list[6] = 123 
        list[7] = 124    
        list[8] = 125
        
        string = string + ''
        arrInput = string.split(",")
         
        //get list of special char key value
        for (var x=0; x<=list.length-1; x++){                    
            bolAllow = false                    
            for (var y=0; y<=arrInput.length-1; y++){                        
                if(arrInput[y] == list[x]) {
                    bolAllow = true
                    break;
                }                                                  
            }
            if(!bolAllow) {
                strChar+= String.fromCharCode(list[x]); 
            }
        }
        
        //validate for special character existance
        for (var x=0; x<=list.length-1; x++){
            if(key_code == list[x]) {
                bolExceptionFound = false                        
                
                //check exception
                for (var y=0; y<=arrInput.length-1; y++){
                    if(arrInput[y] == list[x]) { 
                        bolExceptionFound = true
                    }                             
                }
                if(!bolExceptionFound) {
                    event.cancelBubble = true;
                    event.returnValue = false;
                    event.keyCode = false;   
                    jsAlert("Input cannot contain any of the following special characters : \n" + strChar);
                    jsSelectWord();
                    return false;                             
                }                        
            }
        }
        return false         
   }

   function jsSelectWord() {
   try{
        var oSource = window.event.srcElement ;
        if (!oSource.isTextEdit) 
            oSource = window.event.srcElement.parentTextEdit;
        if (oSource != null) {
            var oText = window.event.srcElement;
            oText.select(); 
            var oTextRange = oSource.createTextRange();
            //oTextRange.moveToElementText(window.event.srcElement);
            //oTextRange.collapse();
            //oTextRange.expand("word");
            //oTextRange.select();
        }
   }
   catch(e) {
   }
   }

   function jsNoCopyPaste(e) {
        //BeginMod: 2008-01-22 - wkCheah - To detect windows closing
        jsCloseWindowByAltF4(e);
        jsCloseWindowByCtrlW(e);
        //EndMod: 2008-01-22 - wkCheah
        
        if (jsNoCtrlV(e)) {
            if (jsNoShiftInsert(e)) {
                return true;
            }
        }
        return false;
    }  

    function jsNoCtrlV(e)
    {
   //debugger; 
    var code = (document.all) ? event.keyCode:e.which;
    var ctrl = (document.all) ? event.ctrlKey:e.modifiers & Event.CONTROL_MASK; 
    var msg = "Paste function not allowed";
    if (document.all)
    {
    if (ctrl && code==86) //CTRL+V
    {
        if (!MyUrl) {
            jsAlert(msg);
        } else {
            jsParentAlert(msg);   
        } 
        window.event.returnValue = false;
        return false; 
    }
//    else if (ctrl && code==67) //CTRL+C (Copy)
//    {
//    jsAlert(msg);
//    window.event.returnValue = false;
//    return false; 
//    }
    }
    else {
    if (ctrl==2) //CTRL key
    {
        if (!MyUrl) {
            jsAlert(msg);
        } else {
            jsParentAlert(msg);   
        } 
        return false;
    }
    }    
    return true;  
    }    
    
    function jsNoShiftInsert(e)
    {
   //debugger; 
    var code = (document.all) ? event.keyCode:e.which;
    var shift = (document.all) ? event.shiftKey:e.modifiers & Event.SHIFT_MASK; 
    var msg = "Paste function not allowed";
    if (document.all)
    {
    if (shift && code==45) //SHIFT+Insert
    {
        if (!MyUrl) {
            jsAlert(msg);
        } else {
            jsParentAlert(msg);   
        } 
        window.event.returnValue = false;
        return false; 
    }
    }
    else {
    if (shift==2) //SHIFT key
    {
        if (!MyUrl) {
            jsAlert(msg);
        } else {
            jsParentAlert(msg);   
        } 
        return false;
    }
    }    
    return true;  
    }     
   //EndMod:cheubc 10-Nov-2007
      
   function getFuncKeyForDateCalendar(ev, elementName)
   {
        if(document.getElementById(elementName)) {
            //keycode [backspace] || [delete]
            if (ev.keyCode == 46 || ev.keyCode == 8)
            {       
                document.getElementById(elementName).value = "";
                event.cancelBubble = true;
                event.returnValue = false;
                return false;     
            }
            else if (ev.keyCode != 9)
            {
                event.cancelBubble = true;
                event.returnValue = false;
                return false;            
            }
        }
    }
    

// BeginMod : EthanChee@2007-Nov-14   
// Purpose  : To Return Boolean Wheather Any Not Accept Special Character Eixst In The String 
function jsIsAcceptedSpecialCharExistInString(strChecked, strExceptionList)
{
   var strCode = "[]\\\"{}|';:?></.,`~!@#$%^&*()_+-=";			 
   var sChar;
   var intCount;
	
	for(var i=0; i<strChecked.length; i++)
	{
	
	  sChar = strChecked.charAt(i);
	
	  // Special Character Found	
	  if (strCode.indexOf(sChar) != -1) 
	  { 
	  
	    strExceptionList += "";
	    
	    // Exception List Not Empty
	    if (strExceptionList != "")
	    {
	    /*
	       intCount = 0;
	       for (var i=0; i<strExceptionList.length; i++)
	       {
	         /*
	          if (strCode.indexOf(strExceptionList.charAt(i)) != -1) break;
	          else intCount += 1;
	         */
	         if (strExceptionList.indexOf(sChar) == -1) return false; 
	      // }
	     //  if (intCount = strExceptionList.length) return false;
	    }
	    // Exception Empty And Any Special Character also Not Valid
	    else return false; 	    
	  }	
	  
	}
		
	return true;
}  
// EndMod : EthanChee@2007-Nov-14


   // ===================================================================
   // START - String Validation
   // -- Created By   : EthanChee
   // -- Created Date : 2008-Jan-11
   // -- Desc         : Validate A String Value Compare to a list of characters, if not found match will return false.
   // -- Remarks      : Return True if all characters in string found in valid string list
   // -- Examples     : 
   /*      
         Execute : jsIsAllCharsValid("168%", "1234567890*");
         Result  : will return false where [%] not exist in [strValidCharacterList]
   */   
   // ===================================================================    
   function jsIsAllCharsValid(strValue, strValidCharacterList)
    {
       var sChar;
       var intCount;

	    for(var i=0; i<strValue.length; i++)
	    {
    	
	      sChar = strValue.charAt(i);
    	
	      // Value Not Exist In Accepted Value List	
	      if (strValidCharacterList.indexOf(sChar) == -1) return false; 	  
	    }

	    return true;               
    }  
   // ===================================================================
   // END - String Validation      
   // ===================================================================    


//BeginMod wkCheah 2007-11-21
	function jsScaleToDocument(obj) {
        //debugger;
        obj.style.width=document.documentElement.offsetWidth + "px";
        obj.style.height=document.documentElement.offsetHeight + "px";		
	}
//EndMod wkCheah


// BeginMod tekhaw 2007-11-28
    function jsMobilePhoneNo(value){
        var regExp = /^(\d{4})-(\d{7})$/;
        
        if (regExp.test(value)) {
            return true;
        }else{
            return false;
        }
    }
  
    function jsHomePhoneNo(value){
        var regExp = /^(\d{3})-(\d{7}|\d{8})$/
        
        if (regExp.test(value)) {
            return true;
        }else{
            return false;
        }
    }
    
    function jsNewICNo(value){
        var regExp = /^(\d{6})-(\d{2})-(\d{4})$/
        
        if (regExp.test(value)) {
            return true;
        }else{
            return false;
        }
    }
    
    
    function jsOldICNo(value){
        var regExp;
        
        if (value.length == 7){
            regExp = /^(\d{7})$/
        }else if (value.length == 8){
            regExp = /^(\D{1})(\d{7})$/
        }else{
            return false;
        }
        
        if (regExp.test(value)) {
            return true;
        }else{
            return false;
        }
    }
    
//EndMod tekhaw 2007-11-28

    //BeginMod: 2008-01-22 - wkCheah - To detect windows closing
    function jsCloseWindowByAltF4(e){
        var code = (document.all) ? event.keyCode:e.which;
        var alt = (document.all) ? event.altKey:e.modifiers & Event.ALT_MASK; 
        if (document.all)
        {
        if (alt && code==115) //ALT+F4
        {
          try{
            window.parent.closeMain("altf4"); 
            }catch(e){
          } 
        }
        }          
    }

    function jsCloseWindowByCtrlW(e){
        var code = (document.all) ? event.keyCode:e.which;
        var ctrl = (document.all) ? event.ctrlKey:e.modifiers & Event.CONTROL_MASK; 
        if (document.all)
        {
        if (ctrl && code==87) //CTRL+W
        {
          try{
            window.parent.closeMain("ctrlw"); 
            }catch(e){
          }             
        }
        }        
    }    
    //EndMod: 2008-01-22 - wkCheah

  
// -------------------------------------------------------------------------------------------------------------------
//  END                                         Custom Functions
// -------------------------------------------------------------------------------------------------------------------
