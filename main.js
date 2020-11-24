(()=>{"use strict";const e=e=>{const t=document.createElement("div");t.classList.add("tab"),t.classList.add("unselected");const n=document.createElement("span");n.innerText=e.title;const a=document.createElement("i");return a.classList.add("fas"),a.classList.add("fa-times"),t.appendChild(n),t.appendChild(a),t.addEventListener("click",(()=>{Ye.selectTodo(e)})),a.addEventListener("click",(t=>{t.stopPropagation(),Ye.closeTodo(e)})),t};class t{constructor(e="",t=[]){this._name=e,this._todos=t,this._isOpen=!1}get name(){return this._name}get todos(){return this._todos}get isEmpty(){return this._todos<=0}get isOpen(){return this._isOpen}set name(e){this._name=e}set isOpen(e){this._isOpen=e}addTodo(e){this._todos.push(e)}loadTodos(e){this._todos=e}removeTodo(e){let t=this._todos.indexOf(e);this._todos.splice(t,1)}static fromObject(e){return Object.assign(new t,e)}}function n(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function a(e){n(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}class r{constructor(e,t,n=new Map){this._title=e,this._notes=t,this._checklist=n,this._priority="0"}get title(){return this._title}get notes(){return this._notes}get priority(){switch(this._priority){case"0":return"none";case"1":return"low";case"2":return"medium";case"3":return"high";default:return"invalid"}}get checklist(){return this._checklist}get dueDate(){return this._dueDate}set title(e){this._title=e}set notes(e){this._notes=e}set checklist(e){this._checklist=e}set dueDate(e){this._dueDate=e}set priority(e){e>=0&&e<=3&&(this._priority=e)}addChecklistItem(e,t){_checklist.set(e,t)}removeChecklistItem(e){_checklist.remove(e)}static fromObject(e){return e.checklist=new Map(JSON.parse(e._checklist)),e.dueDate=function(e){if(n(1,arguments),"string"==typeof e){var t=e.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|\+00:?00)?/);return t?new Date(Date.UTC(+t[1],t[2]-1,+t[3],+t[4],+t[5],+t[6],+((t[7]||"0")+"00").substring(0,3))):new Date(NaN)}return a(e)}(e._dueDate),Object.assign(new r,e)}}const i=(()=>{let e=[];function n(t){t.id=e.length,e.push(t)}return{addProject:n,getProject:function(t){return e[t]},getProjects:function(){return e},getNum:function(){return e.length},loadProjects:function(a){e=[],a.forEach((e=>{const a=t.fromObject(e),i=[];a.todos.forEach((e=>{i.push(r.fromObject(e))})),a.loadTodos(i),n(a)}))}}})();class o{static RemoveChildNodes(e){for(;e.firstChild;)e.removeChild(e.firstChild)}static CreateElementFromHTML(e){const t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}}const s=(()=>{const e=document.getElementById("display-panel"),t=document.getElementById("panel-content");function n(){return!e.classList.contains("hidden")}function a(){e.classList.add("hidden"),o.RemoveChildNodes(t)}return e.getElementsByClassName("top-bar")[0].getElementsByClassName("fa-times")[0].addEventListener("click",(()=>{a()})),{confirmationPanel:function(r,i){if(n())return;e.classList.add("info"),e.classList.remove("hidden");const o=document.createElement("div");o.innerText=r;const s=document.createElement("div");s.classList.add("buttons");const c=document.createElement("button");c.classList.add("btn","btn-error"),c.innerText="Delete";const d=document.createElement("button");return d.classList.add("btn"),d.innerText="Cancel",s.appendChild(c),s.appendChild(d),t.appendChild(o),t.appendChild(s),c.addEventListener("click",(()=>{i(),a()})),d.addEventListener("click",(({target:e})=>{a()})),t},createPanel:function(r,i){if(n())return;e.classList.add("info"),e.classList.remove("hidden");const o=document.createElement("label");o.classList.add("align-left"),o.innerText=r;const s=document.createElement("input");s.type="text",s.placeholder="Title";const c=document.createElement("div");c.classList.add("buttons");const d=document.createElement("button");d.classList.add("btn","btn-success"),d.innerText="Create";const u=document.createElement("button");return u.classList.add("btn"),u.innerText="Cancel",c.appendChild(d),c.appendChild(u),t.appendChild(o),t.appendChild(s),t.appendChild(c),d.addEventListener("click",(()=>{i(s.value),a()})),u.addEventListener("click",(({target:e})=>{a()})),t}}})();function c(e){n(1,arguments);var t=a(e);return!isNaN(t)}var d=6e4;function u(e){return e.getTime()%d}function l(e){var t=new Date(e.getTime()),n=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var a=n>0?(d+u(t))%d:u(t);return n*d+a}function h(e){n(1,arguments);var t=a(e);return t.setHours(0,0,0,0),t}var m=864e5;function f(e,t){n(2,arguments);var a=h(e),r=h(t),i=a.getTime()-l(a),o=r.getTime()-l(r);return Math.round((i-o)/m)}function g(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function p(e,t){n(2,arguments);var r=a(e),i=a(t),o=g(r,i),s=Math.abs(f(r,i));r.setDate(r.getDate()-o*s);var c=g(r,i)===-o,d=o*(s-c);return 0===d?0:d}function v(e,t){n(2,arguments);var r=a(e),i=a(t),o=r.getTime()-i.getTime();return o<0?-1:o>0?1:o}function w(e,t){n(2,arguments);var r=a(e),i=a(t),o=r.getFullYear()-i.getFullYear(),s=r.getMonth()-i.getMonth();return 12*o+s}function y(e,t){n(2,arguments);var r=a(e),i=a(t),o=v(r,i),s=Math.abs(w(r,i));r.setMonth(r.getMonth()-o*s);var c=v(r,i)===-o,d=o*(s-c);return 0===d?0:d}function b(e,t){n(2,arguments);var r=a(e),i=a(t);return r.getTime()-i.getTime()}function T(e,t){n(2,arguments);var a=b(e,t)/1e3;return a>0?Math.floor(a):Math.ceil(a)}var C={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function D(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var E,M={date:D({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:D({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:D({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},L={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function k(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var s=e.defaultWidth,c=r.width?String(r.width):e.defaultWidth;a=e.values[c]||e.values[s]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function x(e){return function(t,n){var a=String(t),r=n||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],s=a.match(o);if(!s)return null;var c,d=s[0],u=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return c="[object Array]"===Object.prototype.toString.call(u)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(d))return n}(u):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(d))return n}(u),c=e.valueCallback?e.valueCallback(c):c,{value:c=r.valueCallback?r.valueCallback(c):c,rest:a.slice(d.length)}}}const P={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"==typeof C[e]?C[e]:1===t?C[e].one:C[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:M,formatRelative:function(e,t,n,a){return L[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:k({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:k({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:k({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:k({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:k({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(E={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),a=t||{},r=n.match(E.matchPattern);if(!r)return null;var i=r[0],o=n.match(E.parsePattern);if(!o)return null;var s=E.valueCallback?E.valueCallback(o[0]):o[0];return{value:s=a.valueCallback?a.valueCallback(s):s,rest:n.slice(i.length)}}),era:x({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:x({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:x({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:x({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:x({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function S(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})t.hasOwnProperty(n)&&(e[n]=t[n]);return e}({},e)}var N=1440,U=43200;function O(e,t,r){n(2,arguments);var i=r||{},o=i.locale||P;if(!o.formatDistance)throw new RangeError("locale must contain formatDistance property");var s=v(e,t);if(isNaN(s))throw new RangeError("Invalid time value");var c,d,u=S(i);u.addSuffix=Boolean(i.addSuffix),u.comparison=s,s>0?(c=a(t),d=a(e)):(c=a(e),d=a(t));var h,m=T(d,c),f=(l(d)-l(c))/1e3,g=Math.round((m-f)/60);if(g<2)return i.includeSeconds?m<5?o.formatDistance("lessThanXSeconds",5,u):m<10?o.formatDistance("lessThanXSeconds",10,u):m<20?o.formatDistance("lessThanXSeconds",20,u):m<40?o.formatDistance("halfAMinute",null,u):m<60?o.formatDistance("lessThanXMinutes",1,u):o.formatDistance("xMinutes",1,u):0===g?o.formatDistance("lessThanXMinutes",1,u):o.formatDistance("xMinutes",g,u);if(g<45)return o.formatDistance("xMinutes",g,u);if(g<90)return o.formatDistance("aboutXHours",1,u);if(g<N){var p=Math.round(g/60);return o.formatDistance("aboutXHours",p,u)}if(g<2520)return o.formatDistance("xDays",1,u);if(g<U){var w=Math.round(g/N);return o.formatDistance("xDays",w,u)}if(g<86400)return h=Math.round(g/U),o.formatDistance("aboutXMonths",h,u);if((h=y(d,c))<12){var b=Math.round(g/U);return o.formatDistance("xMonths",b,u)}var C=h%12,D=Math.floor(h/12);return C<3?o.formatDistance("aboutXYears",D,u):C<9?o.formatDistance("overXYears",D,u):o.formatDistance("almostXYears",D+1,u)}function j(e,t){return n(1,arguments),O(e,Date.now(),t)}function Y(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function W(e,t){n(2,arguments);var r=a(e).getTime(),i=Y(t);return new Date(r+i)}function F(e,t){n(2,arguments);var a=Y(t);return W(e,-a)}function H(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}const q=function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return H("yy"===t?a%100:a,t.length)},_=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):H(n+1,2)},X=function(e,t){return H(e.getUTCDate(),t.length)},B=function(e,t){return H(e.getUTCHours()%12||12,t.length)},z=function(e,t){return H(e.getUTCHours(),t.length)},I=function(e,t){return H(e.getUTCMinutes(),t.length)},R=function(e,t){return H(e.getUTCSeconds(),t.length)},Q=function(e,t){var n=t.length,a=e.getUTCMilliseconds();return H(Math.floor(a*Math.pow(10,n-3)),t.length)};var A=864e5;function G(e){n(1,arguments);var t=1,r=a(e),i=r.getUTCDay(),o=(i<t?7:0)+i-t;return r.setUTCDate(r.getUTCDate()-o),r.setUTCHours(0,0,0,0),r}function J(e){n(1,arguments);var t=a(e),r=t.getUTCFullYear(),i=new Date(0);i.setUTCFullYear(r+1,0,4),i.setUTCHours(0,0,0,0);var o=G(i),s=new Date(0);s.setUTCFullYear(r,0,4),s.setUTCHours(0,0,0,0);var c=G(s);return t.getTime()>=o.getTime()?r+1:t.getTime()>=c.getTime()?r:r-1}function $(e){n(1,arguments);var t=J(e),a=new Date(0);a.setUTCFullYear(t,0,4),a.setUTCHours(0,0,0,0);var r=G(a);return r}var Z=6048e5;function V(e,t){n(1,arguments);var r=t||{},i=r.locale,o=i&&i.options&&i.options.weekStartsOn,s=null==o?0:Y(o),c=null==r.weekStartsOn?s:Y(r.weekStartsOn);if(!(c>=0&&c<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=a(e),u=d.getUTCDay(),l=(u<c?7:0)+u-c;return d.setUTCDate(d.getUTCDate()-l),d.setUTCHours(0,0,0,0),d}function K(e,t){n(1,arguments);var r=a(e,t),i=r.getUTCFullYear(),o=t||{},s=o.locale,c=s&&s.options&&s.options.firstWeekContainsDate,d=null==c?1:Y(c),u=null==o.firstWeekContainsDate?d:Y(o.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=new Date(0);l.setUTCFullYear(i+1,0,u),l.setUTCHours(0,0,0,0);var h=V(l,t),m=new Date(0);m.setUTCFullYear(i,0,u),m.setUTCHours(0,0,0,0);var f=V(m,t);return r.getTime()>=h.getTime()?i+1:r.getTime()>=f.getTime()?i:i-1}function ee(e,t){n(1,arguments);var a=t||{},r=a.locale,i=r&&r.options&&r.options.firstWeekContainsDate,o=null==i?1:Y(i),s=null==a.firstWeekContainsDate?o:Y(a.firstWeekContainsDate),c=K(e,t),d=new Date(0);d.setUTCFullYear(c,0,s),d.setUTCHours(0,0,0,0);var u=V(d,t);return u}var te=6048e5;function ne(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=t||"";return n+String(r)+o+H(i,2)}function ae(e,t){return e%60==0?(e>0?"-":"+")+H(Math.abs(e)/60,2):re(e,t)}function re(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+H(Math.floor(r/60),2)+n+H(r%60,2)}const ie={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return q(e,t)},Y:function(e,t,n,a){var r=K(e,a),i=r>0?r:1-r;return"YY"===t?H(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):H(i,t.length)},R:function(e,t){return H(J(e),t.length)},u:function(e,t){return H(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return H(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return H(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return _(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return H(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,r,i){var o=function(e,t){n(1,arguments);var r=a(e),i=V(r,t).getTime()-ee(r,t).getTime();return Math.round(i/te)+1}(e,i);return"wo"===t?r.ordinalNumber(o,{unit:"week"}):H(o,t.length)},I:function(e,t,r){var i=function(e){n(1,arguments);var t=a(e),r=G(t).getTime()-$(t).getTime();return Math.round(r/Z)+1}(e);return"Io"===t?r.ordinalNumber(i,{unit:"week"}):H(i,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):X(e,t)},D:function(e,t,r){var i=function(e){n(1,arguments);var t=a(e),r=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var i=t.getTime(),o=r-i;return Math.floor(o/A)+1}(e);return"Do"===t?r.ordinalNumber(i,{unit:"dayOfYear"}):H(i,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return H(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return H(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return H(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",t){case"b":case"bb":case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return B(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):z(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):H(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):H(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):I(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):R(e,t)},S:function(e,t){return Q(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return ae(r);case"XXXX":case"XX":return re(r);case"XXXXX":case"XXX":default:return re(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return ae(r);case"xxxx":case"xx":return re(r);case"xxxxx":case"xxx":default:return re(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ne(r,":");case"OOOO":default:return"GMT"+re(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ne(r,":");case"zzzz":default:return"GMT"+re(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return H(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return H((a._originalDate||e).getTime(),t.length)}};function oe(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function se(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}const ce={p:se,P:function(e,t){var n,a=e.match(/(P+)(p+)?/),r=a[1],i=a[2];if(!i)return oe(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",oe(r,t)).replace("{{time}}",se(i,t))}};var de=["D","DD"],ue=["YY","YYYY"];function le(e){return-1!==de.indexOf(e)}function he(e){return-1!==ue.indexOf(e)}function me(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var fe=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ge=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,pe=/^'([^]*?)'?$/,ve=/''/g,we=/[a-zA-Z]/;function ye(e){return e.match(pe)[1].replace(ve,"'")}var be=36e5,Te={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Ce=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,De=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Ee=/^([+-])(\d{2})(?::?(\d{2}))?$/;function Me(e){var t,n={},a=e.split(Te.dateTimeDelimiter);if(a.length>2)return n;if(/:/.test(a[0])?(n.date=null,t=a[0]):(n.date=a[0],t=a[1],Te.timeZoneDelimiter.test(n.date)&&(n.date=e.split(Te.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var r=Te.timezone.exec(t);r?(n.time=t.replace(r[1],""),n.timezone=r[1]):n.time=t}return n}function Le(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),a=e.match(n);if(!a)return{year:null};var r=a[1]&&parseInt(a[1]),i=a[2]&&parseInt(a[2]);return{year:null==i?r:100*i,restDateString:e.slice((a[1]||a[2]).length)}}function ke(e,t){if(null===t)return null;var n=e.match(Ce);if(!n)return null;var a=!!n[4],r=xe(n[1]),i=xe(n[2])-1,o=xe(n[3]),s=xe(n[4]),c=xe(n[5])-1;if(a)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,s,c)?function(e,t,n){var a=new Date(0);a.setUTCFullYear(e,0,4);var r=7*(t-1)+n+1-(a.getUTCDay()||7);return a.setUTCDate(a.getUTCDate()+r),a}(t,s,c):new Date(NaN);var d=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(Ue[t]||(Oe(e)?29:28))}(t,i,o)&&function(e,t){return t>=1&&t<=(Oe(e)?366:365)}(t,r)?(d.setUTCFullYear(t,i,Math.max(r,o)),d):new Date(NaN)}function xe(e){return e?parseInt(e):1}function Pe(e){var t=e.match(De);if(!t)return null;var n=Se(t[1]),a=Se(t[2]),r=Se(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,a,r)?n*be+6e4*a+1e3*r:NaN}function Se(e){return e&&parseFloat(e.replace(",","."))||0}function Ne(e){if("Z"===e)return 0;var t=e.match(Ee);if(!t)return 0;var n="+"===t[1]?-1:1,a=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,r)?n*(a*be+6e4*r):NaN}var Ue=[31,null,31,30,31,30,31,31,30,31,30,31];function Oe(e){return e%400==0||e%4==0&&e%100}const je=(()=>{const e=e=>{const t=document.createElement("div");t.classList.add("notes-container");const n=document.createElement("h3");n.innerText="Notes";const a=document.createElement("textarea");return a.classList.add("notes"),a.value=e.notes,a.addEventListener("focusout",(function(){e.notes=a.value})),t.appendChild(n),t.appendChild(a),t},t=e=>{const t=document.createElement("div");t.classList.add("checklist-container");const n=document.createElement("div");n.classList.add("list-header");const a=document.createElement("h3");a.innerText="Checklist";const i=o.CreateElementFromHTML('<i class="fas fa-plus" aria-hidden="true"></i>');n.appendChild(a),n.appendChild(i);const c=document.createElement("ul");return o.CreateElementFromHTML('<i class="fas fa-check-circle item-icon"></i>'),o.CreateElementFromHTML('<i class="fas fa-times-circle item-icon"></i>'),e.checklist?.size&&e.checklist.forEach((function(t,n){r(e,c,t,n)})),t.appendChild(n),t.appendChild(c),i.addEventListener("click",(()=>{s.createPanel("Enter Checklist Item Title:",(t=>{e.checklist.set(t,!1),je.addChecklistItem(e,c,!1,t)}))})),t};function r(e,t,n,a){const r=document.createElement("li");if(n){r.classList.add("checked");const e=o.CreateElementFromHTML('<i class="fas fa-check-circle item-icon"></i>');r.appendChild(e)}else{r.classList.add("unchecked");const e=o.CreateElementFromHTML('<i class="fas fa-times-circle item-icon"></i>');r.appendChild(e)}r.addEventListener("click",(function({currentTarget:t}){let n=t.classList;const r=t.querySelector(".item-icon");n.contains("checked")?(n.remove("checked"),n.add("unchecked"),r.classList.remove("fa-check-circle"),r.classList.add("fa-times-circle"),e.checklist.set(a,!1)):n.contains("unchecked")&&(n.remove("unchecked"),n.add("checked"),r.classList.add("fa-check-circle"),r.classList.remove("fa-times-circle"),e.checklist.set(a,!0))}));const i=document.createElement("span");i.innerText=a;const c=o.CreateElementFromHTML('<i class="fas fa-times" aria-hidden="true"></i>');c.classList.add("align-right"),c.addEventListener("click",(t=>{t.stopPropagation(),s.confirmationPanel("Are you sure you want to delete this item?",(()=>{e.checklist.delete(a),r.remove()}))})),r.appendChild(i),r.appendChild(c),t.appendChild(r)}function d(e,t){e.classList.remove(...e.classList),e.classList.add("priority-"+t),e.innerText=t}return{generateEditor:r=>{const s=document.getElementById("notes-editor");s.appendChild((n=>{const a=document.getElementById("notes-content"),r=e(n),i=t(n);return a.appendChild(r),a.appendChild(i),a})(r)),s.appendChild((e=>{const t=document.getElementById("notes-details"),r=document.createElement("div");r.id="date-title";let s=document.createElement("h3");c(e.dueDate)?p(e.dueDate,new Date)>=0?s.innerText=`Due Date (Due in ${j(e.dueDate)})`:s.innerText="Due Date (Overdue)":s.innerText="Due Date",r.appendChild(s);const u=document.createElement("input");u.type="date",u.classList.add("due-date"),c(e.dueDate)&&(u.value=function(e,t,r){n(2,arguments);var i=String(t),o=r||{},s=o.locale||P,d=s.options&&s.options.firstWeekContainsDate,u=null==d?1:Y(d),h=null==o.firstWeekContainsDate?u:Y(o.firstWeekContainsDate);if(!(h>=1&&h<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=s.options&&s.options.weekStartsOn,f=null==m?0:Y(m),g=null==o.weekStartsOn?f:Y(o.weekStartsOn);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!s.localize)throw new RangeError("locale must contain localize property");if(!s.formatLong)throw new RangeError("locale must contain formatLong property");var p=a(e);if(!c(p))throw new RangeError("Invalid time value");var v=F(p,l(p)),w={firstWeekContainsDate:h,weekStartsOn:g,locale:s,_originalDate:p};return i.match(ge).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,ce[t])(e,s.formatLong,w):e})).join("").match(fe).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return ye(n);var r=ie[a];if(r)return!o.useAdditionalWeekYearTokens&&he(n)&&me(n,t,e),!o.useAdditionalDayOfYearTokens&&le(n)&&me(n,t,e),r(v,n,s.localize,w);if(a.match(we))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("")}(e.dueDate,"yyyy-MM-dd")),u.addEventListener("change",(({target:t})=>{const r=a(function(e,t){n(1,arguments);var a=t||{},r=null==a.additionalDigits?2:Y(a.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i,o=Me(e);if(o.date){var s=Le(o.date,r);i=ke(s.restDateString,s.year)}if(isNaN(i)||!i)return new Date(NaN);var c,d=i.getTime(),u=0;if(o.time&&(u=Pe(o.time),isNaN(u)||null===u))return new Date(NaN);if(!o.timezone){var l=new Date(d+u),h=new Date(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate(),l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds());return h.setFullYear(l.getUTCFullYear()),h}return c=Ne(o.timezone),isNaN(c)?new Date(NaN):new Date(d+u+c)}(t.value));e.dueDate=r;const i=p(r,new Date);s.innerText=i>=0?`Due Date (Due in ${j(r)})`:"Due Date (Overdue)"}));const h=document.createElement("div");h.id="priority-title",h.appendChild(o.CreateElementFromHTML("<h3>Priority:</h3>"));const m=document.createElement("h3");d(m,e.priority),h.appendChild(m);const f=document.createElement("div");return f.id="priority-selection",f.innerHTML='\n            <button class="priority-high tooltip" data-priority="3">\n                <span class="tooltiptext">High</span>\n            </button>\n            <button class="priority-medium tooltip" data-priority="2">\n                <span class="tooltiptext">Medium</span>\n            </button>\n            <button class="priority-low tooltip" data-priority="1">\n                <span class="tooltiptext">Low</span>\n            </button>\n        ',f.querySelectorAll(".tooltip").forEach((t=>{t.addEventListener("click",(({target:t})=>{const n=t.attributes["data-priority"].value;e.priority=n,d(m,e.priority),Fe.loadProjects(i.getProjects())}))})),t.appendChild(r),t.appendChild(u),t.appendChild(h),t.appendChild(f),t})(r))},clearEditor:()=>{const e=document.getElementById("notes-content");o.RemoveChildNodes(e);const t=document.getElementById("notes-details");o.RemoveChildNodes(t)},addChecklistItem:r}})(),Ye=(()=>{let t,n=[],a=[];const r=document.getElementById("notes-explorer").children[0];function i(e){if(void 0!==t){let e=n.indexOf(t);o(a[e])}let r=n.indexOf(e);o(a[r]),t=e,je.clearEditor(),je.generateEditor(e)}function o(e){let t=e.classList;t.contains("unselected")?(t.remove("unselected"),t.add("selected")):t.contains("selected")&&(t.add("unselected"),t.remove("selected"))}function s(e){return!!n.includes(e)}return{openTodo:function(t){var o;s(t)?i(t):(o=e(t),r.appendChild(o),a.push(o),n.push(t),i(t))},closeTodo:function(e){if(!s(e))return;let r=n.indexOf(e);n.splice(r,1),a[r].remove(),a.splice(r,1),e===t&&0!==n.length?(t=void 0,i(n[n.length-1])):e===t&&(t=void 0,je.clearEditor())},selectTodo:i,isTodoOpen:s}})(),We=(()=>{const e=(e,n)=>{const a=document.createElement("div");a.classList.add("todo-doc"),a.attributes["data-project-id"]=e;const r=document.createElement("div");r.classList.add("priority-icon",n.priority);const i=document.createElement("i");i.classList.add("far"),i.classList.add("fa-file-alt");const c=document.createElement("span");c.innerText=n.title;const d=o.CreateElementFromHTML('<i class="fas fa-times" aria-hidden="true"></i>');return d.classList.add("align-right"),d.addEventListener("click",(a=>{a.stopPropagation(),s.confirmationPanel("Are you sure you want to delete this todo?",(()=>{t(a.target,e,n)}))})),a.appendChild(r),a.appendChild(i),a.appendChild(c),a.appendChild(d),a.addEventListener("click",(()=>{Ye.openTodo(n)})),a},t=(e,t,n)=>{const a=i.getProject(t);Ye.closeTodo(n),a.removeTodo(n),e.parentNode.remove()};return{generateTab:t=>{const n=document.createElement("div");n.classList.add("project-container"),n.attributes["data-projectId"]=t.id;const a=document.createElement("div");a.classList.add("project-title"),t.isOpen?a.classList.add("selected"):a.classList.add("unselected");const c=document.createElement("i");c.classList.add("fas"),t.isOpen?c.classList.add("fa-angle-down"):c.classList.add("fa-angle-right");const d=document.createElement("span");d.innerText=t.name;const u=o.CreateElementFromHTML('<i class="fas fa-plus" aria-hidden="true"></i>');u.classList.add("align-right"),u.addEventListener("click",(e=>{e.stopPropagation(),s.createPanel("Enter todo title:",(e=>{let n=new r(e,"");t.addTodo(n),Fe.loadProjects(i.getProjects()),Ye.openTodo(n)}))})),a.appendChild(c),a.appendChild(d),a.appendChild(u);const l=document.createElement("div");return l.classList.add("list-container"),t.isOpen?l.classList.add("opened"):l.classList.add("closed"),((t,n,a)=>{a.forEach((a=>{t.appendChild(e(n,a))}))})(l,t.id,t.todos),a.addEventListener("click",(({currentTarget:e})=>{((e,t)=>{let n=e.children[0],a=n.classList;a.contains("unselected")?(a.remove("unselected"),a.add("selected"),n.children[0].classList.remove("fa-angle-right"),n.children[0].classList.add("fa-angle-down"),e.children[1].classList.remove("closed"),e.children[1].classList.add("opened"),t.isOpen=!0):a.contains("selected")&&(a.add("unselected"),a.remove("selected"),n.children[0].classList.add("fa-angle-right"),n.children[0].classList.remove("fa-angle-down"),e.children[1].classList.remove("opened"),e.children[1].classList.add("closed"),t.isOpen=!1)})(e.parentNode,t)})),n.appendChild(a),n.appendChild(l),n},deleteTodoLink:t,generateTodoDocLink:e}})(),Fe=(()=>{const e=document.getElementById("project-explorer");return{loadProject:function(t){const n=We.generateTab(t);e.appendChild(n)},loadProjects:function(t){o.RemoveChildNodes(e),t.forEach((t=>{const n=We.generateTab(t);e.appendChild(n)}))}}})();class He{static SaveData(){i.getProjects().forEach((e=>{e.todos.forEach((e=>{e.checklist=JSON.stringify(Array.from(e.checklist.entries()))}))})),localStorage.setItem("Projects",JSON.stringify(i.getProjects()))}static LoadData(){return JSON.parse(localStorage.getItem("Projects"))}static LoadMockData(){let e=new Map;e.set("You",!1),e.set("Can",!0),e.set("Click",!1),e.set("These",!1),e.set("Items",!1);let t=new r("Example Todo","Write a description here!",e);return[new ProjectData("Default Project",[t])]}}document.getElementById("header").querySelector(".new-project").addEventListener("click",(()=>{s.createPanel("Enter name of new project:",(e=>{let n=new t(e,[]);i.addProject(n),Fe.loadProject(n)}))})),document.getElementById("app"),window.addEventListener("load",(function(){const e=He.LoadData();e?.length>0?i.loadProjects(e):i.loadProjects(He.LoadMockData()),Fe.loadProjects(i.getProjects())}),!1),window.addEventListener("unload",(function(){He.SaveData()}),!1)})();