!function(){"use strict";var e,t,a,s=window.location,c=window.document,p=c.getElementById("plausible"),d=p.getAttribute("data-api")||(e=p.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function f(e){console.warn("Ignoring Event: "+e)}function n(e,t){try{if("true"===window.localStorage.plausible_ignore)return f("localStorage flag")}catch(e){}var a=p&&p.getAttribute("data-include"),n=p&&p.getAttribute("data-exclude");if("pageview"===e){var r=!a||a&&a.split(",").some(l),i=n&&n.split(",").some(l);if(!r||i)return f("exclusion rule")}function l(e){return s.pathname.match(new RegExp("^"+e.trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$"))}var o={};o.n=e,o.u=t&&t.u?t.u:s.href,o.d=p.getAttribute("data-domain"),o.r=c.referrer||null,o.w=window.innerWidth,t&&t.meta&&(o.m=JSON.stringify(t.meta)),t&&t.props&&(o.p=t.props);var u=new XMLHttpRequest;u.open("POST",d,!0),u.setRequestHeader("Content-Type","text/plain"),u.send(JSON.stringify(o)),u.onreadystatechange=function(){4===u.readyState&&t&&t.callback&&t.callback()}}var r=window.plausible&&window.plausible.q||[];window.plausible=n;for(var i=0;i<r.length;i++)n.apply(this,r[i]);function l(e){var t,a,n,r,i,l,o,u;function c(){o||(o=!0,window.location=r.href)}"auxclick"===e.type&&1!==e.button||((t=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target))&&t.href&&t.href.split("?")[0],(u=t)&&u.href&&u.host&&u.host!==s.host&&(a={url:t.href},l=a,o=!(i="Outbound Link: Click"),!function(e,t){if(!e.defaultPrevented){var a=!t.target||t.target.match(/^_(self|parent|top)$/i),n=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type;return a&&n}}(n=e,r=t)?plausible(i,{props:l}):(plausible(i,{props:l,callback:c}),setTimeout(c,5e3),n.preventDefault())))}c.addEventListener("click",l),c.addEventListener("auxclick",l)}();