/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.0-rc4-master-c81f9f1
 */
goog.provide("ng.material.components.backdrop"),goog.require("ng.material.core"),angular.module("material.components.backdrop",["material.core"]).directive("mdBackdrop",["$mdTheming","$animate","$rootElement","$window","$log","$$rAF","$document",function(e,o,t,n,a,r,i){function p(p,d,m){var l=n.getComputedStyle(i[0].body);if("fixed"==l.position){var s=parseInt(l.height,10)+Math.abs(parseInt(l.top,10));d.css({height:s+"px"})}o.pin&&o.pin(d,t),r(function(){var o=d.parent()[0];if(o){"BODY"==o.nodeName&&d.css({position:"fixed"});var t=n.getComputedStyle(o);"static"==t.position&&a.warn(c)}d.parent().length&&e.inherit(d,d.parent())})}var c="<md-backdrop> may not work properly in a scrolled, static-positioned parent container.";return{restrict:"E",link:p}}]),ng.material.components.backdrop=angular.module("material.components.backdrop");