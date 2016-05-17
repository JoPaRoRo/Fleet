/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.0-rc4-master-c81f9f1
 */
function mdIconDirective(e,t,n){function i(i,o,r){function a(){var e=o.parent();return e.attr("aria-label")||e.text()?!0:!(!e.parent().attr("aria-label")&&!e.parent().text())}function c(){r.mdSvgIcon||r.mdSvgSrc||(r.mdFontIcon&&o.addClass("md-font "+r.mdFontIcon),o.addClass(e.fontSet(r.mdFontSet)))}t(o),c();var u=r.alt||r.mdFontIcon||r.mdSvgIcon||o.text(),l=r.$normalize(r.$attr.mdSvgIcon||r.$attr.mdSvgSrc||"");r["aria-label"]||(""===u||a()?o.text()||n.expect(o,"aria-hidden","true"):(n.expect(o,"aria-label",u),n.expect(o,"role","img"))),l&&r.$observe(l,function(t){o.empty(),t&&e(t).then(function(e){o.empty(),o.append(e)})})}return{restrict:"E",link:i}}function MdIconProvider(){}function ConfigurationItem(e,t){this.url=e,this.viewBoxSize=t||config.defaultViewBoxSize}function MdIconService(e,t,n,i,o,r){function a(t){if(t=t||"",x[t])return n.when(u(x[t]));if(w.test(t)||S.test(t))return g(t).then(l(t));-1==t.indexOf(":")&&(t="$default:"+t);var i=e[t]?d:s;return i(t).then(l(t))}function c(t){var n=angular.isUndefined(t)||!(t&&t.length);if(n)return e.defaultFontSet;var i=t;return angular.forEach(e.fontSets,function(e){e.alias==t&&(i=e.fontSet||i)}),i}function u(e){var t=e.clone(),n="_cache"+r.nextUid();return t.id&&(t.id+=n),angular.forEach(t.querySelectorAll("[id]"),function(e){e.id+=n}),t}function l(t){return function(n){return x[t]=v(n)?n:new m(n,e[t]),x[t].clone()}}function d(t){var n=e[t];return g(n.url).then(function(e){return new m(e,n)})}function s(t){function o(e){var n=t.slice(t.lastIndexOf(":")+1),i=e.querySelector("#"+n);return i?new m(i,c):r(t)}function r(e){var t="icon "+e+" not found";return i.warn(t),n.reject(t||e)}var a=t.substring(0,t.lastIndexOf(":"))||"$default",c=e[a];return c?g(c.url).then(o):r(t)}function g(e){function i(e){var t=S.exec(e),i=/base64/i.test(e),o=i?window.atob(t[2]):t[2];return n.when(angular.element(o)[0])}function r(e){return t.get(e,{cache:o}).then(function(e){return angular.element("<div>").append(e.data).find("svg")[0]})["catch"](f)}return S.test(e)?i(e):r(e)}function f(e){var t=angular.isString(e)?e:e.message||e.data||e.statusText;return i.warn(t),n.reject(t)}function v(e){return angular.isDefined(e.element)&&angular.isDefined(e.config)}function m(e,t){e&&"svg"!=e.tagName&&(e=angular.element('<svg xmlns="http://www.w3.org/2000/svg">').append(e)[0]),e.getAttribute("xmlns")||e.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.element=e,this.config=t,this.prepare()}function h(){var t=this.config?this.config.viewBoxSize:e.defaultViewBoxSize;angular.forEach({fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:this.element.getAttribute("viewBox")||"0 0 "+t+" "+t,focusable:!1},function(e,t){this.element.setAttribute(t,e)},this)}function p(){return this.element.cloneNode(!0)}var x={},w=/[-\w@:%\+.~#?&\/\/=]{2,}\.[a-z]{2,4}\b(\/[-\w@:%\+.~#?&\/\/=]*)?/i,S=/^data:image\/svg\+xml[\s*;\w\-\=]*?(base64)?,(.*)$/i;return m.prototype={clone:p,prepare:h},a.fontSet=c,a}goog.provide("ng.material.components.icon"),goog.require("ng.material.core"),angular.module("material.components.icon",["material.core"]),angular.module("material.components.icon").directive("mdIcon",["$mdIcon","$mdTheming","$mdAria",mdIconDirective]),angular.module("material.components.icon").provider("$mdIcon",MdIconProvider);var config={defaultViewBoxSize:24,defaultFontSet:"material-icons",fontSets:[]};MdIconProvider.prototype={icon:function(e,t,n){return-1==e.indexOf(":")&&(e="$default:"+e),config[e]=new ConfigurationItem(t,n),this},iconSet:function(e,t,n){return config[e]=new ConfigurationItem(t,n),this},defaultIconSet:function(e,t){var n="$default";return config[n]||(config[n]=new ConfigurationItem(e,t)),config[n].viewBoxSize=t||config.defaultViewBoxSize,this},defaultViewBoxSize:function(e){return config.defaultViewBoxSize=e,this},fontSet:function(e,t){return config.fontSets.push({alias:e,fontSet:t||e}),this},defaultFontSet:function(e){return config.defaultFontSet=e?e:"",this},defaultIconSize:function(e){return config.defaultIconSize=e,this},preloadIcons:function(e){var t=this,n=[{id:"md-tabs-arrow",url:"md-tabs-arrow.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>'},{id:"md-close",url:"md-close.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>'},{id:"md-cancel",url:"md-cancel.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'},{id:"md-menu",url:"md-menu.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>'},{id:"md-toggle-arrow",url:"md-toggle-arrow-svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 48 48"><path d="M24 16l-12 12 2.83 2.83 9.17-9.17 9.17 9.17 2.83-2.83z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>'},{id:"md-calendar",url:"md-calendar.svg",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>'}];n.forEach(function(n){t.icon(n.id,n.url),e.put(n.url,n.svg)})},$get:["$http","$q","$log","$templateCache","$mdUtil",function(e,t,n,i,o){return this.preloadIcons(i),MdIconService(config,e,t,n,i,o)}]},MdIconService.$inject=["config","$http","$q","$log","$templateCache","$mdUtil"],ng.material.components.icon=angular.module("material.components.icon");