/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.0-rc4-master-c81f9f1
 */
function getDirective(e){function i(e){function i(i,n,o){var c=e(o[t]);n.on(r,function(e){i.$apply(function(){c(i,{$event:e})})})}return{restrict:"A",link:i}}var t="md"+e,r="$md."+e.toLowerCase();return i.$inject=["$parse"],i}goog.provide("ng.material.components.swipe"),goog.require("ng.material.core"),angular.module("material.components.swipe",["material.core"]).directive("mdSwipeLeft",getDirective("SwipeLeft")).directive("mdSwipeRight",getDirective("SwipeRight")).directive("mdSwipeUp",getDirective("SwipeUp")).directive("mdSwipeDown",getDirective("SwipeDown")),ng.material.components.swipe=angular.module("material.components.swipe");