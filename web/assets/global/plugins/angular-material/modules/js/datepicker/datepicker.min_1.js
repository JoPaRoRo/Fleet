/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v1.1.0-rc4-master-c81f9f1
 */
!function(t,e,a){"use strict";!function(){function t(){return{template:'<table aria-hidden="true" class="md-calendar-day-header"><thead></thead></table><div class="md-calendar-scroll-mask"><md-virtual-repeat-container class="md-calendar-scroll-container" md-offset-size="'+(i-n)+'"><table role="grid" tabindex="0" class="md-calendar" aria-readonly="true"><tbody role="rowgroup" md-virtual-repeat="i in ctrl.items" md-calendar-month md-month-offset="$index" class="md-calendar-month" md-start-index="ctrl.getSelectedMonthIndex()" md-item-size="'+n+'"></tbody></table></md-virtual-repeat-container></div>',scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",dateFilter:"=mdDateFilter"},require:["ngModel","mdCalendar"],controller:a,controllerAs:"ctrl",bindToController:!0,link:function(t,e,a,n){var i=n[0],r=n[1];r.configureNgModel(i)}}}function a(t,e,a,n,i,r,s,d,o,c,h){if(s(t),this.items={length:2e3},this.maxDate&&this.minDate){var u=d.getMonthDistance(this.minDate,this.maxDate)+1;u=Math.max(u,1),u+=1,this.items.length=u}if(this.$animate=n,this.$q=i,this.$mdInkRipple=c,this.$mdUtil=h,this.keyCode=r.KEY_CODE,this.dateUtil=d,this.dateLocale=o,this.$element=t,this.$scope=a,this.calendarElement=t[0].querySelector(".md-calendar"),this.calendarScroller=t[0].querySelector(".md-virtual-repeat-scroller"),this.today=this.dateUtil.createDateAtMidnight(),this.firstRenderableDate=this.dateUtil.incrementMonths(this.today,-this.items.length/2),this.minDate&&this.minDate>this.firstRenderableDate)this.firstRenderableDate=this.minDate;else if(this.maxDate){this.items.length-2;this.firstRenderableDate=this.dateUtil.incrementMonths(this.maxDate,-(this.items.length-2))}this.id=l++,this.ngModelCtrl=null,this.selectedDate=null,this.displayDate=null,this.focusDate=null,this.isInitialized=!1,this.isMonthTransitionInProgress=!1,e.tabindex||t.attr("tabindex","-1");var m=this;this.cellClickHandler=function(){var t=this;this.hasAttribute("data-timestamp")&&a.$apply(function(){var e=Number(t.getAttribute("data-timestamp"));m.setNgModelValue(m.dateUtil.createDateAtMidnight(e))})},this.attachCalendarEventListeners()}e.module("material.components.datepicker",["material.core","material.components.icon","material.components.virtualRepeat"]).directive("mdCalendar",t);var n=265,i=45,r="md-calendar-selected-date",s="md-focus",l=0;a.$inject=["$element","$attrs","$scope","$animate","$q","$mdConstant","$mdTheming","$$mdDateUtil","$mdDateLocale","$mdInkRipple","$mdUtil"],a.prototype.configureNgModel=function(t){this.ngModelCtrl=t;var e=this;t.$render=function(){e.changeSelectedDate(e.ngModelCtrl.$viewValue)}},a.prototype.buildInitialCalendarDisplay=function(){this.buildWeekHeader(),this.hideVerticalScrollbar(),this.displayDate=this.selectedDate||this.today,this.isInitialized=!0},a.prototype.hideVerticalScrollbar=function(){var t=this.$element[0],e=t.querySelector(".md-calendar-scroll-mask"),a=this.calendarScroller,n=t.querySelector(".md-calendar-day-header").clientWidth,i=a.offsetWidth-a.clientWidth;e.style.width=n+"px",a.style.width=n+i+"px",a.style.paddingRight=i+"px"},a.prototype.attachCalendarEventListeners=function(){this.$element.on("keydown",e.bind(this,this.handleKeyEvent))},a.prototype.handleKeyEvent=function(t){var e=this;this.$scope.$apply(function(){if(t.which==e.keyCode.ESCAPE||t.which==e.keyCode.TAB)return e.$scope.$emit("md-calendar-close"),void(t.which==e.keyCode.TAB&&t.preventDefault());if(t.which===e.keyCode.ENTER)return e.setNgModelValue(e.displayDate),void t.preventDefault();var a=e.getFocusDateFromKeyEvent(t);a&&(a=e.boundDateByMinAndMax(a),t.preventDefault(),t.stopPropagation(),e.changeDisplayDate(a).then(function(){e.focus(a)}))})},a.prototype.getFocusDateFromKeyEvent=function(t){var e=this.dateUtil,a=this.keyCode;switch(t.which){case a.RIGHT_ARROW:return e.incrementDays(this.displayDate,1);case a.LEFT_ARROW:return e.incrementDays(this.displayDate,-1);case a.DOWN_ARROW:return t.metaKey?e.incrementMonths(this.displayDate,1):e.incrementDays(this.displayDate,7);case a.UP_ARROW:return t.metaKey?e.incrementMonths(this.displayDate,-1):e.incrementDays(this.displayDate,-7);case a.PAGE_DOWN:return e.incrementMonths(this.displayDate,1);case a.PAGE_UP:return e.incrementMonths(this.displayDate,-1);case a.HOME:return e.getFirstDateOfMonth(this.displayDate);case a.END:return e.getLastDateOfMonth(this.displayDate);default:return null}},a.prototype.getSelectedMonthIndex=function(){return this.dateUtil.getMonthDistance(this.firstRenderableDate,this.selectedDate||this.today)},a.prototype.scrollToMonth=function(t){if(this.dateUtil.isValidDate(t)){var e=this.dateUtil.getMonthDistance(this.firstRenderableDate,t);this.calendarScroller.scrollTop=e*n}},a.prototype.setNgModelValue=function(t){this.$scope.$emit("md-calendar-change",t),this.ngModelCtrl.$setViewValue(t),this.ngModelCtrl.$render()},a.prototype.focus=function(t){var e=t||this.selectedDate||this.today,a=this.calendarElement.querySelector(".md-focus");a&&a.classList.remove(s);var n=this.getDateId(e),i=document.getElementById(n);i?(i.classList.add(s),i.focus()):this.focusDate=e},a.prototype.boundDateByMinAndMax=function(t){var e=t;return this.minDate&&t<this.minDate&&(e=new Date(this.minDate.getTime())),this.maxDate&&t>this.maxDate&&(e=new Date(this.maxDate.getTime())),e},a.prototype.changeSelectedDate=function(t){var e=this,a=this.selectedDate;this.selectedDate=t,this.changeDisplayDate(t).then(function(){if(a){var n=document.getElementById(e.getDateId(a));n&&(n.classList.remove(r),n.setAttribute("aria-selected","false"))}if(t){var i=document.getElementById(e.getDateId(t));i&&(i.classList.add(r),i.setAttribute("aria-selected","true"))}})},a.prototype.changeDisplayDate=function(t){if(!this.isInitialized)return this.buildInitialCalendarDisplay(),this.$q.when();if(!this.dateUtil.isValidDate(t)||this.isMonthTransitionInProgress)return this.$q.when();this.isMonthTransitionInProgress=!0;var e=this.animateDateChange(t);this.displayDate=t;var a=this;return e.then(function(){a.isMonthTransitionInProgress=!1}),e},a.prototype.animateDateChange=function(t){return this.scrollToMonth(t),this.$q.when()},a.prototype.buildWeekHeader=function(){for(var t=this.dateLocale.firstDayOfWeek,e=this.dateLocale.shortDays,a=document.createElement("tr"),n=0;7>n;n++){var i=document.createElement("th");i.textContent=e[(n+t)%7],a.appendChild(i)}this.$element.find("thead").append(a)},a.prototype.getDateId=function(t){return["md",this.id,t.getFullYear(),t.getMonth(),t.getDate()].join("-")}}(),function(){function t(){return{require:["^^mdCalendar","mdCalendarMonth"],scope:{offset:"=mdMonthOffset"},controller:a,controllerAs:"mdMonthCtrl",bindToController:!0,link:function(t,e,a,n){var i=n[0],r=n[1];r.calendarCtrl=i,r.generateContent(),t.$watch(function(){return r.offset},function(t,e){t!=e&&r.generateContent()})}}}function a(t,e,a){this.dateUtil=e,this.dateLocale=a,this.$element=t,this.calendarCtrl=null,this.offset,this.focusAfterAppend=null}e.module("material.components.datepicker").directive("mdCalendarMonth",t);var n="md-calendar-date-today",i="md-calendar-selected-date",r="md-focus";a.$inject=["$element","$$mdDateUtil","$mdDateLocale"],a.prototype.generateContent=function(){var t=this.calendarCtrl,e=this.dateUtil.incrementMonths(t.firstRenderableDate,this.offset);this.$element.empty(),this.$element.append(this.buildCalendarForMonth(e)),this.focusAfterAppend&&(this.focusAfterAppend.classList.add(r),this.focusAfterAppend.focus(),this.focusAfterAppend=null)},a.prototype.buildDateCell=function(t){var e=this.calendarCtrl,a=document.createElement("td");if(a.tabIndex=-1,a.classList.add("md-calendar-date"),a.setAttribute("role","gridcell"),t){a.setAttribute("tabindex","-1"),a.setAttribute("aria-label",this.dateLocale.longDateFormatter(t)),a.id=e.getDateId(t),a.setAttribute("data-timestamp",t.getTime()),this.dateUtil.isSameDay(t,e.today)&&a.classList.add(n),this.dateUtil.isValidDate(e.selectedDate)&&this.dateUtil.isSameDay(t,e.selectedDate)&&(a.classList.add(i),a.setAttribute("aria-selected","true"));var r=this.dateLocale.dates[t.getDate()];if(this.isDateEnabled(t)){var s=document.createElement("span");a.appendChild(s),s.classList.add("md-calendar-date-selection-indicator"),s.textContent=r,a.addEventListener("click",e.cellClickHandler),e.focusDate&&this.dateUtil.isSameDay(t,e.focusDate)&&(this.focusAfterAppend=a)}else a.classList.add("md-calendar-date-disabled"),a.textContent=r}return a},a.prototype.isDateEnabled=function(t){return this.dateUtil.isDateWithinRange(t,this.calendarCtrl.minDate,this.calendarCtrl.maxDate)&&(!e.isFunction(this.calendarCtrl.dateFilter)||this.calendarCtrl.dateFilter(t))},a.prototype.buildDateRow=function(t){var e=document.createElement("tr");return e.setAttribute("role","row"),e.setAttribute("aria-label",this.dateLocale.weekNumberFormatter(t)),e},a.prototype.buildCalendarForMonth=function(t){var e=this.dateUtil.isValidDate(t)?t:new Date,a=this.dateUtil.getFirstDateOfMonth(e),n=this.getLocaleDay_(a),i=this.dateUtil.getNumberOfDaysInMonth(e),r=document.createDocumentFragment(),s=1,l=this.buildDateRow(s);r.appendChild(l);var d=this.offset===this.calendarCtrl.items.length-1,o=0,c=document.createElement("td");if(c.classList.add("md-calendar-month-label"),this.calendarCtrl.maxDate&&a>this.calendarCtrl.maxDate&&c.classList.add("md-calendar-month-label-disabled"),c.textContent=this.dateLocale.monthHeaderFormatter(e),2>=n){c.setAttribute("colspan","7");var h=this.buildDateRow();if(h.appendChild(c),r.insertBefore(h,l),d)return r}else o=2,c.setAttribute("colspan","2"),l.appendChild(c);for(var u=o;n>u;u++)l.appendChild(this.buildDateCell());for(var m=n,p=a,f=1;i>=f;f++){if(7===m){if(d)return r;m=0,s++,l=this.buildDateRow(s),r.appendChild(l)}p.setDate(f);var D=this.buildDateCell(p);l.appendChild(D),m++}for(;l.childNodes.length<7;)l.appendChild(this.buildDateCell());for(;r.childNodes.length<6;){for(var g=this.buildDateRow(),u=0;7>u;u++)g.appendChild(this.buildDateCell());r.appendChild(g)}return r},a.prototype.getLocaleDay_=function(t){return(t.getDay()+(7-this.dateLocale.firstDayOfWeek))%7}}(),function(){e.module("material.components.datepicker").config(["$provide",function(t){function e(){this.months=null,this.shortMonths=null,this.days=null,this.shortDays=null,this.dates=null,this.firstDayOfWeek=0,this.formatDate=null,this.parseDate=null,this.monthHeaderFormatter=null,this.weekNumberFormatter=null,this.longDateFormatter=null,this.msgCalendar="",this.msgOpenCalendar=""}e.prototype.$get=function(t){function e(t){if(!t)return"";var e=t.toLocaleTimeString(),a=t;return 0!=t.getHours()||-1===e.indexOf("11:")&&-1===e.indexOf("23:")||(a=new Date(t.getFullYear(),t.getMonth(),t.getDate(),1,0,0)),a.toLocaleDateString()}function a(t){return new Date(t)}function n(t){t=t.trim();var e=/^(([a-zA-Z]{3,}|[0-9]{1,4})([ \.,]+|[\/\-])){2}([a-zA-Z]{3,}|[0-9]{1,4})$/;return e.test(t)}function i(t){return u.shortMonths[t.getMonth()]+" "+t.getFullYear()}function r(t){return"Week "+t}function s(t){return[u.days[t.getDay()],u.months[t.getMonth()],u.dates[t.getDate()],t.getFullYear()].join(" ")}for(var l=t.DATETIME_FORMATS.DAY.map(function(t){return t[0]}),d=Array(32),o=1;31>=o;o++)d[o]=o;var c="Calendar",h="Open calendar",u={months:this.months||t.DATETIME_FORMATS.MONTH,shortMonths:this.shortMonths||t.DATETIME_FORMATS.SHORTMONTH,days:this.days||t.DATETIME_FORMATS.DAY,shortDays:this.shortDays||l,dates:this.dates||d,firstDayOfWeek:this.firstDayOfWeek||0,formatDate:this.formatDate||e,parseDate:this.parseDate||a,isDateComplete:this.isDateComplete||n,monthHeaderFormatter:this.monthHeaderFormatter||i,weekNumberFormatter:this.weekNumberFormatter||r,longDateFormatter:this.longDateFormatter||s,msgCalendar:this.msgCalendar||c,msgOpenCalendar:this.msgOpenCalendar||h};return u},e.prototype.$get.$inject=["$locale"],t.provider("$mdDateLocale",new e)}])}(),function(){function a(){return{template:'<md-button class="md-datepicker-button md-icon-button" type="button" tabindex="-1" aria-hidden="true" ng-click="ctrl.openCalendarPane($event)"><md-icon class="md-datepicker-calendar-icon" md-svg-icon="md-calendar"></md-icon></md-button><div class="md-datepicker-input-container" ng-class="{\'md-datepicker-focused\': ctrl.isFocused}"><input class="md-datepicker-input" aria-haspopup="true" ng-focus="ctrl.setFocused(true)" ng-blur="ctrl.setFocused(false)"><md-button type="button" md-no-ink class="md-datepicker-triangle-button md-icon-button" ng-click="ctrl.openCalendarPane($event)" aria-label="{{::ctrl.dateLocale.msgOpenCalendar}}"><div class="md-datepicker-expand-triangle"></div></md-button></div><div class="md-datepicker-calendar-pane md-whiteframe-z1"><div class="md-datepicker-input-mask"><div class="md-datepicker-input-mask-opaque"></div></div><div class="md-datepicker-calendar"><md-calendar role="dialog" aria-label="{{::ctrl.dateLocale.msgCalendar}}" md-min-date="ctrl.minDate" md-max-date="ctrl.maxDate"md-date-filter="ctrl.dateFilter"ng-model="ctrl.date" ng-if="ctrl.isCalendarOpen"></md-calendar></div></div>',require:["ngModel","mdDatepicker","?^mdInputContainer"],scope:{minDate:"=mdMinDate",maxDate:"=mdMaxDate",placeholder:"@mdPlaceholder",dateFilter:"=mdDateFilter"},controller:n,controllerAs:"ctrl",bindToController:!0,link:function(t,e,a,n){var i=n[0],r=n[1],s=n[2];if(s)throw Error("md-datepicker should not be placed inside md-input-container.");r.configureNgModel(i)}}}function n(t,a,n,i,r,s,l,d,o,c,h,u){this.$compile=i,this.$timeout=r,this.$window=s,this.dateLocale=c,this.dateUtil=h,this.$mdConstant=l,this.$mdUtil=o,this.$$rAF=u,this.documentElement=e.element(document.documentElement),this.ngModelCtrl=null,this.inputElement=a[0].querySelector("input"),this.ngInputElement=e.element(this.inputElement),this.inputContainer=a[0].querySelector(".md-datepicker-input-container"),this.calendarPane=a[0].querySelector(".md-datepicker-calendar-pane"),this.calendarButton=a[0].querySelector(".md-datepicker-button"),this.inputMask=a[0].querySelector(".md-datepicker-input-mask-opaque"),this.$element=a,this.$attrs=n,this.$scope=t,this.date=null,this.isFocused=!1,this.isDisabled,this.setDisabled(a[0].disabled||e.isString(n.disabled)),this.isCalendarOpen=!1,this.calendarPaneOpenedFrom=null,this.calendarPane.id="md-date-pane"+o.nextUid(),d(a),this.bodyClickHandler=e.bind(this,this.handleBodyClick),this.windowResizeHandler=o.debounce(e.bind(this,this.closeCalendarPane),100),n.tabindex||a.attr("tabindex","-1"),this.installPropertyInterceptors(),this.attachChangeListeners(),this.attachInteractionListeners();var m=this;t.$on("$destroy",function(){m.detachCalendarPane()})}e.module("material.components.datepicker").directive("mdDatepicker",a);var i=3,r="md-datepicker-invalid",s=500,l=368,d=360;n.$inject=["$scope","$element","$attrs","$compile","$timeout","$window","$mdConstant","$mdTheming","$mdUtil","$mdDateLocale","$$mdDateUtil","$$rAF"],n.prototype.configureNgModel=function(t){this.ngModelCtrl=t;var e=this;t.$render=function(){var t=e.ngModelCtrl.$viewValue;if(t&&!(t instanceof Date))throw Error("The ng-model for md-datepicker must be a Date instance. Currently the model is a: "+typeof t);e.date=t,e.inputElement.value=e.dateLocale.formatDate(t),e.resizeInputElement(),e.updateErrorState()}},n.prototype.attachChangeListeners=function(){var t=this;t.$scope.$on("md-calendar-change",function(e,a){t.ngModelCtrl.$setViewValue(a),t.date=a,t.inputElement.value=t.dateLocale.formatDate(a),t.closeCalendarPane(),t.resizeInputElement(),t.updateErrorState()}),t.ngInputElement.on("input",e.bind(t,t.resizeInputElement)),t.ngInputElement.on("input",t.$mdUtil.debounce(t.handleInputEvent,s,t))},n.prototype.attachInteractionListeners=function(){var t=this,e=this.$scope,a=this.$mdConstant.KEY_CODE;t.ngInputElement.on("keydown",function(n){n.altKey&&n.keyCode==a.DOWN_ARROW&&(t.openCalendarPane(n),e.$digest())}),e.$on("md-calendar-close",function(){t.closeCalendarPane()})},n.prototype.installPropertyInterceptors=function(){var t=this;if(this.$attrs.ngDisabled){var e=this.$scope.$parent;e&&e.$watch(this.$attrs.ngDisabled,function(e){t.setDisabled(e)})}Object.defineProperty(this,"placeholder",{get:function(){return t.inputElement.placeholder},set:function(e){t.inputElement.placeholder=e||""}})},n.prototype.setDisabled=function(t){this.isDisabled=t,this.inputElement.disabled=t,this.calendarButton.disabled=t},n.prototype.updateErrorState=function(t){var a=t||this.date;if(this.clearErrorState(),this.dateUtil.isValidDate(a)){if(a=this.dateUtil.createDateAtMidnight(a),this.dateUtil.isValidDate(this.minDate)){var n=this.dateUtil.createDateAtMidnight(this.minDate);this.ngModelCtrl.$setValidity("mindate",a>=n)}if(this.dateUtil.isValidDate(this.maxDate)){var i=this.dateUtil.createDateAtMidnight(this.maxDate);this.ngModelCtrl.$setValidity("maxdate",i>=a)}e.isFunction(this.dateFilter)&&this.ngModelCtrl.$setValidity("filtered",this.dateFilter(a))}else this.ngModelCtrl.$setValidity("valid",null==a);this.ngModelCtrl.$valid||this.inputContainer.classList.add(r)},n.prototype.clearErrorState=function(){this.inputContainer.classList.remove(r),["mindate","maxdate","filtered","valid"].forEach(function(t){this.ngModelCtrl.$setValidity(t,!0)},this)},n.prototype.resizeInputElement=function(){this.inputElement.size=this.inputElement.value.length+i},n.prototype.handleInputEvent=function(){var t=this.inputElement.value,e=t?this.dateLocale.parseDate(t):null;this.dateUtil.setDateTimeToMidnight(e);var a=""==t||this.dateUtil.isValidDate(e)&&this.dateLocale.isDateComplete(t)&&this.isDateEnabled(e);a&&(this.ngModelCtrl.$setViewValue(e),this.date=e),this.updateErrorState(e)},n.prototype.isDateEnabled=function(t){return this.dateUtil.isDateWithinRange(t,this.minDate,this.maxDate)&&(!e.isFunction(this.dateFilter)||this.dateFilter(t))},n.prototype.attachCalendarPane=function(){var t=this.calendarPane;t.style.transform="",this.$element.addClass("md-datepicker-open");var e=this.inputContainer.getBoundingClientRect(),a=document.body.getBoundingClientRect(),n=e.top-a.top,i=e.left-a.left,r=a.top<0&&0==document.body.scrollTop?-a.top:document.body.scrollTop,s=a.left<0&&0==document.body.scrollLeft?-a.left:document.body.scrollLeft,o=r+this.$window.innerHeight,c=s+this.$window.innerWidth;if(i+d>c){if(c-d>0)i=c-d;else{i=s;var h=this.$window.innerWidth/d;t.style.transform="scale("+h+")"}t.classList.add("md-datepicker-pos-adjusted")}n+l>o&&o-l>r&&(n=o-l,t.classList.add("md-datepicker-pos-adjusted")),t.style.left=i+"px",t.style.top=n+"px",document.body.appendChild(t),this.inputMask.style.left=e.width+"px",this.$$rAF(function(){t.classList.add("md-pane-open")})},n.prototype.detachCalendarPane=function(){this.$element.removeClass("md-datepicker-open"),this.calendarPane.classList.remove("md-pane-open"),this.calendarPane.classList.remove("md-datepicker-pos-adjusted"),this.isCalendarOpen&&this.$mdUtil.enableScrolling(),this.calendarPane.parentNode&&this.calendarPane.parentNode.removeChild(this.calendarPane)},n.prototype.openCalendarPane=function(e){if(!this.isCalendarOpen&&!this.isDisabled){this.isCalendarOpen=!0,this.calendarPaneOpenedFrom=e.target,this.$mdUtil.disableScrollAround(this.calendarPane),this.attachCalendarPane(),this.focusCalendar();var a=this;this.$mdUtil.nextTick(function(){a.documentElement.on("click touchstart",a.bodyClickHandler)},!1),t.addEventListener("resize",this.windowResizeHandler)}},n.prototype.closeCalendarPane=function(){this.isCalendarOpen&&(this.detachCalendarPane(),this.isCalendarOpen=!1,this.calendarPaneOpenedFrom.focus(),this.calendarPaneOpenedFrom=null,this.ngModelCtrl.$setTouched(),this.documentElement.off("click touchstart",this.bodyClickHandler),t.removeEventListener("resize",this.windowResizeHandler))},n.prototype.getCalendarCtrl=function(){return e.element(this.calendarPane.querySelector("md-calendar")).controller("mdCalendar")},n.prototype.focusCalendar=function(){var t=this;this.$mdUtil.nextTick(function(){t.getCalendarCtrl().focus()},!1)},n.prototype.setFocused=function(t){t||this.ngModelCtrl.$setTouched(),this.isFocused=t},n.prototype.handleBodyClick=function(t){if(this.isCalendarOpen){var e=this.$mdUtil.getClosest(t.target,"md-calendar");e||this.closeCalendarPane(),this.$scope.$digest()}}}(),function(){e.module("material.components.datepicker").factory("$$mdDateUtil",function(){function t(t){return new Date(t.getFullYear(),t.getMonth(),1)}function a(t){return new Date(t.getFullYear(),t.getMonth()+1,0).getDate()}function n(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function i(t){return new Date(t.getFullYear(),t.getMonth()-1,1)}function r(t,e){return t.getFullYear()===e.getFullYear()&&t.getMonth()===e.getMonth()}function s(t,e){return t.getDate()==e.getDate()&&r(t,e)}function l(t,e){var a=n(t);return r(a,e)}function d(t,e){var a=i(t);return r(e,a)}function o(t,e){return g((t.getTime()+e.getTime())/2)}function c(e){var a=t(e);return Math.floor((a.getDay()+e.getDate()-1)/7)}function h(t,e){return new Date(t.getFullYear(),t.getMonth(),t.getDate()+e)}function u(t,e){var n=new Date(t.getFullYear(),t.getMonth()+e,1),i=a(n);return i<t.getDate()?n.setDate(i):n.setDate(t.getDate()),n}function m(t,e){return 12*(e.getFullYear()-t.getFullYear())+(e.getMonth()-t.getMonth())}function p(t){return new Date(t.getFullYear(),t.getMonth(),a(t))}function f(t){return null!=t&&t.getTime&&!isNaN(t.getTime())}function D(t){f(t)&&t.setHours(0,0,0,0)}function g(t){var a;return a=e.isUndefined(t)?new Date:new Date(t),D(a),a}function y(t,e,a){var n=g(t),i=f(e)?g(e):null,r=f(a)?g(a):null;return(!i||n>=i)&&(!r||r>=n)}return{getFirstDateOfMonth:t,getNumberOfDaysInMonth:a,getDateInNextMonth:n,getDateInPreviousMonth:i,isInNextMonth:l,isInPreviousMonth:d,getDateMidpoint:o,isSameMonthAndYear:r,getWeekOfMonth:c,incrementDays:h,incrementMonths:u,getLastDateOfMonth:p,isSameDay:s,getMonthDistance:m,isValidDate:f,setDateTimeToMidnight:D,createDateAtMidnight:g,isDateWithinRange:y}})}()}(window,window.angular);