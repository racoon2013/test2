/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!function(){"use strict";const t=({onFocus:t,onBlur:e})=>{let n=document.hasFocus();setInterval(()=>{const o=document.hasFocus();o!==n&&(n=o,o?t():e())},50)
},e=()=>document.getElementById("active-frame"),n=()=>document.getElementById("pending-frame"),o="\n\tbody {\n\t\tbackground-color: var(--vscode-editor-background);\n\t\tcolor: var(--vscode-editor-foreground);\n\t\tfont-family: var(--vscode-font-family);\n\t\tfont-weight: var(--vscode-font-weight);\n\t\tfont-size: var(--vscode-font-size);\n\t\tmargin: 0;\n\t\tpadding: 0 20px;\n\t}\n\n\timg {\n\t\tmax-width: 100%;\n\t\tmax-height: 100%;\n\t}\n\n\ta {\n\t\tcolor: var(--vscode-textLink-foreground);\n\t}\n\n\ta:hover {\n\t\tcolor: var(--vscode-textLink-activeForeground);\n\t}\n\n\ta:focus,\n\tinput:focus,\n\tselect:focus,\n\ttextarea:focus {\n\t\toutline: 1px solid -webkit-focus-ring-color;\n\t\toutline-offset: -1px;\n\t}\n\n\tcode {\n\t\tcolor: var(--vscode-textPreformat-foreground);\n\t}\n\n\tblockquote {\n\t\tbackground: var(--vscode-textBlockQuote-background);\n\t\tborder-color: var(--vscode-textBlockQuote-border);\n\t}\n\n\tkbd {\n\t\tcolor: var(--vscode-editor-foreground);\n\t\tborder-radius: 3px;\n\t\tvertical-align: middle;\n\t\tpadding: 1px 3px;\n\n\t\tbackground-color: hsla(0,0%,50%,.17);\n\t\tborder: 1px solid rgba(71,71,71,.4);\n\t\tborder-bottom-color: rgba(88,88,88,.4);\n\t\tbox-shadow: inset 0 -1px 0 rgba(88,88,88,.4);\n\t}\n\t.vscode-light kbd {\n\t\tbackground-color: hsla(0,0%,87%,.5);\n\t\tborder: 1px solid hsla(0,0%,80%,.7);\n\t\tborder-bottom-color: hsla(0,0%,73%,.7);\n\t\tbox-shadow: inset 0 -1px 0 hsla(0,0%,73%,.7);\n\t}\n\n\t::-webkit-scrollbar {\n\t\twidth: 10px;\n\t\theight: 10px;\n\t}\n\n\t::-webkit-scrollbar-corner {\n\t\tbackground-color: var(--vscode-editor-background);\n\t}\n\n\t::-webkit-scrollbar-thumb {\n\t\tbackground-color: var(--vscode-scrollbarSlider-background);\n\t}\n\t::-webkit-scrollbar-thumb:hover {\n\t\tbackground-color: var(--vscode-scrollbarSlider-hoverBackground);\n\t}\n\t::-webkit-scrollbar-thumb:active {\n\t\tbackground-color: var(--vscode-scrollbarSlider-activeBackground);\n\t}"
;function r(r){let s,a=!0,c=[];const i={initialScrollProgress:void 0},d=(t,e)=>{if(t&&(e&&(e.classList.remove("vscode-light","vscode-dark","vscode-high-contrast"),e.classList.add(i.activeTheme),e.dataset.vscodeThemeKind=i.activeTheme,e.dataset.vscodeThemeName=i.themeName||""),i.styles)){const e=t.documentElement.style;for(let t=e.length-1;t>=0;t--){const n=e[t];n&&n.startsWith("--vscode-")&&e.removeProperty(n)}for(const t of Object.keys(i.styles))e.setProperty(`--${t}`,i.styles[t])}},l=t=>{if(!t||!t.view||!t.view.document)return;let e=t.view.document.getElementsByTagName("base")[0],n=t.target;for(;n;){if(n.tagName&&"a"===n.tagName.toLowerCase()&&n.href){if("#"===n.getAttribute("href"))t.view.scrollTo(0,0);else if(n.hash&&(n.getAttribute("href")===n.hash||e&&n.href.indexOf(e.href)>=0)){let e=t.view.document.getElementById(n.hash.substr(1,n.hash.length-1));e&&e.scrollIntoView()}else r.postMessage("did-click-link",n.href.baseVal||n.href);t.preventDefault();break}n=n.parentNode}},u=t=>{
if(t.view&&t.view.document&&1===t.button){let e=t.target;for(;e;){if(e.tagName&&"a"===e.tagName.toLowerCase()&&e.href){t.preventDefault();break}e=e.parentNode}}},m=t=>{(function(t){return(t.ctrlKey||t.metaKey)&&["c","v","x"].includes(t.key)}(t)||function(t){return(t.ctrlKey||t.metaKey)&&["z","y"].includes(t.key)}(t))&&t.preventDefault(),r.postMessage("did-keydown",{key:t.key,keyCode:t.keyCode,code:t.code,shiftKey:t.shiftKey,altKey:t.altKey,ctrlKey:t.ctrlKey,metaKey:t.metaKey,repeat:t.repeat})};let g=!1;const f=t=>{g||r.postMessage("did-scroll-wheel",{deltaMode:t.deltaMode,deltaX:t.deltaX,deltaY:t.deltaY,deltaZ:t.deltaZ,detail:t.detail,type:t.type})},v=t=>{if(!t.target||!t.target.body)return;if(g)return;const e=t.currentTarget.scrollY/t.target.body.clientHeight;isNaN(e)||(g=!0,window.requestAnimationFrame(()=>{try{r.postMessage("did-scroll",e)}catch(t){}g=!1}))};function b(t){const e=t.options,n=t.contents,s=(new DOMParser).parseFromString(n,"text/html");if(s.querySelectorAll("a").forEach(t=>{
t.title||(t.title=t.getAttribute("href"))}),e.allowScripts){const n=s.createElement("script");n.id="_vscodeApiScript",n.textContent=function(t,e){const n=e?encodeURIComponent(e):void 0
;return`\n\t\t\tconst acquireVsCodeApi = (function() {\n\t\t\t\tconst originalPostMessage = window.parent.postMessage.bind(window.parent);\n\t\t\t\tconst targetOrigin = '*';\n\t\t\t\tlet acquired = false;\n\n\t\t\t\tlet state = ${e?`JSON.parse(decodeURIComponent("${n}"))`:void 0};\n\n\t\t\t\treturn () => {\n\t\t\t\t\tif (acquired && !${t}) {\n\t\t\t\t\t\tthrow new Error('An instance of the VS Code API has already been acquired');\n\t\t\t\t\t}\n\t\t\t\t\tacquired = true;\n\t\t\t\t\treturn Object.freeze({\n\t\t\t\t\t\tpostMessage: function(msg) {\n\t\t\t\t\t\t\treturn originalPostMessage({ command: 'onmessage', data: msg }, targetOrigin);\n\t\t\t\t\t\t},\n\t\t\t\t\t\tsetState: function(newState) {\n\t\t\t\t\t\t\tstate = newState;\n\t\t\t\t\t\t\toriginalPostMessage({ command: 'do-update-state', data: JSON.stringify(newState) }, targetOrigin);\n\t\t\t\t\t\t\treturn newState;\n\t\t\t\t\t\t},\n\t\t\t\t\t\tgetState: function() {\n\t\t\t\t\t\t\treturn state;\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t};\n\t\t\t})();\n\t\t\tdelete window.parent;\n\t\t\tdelete window.top;\n\t\t\tdelete window.frameElement;\n\t\t`
}(e.allowMultipleAPIAcquire,t.state),s.head.prepend(n)}const a=s.createElement("style");a.id="_defaultStyles",a.innerHTML=o,s.head.prepend(a),d(s,s.body);const c=s.querySelector('meta[http-equiv="Content-Security-Policy"]');if(c)try{c.setAttribute("content",r.rewriteCSP(c.getAttribute("content"),t.endpoint))}catch(t){console.error(`Could not rewrite csp: ${t}`)}else r.postMessage("no-csp-found");return"<!DOCTYPE html>\n"+s.documentElement.outerHTML}document.addEventListener("DOMContentLoaded",()=>{const o=document.location.search.match(/\bid=([\w-]+)/),g=o?o[1]:void 0;if(!document.body)return;r.onMessage("styles",(t,n)=>{i.styles=n.styles,i.activeTheme=n.activeTheme,i.themeName=n.themeName;const o=e();o&&o.contentDocument&&d(o.contentDocument,o.contentDocument.body)}),r.onMessage("focus",()=>{const t=e();t&&t.contentWindow.focus()});let h=0;r.onMessage("content",async(t,o)=>{const p=++h;if(await r.ready,p!==h)return;const w=o.options,y=b(o),k=e(),x=a;let M;if(a)a=!1,M=(t,e)=>{
isNaN(i.initialScrollProgress)||0===e.scrollY&&e.scroll(0,t.clientHeight*i.initialScrollProgress)};else{const t=k&&k.contentDocument&&k.contentDocument.body?k.contentWindow.scrollY:0;M=(e,n)=>{0===n.scrollY&&n.scroll(0,t)}}const L=n();L&&(L.setAttribute("id",""),document.body.removeChild(L)),x||(c=[]);const S=document.createElement("iframe");function E(t){setTimeout(()=>{r.fakeLoad&&(t.open(),t.write(y),t.close(),C(S)),t&&d(t,t.body)},0)}S.setAttribute("id","pending-frame"),S.setAttribute("frameborder","0"),S.setAttribute("sandbox",w.allowScripts?"allow-scripts allow-forms allow-same-origin":"allow-same-origin"),r.fakeLoad&&(S.src=`./fake.html?id=${g}`),S.style.cssText="display: block; margin: 0; overflow: hidden; position: absolute; width: 100%; height: 100%; visibility: hidden",document.body.appendChild(S),r.fakeLoad||S.contentDocument.open(),r.fakeLoad,S.contentWindow.addEventListener("DOMContentLoaded",t=>{E(t.target?t.target:void 0)});const D=(t,o)=>{t&&t.body&&M(t.body,o);const s=n()
;if(s&&s.contentDocument&&s.contentDocument===t){const t=e();t&&document.body.removeChild(t),d(s.contentDocument,s.contentDocument.body),s.setAttribute("id","active-frame"),s.style.visibility="visible",r.focusIframeOnCreate&&s.contentWindow.focus(),o.addEventListener("scroll",v),o.addEventListener("wheel",f),c.forEach(t=>{o.postMessage(t,"*")}),c=[]}r.postMessage("did-load")};function C(t){clearTimeout(s),s=void 0,s=setTimeout(()=>{clearTimeout(s),s=void 0,D(t.contentDocument,t.contentWindow)},200),t.contentWindow.addEventListener("load",(function(t){const e=t.target;s&&(clearTimeout(s),s=void 0,D(e,this))})),t.contentWindow.addEventListener("click",l),t.contentWindow.addEventListener("auxclick",u),t.contentWindow.addEventListener("keydown",m),t.contentWindow.addEventListener("contextmenu",t=>t.preventDefault()),r.onIframeLoaded&&r.onIframeLoaded(t)}r.fakeLoad||C(S),r.fakeLoad||(S.contentDocument.write(y),S.contentDocument.close()),r.postMessage("did-set-content",void 0)}),r.onMessage("message",(t,o)=>{
if(!n()){const t=e();if(t)return void t.contentWindow.postMessage(o,"*")}c.push(o)}),r.onMessage("initial-scroll-position",(t,e)=>{i.initialScrollProgress=e}),r.onMessage("execCommand",(t,n)=>{const o=e();o&&o.contentDocument.execCommand(n)}),t({onFocus:()=>r.postMessage("did-focus"),onBlur:()=>r.postMessage("did-blur")}),r.postMessage("webview-ready",{})})}"undefined"!=typeof module?module.exports=r:window.createWebviewManager=r}();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/11dc5a81ba248cc2678888391f1b24dccabddaf8/core/vs/workbench/contrib/webview/browser/pre/main.js.map
