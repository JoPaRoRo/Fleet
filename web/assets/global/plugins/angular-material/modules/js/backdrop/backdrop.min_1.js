/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.0-rc4-master-c81f9f1
 */
!function(t,n,e){"use strict";n.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",["$mdTheming","$animate","$rootElement","$window","$log","$$rAF","$document",function(t,n,e,i,o,r,a){function p(p,c,s){var m=i.getComputedStyle(a[0].body);if("fixed"==m.position){var l=parseInt(m.height,10)+Math.abs(parseInt(m.top,10));c.css({height:l+"px"})}n.pin&&n.pin(c,e),r(function(){var n=c.parent()[0];if(n){"BODY"==n.nodeName&&c.css({position:"fixed"});var e=i.getComputedStyle(n);"static"==e.position&&o.warn(d)}c.parent().length&&t.inherit(c,c.parent())})}var d="<md-backdrop> may not work properly in a scrolled, static-positioned parent container.";return{restrict:"E",link:p}}])}(window,window.angular);