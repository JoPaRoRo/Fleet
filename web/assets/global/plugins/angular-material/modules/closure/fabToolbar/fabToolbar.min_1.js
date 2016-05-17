/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.0-rc4-master-c81f9f1
 */
goog.provide("ng.material.components.fabToolbar"),goog.require("ng.material.components.fabActions"),goog.require("ng.material.components.fabShared"),goog.require("ng.material.components.fabTrigger"),goog.require("ng.material.core"),function(){"use strict";function t(){function t(t,e,o){e.addClass("md-fab-toolbar"),e.find("md-fab-trigger").find("button").prepend('<div class="_md-fab-toolbar-background"></div>')}return{restrict:"E",transclude:!0,template:'<div class="_md-fab-toolbar-wrapper">  <div class="_md-fab-toolbar-content" ng-transclude></div></div>',scope:{direction:"@?mdDirection",isOpen:"=?mdOpen"},bindToController:!0,controller:"MdFabController",controllerAs:"vm",link:t}}function e(){function t(t,e,o){if(e){var r=t[0],a=t.controller("mdFabToolbar"),n=r.querySelector("._md-fab-toolbar-background"),l=r.querySelector("md-fab-trigger button"),i=r.querySelector("md-toolbar"),s=r.querySelector("md-fab-trigger button md-icon"),d=t.find("md-fab-actions").children();if(l&&n){var m=window.getComputedStyle(l).getPropertyValue("background-color"),c=r.offsetWidth,f=(r.offsetHeight,2*(c/l.offsetWidth));n.style.backgroundColor=m,n.style.borderRadius=c+"px",a.isOpen?(i.style.pointerEvents="inherit",n.style.width=l.offsetWidth+"px",n.style.height=l.offsetHeight+"px",n.style.transform="scale("+f+")",n.style.transitionDelay="0ms",s&&(s.style.transitionDelay=".3s"),angular.forEach(d,function(t,e){t.style.transitionDelay=25*(d.length-e)+"ms"})):(i.style.pointerEvents="none",n.style.transform="scale(1)",n.style.top="0",t.hasClass("md-right")&&(n.style.left="0",n.style.right=null),t.hasClass("md-left")&&(n.style.right="0",n.style.left=null),n.style.transitionDelay="200ms",s&&(s.style.transitionDelay="0ms"),angular.forEach(d,function(t,e){t.style.transitionDelay=200+25*e+"ms"}))}}}return{addClass:function(e,o,r){t(e,o,r),r()},removeClass:function(e,o,r){t(e,o,r),r()}}}angular.module("material.components.fabToolbar",["material.core","material.components.fabShared","material.components.fabTrigger","material.components.fabActions"]).directive("mdFabToolbar",t).animation(".md-fab-toolbar",e).service("mdFabToolbarAnimation",e)}(),ng.material.components.fabToolbar=angular.module("material.components.fabToolbar");