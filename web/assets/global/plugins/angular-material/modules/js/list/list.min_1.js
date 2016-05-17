/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.0-rc4-master-c81f9f1
 */
!function(e,t,n){"use strict";function r(e){return{restrict:"E",compile:function(t){return t[0].setAttribute("role","list"),e}}}function i(e,n,r,i){var o=["md-checkbox","md-switch"];return{restrict:"E",controller:"MdListController",compile:function(a,s){function c(){for(var e,t,n=["md-switch","md-checkbox"],r=0;t=n[r];++r)if((e=a.find(t)[0])&&!e.hasAttribute("aria-label")){var i=a.find("p")[0];if(!i)return;e.setAttribute("aria-label","Toggle "+i.textContent)}}function l(e){if("div"==e)y=t.element('<div class="_md-no-style _md-list-item-inner">'),y.append(a.contents()),a.addClass("_md-proxy-focus");else{y=t.element('<div class="md-button _md-no-style">   <div class="_md-list-item-inner"></div></div>');var n=t.element('<md-button class="_md-no-style"></md-button>');n[0].setAttribute("aria-label",a[0].textContent),m(a[0],n[0]),y.prepend(n),y.children().eq(1).append(a.contents()),a.addClass("_md-button-wrap")}a[0].setAttribute("tabindex","-1"),a.append(y)}function d(){var e=t.element('<div class="_md-secondary-container">');t.forEach(C,function(t){u(t,e)});var n=t.element('<div class="flex"></div>');y.append(n),y.append(e)}function u(n,r){if(n&&!p(n)&&n.hasAttribute("ng-click")){e.expect(n,"aria-label");var i=t.element('<md-button class="md-secondary md-icon-button">');m(n,i[0]),n.setAttribute("tabindex","-1"),i.append(n),n=i[0]}n&&(!v(n)||!s.ngClick&&f(n))&&t.element(n).removeClass("md-secondary"),a.addClass("md-with-secondary"),r.append(n)}function m(e,n){var r=["ng-if","ng-click","aria-label","ng-disabled","ui-sref","href","ng-href","target","ng-attr-ui-sref","ui-sref-opts"];t.forEach(r,function(t){e.hasAttribute(t)&&(n.setAttribute(t,e.getAttribute(t)),e.removeAttribute(t))})}function f(e){return-1!=o.indexOf(e.nodeName.toLowerCase())}function p(e){var t=e.nodeName.toUpperCase();return"MD-BUTTON"==t||"BUTTON"==t}function v(e){for(var t=e.attributes,n=0;n<t.length;n++)if("ngClick"===s.$normalize(t[n].name))return!0;return!1}function b(e,a,s,c){function l(){m&&m.children&&!b&&t.forEach(o,function(e){t.forEach(m.querySelectorAll(e+":not(.md-secondary)"),function(e){u.push(e)})})}function d(){(1==u.length||b)&&(a.addClass("md-clickable"),b||c.attachRipple(e,t.element(a[0].querySelector("._md-no-style"))))}a.addClass("_md");var u=[],m=a[0].firstElementChild,f=a.hasClass("_md-button-wrap"),p=f?m.firstElementChild:m,b=p&&v(p);l(),d(),a.hasClass("_md-proxy-focus")&&u.length&&t.forEach(u,function(n){n=t.element(n),e.mouseActive=!1,n.on("mousedown",function(){e.mouseActive=!0,i(function(){e.mouseActive=!1},100)}).on("focus",function(){e.mouseActive===!1&&a.addClass("md-focused"),n.on("blur",function t(){a.removeClass("md-focused"),n.off("blur",t)})})});var h=function(e){if("INPUT"!=e.target.nodeName&&"TEXTAREA"!=e.target.nodeName&&!e.target.isContentEditable){var t=e.which||e.keyCode;t==n.KEY_CODE.SPACE&&p&&(p.click(),e.preventDefault(),e.stopPropagation())}};b||u.length||p&&p.addEventListener("keypress",h),a.off("click"),a.off("keypress"),1==u.length&&p&&a.children().eq(0).on("click",function(e){var n=r.getClosest(e.target,"BUTTON");!n&&p.contains(e.target)&&t.forEach(u,function(n){e.target===n||n.contains(e.target)||t.element(n).triggerHandler("click")})}),e.$on("$destroy",function(){p&&p.removeEventListener("keypress",h)})}var h,g,C=a[0].querySelectorAll(".md-secondary"),y=a;if(a[0].setAttribute("role","listitem"),s.ngClick||s.ngHref||s.href||s.uiSref||s.ngAttrUiSref)l("button");else{for(var A,k=0;A=o[k];++k)if(g=a[0].querySelector(A)){h=!0;break}h?l("div"):a[0].querySelector("md-button:not(.md-secondary):not(.md-exclude)")||a.addClass("_md-no-proxy")}return d(),c(),b}}}function o(e,t,n){function r(e,t){var r={};n.attach(e,t,r)}var i=this;i.attachRipple=r}t.module("material.components.list",["material.core"]).controller("MdListController",o).directive("mdList",r).directive("mdListItem",i),r.$inject=["$mdTheming"],i.$inject=["$mdAria","$mdConstant","$mdUtil","$timeout"],o.$inject=["$scope","$element","$mdListInkRipple"]}(window,window.angular);