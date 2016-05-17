/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.0-rc4-master-c81f9f1
 */
!function(t,e,n){"use strict";function i(t,e,n){function i(i,r,o){function a(){var t=r.parent();return t.attr("aria-label")||t.text()?!0:!(!t.parent().attr("aria-label")&&!t.parent().text())}function u(){o.mdSvgIcon||o.mdSvgSrc||(o.mdFontIcon&&r.addClass("md-font "+o.mdFontIcon),r.addClass(t.fontSet(o.mdFontSet)))}e(r),u();var c=o.alt||o.mdFontIcon||o.mdSvgIcon||r.text(),s=o.$normalize(o.$attr.mdSvgIcon||o.$attr.mdSvgSrc||"");o["aria-label"]||(""===c||a()?r.text()||n.expect(r,"aria-hidden","true"):(n.expect(r,"aria-label",c),n.expect(r,"role","img"))),s&&o.$observe(s,function(e){r.empty(),e&&t(e).then(function(t){r.empty(),r.append(t)})})}return{restrict:"E",link:i}}function r(){}function o(t,e){this.url=t,this.viewBoxSize=e||u.defaultViewBoxSize}function a(n,i,r,o,a,u){function c(t){if(t=t||"",S[t])return r.when(d(S[t]));if($.test(t)||z.test(t))return g(t).then(l(t));-1==t.indexOf(":")&&(t="$default:"+t);var e=n[t]?f:v;return e(t).then(l(t))}function s(t){var i=e.isUndefined(t)||!(t&&t.length);if(i)return n.defaultFontSet;var r=t;return e.forEach(n.fontSets,function(e){e.alias==t&&(r=e.fontSet||r)}),r}function d(t){var n=t.clone(),i="_cache"+u.nextUid();return n.id&&(n.id+=i),e.forEach(n.querySelectorAll("[id]"),function(t){t.id+=i}),n}function l(t){return function(e){return S[t]=h(e)?e:new p(e,n[t]),S[t].clone()}}function f(t){var e=n[t];return g(e.url).then(function(t){return new p(t,e)})}function v(t){function e(e){var n=t.slice(t.lastIndexOf(":")+1),r=e.querySelector("#"+n);return r?new p(r,u):i(t)}function i(t){var e="icon "+t+" not found";return o.warn(e),r.reject(e||t)}var a=t.substring(0,t.lastIndexOf(":"))||"$default",u=n[a];return u?g(u.url).then(e):i(t)}function g(n){function o(n){var i=z.exec(n),o=/base64/i.test(n),a=o?t.atob(i[2]):i[2];return r.when(e.element(a)[0])}function u(t){return i.get(t,{cache:a}).then(function(t){return e.element("<div>").append(t.data).find("svg")[0]})["catch"](m)}return z.test(n)?o(n):u(n)}function m(t){var n=e.isString(t)?t:t.message||t.data||t.statusText;return o.warn(n),r.reject(n)}function h(t){return e.isDefined(t.element)&&e.isDefined(t.config)}function p(t,n){t&&"svg"!=t.tagName&&(t=e.element('<svg xmlns="http://www.w3.org/2000/svg">').append(t)[0]),t.getAttribute("xmlns")||t.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.element=t,this.config=n,this.prepare()}function w(){var t=this.config?this.config.viewBoxSize:n.defaultViewBoxSize;e.forEach({fit:"",height:"100%",width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:this.element.getAttribute("viewBox")||"0 0 "+t+" "+t,focusable:!1},function(t,e){this.element.setAttribute(e,t)},this)}function x(){return this.element.cloneNode(!0)}var S={},$=/[-\w@:%\+.~#?&\/\/=]{2,}\.[a-z]{2,4}\b(\/[-\w@:%\+.~#?&\/\/=]*)?/i,z=/^data:image\/svg\+xml[\s*;\w\-\=]*?(base64)?,(.*)$/i;return p.prototype={clone:x,prepare:w},c.fontSet=s,c}e.module("material.components.icon",["material.core"]),e.module("material.components.icon").directive("mdIcon",["$mdIcon","$mdTheming","$mdAria",i]),e.module("material.components.icon").provider("$mdIcon",r);var u={defaultViewBoxSize:24,defaultFontSet:"material-icons",fontSets:[]};r.prototype={icon:function(t,e,n){return-1==t.indexOf(":")&&(t="$default:"+t),u[t]=new o(e,n),this},iconSet:function(t,e,n){return u[t]=new o(e,n),this},defaultIconSet:function(t,e){var n="$default";return u[n]||(u[n]=new o(t,e)),u[n].viewBoxSize=e||u.defaultViewBoxSize,this},defaultViewBoxSize:function(t){return u.defaultViewBoxSize=t,this},fontSet:function(t,e){return u.fontSets.push({alias:t,fontSet:e||t}),this},defaultFontSet:function(t){return u.defaultFontSet=t?t:"",this},defaultIconSize:function(t){return u.defaultIconSize=t,this},preloadIcons:function(t){var e=this,n=[{id:"md-tabs-arrow",url:"md-tabs-arrow.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>'},{id:"md-close",url:"md-close.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>'},{id:"md-cancel",url:"md-cancel.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'},{id:"md-menu",url:"md-menu.svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>'},{id:"md-toggle-arrow",url:"md-toggle-arrow-svg",svg:'<svg version="1.1" x="0px" y="0px" viewBox="0 0 48 48"><path d="M24 16l-12 12 2.83 2.83 9.17-9.17 9.17 9.17 2.83-2.83z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>'},{id:"md-calendar",url:"md-calendar.svg",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>'}];n.forEach(function(n){e.icon(n.id,n.url),t.put(n.url,n.svg)})},$get:["$http","$q","$log","$templateCache","$mdUtil",function(t,e,n,i,r){return this.preloadIcons(i),a(u,t,e,n,i,r)}]},a.$inject=["config","$http","$q","$log","$templateCache","$mdUtil"]}(window,window.angular);