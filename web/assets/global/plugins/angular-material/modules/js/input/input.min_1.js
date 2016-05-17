/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.0-rc4-master-c81f9f1
 */
!function(e,t,n){"use strict";function i(e,t){function n(t,n){e(n);var i=n[0].querySelector(o),r=n[0].querySelector(a);i&&n.addClass("md-icon-left"),r&&n.addClass("md-icon-right")}function i(e,n,i,r){var o=this;o.isErrorGetter=i.mdIsError&&t(i.mdIsError),o.delegateClick=function(){o.input.focus()},o.element=n,o.setFocused=function(e){n.toggleClass("md-input-focused",!!e)},o.setHasValue=function(e){n.toggleClass("md-input-has-value",!!e)},o.setHasPlaceholder=function(e){n.toggleClass("md-input-has-placeholder",!!e)},o.setInvalid=function(e){e?r.addClass(n,"md-input-invalid"):r.removeClass(n,"md-input-invalid")},e.$watch(function(){return o.label&&o.input},function(e){e&&!o.label.attr("for")&&o.label.attr("for",o.input.attr("id"))})}var r=["INPUT","TEXTAREA","SELECT","MD-SELECT"],o=r.reduce(function(e,t){return e.concat(["md-icon ~ "+t,".md-icon ~ "+t])},[]).join(","),a=r.reduce(function(e,t){return e.concat([t+" ~ md-icon",t+" ~ .md-icon"])},[]).join(",");return i.$inject=["$scope","$element","$attrs","$animate"],{restrict:"E",link:n,controller:i}}function r(){return{restrict:"E",require:"^?mdInputContainer",link:function(e,t,n,i){!i||n.mdNoFloat||t.hasClass("_md-container-ignore")||(i.label=t,e.$on("$destroy",function(){i.label=null}))}}}function o(e,n,i,r){function o(o,a,u,l){function s(e){return m.setHasValue(!g.$isEmpty(e)),e}function c(){m.label&&u.$observe("required",function(e){m.label.toggleClass("md-required",e&&!v)})}function d(){m.setHasValue(a.val().length>0||(a[0].validity||{}).badInput)}function f(){function i(){if(a.addClass("md-no-flex").attr("rows",1),d){f||(m.style.minHeight=0,f=a.prop("clientHeight"),m.style.minHeight=null);var e=Math.round(Math.round(l()/f)),t=Math.min(e,d);a.css("height",f*t+"px").attr("rows",t).toggleClass("_md-textarea-scrollable",e>=d)}else{a.css("height","auto"),m.scrollTop=0;var n=l();n&&a.css("height",n+"px")}a.removeClass("md-no-flex")}function l(){var e=m.offsetHeight,t=m.scrollHeight-e;return e+(t>0?t:0)}function s(e){m.scrollTop=0;var t=m.scrollHeight-m.offsetHeight,n=m.offsetHeight+t;m.style.height=n+"px"}function c(e){return i(),e}if(!u.hasOwnProperty("mdNoAutogrow")){var d=u.hasOwnProperty("rows")?parseInt(u.rows):NaN,f=null,m=a[0];if(r(function(){e.nextTick(i)},10,!1),p?(g.$formatters.unshift(c),g.$parsers.unshift(c)):a.on("input",i),d||a.attr("rows",1).on("scroll",s),t.element(n).on("resize",i),o.$on("$destroy",function(){t.element(n).off("resize",i)}),u.hasOwnProperty("mdDetectHidden")){var h=function(){var e=!1;return function(){var t=0===m.offsetHeight;t===!1&&e===!0&&i(),e=t}}();o.$watch(function(){return e.nextTick(h,!1),!0})}}}var m=l[0],p=!!l[1],g=l[1]||e.fakeNgModel(),h=t.isDefined(u.readonly),v=e.parseAttributeBoolean(u.mdNoAsterisk);if(m){if("hidden"===u.type)return void a.attr("aria-hidden","true");if(m.input)throw new Error("<md-input-container> can only have *one* <input>, <textarea> or <md-select> child element!");m.input=a,c();var $=t.element('<div class="md-errors-spacer">');a.after($),m.label||i.expect(a,"aria-label",a.attr("placeholder")),a.addClass("md-input"),a.attr("id")||a.attr("id","input_"+e.nextUid()),"textarea"===a[0].tagName.toLowerCase()&&f(),p||d();var C=m.isErrorGetter||function(){return g.$invalid&&(g.$touched||y())},y=function(){var n=e.getClosest(a,"form"),i=n?t.element(n).controller("form"):null;return i?i.$submitted:!1};o.$watch(C,m.setInvalid),g.$parsers.push(s),g.$formatters.push(s),a.on("input",d),h||a.on("focus",function(t){e.nextTick(function(){m.setFocused(!0)})}).on("blur",function(t){e.nextTick(function(){m.setFocused(!1),d()})}),o.$on("$destroy",function(){m.setFocused(!1),m.setHasValue(!1),m.input=null})}}return{restrict:"E",require:["^?mdInputContainer","?ngModel"],link:o}}function a(e,n){function i(i,r,o,a){function u(e){return s.parent?(s.text(String(r.val()||e||"").length+"/"+l),e):e}var l,s,c,d=a[0],f=a[1];n.nextTick(function(){c=t.element(f.element[0].querySelector(".md-errors-spacer")),s=t.element('<div class="md-char-counter">'),c.append(s),o.$set("ngTrim","false"),d.$formatters.push(u),d.$viewChangeListeners.push(u),r.on("input keydown keyup",function(){u()}),i.$watch(o.mdMaxlength,function(n){l=n,t.isNumber(n)&&n>0?(s.parent().length||e.enter(s,c),u()):e.leave(s)}),d.$validators["md-maxlength"]=function(e,n){return!t.isNumber(l)||0>l?!0:(e||r.val()||n||"").length<=l}})}return{restrict:"A",require:["ngModel","^mdInputContainer"],link:i}}function u(e){function n(e,n,i,r){if(r){var o=r.element.find("label"),a=t.isDefined(r.element.attr("md-no-float"));if(o&&o.length||a)return void r.setHasPlaceholder(!0);var u=i.placeholder;if(n.removeAttr("placeholder"),r.input&&"MD-SELECT"!=r.input[0].nodeName){var l='<label ng-click="delegateClick()">'+u+"</label>";r.element.addClass("md-icon-float"),r.element.prepend(l)}}}return{restrict:"A",require:"^^?mdInputContainer",priority:200,link:n}}function l(e){function t(t,n,i){function r(){a=!0,e(function(){n[0].select(),a=!1},1,!1)}function o(e){a&&e.preventDefault()}if("INPUT"===n[0].nodeName||"TEXTAREA"===n[0].nodeName){var a=!1;n.on("focus",r).on("mouseup",o),t.$on("$destroy",function(){n.off("focus",r).off("mouseup",o)})}}return{restrict:"A",link:t}}function s(){function e(e,n,i,r){r&&(n.toggleClass("md-input-messages-animation",!0),n.toggleClass("md-auto-hide",!0),("false"==i.mdAutoHide||t(i))&&n.toggleClass("md-auto-hide",!1))}function t(e){return y.some(function(t){return e[t]})}return{restrict:"EA",link:e,require:"^^?mdInputContainer"}}function c(e){function t(t){var n=e.getClosest(t,"md-input-container");if(n)return t.toggleClass("md-input-message-animation",!0),{}}return{restrict:"EA",compile:t,priority:100}}function d(e,t){return{addClass:function(n,i,r){var o=C(n);"md-input-invalid"==i&&o.hasClass("md-auto-hide")?p(n,t,e)["finally"](r):r()}}}function f(e,t){return{enter:function(n,i){p(n,t,e)["finally"](i)},leave:function(n,i){g(n,t,e)["finally"](i)},addClass:function(n,i,r){"ng-hide"==i?g(n,t,e)["finally"](r):r()},removeClass:function(n,i,r){"ng-hide"==i?p(n,t,e)["finally"](r):r()}}}function m(e){return{enter:function(t,n){var i=C(t);return i.hasClass("md-auto-hide")?void n():h(t,e)},leave:function(t,n){return v(t,e)}}}function p(e,n,i){var r,o=[],a=C(e);return t.forEach(a.children(),function(e){r=h(t.element(e),n),o.push(r.start())}),i.all(o)}function g(e,n,i){var r,o=[],a=C(e);return t.forEach(a.children(),function(e){r=v(t.element(e),n),o.push(r.start())}),i.all(o)}function h(e,t){var n=e[0].offsetHeight;return t(e,{event:"enter",structural:!0,from:{opacity:0,"margin-top":-n+"px"},to:{opacity:1,"margin-top":"0"},duration:.3})}function v(t,n){var i=t[0].offsetHeight,r=e.getComputedStyle(t[0]);return 0==r.opacity?n(t,{}):n(t,{event:"leave",structural:!0,from:{opacity:1,"margin-top":0},to:{opacity:0,"margin-top":-i+"px"},duration:.3})}function $(e){var t=e.controller("mdInputContainer");return t.element}function C(e){var n=$(e);return t.element(n[0].querySelector(".md-input-messages-animation"))}t.module("material.components.input",["material.core"]).directive("mdInputContainer",i).directive("label",r).directive("input",o).directive("textarea",o).directive("mdMaxlength",a).directive("placeholder",u).directive("ngMessages",s).directive("ngMessage",c).directive("ngMessageExp",c).directive("mdSelectOnFocus",l).animation(".md-input-invalid",d).animation(".md-input-messages-animation",f).animation(".md-input-message-animation",m),i.$inject=["$mdTheming","$parse"],o.$inject=["$mdUtil","$window","$mdAria","$timeout"],a.$inject=["$animate","$mdUtil"],u.$inject=["$log"],l.$inject=["$timeout"];var y=["ngIf","ngShow","ngHide","ngSwitchWhen","ngSwitchDefault"];c.$inject=["$mdUtil"],d.$inject=["$q","$animateCss"],f.$inject=["$q","$animateCss"],m.$inject=["$animateCss"]}(window,window.angular);