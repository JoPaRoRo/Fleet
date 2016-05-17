/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.0-rc4-master-c81f9f1
 */
goog.provide("ng.material.components.datepicker"),goog.require("ng.material.components.icon"),goog.require("ng.material.components.virtualRepeat"),goog.require("ng.material.core"),function(){"use strict";function t(){return{template:'<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="'+(n-a)+'"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody role="rowgroup" md-virtual-repeat="i in ctrl.items" md-calendar-month md-month-offset="$index" class="md-calendar-month" md-start-index="ctrl.getSelectedMonthIndex()" md-item-size="'+a+'"></tbody></table></md-virtual-repeat-container></div>',scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",dateFilter:"=mdDateFilter"},require:["ngModel","mdCalendar"],controller:e,controllerAs:"ctrl",bindToController:!0,link:function(t,e,a,n){var i=n[0],r=n[1];r.configureNgModel(i)}}}function e(t,e,a,n,i,r,l,d,o,c,h){if(l(t),this.items={length:2e3},this.maxDate&&this.minDate){var u=d.getMonthDistance(this.minDate,this.maxDate)+1;u=Math.max(u,1),u+=1,this.items.length=u}if(this.$animate=n,this.$q=i,this.$mdInkRipple=c,this.$mdUtil=h,this.keyCode=r.KEY_CODE,this.dateUtil=d,this.dateLocale=o,this.$element=t,this.$scope=a,this.calendarElement=t[0].querySelector(".md-calendar"),this.calendarScroller=t[0].querySelector(".md-virtual-repeat-scroller"),this.today=this.dateUtil.createDateAtMidnight(),this.firstRenderableDate=this.dateUtil.incrementMonths(this.today,-this.items.length/2),this.minDate&&this.minDate>this.firstRenderableDate)this.firstRenderableDate=this.minDate;else if(this.maxDate){this.items.length-2;this.firstRenderableDate=this.dateUtil.incrementMonths(this.maxDate,-(this.items.length-2))}this.id=s++,this.ngModelCtrl=null,this.selectedDate=null,this.displayDate=null,this.focusDate=null,this.isInitialized=!1,this.isMonthTransitionInProgress=!1,e.tabindex||t.attr("tabindex","-1");var m=this;this.cellClickHandler=function(){var t=this;this.hasAttribute("data-timestamp")&&a.$apply(function(){var e=Number(t.getAttribute("data-timestamp"));m.setNgModelValue(m.dateUtil.createDateAtMidnight(e))})},this.attachCalendarEventListeners()}angular.module("material.components.datepicker",["material.core","material.components.icon","material.components.virtualRepeat"]).directive("mdCalendar",t);var a=265,n=45,i="md-calendar-selected-date",r="md-focus",s=0;e.$inject=["$element","$attrs","$scope","$animate","$q","$mdConstant","$mdTheming","$$mdDateUtil","$mdDateLocale","$mdInkRipple","$mdUtil"],e.prototype.configureNgModel=function(t){this.ngModelCtrl=t;var e=this;t.$render=function(){e.changeSelectedDate(e.ngModelCtrl.$viewValue)}},e.prototype.buildInitialCalendarDisplay=function(){this.buildWeekHeader(),this.hideVerticalScrollbar(),this.displayDate=this.selectedDate||this.today,this.isInitialized=!0},e.prototype.hideVerticalScrollbar=function(){var t=this.$element[0],e=t.querySelector(".md-calendar-scroll-mask"),a=this.calendarScroller,n=t.querySelector(".md-calendar-day-header").clientWidth,i=a.offsetWidth-a.clientWidth;e.style.width=n+"px",a.style.width=n+i+"px",a.style.paddingRight=i+"px"},e.prototype.attachCalendarEventListeners=function(){this.$element.on("keydown",angular.bind(this,this.handleKeyEvent))},e.prototype.handleKeyEvent=function(t){var e=this;this.$scope.$apply(function(){if(t.which==e.keyCode.ESCAPE||t.which==e.keyCode.TAB)return e.$scope.$emit("md-calendar-close"),void(t.which==e.keyCode.TAB&&t.preventDefault());if(t.which===e.keyCode.ENTER)return e.setNgModelValue(e.displayDate),void t.preventDefault();var a=e.getFocusDateFromKeyEvent(t);a&&(a=e.boundDateByMinAndMax(a),t.preventDefault(),t.stopPropagation(),e.changeDisplayDate(a).then(function(){e.focus(a)}))})},e.prototype.getFocusDateFromKeyEvent=function(t){var e=this.dateUtil,a=this.keyCode;switch(t.which){case a.RIGHT_ARROW:return e.incrementDays(this.displayDate,1);case a.LEFT_ARROW:return e.incrementDays(this.displayDate,-1);case a.DOWN_ARROW:return t.metaKey?e.incrementMonths(this.displayDate,1):e.incrementDays(this.displayDate,7);case a.UP_ARROW:return t.metaKey?e.incrementMonths(this.displayDate,-1):e.incrementDays(this.displayDate,-7);case a.PAGE_DOWN:return e.incrementMonths(this.displayDate,1);case a.PAGE_UP:return e.incrementMonths(this.displayDate,-1);case a.HOME:return e.getFirstDateOfMonth(this.displayDate);case a.END:return e.getLastDateOfMonth(this.displayDate);default:return null}},e.prototype.getSelectedMonthIndex=function(){return this.dateUtil.getMonthDistance(this.firstRenderableDate,this.selectedDate||this.today)},e.prototype.scrollToMonth=function(t){if(this.dateUtil.isValidDate(t)){var e=this.dateUtil.getMonthDistance(this.firstRenderableDate,t);this.calendarScroller.scrollTop=e*a}},e.prototype.setNgModelValue=function(t){this.$scope.$emit("md-calendar-change",t),this.ngModelCtrl.$setViewValue(t),this.ngModelCtrl.$render()},e.prototype.focus=function(t){var e=t||this.selectedDate||this.today,a=this.calendarElement.querySelector(".md-focus");a&&a.classList.remove(r);var n=this.getDateId(e),i=document.getElementById(n);i?(i.classList.add(r),i.focus()):this.focusDate=e},e.prototype.boundDateByMinAndMax=function(t){var e=t;return this.minDate&&t<this.minDate&&(e=new Date(this.minDate.getTime())),this.maxDate&&t>this.maxDate&&(e=new Date(this.maxDate.getTime())),e},e.prototype.changeSelectedDate=function(t){var e=this,a=this.selectedDate;this.selectedDate=t,this.changeDisplayDate(t).then(function(){if(a){var n=document.getElementById(e.getDateId(a));n&&(n.classList.remove(i),n.setAttribute("aria-selected","false"))}if(t){var r=document.getElementById(e.getDateId(t));r&&(r.classList.add(i),r.setAttribute("aria-selected","true"))}})},e.prototype.changeDisplayDate=function(t){if(!this.isInitialized)return this.buildInitialCalendarDisplay(),this.$q.when();if(!this.dateUtil.isValidDate(t)||this.isMonthTransitionInProgress)return this.$q.when();this.isMonthTransitionInProgress=!0;var e=this.animateDateChange(t);this.displayDate=t;var a=this;return e.then(function(){a.isMonthTransitionInProgress=!1}),e},e.prototype.animateDateChange=function(t){return this.scrollToMonth(t),this.$q.when()},e.prototype.buildWeekHeader=function(){for(var t=this.dateLocale.firstDayOfWeek,e=this.dateLocale.shortDays,a=document.createElement("tr"),n=0;7>n;n++){var i=document.createElement("th");i.textContent=e[(n+t)%7],a.appendChild(i)}this.$element.find("thead").append(a)},e.prototype.getDateId=function(t){return["md",this.id,t.getFullYear(),t.getMonth(),t.getDate()].join("-")}}(),function(){"use strict";function t(){return{require:["^^mdCalendar","mdCalendarMonth"],scope:{offset:"=mdMonthOffset"},controller:e,controllerAs:"mdMonthCtrl",bindToController:!0,link:function(t,e,a,n){var i=n[0],r=n[1];r.calendarCtrl=i,r.generateContent(),t.$watch(function(){return r.offset},function(t,e){t!=e&&r.generateContent()})}}}function e(t,e,a){this.dateUtil=e,this.dateLocale=a,this.$element=t,this.calendarCtrl=null,this.offset,this.focusAfterAppend=null}angular.module("material.components.datepicker").directive("mdCalendarMonth",t);var a="md-calendar-date-today",n="md-calendar-selected-date",i="md-focus";e.$inject=["$element","$$mdDateUtil","$mdDateLocale"],e.prototype.generateContent=function(){var t=this.calendarCtrl,e=this.dateUtil.incrementMonths(t.firstRenderableDate,this.offset);this.$element.empty(),this.$element.append(this.buildCalendarForMonth(e)),this.focusAfterAppend&&(this.focusAfterAppend.classList.add(i),this.focusAfterAppend.focus(),this.focusAfterAppend=null)},e.prototype.buildDateCell=function(t){var e=this.calendarCtrl,i=document.createElement("td");if(i.tabIndex=-1,i.classList.add("md-calendar-date"),i.setAttribute("role","gridcell"),t){i.setAttribute("tabindex","-1"),i.setAttribute("aria-label",this.dateLocale.longDateFormatter(t)),i.id=e.getDateId(t),i.setAttribute("data-timestamp",t.getTime()),this.dateUtil.isSameDay(t,e.today)&&i.classList.add(a),this.dateUtil.isValidDate(e.selectedDate)&&this.dateUtil.isSameDay(t,e.selectedDate)&&(i.classList.add(n),i.setAttribute("aria-selected","true"));var r=this.dateLocale.dates[t.getDate()];if(this.isDateEnabled(t)){var s=document.createElement("span");i.appendChild(s),s.classList.add("md-calendar-date-selection-indicator"),s.textContent=r,i.addEventListener("click",e.cellClickHandler),e.focusDate&&this.dateUtil.isSameDay(t,e.focusDate)&&(this.focusAfterAppend=i)}else i.classList.add("md-calendar-date-disabled"),i.textContent=r}return i},e.prototype.isDateEnabled=function(t){return this.dateUtil.isDateWithinRange(t,this.calendarCtrl.minDate,this.calendarCtrl.maxDate)&&(!angular.isFunction(this.calendarCtrl.dateFilter)||this.calendarCtrl.dateFilter(t))},e.prototype.buildDateRow=function(t){var e=document.createElement("tr");return e.setAttribute("role","row"),e.setAttribute("aria-label",this.dateLocale.weekNumberFormatter(t)),e},e.prototype.buildCalendarForMonth=function(t){var e=this.dateUtil.isValidDate(t)?t:new Date,a=this.dateUtil.getFirstDateOfMonth(e),n=this.getLocaleDay_(a),i=this.dateUtil.getNumberOfDaysInMonth(e),r=document.createDocumentFragment(),s=1,l=this.buildDateRow(s);r.appendChild(l);var d=this.offset===this.calendarCtrl.items.length-1,o=0,c=document.createElement("td");if(c.classList.add("md-calendar-month-label"),this.calendarCtrl.maxDate&&a>this.calendarCtrl.maxDate&&c.classList.add("md-calendar-month-label-disabled"),c.textContent=this.dateLocale.monthHeaderFormatter(e),2>=n){c.setAttribute("colspan","7");var h=this.buildDateRow();if(h.appendChild(c),r.insertBefore(h,l),d)return r}else o=2,c.setAttribute("colspan","2"),l.appendChild(c);for(var u=o;n>u;u++)l.appendChild(this.buildDateCell());for(var m=n,p=a,f=1;i>=f;f++){if(7===m){if(d)return r;m=0,s++,l=this.buildDateRow(s),r.appendChild(l)}p.setDate(f);var D=this.buildDateCell(p);l.appendChild(D),m++}for(;l.childNodes.length<7;)l.appendChild(this.buildDateCell());for(;r.childNodes.length<6;){for(var g=this.buildDateRow(),u=0;7>u;u++)g.appendChild(this.buildDateCell());r.appendChild(g)}return r},e.prototype.getLocaleDay_=function(t){return(t.getDay()+(7-this.dateLocale.firstDayOfWeek))%7}}(),function(){"use strict";angular.module("material.components.datepicker").config(["$provide",function(t){function e(){this.months=null,this.shortMonths=null,this.days=null,this.shortDays=null,this.dates=null,this.firstDayOfWeek=0,this.formatDate=null,this.parseDate=null,this.monthHeaderFormatter=null,this.weekNumberFormatter=null,this.longDateFormatter=null,this.msgCalendar="",this.msgOpenCalendar=""}e.prototype.$get=function(t){function e(t){if(!t)return"";var e=t.toLocaleTimeString(),a=t;return 0!=t.getHours()||-1===e.indexOf("11:")&&-1===e.indexOf("23:")||(a=new Date(t.getFullYear(),t.getMonth(),t.getDate(),1,0,0)),a.toLocaleDateString()}function a(t){return new Date(t)}function n(t){t=t.trim();var e=/^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/;return e.test(t)}function i(t){return u.shortMonths[t.getMonth()]+" "+t.getFullYear()}function r(t){return"Week "+t}function s(t){return[u.days[t.getDay()],u.months[t.getMonth()],u.dates[t.getDate()],t.getFullYear()].join(" ")}for(var l=t.DATETIME_FORMATS.DAY.map(function(t){return t[0]}),d=Array(32),o=1;31>=o;o++)d[o]=o;var c="Calendar",h="Open calendar",u={months:this.months||t.DATETIME_FORMATS.MONTH,shortMonths:this.shortMonths||t.DATETIME_FORMATS.SHORTMONTH,days:this.days||t.DATETIME_FORMATS.DAY,shortDays:this.shortDays||l,dates:this.dates||d,firstDayOfWeek:this.firstDayOfWeek||0,formatDate:this.formatDate||e,parseDate:this.parseDate||a,isDateComplete:this.isDateComplete||n,monthHeaderFormatter:this.monthHeaderFormatter||i,weekNumberFormatter:this.weekNumberFormatter||r,longDateFormatter:this.longDateFormatter||s,msgCalendar:this.msgCalendar||c,msgOpenCalendar:this.msgOpenCalendar||h};return u},e.prototype.$get.$inject=["$locale"],t.provider("$mdDateLocale",new e)}])}(),function(){"use strict";function t(){return{template:'<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" md-svg-icon="md-calendar"></md-icon></md-button><div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input class="md-datepicker-input" aria-haspopup="true" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)"><md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.dateLocale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button></div><div class="md-datepicker-calendar-pane md-whiteframe-z1"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.dateLocale.msgCalendar}}" md-min-date="ctrl.minDate" md-max-date="ctrl.maxDate"md-date-filter="ctrl.dateFilter"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>',require:["ngModel","mdDatepicker","?^mdInputContainer"],scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",placeholder:"@mdPlaceholder",dateFilter:"=mdDateFilter"},controller:e,controllerAs:"ctrl",bindToController:!0,link:function(t,e,a,n){var i=n[0],r=n[1],s=n[2];if(s)throw Error("md-datepicker should not be placed inside md-input-container.");r.configureNgModel(i)}}}function e(t,e,a,n,i,r,s,l,d,o,c,h){this.$compile=n,this.$timeout=i,this.$window=r,this.dateLocale=o,this.dateUtil=c,this.$mdConstant=s,this.$mdUtil=d,this.$$rAF=h,this.documentElement=angular.element(document.documentElement),this.ngModelCtrl=null,this.inputElement=e[0].querySelector("input"),this.ngInputElement=angular.element(this.inputElement),this.inputContainer=e[0].querySelector(".md-datepicker-input-container"),this.calendarPane=e[0].querySelector(".md-datepicker-calendar-pane"),this.calendarButton=e[0].querySelector(".md-datepicker-button"),this.inputMask=e[0].querySelector(".md-datepicker-input-mask-opaque"),this.$element=e,this.$attrs=a,this.$scope=t,this.date=null,this.isFocused=!1,this.isDisabled,this.setDisabled(e[0].disabled||angular.isString(a.disabled)),this.isCalendarOpen=!1,this.calendarPaneOpenedFrom=null,this.calendarPane.id="md-date-pane"+d.nextUid(),l(e),this.bodyClickHandler=angular.bind(this,this.handleBodyClick),this.windowResizeHandler=d.debounce(angular.bind(this,this.closeCalendarPane),100),a.tabindex||e.attr("tabindex","-1"),this.installPropertyInterceptors(),this.attachChangeListeners(),this.attachInteractionListeners();var u=this;t.$on("$destroy",function(){u.detachCalendarPane()})}angular.module("material.components.datepicker").directive("mdDatepicker",t);var a=3,n="md-datepicker-invalid",i=500,r=368,s=360;e.$inject=["$scope","$element","$attrs","$compile","$timeout","$window","$mdConstant","$mdTheming","$mdUtil","$mdDateLocale","$$mdDateUtil","$$rAF"],e.prototype.configureNgModel=function(t){this.ngModelCtrl=t;var e=this;t.$render=function(){var t=e.ngModelCtrl.$viewValue;if(t&&!(t instanceof Date))throw Error("The ng-model for md-datepicker must be a Date instance. Currently the model is a: "+typeof t);e.date=t,e.inputElement.value=e.dateLocale.formatDate(t),e.resizeInputElement(),e.updateErrorState()}},e.prototype.attachChangeListeners=function(){var t=this;t.$scope.$on("md-calendar-change",function(e,a){t.ngModelCtrl.$setViewValue(a),t.date=a,t.inputElement.value=t.dateLocale.formatDate(a),t.closeCalendarPane(),t.resizeInputElement(),t.updateErrorState()}),t.ngInputElement.on("input",angular.bind(t,t.resizeInputElement)),t.ngInputElement.on("input",t.$mdUtil.debounce(t.handleInputEvent,i,t))},e.prototype.attachInteractionListeners=function(){var t=this,e=this.$scope,a=this.$mdConstant.KEY_CODE;t.ngInputElement.on("keydown",function(n){n.altKey&&n.keyCode==a.DOWN_ARROW&&(t.openCalendarPane(n),e.$digest())}),e.$on("md-calendar-close",function(){t.closeCalendarPane()})},e.prototype.installPropertyInterceptors=function(){var t=this;if(this.$attrs.ngDisabled){var e=this.$scope.$parent;e&&e.$watch(this.$attrs.ngDisabled,function(e){t.setDisabled(e)})}Object.defineProperty(this,"placeholder",{get:function(){return t.inputElement.placeholder},set:function(e){t.inputElement.placeholder=e||""}})},e.prototype.setDisabled=function(t){this.isDisabled=t,this.inputElement.disabled=t,this.calendarButton.disabled=t},e.prototype.updateErrorState=function(t){var e=t||this.date;if(this.clearErrorState(),this.dateUtil.isValidDate(e)){if(e=this.dateUtil.createDateAtMidnight(e),this.dateUtil.isValidDate(this.minDate)){var a=this.dateUtil.createDateAtMidnight(this.minDate);this.ngModelCtrl.$setValidity("mindate",e>=a)}if(this.dateUtil.isValidDate(this.maxDate)){var i=this.dateUtil.createDateAtMidnight(this.maxDate);this.ngModelCtrl.$setValidity("maxdate",i>=e)}angular.isFunction(this.dateFilter)&&this.ngModelCtrl.$setValidity("filtered",this.dateFilter(e))}else this.ngModelCtrl.$setValidity("valid",null==e);this.ngModelCtrl.$valid||this.inputContainer.classList.add(n)},e.prototype.clearErrorState=function(){this.inputContainer.classList.remove(n),["mindate","maxdate","filtered","valid"].forEach(function(t){this.ngModelCtrl.$setValidity(t,!0)},this)},e.prototype.resizeInputElement=function(){this.inputElement.size=this.inputElement.value.length+a},e.prototype.handleInputEvent=function(){var t=this.inputElement.value,e=t?this.dateLocale.parseDate(t):null;this.dateUtil.setDateTimeToMidnight(e);var a=""==t||this.dateUtil.isValidDate(e)&&this.dateLocale.isDateComplete(t)&&this.isDateEnabled(e);a&&(this.ngModelCtrl.$setViewValue(e),this.date=e),this.updateErrorState(e)},e.prototype.isDateEnabled=function(t){return this.dateUtil.isDateWithinRange(t,this.minDate,this.maxDate)&&(!angular.isFunction(this.dateFilter)||this.dateFilter(t))},e.prototype.attachCalendarPane=function(){var t=this.calendarPane;t.style.transform="",this.$element.addClass("md-datepicker-open");var e=this.inputContainer.getBoundingClientRect(),a=document.body.getBoundingClientRect(),n=e.top-a.top,i=e.left-a.left,l=a.top<0&&0==document.body.scrollTop?-a.top:document.body.scrollTop,d=a.left<0&&0==document.body.scrollLeft?-a.left:document.body.scrollLeft,o=l+this.$window.innerHeight,c=d+this.$window.innerWidth;if(i+s>c){if(c-s>0)i=c-s;else{i=d;var h=this.$window.innerWidth/s;t.style.transform="scale("+h+")"}t.classList.add("md-datepicker-pos-adjusted")}n+r>o&&o-r>l&&(n=o-r,t.classList.add("md-datepicker-pos-adjusted")),t.style.left=i+"px",t.style.top=n+"px",document.body.appendChild(t),this.inputMask.style.left=e.width+"px",this.$$rAF(function(){t.classList.add("md-pane-open")})},e.prototype.detachCalendarPane=function(){this.$element.removeClass("md-datepicker-open"),this.calendarPane.classList.remove("md-pane-open"),this.calendarPane.classList.remove("md-datepicker-pos-adjusted"),this.isCalendarOpen&&this.$mdUtil.enableScrolling(),this.calendarPane.parentNode&&this.calendarPane.parentNode.removeChild(this.calendarPane)},e.prototype.openCalendarPane=function(t){if(!this.isCalendarOpen&&!this.isDisabled){this.isCalendarOpen=!0,this.calendarPaneOpenedFrom=t.target,this.$mdUtil.disableScrollAround(this.calendarPane),this.attachCalendarPane(),this.focusCalendar();var e=this;this.$mdUtil.nextTick(function(){e.documentElement.on("click touchstart",e.bodyClickHandler)},!1),window.addEventListener("resize",this.windowResizeHandler)}},e.prototype.closeCalendarPane=function(){this.isCalendarOpen&&(this.detachCalendarPane(),this.isCalendarOpen=!1,this.calendarPaneOpenedFrom.focus(),this.calendarPaneOpenedFrom=null,this.ngModelCtrl.$setTouched(),this.documentElement.off("click touchstart",this.bodyClickHandler),window.removeEventListener("resize",this.windowResizeHandler))},e.prototype.getCalendarCtrl=function(){return angular.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar")},e.prototype.focusCalendar=function(){var t=this;this.$mdUtil.nextTick(function(){t.getCalendarCtrl().focus()},!1)},e.prototype.setFocused=function(t){t||this.ngModelCtrl.$setTouched(),this.isFocused=t},e.prototype.handleBodyClick=function(t){if(this.isCalendarOpen){var e=this.$mdUtil.getClosest(t.target,"md-calendar");e||this.closeCalendarPane(),this.$scope.$digest()}}}(),function(){"use strict";angular.module("material.components.datepicker").factory("$$mdDateUtil",function(){function t(t){return new Date(t.getFullYear(),t.getMonth(),1)}function e(t){return new Date(t.getFullYear(),t.getMonth()+1,0).getDate()}function a(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function n(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function i(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()}function r(t,e){return t.getDate()==e.getDate()&&i(t,e)}function s(t,e){var n=a(t);return i(n,e)}function l(t,e){var a=n(t);return i(e,a)}function d(t,e){return D((t.getTime()+e.getTime())/2)}function o(e){var a=t(e);return Math.floor((a.getDay()+e.getDate()-1)/7)}function c(t,e){return new Date(t.getFullYear(),t.getMonth(),t.getDate()+e)}function h(t,a){var n=new Date(t.getFullYear(),t.getMonth()+a,1),i=e(n);return i<t.getDate()?n.setDate(i):n.setDate(t.getDate()),n}function u(t,e){return 12*(e.getFullYear()-t.getFullYear())+(e.getMonth()-t.getMonth())}function m(t){return new Date(t.getFullYear(),t.getMonth(),e(t))}function p(t){return null!=t&&t.getTime&&!isNaN(t.getTime())}function f(t){p(t)&&t.setHours(0,0,0,0)}function D(t){var e;return e=angular.isUndefined(t)?new Date:new Date(t),f(e),e}function g(t,e,a){var n=D(t),i=p(e)?D(e):null,r=p(a)?D(a):null;return(!i||n>=i)&&(!r||r>=n)}return{getFirstDateOfMonth:t,getNumberOfDaysInMonth:e,getDateInNextMonth:a,getDateInPreviousMonth:n,isInNextMonth:s,isInPreviousMonth:l,getDateMidpoint:d,isSameMonthAndYear:i,getWeekOfMonth:o,incrementDays:c,incrementMonths:h,getLastDateOfMonth:m,isSameDay:r,getMonthDistance:u,isValidDate:p,setDateTimeToMidnight:f,createDateAtMidnight:D,isDateWithinRange:g}})}(),ng.material.components.datepicker=angular.module("material.components.datepicker");