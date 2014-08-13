// ==UserScript==
// @name EBSrestyle1
// @namespace http://getsetbro.com/ebsbookmarklet/
// @description Simmer the table borders, fit more table on the page. 
// @include http://stlcebs.perficient.com:8030/OA_HTML/*.jsp?*=809&*
// @version	1.0
// @grant none
// ==/UserScript==
var css = "#Hxctimecard table{border-collapse:collapse;width:auto;border:0 none}#Hxctimecard [src$='t.gif']{display:none}#Hxctimecard td{vertical-align:top}#Hxctimecard input,#Hxctimecard textarea{border:1px solid #ddd !important;min-height:22px}#Hxctimecard input,#Hxctimecard textarea[cols='25']{background-image:none !important;width:7.5vw;display:block}#Hxctimecard select{border:1px solid #ddd !important;min-width:220px}#Hxctimecard .x1x,#Hxctimecard .x2a,#Hxctimecard .x24{font-weight:normal;background-color:#eee}#Hxctimecard input ~ a{text-decoration:none;display:block;text-align:right;padding:5px 0 0 0}#Hxctimecard #tipIcon img,#Hxctimecard a img{display:none}#Hxctimecard button,#Hxctimecard #tipIcon:after,#Hxctimecard input ~ a:after{background-color:#69c;color:#fff;padding:0 5px;border-radius:8px}#Hxctimecard button{border:0 none;background-image:none !important;font-weight:normal}#Hxctimecard input ~ a:after{content:'Find';display:inline-block}#Hxctimecard #tipIcon:after{content:'Info';display:inline-block}#Hxctimecard a:hover:after,#Hxctimecard button:hover{background-color:#369}";
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = css;
document.getElementsByTagName('head')[0].appendChild(style);
