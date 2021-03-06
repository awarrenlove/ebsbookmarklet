// ==UserScript==
// @name EBSrestyle1
// @namespace http://getsetbro.com/ebsbookmarklet/
// @description Simmer the table borders, fit more table on the page.
// @include http://stlcebs.perficient.com:8030/OA_HTML/*.jsp?*=809&*
// @version	1.1
// @grant none
// ==/UserScript==
var css = "[title='perficient_red.png']{display: none;}#Hxctimecard table table table table select,#Hxctimecard table table table table textarea{border:1px solid #999}#Hxctimecard table table table table select{min-width:275px;}#Hxctimecard .x1x,#Hxctimecard .x2a,#Hxctimecard .x24{font-weight:normal;background-color:#eee}#Hxctimecard table table table table button,#Hxctimecard table table table tr:nth-child(6n) table a:after{border:0 none;background-image:none !important;font-weight:normal;background-color:#69c;color:#fff;border-radius:9px}#Hxctimecard table table table tr:nth-child(6n) table{border:0 none;border-collapse:collapse;width:100%}#Hxctimecard table table table tr:nth-child(6n) table td{border-color:#ddd;vertical-align:top}#Hxctimecard table table table tr:nth-child(6n) table input,#Hxctimecard table table table tr:nth-child(6n) table textarea{border:1px solid #ddd !important;width:100%;min-height:22px}#Hxctimecard table table table [src$='t.gif']{display:none}#Hxctimecard table table table tr:nth-child(6n) table a{display:block;text-align:right;text-decoration:none}#Hxctimecard table table table tr:nth-child(6n) table a img{display:none}#Hxctimecard table table table tr:nth-child(6n) table a:after{content:'Find';padding:0 5px 1px}#Hxctimecard table table table tr:nth-child(6n) table input:focus,#Hxctimecard table table table tr:nth-child(6n) table textarea:focus{width:255px}";
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = css;
document.getElementsByTagName('head')[0].appendChild(style);
