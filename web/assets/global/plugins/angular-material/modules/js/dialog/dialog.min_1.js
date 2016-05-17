/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.0-rc4-master-c81f9f1
 */
!function(e,t,n){"use strict";function o(e,n,o){return{restrict:"E",link:function(i,a){a.addClass("_md"),n(a),e(function(){function e(){a.toggleClass("md-content-overflow",r.scrollHeight>r.clientHeight)}var n,r=a[0].querySelector("md-dialog-content");r&&(n=r.getElementsByTagName("img"),e(),t.element(n).on("load",e)),i.$on("$destroy",function(){o.destroy(a)})})}}}function i(e){function o(e,t,n){return{template:['<md-dialog md-theme="{{ dialog.theme }}" aria-label="{{ dialog.ariaLabel }}" ng-class="dialog.css">','  <md-dialog-content class="md-dialog-content" role="document" tabIndex="-1">','    <h2 class="md-title">{{ dialog.title }}</h2>','    <div ng-if="::dialog.mdHtmlContent" class="_md-dialog-content-body" ','        ng-bind-html="::dialog.mdHtmlContent"></div>','    <div ng-if="::!dialog.mdHtmlContent" class="_md-dialog-content-body">',"      <p>{{::dialog.mdTextContent}}</p>","    </div>",'    <md-input-container md-no-float ng-if="::dialog.$type == \'prompt\'" class="md-prompt-input-container">','      <input ng-keypress="dialog.keypress($event)" md-autofocus ng-model="dialog.result" placeholder="{{::dialog.placeholder}}">',"    </md-input-container>","  </md-dialog-content>","  <md-dialog-actions>",'    <md-button ng-if="dialog.$type === \'confirm\' || dialog.$type === \'prompt\'"               ng-click="dialog.abort()" class="md-primary">',"      {{ dialog.cancel }}","    </md-button>",'    <md-button ng-click="dialog.hide()" class="md-primary" md-autofocus="dialog.$type===\'alert\'">',"      {{ dialog.ok }}","    </md-button>","  </md-dialog-actions>","</md-dialog>"].join("").replace(/\s\s+/g,""),controller:function(){this.hide=function(){e.hide("prompt"===this.$type?this.result:!0)},this.abort=function(){e.cancel()},this.keypress=function(t){t.keyCode===n.KEY_CODE.ENTER&&e.hide(this.result)}},controllerAs:"dialog",bindToController:!0,theme:t.defaultTheme()}}function i(e,o,i,l,d,c,s,m,u,g){function f(e,t,n,o){if(o){if(o.mdHtmlContent=o.htmlContent||n.htmlContent||"",o.mdTextContent=o.textContent||n.textContent||o.content||n.content||"",o.mdHtmlContent&&!g.has("$sanitize"))throw Error("The ngSanitize module must be loaded in order to use htmlContent.");if(o.mdHtmlContent&&o.mdTextContent)throw Error("md-dialog cannot have both `htmlContent` and `textContent`")}}function p(e,n,o,a){function r(){var e=n[0].querySelectorAll(".md-actions");e.length>0&&u.warn("Using a class of md-actions is deprecated, please use <md-dialog-actions>.")}function l(){function e(){var e=n[0].querySelector(".dialog-close");if(!e){var o=n[0].querySelectorAll(".md-actions button, md-dialog-actions button");e=o[o.length-1]}return t.element(e)}if(o.focusOnOpen){var a=i.findFocusTarget(n)||e();a.focus()}}return t.element(c[0].body).addClass("md-dialog-is-showing"),C(o),y(n.find("md-dialog"),o),b(e,n,o),T(n,o).then(function(){v(n,o),k(n,o),r(),l()})}function h(e,n,o){function i(){return S(n,o)}function l(){t.element(c[0].body).removeClass("md-dialog-is-showing"),n.remove(),o.$destroy||o.origin.focus()}return o.deactivateListeners(),o.unlockScreenReader(),o.hideBackdrop(o.$destroy),a&&a.parentNode&&a.parentNode.removeChild(a),r&&r.parentNode&&r.parentNode.removeChild(r),o.$destroy?l():i().then(l)}function C(e){function o(e,o){var i=t.element(e||{});if(i&&i.length){var a={top:0,left:0,height:0,width:0},r=t.isFunction(i[0].getBoundingClientRect);return t.extend(o||{},{element:r?i:n,bounds:r?i[0].getBoundingClientRect():t.extend({},a,i[0]),focus:t.bind(i,i.focus)})}}function i(e,n){if(t.isString(e)){var o=e,i=c[0].querySelectorAll(o);e=i.length?i[0]:null}return t.element(e||n)}e.origin=t.extend({element:null,bounds:null,focus:t.noop},e.origin||{}),e.parent=i(e.parent,m),e.closeTo=o(i(e.closeTo)),e.openFrom=o(i(e.openFrom)),e.targetEvent&&(e.origin=o(e.targetEvent.target,e.origin))}function v(n,o){var a=t.element(s),r=i.debounce(function(){$(n,o)},60),d=[],c=function(){var t="alert"==o.$type?e.hide:e.cancel;i.nextTick(t,!0)};if(o.escapeToClose){var m=o.parent,u=function(e){e.keyCode===l.KEY_CODE.ESCAPE&&(e.stopPropagation(),e.preventDefault(),c())};n.on("keydown",u),m.on("keydown",u),d.push(function(){n.off("keydown",u),m.off("keydown",u)})}if(a.on("resize",r),d.push(function(){a.off("resize",r)}),o.clickOutsideToClose){var g,f=n,p=function(e){g=e.target},h=function(e){g===f[0]&&e.target===f[0]&&(e.stopPropagation(),e.preventDefault(),c())};f.on("mousedown",p),f.on("mouseup",h),d.push(function(){f.off("mousedown",p),f.off("mouseup",h)})}o.deactivateListeners=function(){d.forEach(function(e){e()}),o.deactivateListeners=null}}function b(e,t,n){n.disableParentScroll&&(n.restoreScroll=i.disableScrollAround(t,n.parent)),n.hasBackdrop&&(n.backdrop=i.createBackdrop(e,"_md-dialog-backdrop md-opaque"),d.enter(n.backdrop,n.parent)),n.hideBackdrop=function(e){n.backdrop&&(e?n.backdrop.remove():d.leave(n.backdrop)),n.disableParentScroll&&(n.restoreScroll(),delete n.restoreScroll),n.hideBackdrop=null}}function y(e,t){var n="alert"===t.$type?"alertdialog":"dialog",l=e.find("md-dialog-content"),d="dialogContent_"+(e.attr("id")||i.nextUid());e.attr({role:n,tabIndex:"-1"}),0===l.length&&(l=e),l.attr("id",d),e.attr("aria-describedby",d),t.ariaLabel?o.expect(e,"aria-label",t.ariaLabel):o.expectAsync(e,"aria-label",function(){var e=l.text().split(/\s+/);return e.length>3&&(e=e.slice(0,3).concat("...")),e.join(" ")}),a=document.createElement("div"),a.classList.add("_md-dialog-focus-trap"),a.tabIndex=0,r=a.cloneNode(!1);var c=function(){e.focus()};a.addEventListener("focus",c),r.addEventListener("focus",c),e[0].parentNode.insertBefore(a,e[0]),e.after(r)}function k(e,t){function n(e){for(;e.parentNode;){if(e===document.body)return;for(var t=e.parentNode.children,i=0;i<t.length;i++)e===t[i]||x(t[i],["SCRIPT","STYLE"])||t[i].setAttribute("aria-hidden",o);n(e=e.parentNode)}}var o=!0;n(e[0]),t.unlockScreenReader=function(){o=!1,n(e[0]),t.unlockScreenReader=null}}function $(e,t){var n="fixed"==s.getComputedStyle(c[0].body).position,o=t.backdrop?s.getComputedStyle(t.backdrop[0]):null,a=o?Math.min(c[0].body.clientHeight,Math.ceil(Math.abs(parseInt(o.height,10)))):0;return e.css({top:(n?i.scrollTop(t.parent):0)+"px",height:a?a+"px":"100%"}),e}function T(e,t){t.parent.append(e),$(e,t);var n=e.find("md-dialog"),o=i.dom.animator,a=o.calculateZoomToOrigin,r={transitionInClass:"_md-transition-in",transitionOutClass:"_md-transition-out"},l=o.toTransformCss(a(n,t.openFrom||t.origin)),d=o.toTransformCss("");return t.fullscreen&&n.addClass("md-dialog-fullscreen"),o.translate3d(n,l,d,r).then(function(e){return t.reverseAnimate=function(){return delete t.reverseAnimate,t.closeTo?(r={transitionInClass:"_md-transition-out",transitionOutClass:"_md-transition-in"},l=d,d=o.toTransformCss(a(n,t.closeTo)),o.translate3d(n,l,d,r)):e(o.toTransformCss(a(n,t.origin)))},!0})}function S(e,t){return t.reverseAnimate()}function x(e,t){return-1!==t.indexOf(e.nodeName)?!0:void 0}return{hasBackdrop:!0,isolateScope:!0,onShow:p,onShowing:f,onRemove:h,clickOutsideToClose:!1,escapeToClose:!0,targetEvent:null,closeTo:null,openFrom:null,focusOnOpen:!0,disableParentScroll:!0,autoWrap:!0,fullscreen:!1,transformTemplate:function(e,t){function n(e){return t.autoWrap&&!/<\/md-dialog>/g.test(e)?"<md-dialog>"+(e||"")+"</md-dialog>":e||""}return'<div class="md-dialog-container" tabindex="-1">'+n(e)+"</div>"}}}var a,r;return o.$inject=["$mdDialog","$mdTheming","$mdConstant"],i.$inject=["$mdDialog","$mdAria","$mdUtil","$mdConstant","$animate","$document","$window","$rootElement","$log","$injector"],e("$mdDialog").setDefaults({methods:["disableParentScroll","hasBackdrop","clickOutsideToClose","escapeToClose","targetEvent","closeTo","openFrom","parent","fullscreen"],options:i}).addPreset("alert",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","theme","css"],options:o}).addPreset("confirm",{methods:["title","htmlContent","textContent","content","ariaLabel","ok","cancel","theme","css"],options:o}).addPreset("prompt",{methods:["title","htmlContent","textContent","content","placeholder","ariaLabel","ok","cancel","theme","css"],options:o})}t.module("material.components.dialog",["material.core","material.components.backdrop"]).directive("mdDialog",o).provider("$mdDialog",i),o.$inject=["$$rAF","$mdTheming","$mdDialog"],i.$inject=["$$interimElementProvider"]}(window,window.angular);