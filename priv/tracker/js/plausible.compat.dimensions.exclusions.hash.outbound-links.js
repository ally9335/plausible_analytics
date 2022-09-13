!function(){"use strict";var e,t,i,p=window.location,d=window.document,f=d.getElementById("plausible"),w=f.getAttribute("data-api")||(e=f.src.split("/"),t=e[0],i=e[2],t+"//"+i+"/api/event");function h(e){console.warn("Ignoring Event: "+e)}function n(e,t){if(/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(p.hostname)||"file:"===p.protocol)return h("localhost");if(!(window._phantom||window.__nightmare||window.navigator.webdriver||window.Cypress)){try{if("true"===window.localStorage.plausible_ignore)return h("localStorage flag")}catch(e){}var i=f&&f.getAttribute("data-include"),n=f&&f.getAttribute("data-exclude");if("pageview"===e){var a=!i||i&&i.split(",").some(u),r=n&&n.split(",").some(u);if(!a||r)return h("exclusion rule")}var o={};o.n=e,o.u=p.href,o.d=f.getAttribute("data-domain"),o.r=d.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var l=f.getAttributeNames().filter(function(e){return"event-"===e.substring(0,6)}),s=o.p||{};l.forEach(function(e){var t=e.replace("event-",""),i=f.getAttribute(e);s[t]=s[t]||i}),o.p=s,o.h=1;var c=new XMLHttpRequest;c.open("POST",w,!0),c.setRequestHeader("Content-Type","text/plain"),c.send(JSON.stringify(o)),c.onreadystatechange=function(){4===c.readyState&&t&&t.callback&&t.callback()}}function u(e){var t=p.pathname;return(t+=p.hash).match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}}var a=window.plausible&&window.plausible.q||[];window.plausible=n;for(var r,o=0;o<a.length;o++)n.apply(this,a[o]);function l(){r=p.pathname,n("pageview")}function s(e){var t,i,n,a,r,o,l,s;function c(){l||(l=!0,window.location=a.href)}"auxclick"===e.type&&1!==e.button||((t=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target))&&t.href&&t.href.split("?")[0],(s=t)&&s.href&&s.host&&s.host!==p.host&&(i={url:t.href},o=i,l=!(r="Outbound Link: Click"),!function(e,t){if(!e.defaultPrevented){var i=!t.target||t.target.match(/^_(self|parent|top)$/i),n=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type;return i&&n}}(n=e,a=t)?plausible(r,{props:o}):(plausible(r,{props:o,callback:c}),setTimeout(c,5e3),n.preventDefault())))}window.addEventListener("hashchange",l),"prerender"===d.visibilityState?d.addEventListener("visibilitychange",function(){r||"visible"!==d.visibilityState||l()}):l(),d.addEventListener("click",s),d.addEventListener("auxclick",s)}();