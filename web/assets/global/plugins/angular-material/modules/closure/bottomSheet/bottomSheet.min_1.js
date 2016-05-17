/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.0-rc4-master-c81f9f1
 */
function MdBottomSheetDirective(e){return{restrict:"E",link:function(t,o){o.addClass("_md"),t.$on("$destroy",function(){e.destroy()})}}}function MdBottomSheetProvider(e){function t(e,t,r,a,i,c,l){function d(o,n,l,d){n=r.extractElementByName(n,"md-bottom-sheet"),n.attr("tabindex","-1"),l.disableBackdrop||(u=r.createBackdrop(o,"_md-bottom-sheet-backdrop md-opaque"),u[0].tabIndex=-1,l.clickOutsideToClose&&u.on("click",function(){r.nextTick(i.cancel,!0)}),a.inherit(u,l.parent),e.enter(u,l.parent,null));var m=new s(n,l.parent);return l.bottomSheet=m,a.inherit(m.element,l.parent),l.disableParentScroll&&(l.restoreScroll=r.disableScrollAround(m.element,l.parent)),e.enter(m.element,l.parent,u).then(function(){var e=r.findFocusTarget(n)||angular.element(n[0].querySelector("button")||n[0].querySelector("a")||n[0].querySelector("[ng-click]"))||u;l.escapeToClose&&(l.rootElementKeyupCallback=function(e){e.keyCode===t.KEY_CODE.ESCAPE&&r.nextTick(i.cancel,!0)},c.on("keyup",l.rootElementKeyupCallback),e&&e.focus())})}function m(t,o,n){var r=n.bottomSheet;return n.disableBackdrop||e.leave(u),e.leave(r.element).then(function(){n.disableParentScroll&&(n.restoreScroll(),delete n.restoreScroll),r.cleanup()})}function s(e,a){function c(o){e.css(t.CSS.TRANSITION_DURATION,"0ms")}function d(o){var r=o.pointer.distanceY;5>r&&(r=Math.max(-n,r/2)),e.css(t.CSS.TRANSFORM,"translate3d(0,"+(n+r)+"px,0)")}function m(n){if(n.pointer.distanceY>0&&(n.pointer.distanceY>20||Math.abs(n.pointer.velocityY)>o)){var a=e.prop("offsetHeight")-n.pointer.distanceY,c=Math.min(a/n.pointer.velocityY*.75,500);e.css(t.CSS.TRANSITION_DURATION,c+"ms"),r.nextTick(i.cancel,!0)}else e.css(t.CSS.TRANSITION_DURATION,""),e.css(t.CSS.TRANSFORM,"")}var s=l.register(a,"drag",{horizontal:!1});return a.on("$md.dragstart",c).on("$md.drag",d).on("$md.dragend",m),{element:e,cleanup:function(){s(),a.off("$md.dragstart",c),a.off("$md.drag",d),a.off("$md.dragend",m)}}}var u;return{themable:!0,onShow:d,onRemove:m,disableBackdrop:!1,escapeToClose:!0,clickOutsideToClose:!0,disableParentScroll:!0}}var o=.5,n=80;return t.$inject=["$animate","$mdConstant","$mdUtil","$mdTheming","$mdBottomSheet","$rootElement","$mdGesture"],e("$mdBottomSheet").setDefaults({methods:["disableParentScroll","escapeToClose","clickOutsideToClose"],options:t})}goog.provide("ng.material.components.bottomSheet"),goog.require("ng.material.components.backdrop"),goog.require("ng.material.core"),angular.module("material.components.bottomSheet",["material.core","material.components.backdrop"]).directive("mdBottomSheet",MdBottomSheetDirective).provider("$mdBottomSheet",MdBottomSheetProvider),MdBottomSheetDirective.$inject=["$mdBottomSheet"],MdBottomSheetProvider.$inject=["$$interimElementProvider"],ng.material.components.bottomSheet=angular.module("material.components.bottomSheet");