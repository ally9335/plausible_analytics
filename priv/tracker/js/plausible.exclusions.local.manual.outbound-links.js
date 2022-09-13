!function(){"use strict";var p=window.location,c=window.document,s=c.currentScript,d=s.getAttribute("data-api")||new URL(s.src).origin+"/api/event";function f(e){console.warn("Ignoring Event: "+e)}function e(e,t){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var a=s&&s.getAttribute("data-include"),r=s&&s.getAttribute("data-exclude");if("pageview"===e){var n=!a||a&&a.split(",").some(o),i=r&&r.split(",").some(o);if(!n||i)return f("exclusion rule")}function o(e){return p.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var l={};l.n=e,l.u=t&&t.u?t.u:p.href,l.d=s.getAttribute("data-domain"),l.r=c.referrer||null,l.w=window.innerWidth,t&&t.meta&&(l.m=JSON.stringify(t.meta)),t&&t.props&&(l.p=t.props);var u=new XMLHttpRequest;u.open("POST",d,!0),u.setRequestHeader("Content-Type","text/plain"),u.send(JSON.stringify(l)),u.onreadystatechange=function(){4===u.readyState&&t&&t.callback&&t.callback()}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var a=0;a<t.length;a++)e.apply(this,t[a]);function r(e){var t,a,r,n,i,o,l,u;function c(){l||(l=!0,window.location=n.href)}"auxclick"===e.type&&1!==e.button||((t=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target))&&t.href&&t.href.split("?")[0],(u=t)&&u.href&&u.host&&u.host!==p.host&&(a={url:t.href},o=a,l=!(i="Outbound Link: Click"),!function(e,t){if(!e.defaultPrevented){var a=!t.target||t.target.match(/^_(self|parent|top)$/i),r=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type;return a&&r}}(r=e,n=t)?plausible(i,{props:o}):(plausible(i,{props:o,callback:c}),setTimeout(c,5e3),r.preventDefault())))}c.addEventListener("click",r),c.addEventListener("auxclick",r)}();