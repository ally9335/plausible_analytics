!function(){"use strict";var e,t,a,s=window.location,r=window.document,i=r.getElementById("plausible"),o=i.getAttribute("data-api")||(e=i.src.split("/"),t=e[0],a=e[2],t+"//"+a+"/api/event");function n(e,t){try{if("true"===window.localStorage.plausible_ignore)return void console.warn("Ignoring Event: localStorage flag")}catch(e){}var a={};a.n=e,a.u=t&&t.u?t.u:s.href,a.d=i.getAttribute("data-domain"),a.r=r.referrer||null,a.w=window.innerWidth,t&&t.meta&&(a.m=JSON.stringify(t.meta)),t&&t.props&&(a.p=t.props);var n=new XMLHttpRequest;n.open("POST",o,!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(a)),n.onreadystatechange=function(){4===n.readyState&&t&&t.callback&&t.callback()}}var l=window.plausible&&window.plausible.q||[];window.plausible=n;for(var u=0;u<l.length;u++)n.apply(this,l[u]);function c(e){var t,a,n,r,i,o,l,u;function c(){l||(l=!0,window.location=r.href)}"auxclick"===e.type&&1!==e.button||((t=function(e){for(;e&&(void 0===e.tagName||"a"!==e.tagName.toLowerCase()||!e.href);)e=e.parentNode;return e}(e.target))&&t.href&&t.href.split("?")[0],(u=t)&&u.href&&u.host&&u.host!==s.host&&(a={url:t.href},o=a,l=!(i="Outbound Link: Click"),!function(e,t){if(!e.defaultPrevented){var a=!t.target||t.target.match(/^_(self|parent|top)$/i),n=!(e.ctrlKey||e.metaKey||e.shiftKey)&&"click"===e.type;return a&&n}}(n=e,r=t)?plausible(i,{props:o}):(plausible(i,{props:o,callback:c}),setTimeout(c,5e3),n.preventDefault())))}r.addEventListener("click",c),r.addEventListener("auxclick",c)}();