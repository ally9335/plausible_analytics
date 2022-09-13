!function(){"use strict";var s=window.location,u=window.document,p=u.currentScript,d=p.getAttribute("data-api")||new URL(p.src).origin+"/api/event";function f(e){console.warn("Ignoring Event: "+e)}function e(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(s.hostname)||"file:"===s.protocol)return f("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var n=p&&p.getAttribute("data-include"),r=p&&p.getAttribute("data-exclude");if("pageview"===e){var a=!n||n&&n.split(",").some(c),i=r&&r.split(",").some(c);if(!a||i)return f("exclusion rule")}var o={};o.n=e,o.u=t&&t.u?t.u:s.href,o.d=p.getAttribute("data-domain"),o.r=u.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var l=new XMLHttpRequest;l.open("POST",d,!0),l.setRequestHeader("Content-Type","text/plain"),l.send(JSON.stringify(o)),l.onreadystatechange=function(){4===l.readyState&&t&&t.callback&&t.callback()}}function c(e){return s.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var t=window.plausible&&window.plausible.q||[];window.plausible=e;for(var n=0;n<t.length;n++)e.apply(this,t[n]);function r(e){var t,n,r,a,i,o,l,c;function u(){l||(l=!0,window.location=a.href)}"auxclick"===e.type&&1!==e.button||((t=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target))&&t.href&&t.href.split("?")[0],(c=t)&&c.href&&c.host&&c.host!==s.host&&(n={url:t.href},o=n,l=!(i="Outbound Link: Click"),!function(e,t){if(!e.defaultPrevented){var n=!t.target||t.target.match(/^_(self|parent|top)$/i),r=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type;return n&&r}}(r=e,a=t)?plausible(i,{props:o}):(plausible(i,{props:o,callback:u}),setTimeout(u,5e3),r.preventDefault())))}u.addEventListener("click",r),u.addEventListener("auxclick",r)}();