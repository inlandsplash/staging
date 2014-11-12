var nav_Navigation002 = new Object();

nav_Navigation002.mouseoverBold="false";
nav_Navigation002.selectedBgcolor="";
nav_Navigation002.importedImageMouseOver="";
nav_Navigation002.numLinks="4";
nav_Navigation002.textColor="#FFFFFF";
nav_Navigation002.mouseoverBgcolor="";
nav_Navigation002.tabCategory="basic";
nav_Navigation002.border="";
nav_Navigation002.selectedItalic="false";
nav_Navigation002.graphicMouseover="false";
nav_Navigation002.type="Navigation";
nav_Navigation002.basicTab="White";
nav_Navigation002.horizontalSpacing="40";
nav_Navigation002.horizontalWrap="8";
nav_Navigation002.shinyButton="Shiny_Aqua";
nav_Navigation002.mouseoverEffect="true";
nav_Navigation002.modernButton="Basic_Black";
nav_Navigation002.orientation="horizontal";
nav_Navigation002.funButton="Arts_and_Crafts";
nav_Navigation002.darkButton="Basic_Black";
nav_Navigation002.selectedTextcolor="#48C0DB";
nav_Navigation002.lineWidth="2";
nav_Navigation002.mouseoverTextcolor="#48C0DB";
nav_Navigation002.bold="false";
nav_Navigation002.texturedButton="Brick";
nav_Navigation002.accentStyle="Square";
nav_Navigation002.style="text";
nav_Navigation002.holidayButton="Christmas_Ornaments";
nav_Navigation002.textSize="10";
nav_Navigation002.lineColor="#000000";
nav_Navigation002.brightButton="Chicky";
nav_Navigation002.mouseoverUnderline="false";
nav_Navigation002.accentColor="Black";
nav_Navigation002.imageHeight="";
nav_Navigation002.background="";
nav_Navigation002.textFont="Arial";
nav_Navigation002.hasLinks="true";
nav_Navigation002.sophisticatedButton="Antique";
nav_Navigation002.underline="false";
nav_Navigation002.simpleButton="Autumn_Leaves";
nav_Navigation002.italic="false";
nav_Navigation002.importedImageSelected="";
nav_Navigation002.basicButton="Gray";
nav_Navigation002.navID="nav_Navigation002";
nav_Navigation002.buttonCategory="basic";
nav_Navigation002.dirty="false";
nav_Navigation002.selectedBold="false";
nav_Navigation002.selectedEffect="true";
nav_Navigation002.graphicSelected="false";
nav_Navigation002.version="5";
nav_Navigation002.verticalSpacing="5";
nav_Navigation002.squareTab="Camel";
nav_Navigation002.mouseoverItalic="false";
nav_Navigation002.justification="left";
nav_Navigation002.imageWidth="";
nav_Navigation002.selectedUnderline="false";
nav_Navigation002.accentType="none";
nav_Navigation002.importedImage="";
nav_Navigation002.width="343";
nav_Navigation002.height="16";

nav_Navigation002.navName = "Navigation002";
nav_Navigation002.imagePath = "null";
nav_Navigation002.selectedImagePath = "/~media/elements/LayoutClipart/";
nav_Navigation002.mouseOverImagePath = "/~media/elements/LayoutClipart/";
nav_Navigation002.imageWidth = "16";
nav_Navigation002.imageHeight = "16";
nav_Navigation002.fontClass = "size10 Arial10";
nav_Navigation002.fontFace = "Arial, Helvetica, sans-serif";


var baseHref = '';
// this will only work if getElementsByTagName works
if (document.getElementsByTagName)
{
    // this will only work if we can find a base tag
    var base = document.getElementsByTagName('base');
    // Verify that the base object exists
    if (base && base.length > 0)
    {
        // if you don't specify a base href, href comes back as undefined
        if (base[0].href != undefined)
        {
            // get the base href
            baseHref = base[0].href;
            // add a trailing slash if base href doesn't already have one
            if (baseHref != '' && baseHref.charAt(baseHref.length - 1) != '/')
            {
                baseHref += '/';
            }
        }
    }
}


nav_Navigation002.links=new Array(4);
var nav_Navigation002_Link1 = new Object();
nav_Navigation002_Link1.type = "existing";
nav_Navigation002_Link1.displayName = "Photo Gallery";
nav_Navigation002_Link1.linkWindow = "_self";
nav_Navigation002_Link1.linkValue = "Photo-Gallery.html";
nav_Navigation002_Link1.linkIndex = "1";
nav_Navigation002.links[0] = nav_Navigation002_Link1;
var nav_Navigation002_Link2 = new Object();
nav_Navigation002_Link2.type = "existing";
nav_Navigation002_Link2.displayName = "Our Pools";
nav_Navigation002_Link2.linkWindow = "_self";
nav_Navigation002_Link2.linkValue = "Our-Pools.html";
nav_Navigation002_Link2.linkIndex = "2";
nav_Navigation002.links[1] = nav_Navigation002_Link2;
var nav_Navigation002_Link3 = new Object();
nav_Navigation002_Link3.type = "existing";
nav_Navigation002_Link3.displayName = "Partners";
nav_Navigation002_Link3.linkWindow = "_self";
nav_Navigation002_Link3.linkValue = "Partners.html";
nav_Navigation002_Link3.linkIndex = "3";
nav_Navigation002.links[2] = nav_Navigation002_Link3;
var nav_Navigation002_Link4 = new Object();
nav_Navigation002_Link4.type = "existing";
nav_Navigation002_Link4.displayName = "Forms";
nav_Navigation002_Link4.linkWindow = "_self";
nav_Navigation002_Link4.linkValue = "Forms.html";
nav_Navigation002_Link4.linkIndex = "4";
nav_Navigation002.links[3] = nav_Navigation002_Link4;
function backgroundMouseOn(tdElement, newColor)
{
	if(tdElement != null) {
		tdElement.oldBGColor = tdElement.style.backgroundColor;
		tdElement.style.backgroundColor = newColor;
	}
}
function backgroundMouseOff(tdElement)
{
	if(tdElement != null) {
		tdElement.style.backgroundColor = tdElement.oldBGColor;
	}
} 

function doMouseChange(Navigation,tdElement,linkIndex,bisMouseOver) {
	if (Navigation.mouseoverEffect != 'true') {
		return;
	}	
	var link = Navigation.links[linkIndex-1];
	var bIsCurrentPage = isCurrentPage(link);
	var bShowMouseoverBg = !(bIsCurrentPage
			&& 'true' == Navigation.selectedEffect && Navigation.selectedBgcolor);
	var fontElement = getLinkFontElement(tdElement);
	if(fontElement != null) {
		doFontChange(Navigation,fontElement,bIsCurrentPage,bisMouseOver);
	}
	
	if (Navigation.mouseoverBgcolor && bShowMouseoverBg) {
		if(bisMouseOver) {
			backgroundMouseOn(tdElement,Navigation.mouseoverBgcolor);
		} else {
			backgroundMouseOff(tdElement);
		}
	}
}
function addStyle(Navigation, Link, tdElement,vNavTrElement) {
	if (tdElement == null) {
		return;
	}
	var strFontColor = Navigation.textColor;
	if ('true' == Navigation.selectedEffect) {
		if (Navigation.selectedTextcolor) {
			strFontColor = Navigation.selectedTextcolor;
		}
		if (Navigation.selectedBgcolor) {
			if (Navigation.orientation == 'horizontal') {
				tdElement.style.backgroundColor = Navigation.selectedBgcolor;
			} else {
				if (vNavTrElement != null) {
					vNavTrElement.style.backgroundColor = Navigation.selectedBgcolor;
				}
			}
		}
	}
	var fontElement = getLinkFontElement(tdElement);
	if (fontElement != null) {
		fontElement.style.color = strFontColor;
	}
	tdElement.style.color = strFontColor;
	if ('true' == Navigation.selectedEffect) {
		if ('true' == Navigation.selectedBold) {
			tdElement.style.fontWeight = "bold";
		}
		if ('true' == Navigation.selectedItalic) {
			tdElement.style.fontStyle = "italic";
		}
		if ('true' == Navigation.selectedUnderline) {
			tdElement.style.textDecoration = "underline";
		}
	}
}

// Combined escape html and javascript
function escapeHtmlInlineScript(s, escapeSingleQuotes, escapeDoubleQuotes){
	return htmlEncode(escapeScript(s, escapeSingleQuotes, escapeDoubleQuotes));
}

function htmlEncode(s){
	if (typeof(s) != "string") return "";
	
	var result = "";
	for (var i = 0; i < s.length; i++) {
		var ch = s.charAt(i);
		switch (ch) {
		case '<':
			result += "&lt;";
			break;
		case '>':
			result += "&gt;";
			break;
		case '&':
			result += "&amp;";
			break;
		case '"':
			result += "&quot;";
			break;
		case "'":
			result += "&#39;";
			break;
		default:
			result += ch;
		}
	}
	return result;
}

/* escapes slashes and quotes. the default is to escape quotes,
 * but this can be turned off.
 * this function is used for javascript and also for escaping urls
 * within background-image css.	 
 */
function escapeScript(s, escapeSingleQuotes, escapeDoubleQuotes){
	if (typeof(s) != "string") return "";
	
	var result = "";
	for (var i = 0; i < s.length; i++) {
		var ch = s.charAt(i);
		switch (ch) {
		case '\'':
			if (escapeSingleQuotes == null || escapeSingleQuotes)
				result += "\\\'";
			break;
		case '\"':
			if (escapeDoubleQuotes == null || escapeDoubleQuotes)
				result += "\\\"";
			break;
		case '\\':
			result += "\\\\";
			break;
		default:
			result += ch;
		}
	}
	return result;
}

//
// This .js file includes utility functions used by both graphical and text navs
// in their rendering.  User pages including a nav element will import this file, along
// with TextNavigation.js and GraphicNavigation.js.  The functions within will
// be called by the [navname].js file generated at publish time.

function fixLinkValue(Link)
{
	if(Link.type!='existing')
	{
		return Link.linkValue;
	}
	else
	{
		return baseHref + strRelativePathToRoot + Link.linkValue;
	}
}

function isCurrentPage(Link)
{
	if(Link.type!='existing')
	{
		return false;
	}
	var strLinkValue = Link.linkValue.toLowerCase();
	return (strRelativePagePath == strLinkValue);
}

function toggleOnMouseChange(fontElement,newColor, bold, underline, italic)
{
	if(fontElement == null) {
		return;
	}
	if(newColor)
	{
		fontElement.style.color=newColor;
	}
	fontElement.style.fontWeight = (bold=='true' ? 'bold' : 'normal');
	fontElement.style.textDecoration = (underline=='true' ? 'underline' : 'none');
	fontElement.style.fontStyle = (italic=='true' ? 'italic' : 'normal');

}

function doFontChange(Navigation,fontElement,bIsCurrentPage,bisMouseOver) {
	if(fontElement == null) {
		return;
	}
	var textColor;
	var baseTextColor = Navigation.textColor;
	var bold;
	var baseBold = Navigation.bold;
	var underline;
	var baseUnderline = Navigation.underline;
	var italic;
	var baseItalic = Navigation.italic;
	if (bIsCurrentPage && 'true' == Navigation.selectedEffect) {
		textColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor
				: (Navigation.mouseoverTextColor ? Navigation.mouseoverTextcolor
						: Navigation.textColor);
		baseTextColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor
				: Navigation.textColor;
		baseBold = bold = Navigation.selectedBold;
		baseUnderline = underline = Navigation.selectedUnderline;
		baseItalic = italic = Navigation.selectedItalic;
	} else {
		textColor = Navigation.mouseoverTextcolor ? Navigation.mouseoverTextcolor
				: Navigation.textColor;
		bold = Navigation.mouseoverBold;
		underline = Navigation.mouseoverUnderline;
		italic = Navigation.mouseoverItalic;
	}
	
	if(bisMouseOver) {
		toggleOnMouseChange(fontElement,textColor,bold,underline,italic);
	} else {
		toggleOnMouseChange(fontElement,baseTextColor,baseBold,baseUnderline,baseItalic);
	}
	

}

function addMouseAndStyleSupportNavigation002(Navigation,navTbId) {
	var startNode;

	if(typeof(nav_element_id) != 'undefined' && document.getElementById(nav_element_id) != null) {
		startNode = document.getElementById(nav_element_id);
			
	} else if(navTbId != null) {
		startNode = document.getElementById(navTbId);
			
	}
	
	if(startNode != null) {
	  searchForCurrentPageTd(Navigation,startNode);
	}
	

}

function searchForCurrentPageTd(Navigation,startNode) {
	
	if(startNode.childNodes != null) {
		for(var i=0;i<startNode.childNodes.length;i++){
			if(addStyleForCurrentPageTd(Navigation,startNode.childNodes[i])){
			   return;	
			} else {
			   searchForCurrentPageTd(Navigation,startNode.childNodes[i]);
			}
		}
	}

}

function addStyleForCurrentPageTd(Navigation,currentNode) {
	if(Navigation.orientation == 'horizontal') {
		if(currentNode.tagName == 'TD' && currentNode.id != '' && currentNode.id.indexOf(Navigation.navName+navTDLinkPart) != -1){
			var currentTDIdPrefix = Navigation.navName+navTDLinkPart;
			var linkId = currentNode.id.substring(currentTDIdPrefix.length,currentNode.id.length);
			if(isCurrentPage(Navigation.links[linkId-1]) == true) {
				addStyle(Navigation, Navigation.links[linkId-1],currentNode);
				return true;
			}
		}
	} else {
		if(currentNode.tagName == 'TR' && currentNode.id != '' && currentNode.id.indexOf(navTRLinkPrefix) != -1){	
			var currentTRIdPrefix = navTRLinkPrefix+Navigation.navName;
			var linkId = currentNode.id.substring(currentTRIdPrefix.length,currentNode.id.length);
			if(isCurrentPage(Navigation.links[linkId-1]) == true && currentNode.childNodes != null) {
				var currentPageTd;
				for(var i=0;currentNode.childNodes.length;i++) {
					if(typeof(currentNode.childNodes[i].tagName) != 'undefined' && currentNode.childNodes[i].tagName == 'TD' && currentNode.childNodes[i].id.indexOf(Navigation.navName+navTDLinkPart) != -1) {
						currentPageTd = currentNode.childNodes[i];
						addStyle(Navigation, Navigation.links[linkId - 1],currentPageTd,currentNode);
						return true;
					}
				}
			}
		}
	}
	return false;
}

function getChildElementFromTree(startNode,nodesToTraverse) {
	var currentChildNode = startNode;
	
	for(var n= 0;n<nodesToTraverse.length;n++) {
		currentChildNode = getMatchingChildByTag(currentChildNode.childNodes,nodesToTraverse[n]);
	}
	
	return currentChildNode;
}


function getMatchingChildByTag(childNodes,tagName) {
	var child;
	for(var i=0;childNodes.length;i++) {
		if(childNodes[i].tagName == tagName) {
			child = childNodes[i];
			break;
		}
	}
	return child;
}
function getLinkFontElement(tdElement){
	var fontElement;
	var aElement = getChildElementFromTree(tdElement,['A']);
	for(var i=0;i < aElement.childNodes.length;i++) {
		if(aElement.childNodes[i].tagName == 'DIV') {
		 	fontElement = getChildElementFromTree(aElement.childNodes[i],['FONT']);
		 	break;
		} else if(aElement.childNodes[i].tagName == 'FONT'){
		 	fontElement = 	aElement.childNodes[i];
		 	break;
		}
	
	}
	return fontElement;
}



	if(typeof(navTRLinkPrefix) == 'undefined') {
		navTRLinkPrefix = 'vNavTR_Link_';
	}
	if(typeof(navTDLinkPart) == 'undefined') {
		navTDLinkPart = '_Link';
	}
	if(document.getElementById('nav_version') == null) {
	if (typeof(navTBSuffix) == 'undefined') {
	navTBSuffix = 0;
	} else {navTBSuffix++;}
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  CELLSPACING=\"0\" CELLPADDING=\"0\" BORDER=\"0\" ><TR ALIGN=\"CENTER\" VALIGN=\"MIDDLE\"><TD><TABLE CELLSPACING=\"0\" CELLPADDING=\"0\" BORDER=\"0\"><TR><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation002_Link1\" style=\"cursor: pointer;cursor: hand;color:#FFFFFF;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Navigation002,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_Navigation002,this,\'1\',false);\"><A HREF=\"\/Photo-Gallery.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Photo Gallery\"><FONT ID=\"Navigation002_f1\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size10 Arial10\" STYLE=\"color:#FFFFFF\">Photo&nbsp;Gallery<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"20.0\" HEIGHT=\"1\" BORDER=\"0\"><\/A><\/TD><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation002_Link2\" style=\"cursor: pointer;cursor: hand;color:#FFFFFF;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Navigation002,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_Navigation002,this,\'2\',false);\"><A HREF=\"\/Our-Pools.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Our Pools\"><IMG SRC=\"\/tp.gif\" WIDTH=\"20.0\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"Navigation002_f2\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size10 Arial10\" STYLE=\"color:#FFFFFF\">Our&nbsp;Pools<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"20.0\" HEIGHT=\"1\" BORDER=\"0\"><\/A><\/TD><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation002_Link3\" style=\"cursor: pointer;cursor: hand;color:#FFFFFF;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Navigation002,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_Navigation002,this,\'3\',false);\"><A HREF=\"\/Partners.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Partners\"><IMG SRC=\"\/tp.gif\" WIDTH=\"20.0\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"Navigation002_f3\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size10 Arial10\" STYLE=\"color:#FFFFFF\">Partners<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"20.0\" HEIGHT=\"1\" BORDER=\"0\"><\/A><\/TD><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Navigation002_Link4\" style=\"cursor: pointer;cursor: hand;color:#FFFFFF;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Navigation002,this,\'4\',true);\" onmouseout=\"doMouseChange(nav_Navigation002,this,\'4\',false);\"><A HREF=\"\/Forms.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Forms\"><IMG SRC=\"\/tp.gif\" WIDTH=\"20.0\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"Navigation002_f4\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size10 Arial10\" STYLE=\"color:#FFFFFF\">Forms<\/FONT><\/A><\/TD><\/TR><\/TABLE><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportNavigation002(nav_Navigation002,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

