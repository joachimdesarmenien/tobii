class e{constructor(){this.figcaptionId=0,this.userSettings=null}init(e,t,i){this.userSettings=i;const r=document.createElement("figure"),n=document.createElement("figcaption"),s=document.createElement("img"),o=e.querySelector("img"),a=document.createElement("div");if(r.style.opacity="0",o&&(s.alt=o.alt||""),s.setAttribute("src",""),s.setAttribute("data-src",e.href),e.hasAttribute("data-srcset")&&s.setAttribute("data-srcset",e.getAttribute("data-srcset")),r.appendChild(s),this.userSettings.captions){let t;"function"==typeof this.userSettings.captionText?t=this.userSettings.captionText(e):"self"===this.userSettings.captionsSelector&&e.getAttribute(this.userSettings.captionAttribute)?t=e.getAttribute(this.userSettings.captionAttribute):"img"===this.userSettings.captionsSelector&&o&&o.getAttribute(this.userSettings.captionAttribute)&&(t=o.getAttribute(this.userSettings.captionAttribute)),this.userSettings.captionHTML?n.innerHTML=t:n.textContent=t,t&&(n.id=`tobii-figcaption-${this.figcaptionId}`,r.appendChild(n),s.setAttribute("aria-labelledby",n.id),++this.figcaptionId)}t.appendChild(r),a.className="tobii__loader",a.setAttribute("role","progressbar"),a.setAttribute("aria-label",this.userSettings.loadingIndicatorLabel),t.appendChild(a),t.setAttribute("data-type","image"),t.classList.add("tobii-image")}onPreload(e){this.onLoad(e)}onLoad(e){const t=e.querySelector("img");if(!t.hasAttribute("data-src"))return;const i=e.querySelector("figure"),r=e.querySelector(".tobii__loader");t.addEventListener("load",()=>{e.removeChild(r),i.style.opacity="1"}),t.addEventListener("error",()=>{e.removeChild(r),i.style.opacity="1"}),t.setAttribute("src",t.getAttribute("data-src")),t.removeAttribute("data-src"),t.hasAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"))}onLeave(e){}onCleanup(e){}onReset(){this.figcaptionId=0}}class t{constructor(){this.userSettings=null}init(e,t,i){this.userSettings=i;const r=e.hasAttribute("data-target")?e.getAttribute("data-target"):e.getAttribute("href");t.setAttribute("data-HREF",r),e.getAttribute("data-allow")&&t.setAttribute("data-allow",e.getAttribute("data-allow")),e.hasAttribute("data-width")&&t.setAttribute("data-width",`${e.getAttribute("data-width")}`),e.hasAttribute("data-height")&&t.setAttribute("data-height",`${e.getAttribute("data-height")}`),t.setAttribute("data-type","iframe"),t.classList.add("tobii-iframe")}onPreload(e){}onLoad(e){let t=e.querySelector("iframe");const i=document.createElement("div");if(i.className="tobii__loader",i.setAttribute("role","progressbar"),i.setAttribute("aria-label",this.userSettings.loadingIndicatorLabel),e.appendChild(i),null==t){t=document.createElement("iframe");const i=e.getAttribute("data-href");t.setAttribute("frameborder","0"),t.setAttribute("src",i),t.setAttribute("allowfullscreen",""),i.indexOf("youtube.com")>-1?t.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"):i.indexOf("vimeo.com")>-1?t.setAttribute("allow","autoplay; picture-in-picture"):e.hasAttribute("data-allow")&&t.setAttribute("allow",e.getAttribute("data-allow")),e.getAttribute("data-width")&&(t.style.maxWidth=`${e.getAttribute("data-width")}`),e.getAttribute("data-height")&&(t.style.maxHeight=`${e.getAttribute("data-height")}`),t.style.opacity="0",e.appendChild(t),t.addEventListener("load",()=>{t.style.opacity="1";const i=e.querySelector(".tobii__loader");i&&e.removeChild(i)}),t.addEventListener("error",()=>{t.style.opacity="1";const i=e.querySelector(".tobii__loader");i&&e.removeChild(i)})}else t.setAttribute("src",e.getAttribute("data-href"))}onLeave(e){}onCleanup(e){const t=e.querySelector("iframe");t.setAttribute("src",""),t.style.opacity="0"}onReset(){}}class i{constructor(){this.userSettings=null}init(e,t,i){this.userSettings=i;const r=e.hasAttribute("data-target")?e.getAttribute("data-target"):e.getAttribute("href"),n=document.querySelector(r).cloneNode(!0);if(!n)throw new Error(`Ups, I can't find the target ${r}.`);t.appendChild(n),t.setAttribute("data-type","html"),t.classList.add("tobii-html")}onPreload(e){}onLoad(e,t){const i=e.querySelector("video");i&&(i.hasAttribute("data-time")&&i.readyState>0&&(i.currentTime=i.getAttribute("data-time")),this.userSettings.autoplayVideo&&i.play());const r=e.querySelector("audio");r&&this.userSettings.autoplayAudio&&r.play(),e.classList.add("tobii-group-"+t)}onLeave(e){const t=e.querySelector("video");t&&(t.paused||t.pause(),t.readyState>0&&t.setAttribute("data-time",t.currentTime));const i=e.querySelector("audio");i&&(i.paused||i.pause())}onCleanup(e){const t=e.querySelector("video");if(t&&t.readyState>0&&t.readyState<3&&t.duration!==t.currentTime){const i=t.cloneNode(!0);this._removeSources(t),t.load(),t.parentNode.removeChild(t),e.appendChild(i)}}onReset(){}_removeSources(e){const t=e.querySelectorAll("src");t&&t.forEach(e=>{e.setAttribute("src","")})}}class r{constructor(){this.playerId=0,this.PLAYER=[],this.userSettings=null}init(e,t,i){this.userSettings=i;const r=document.createElement("div");t.appendChild(r),this.PLAYER[this.playerId]=new window.YT.Player(r,{host:"https://www.youtube-nocookie.com",height:e.getAttribute("data-height")||"360",width:e.getAttribute("data-width")||"640",videoId:e.getAttribute("data-id"),playerVars:{controls:e.getAttribute("data-controls")||1,rel:0,playsinline:1}}),t.setAttribute("data-player",this.playerId),t.setAttribute("data-type","youtube"),t.classList.add("tobii-youtube"),this.playerId++}onPreload(e){}onLoad(e){this.userSettings.autoplayVideo&&this.PLAYER[e.getAttribute("data-player")].playVideo()}onLeave(e){1===this.PLAYER[e.getAttribute("data-player")].getPlayerState()&&this.PLAYER[e.getAttribute("data-player")].pauseVideo()}onCleanup(e){1===this.PLAYER[e.getAttribute("data-player")].getPlayerState()&&this.PLAYER[e.getAttribute("data-player")].pauseVideo()}onReset(){}}function n(s){const o={image:new e,html:new i,iframe:new t,youtube:new r},a=['a[href]:not([tabindex^="-"]):not([inert])','area[href]:not([tabindex^="-"]):not([inert])',"input:not([disabled]):not([inert])","select:not([disabled]):not([inert])","textarea:not([disabled]):not([inert])","button:not([disabled]):not([inert])",'iframe:not([tabindex^="-"]):not([inert])','audio:not([tabindex^="-"]):not([inert])','video:not([tabindex^="-"]):not([inert])','[contenteditable]:not([tabindex^="-"]):not([inert])','[tabindex]:not([tabindex^="-"]):not([inert])'];let d={};const l=[],u={gallery:[],slider:null,sliderElements:[],elementsLength:0,currentIndex:0,x:0};let c=null,p=null,b=null,h=null,m=null,g={},v=!1,y=!1,f=!1,w=null,A=null,E=null,L=!1,x=!1,_={},I=null,S=null;const C=[];let T=-1;const P=e=>{if(null===document.querySelector('[data-type="youtube"]')||x)Y(e);else{if(null===document.getElementById("iframe_api")){const e=document.createElement("script"),t=document.getElementsByTagName("script")[0];e.id="iframe_api",e.src="https://www.youtube.com/iframe_api",t.parentNode.insertBefore(e,t)}-1===l.indexOf(e)&&l.push(e),window.onYouTubePlayerAPIReady=()=>{l.forEach(e=>{Y(e)}),x=!0}}},q=e=>e.hasAttribute("data-group")?e.getAttribute("data-group"):"default",Y=e=>{if(I=q(e),Object.prototype.hasOwnProperty.call(_,I)||(_[I]=JSON.parse(JSON.stringify(u)),k()),-1!==_[I].gallery.indexOf(e))throw new Error("Ups, element already added.");if(_[I].gallery.push(e),_[I].elementsLength++,d.zoom&&e.querySelector("img")&&"false"!==e.getAttribute("data-zoom")||"true"===e.getAttribute("data-zoom")){const t=document.createElement("div");t.className="tobii-zoom__icon",t.innerHTML=d.zoomText,e.classList.add("tobii-zoom"),e.appendChild(t)}e.addEventListener("click",G),z(e),me()&&I===S&&(pe(),be())},N=e=>{const t=q(e);if(-1===_[t].gallery.indexOf(e))throw new Error(`Ups, I can't find a slide for the element ${e}.`);{const i=_[t].gallery.indexOf(e),r=_[t].sliderElements[i];if(me()&&t===S&&i===_[t].currentIndex){if(1===_[t].elementsLength)throw M(),new Error("Ups, I've closed. There are no slides more to show.");0===_[t].currentIndex?H():R(),pe(),be()}if(_[t].gallery.splice(_[t].gallery.indexOf(e)),_[t].sliderElements.splice(_[t].gallery.indexOf(e)),_[t].elementsLength--,--_[t].x,d.zoom&&e.querySelector(".tobii-zoom__icon")){const t=e.querySelector(".tobii-zoom__icon");t.parentNode.classList.remove("tobii-zoom"),t.parentNode.removeChild(t)}e.removeEventListener("click",G),r.parentNode.removeChild(r)}},k=()=>{_[I].slider=document.createElement("div"),_[I].slider.className="tobii__slider",_[I].slider.setAttribute("aria-hidden","true"),c.appendChild(_[I].slider)},z=e=>{const t=O(e),i=document.createElement("div"),r=document.createElement("div");i.className="tobii__slide",i.style.position="absolute",i.style.left=100*_[I].x+"%",i.setAttribute("aria-hidden","true"),t.init(e,r,d),i.appendChild(r),_[I].slider.appendChild(i),_[I].sliderElements.push(i),++_[I].x},O=e=>{const t=e.getAttribute("data-type");return void 0!==o[t]?o[t]:(e.hasAttribute("data-type")&&console.log("Unknown lightbox element type: "+t),o.image)},X=e=>{if(S=null!==S?S:I,me())throw new Error("Ups, I'm aleady open.");if(!me()&&(e||(e=0),-1===e||e>=_[S].elementsLength))throw new Error(`Ups, I can't find slide ${e}.`);document.documentElement.classList.add("tobii-is-open"),document.body.classList.add("tobii-is-open"),document.body.classList.add("tobii-is-open-"+S),pe(),d.close||(h.disabled=!1,h.setAttribute("aria-hidden","true")),w=document.activeElement;const t=window.location.href;window.history.pushState({tobii:"close"},"Image",t),_[S].currentIndex=e,W(),ue(),$(_[S].currentIndex),_[S].slider.setAttribute("aria-hidden","false"),c.setAttribute("aria-hidden","false"),be(),U(_[S].currentIndex+1),U(_[S].currentIndex-1),_[S].slider.classList.add("tobii__slider--animate");const i=new window.CustomEvent("open",{detail:{group:S}});c.dispatchEvent(i)},M=()=>{if(!me())throw new Error("Ups, I'm already closed.");document.documentElement.classList.remove("tobii-is-open"),document.body.classList.remove("tobii-is-open"),document.body.classList.remove("tobii-is-open-"+S),ce(),null!==window.history.state&&"close"===window.history.state.tobii&&window.history.back(),w.focus(),B(_[S].currentIndex),V(_[S].currentIndex),c.setAttribute("aria-hidden","true"),_[S].slider.setAttribute("aria-hidden","true"),_[S].currentIndex=0,_[S].slider.classList.remove("tobii__slider--animate");const e=new window.CustomEvent("close",{detail:{group:S}});c.dispatchEvent(e)},U=e=>{if(void 0===_[S].sliderElements[e])return;const t=_[S].sliderElements[e].querySelector("[data-type]");O(t).onPreload(t)},$=e=>{if(void 0===_[S].sliderElements[e])return;const t=_[S].sliderElements[e].querySelector("[data-type]"),i=O(t);_[S].sliderElements[e].classList.add("tobii__slide--is-active"),_[S].sliderElements[e].setAttribute("aria-hidden","false"),i.onLoad(t,S)},R=()=>{if(!me())throw new Error("Ups, I'm closed.");_[S].currentIndex>0&&(B(_[S].currentIndex),$(--_[S].currentIndex),be("left"),V(_[S].currentIndex+1),U(_[S].currentIndex-1));const e=new window.CustomEvent("previous",{detail:{group:S}});c.dispatchEvent(e)},H=()=>{if(!me())throw new Error("Ups, I'm closed.");_[S].currentIndex<_[S].elementsLength-1&&(B(_[S].currentIndex),$(++_[S].currentIndex),be("right"),V(_[S].currentIndex-1),U(_[S].currentIndex+1));const e=new window.CustomEvent("next",{detail:{group:S}});c.dispatchEvent(e)},D=e=>{if(me())throw new Error("Ups, I'm open.");if(!e)throw new Error("Ups, no group specified.");if(e&&!Object.prototype.hasOwnProperty.call(_,e))throw new Error(`Ups, I don't have a group called "${e}".`);S=e},B=e=>{if(void 0===_[S].sliderElements[e])return;const t=_[S].sliderElements[e].querySelector("[data-type]"),i=O(t);_[S].sliderElements[e].classList.remove("tobii__slide--is-active"),_[S].sliderElements[e].setAttribute("aria-hidden","true"),i.onLeave(t)},V=e=>{if(void 0===_[S].sliderElements[e])return;const t=_[S].sliderElements[e].querySelector("[data-type]");O(t).onCleanup(t)},j=()=>{S=null!==S?S:I,A=-_[S].currentIndex*c.offsetWidth,_[S].slider.style.transform=`translate3d(${A}px, 0, 0)`,E=A},W=()=>{g={startX:0,endX:0,startY:0,endY:0}},Z=()=>{const e=g.endX-g.startX,t=g.endY-g.startY,i=Math.abs(e),r=Math.abs(t);e>0&&i>d.threshold&&_[S].currentIndex>0?R():e<0&&i>d.threshold&&_[S].currentIndex!==_[S].elementsLength-1?H():t<0&&r>d.threshold&&d.swipeClose?M():j()},F=()=>{L||(L=!0,window.requestAnimationFrame(()=>{j(),L=!1}))},G=e=>{e.preventDefault(),S=q(e.currentTarget),X(_[S].gallery.indexOf(e.currentTarget))},J=e=>{e.target===p?R():e.target===b?H():(e.target===h||!1===v&&!1===y&&e.target.classList.contains("tobii__slide")&&d.docClose)&&M(),e.stopPropagation()},K=e=>{const t=Array.prototype.slice.call(c.querySelectorAll(`.tobii__btn:not([disabled]), .tobii__slide--is-active ${a.join(", .tobii__slide--is-active ")}`)).filter(e=>!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),i=t.indexOf(document.activeElement);9===e.keyCode||"Tab"===e.code?e.shiftKey&&0===i?(t[t.length-1].focus(),e.preventDefault()):e.shiftKey||i!==t.length-1||(t[0].focus(),e.preventDefault()):27===e.keyCode||"Escape"===e.code?(e.preventDefault(),M()):37===e.keyCode||"ArrowLeft"===e.code?(e.preventDefault(),R()):39!==e.keyCode&&"ArrowRight"!==e.code||(e.preventDefault(),H())},Q=e=>{ve(e.target)||(e.stopPropagation(),v=!1,y=!1,f=!0,g.startX=e.touches[0].pageX,g.startY=e.touches[0].pageY,ge()&&_[S].slider.classList.add("tobii__slider--is-dragging"))},ee=e=>{e.stopPropagation(),f&&(g.endX=e.touches[0].pageX,g.endY=e.touches[0].pageY,le())},te=e=>{e.stopPropagation(),f=!1,_[S].slider.classList.remove("tobii__slider--is-dragging"),g.endX&&Z(),W()},ie=e=>{ve(e.target)||(e.preventDefault(),e.stopPropagation(),v=!1,y=!1,f=!0,g.startX=e.pageX,g.startY=e.pageY,ge()&&_[S].slider.classList.add("tobii__slider--is-dragging"))},re=e=>{e.preventDefault(),f&&(g.endX=e.pageX,g.endY=e.pageY,le())},ne=e=>{e.stopPropagation(),f=!1,_[S].slider.classList.remove("tobii__slider--is-dragging"),g.endX&&Z(),W()},se=()=>{f=!1},oe=e=>{C.push(e)},ae=e=>{const t=C.findIndex(t=>t.pointerId===e.pointerId);if(C[t]=e,2===C.length){const t=Math.abs(C[0].clientX-C[1].clientX);if(T>0){let i=parseInt(e.target.style.zoom);t>T&&i<500&&(e.target.style.zoom=++i+"%"),t<T&&i>100&&(e.target.style.zoom=--i+"%")}T=t}},de=e=>{const t=C.findIndex(t=>t.pointerId===e.pointerId);C.splice(t,1),C.length<2&&(T=-1)},le=()=>{Math.abs(g.startX-g.endX)>0&&!y&&_[S].elementsLength>1?(_[S].slider.style.transform=`translate3d(${E-Math.round(g.startX-g.endX)}px, 0, 0)`,v=!0,y=!1):Math.abs(g.startY-g.endY)>0&&!v&&d.swipeClose&&(_[S].slider.style.transform=`translate3d(${E}px, -${Math.round(g.startY-g.endY)}px, 0)`,v=!1,y=!0)},ue=()=>{d.keyboard&&window.addEventListener("keydown",K),window.addEventListener("resize",F),window.addEventListener("popstate",M),c.addEventListener("click",J),d.draggable&&ge()&&(c.addEventListener("touchstart",Q),c.addEventListener("touchmove",ee),c.addEventListener("touchend",te),c.addEventListener("mousedown",ie),c.addEventListener("mouseup",ne),c.addEventListener("mousemove",re),c.addEventListener("contextmenu",se)),d.pinchZoom&&ge()&&(c.addEventListener("pointerdown",oe),c.addEventListener("pointermove",ae),c.addEventListener("pointerup",de),c.addEventListener("pointercancel",de),c.addEventListener("pointerout",de),c.addEventListener("pointerleave",de))},ce=()=>{d.keyboard&&window.removeEventListener("keydown",K),window.removeEventListener("resize",F),window.removeEventListener("popstate",M),c.removeEventListener("click",J),d.draggable&&ge()&&(c.removeEventListener("touchstart",Q),c.removeEventListener("touchmove",ee),c.removeEventListener("touchend",te),c.removeEventListener("mousedown",ie),c.removeEventListener("mouseup",ne),c.removeEventListener("mousemove",re),c.removeEventListener("contextmenu",se)),d.pinchZoom&&ge()&&(c.removeEventListener("pointerdown",oe),c.removeEventListener("pointermove",ae),c.removeEventListener("pointerup",de),c.removeEventListener("pointercancel",de),c.removeEventListener("pointerout",de),c.removeEventListener("pointerleave",de))},pe=()=>{(d.draggable&&d.swipeClose&&ge()&&!_[S].slider.classList.contains("tobii__slider--is-draggable")||d.draggable&&_[S].elementsLength>1&&!_[S].slider.classList.contains("tobii__slider--is-draggable"))&&_[S].slider.classList.add("tobii__slider--is-draggable"),!d.nav||1===_[S].elementsLength||"auto"===d.nav&&ge()?(p.setAttribute("aria-hidden","true"),p.disabled=!0,b.setAttribute("aria-hidden","true"),b.disabled=!0):(p.setAttribute("aria-hidden","false"),p.disabled=!1,b.setAttribute("aria-hidden","false"),b.disabled=!1),m.setAttribute("aria-hidden",d.counter&&1!==_[S].elementsLength?"false":"true")},be=(e=null)=>{j(),m.textContent=`${_[S].currentIndex+1}/${_[S].elementsLength}`,(e=>{(!0===d.nav||"auto"===d.nav)&&!ge()&&_[S].elementsLength>1?(p.setAttribute("aria-hidden","true"),p.disabled=!0,b.setAttribute("aria-hidden","true"),b.disabled=!0,1===_[S].elementsLength?d.close&&h.focus():0===_[S].currentIndex?(b.setAttribute("aria-hidden","false"),b.disabled=!1,b.focus()):_[S].currentIndex===_[S].elementsLength-1?(p.setAttribute("aria-hidden","false"),p.disabled=!1,p.focus()):(p.setAttribute("aria-hidden","false"),p.disabled=!1,b.setAttribute("aria-hidden","false"),b.disabled=!1,"left"===e?p.focus():b.focus())):d.close&&h.focus()})(e)},he=()=>{me()&&M(),Object.entries(_).forEach(e=>{e[1].gallery.forEach(e=>{N(e)})}),_={},I=S=null;for(const e in o)o[e].onReset()},me=()=>"false"===c.getAttribute("aria-hidden"),ge=()=>"ontouchstart"in window,ve=e=>-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.nodeName)||e===p||e===b||e===h;return(e=>{if(document.querySelector("div.tobii"))return void console.log("Multiple lightbox instances not supported.");d=(e=>({selector:".lightbox",captions:!0,captionsSelector:"img",captionAttribute:"alt",captionText:null,captionHTML:!1,nav:"auto",navText:['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="15 6 9 12 15 18" /></svg>','<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="9 6 15 12 9 18" /></svg>'],navLabel:["Previous image","Next image"],close:!0,closeText:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>',closeLabel:"Close lightbox",loadingIndicatorLabel:"Image loading",counter:!0,download:!1,downloadText:"",downloadLabel:"Download image",keyboard:!0,zoom:!0,zoomText:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path stroke="none" d="M0 0h24v24H0z"/><polyline points="16 4 20 4 20 8" /><line x1="14" y1="10" x2="20" y2="4" /><polyline points="8 20 4 20 4 16" /><line x1="4" y1="20" x2="10" y2="14" /><polyline points="16 20 20 20 20 16" /><line x1="14" y1="14" x2="20" y2="20" /><polyline points="8 4 4 4 4 8" /><line x1="4" y1="4" x2="10" y2="10" /></svg>',pinchZoom:!0,docClose:!0,swipeClose:!0,hideScrollbar:!0,draggable:!0,threshold:100,rtl:!1,loop:!1,autoplayVideo:!1,modal:!1,theme:"tobii--theme-default",...e}))(e),c||(c=document.createElement("div"),c.setAttribute("role","dialog"),c.setAttribute("aria-hidden","true"),c.classList.add("tobii"),c.classList.add(d.theme),p=document.createElement("button"),p.className="tobii__btn tobii__btn--previous",p.setAttribute("type","button"),p.setAttribute("aria-label",d.navLabel[0]),p.innerHTML=d.navText[0],c.appendChild(p),b=document.createElement("button"),b.className="tobii__btn tobii__btn--next",b.setAttribute("type","button"),b.setAttribute("aria-label",d.navLabel[1]),b.innerHTML=d.navText[1],c.appendChild(b),h=document.createElement("button"),h.className="tobii__btn tobii__btn--close",h.setAttribute("type","button"),h.setAttribute("aria-label",d.closeLabel),h.innerHTML=d.closeText,c.appendChild(h),m=document.createElement("div"),m.className="tobii__counter",c.appendChild(m),document.body.appendChild(c));const t=document.querySelectorAll(d.selector);if(!t)throw new Error(`Ups, I can't find the selector ${d.selector} on this website.`);const i=[];t.forEach(e=>{const t=e.hasAttribute("data-group")?e.getAttribute("data-group"):"default";let r=e.href;e.hasAttribute("data-target")&&(r=e.getAttribute("data-target")),r+="__"+t,void 0!==i[r]?e.addEventListener("click",e=>{D(t),X(),e.preventDefault()}):(i[r]=1,P(e))})})(s),n.open=X,n.previous=R,n.next=H,n.close=M,n.add=P,n.remove=N,n.reset=he,n.destroy=()=>{he(),c.parentNode.removeChild(c)},n.isOpen=me,n.slidesIndex=()=>_[S].currentIndex,n.select=e=>{const t=_[S].currentIndex;if(!me())throw new Error("Ups, I'm closed.");if(me()){if(!e&&0!==e)throw new Error("Ups, no slide specified.");if(e===_[S].currentIndex)throw new Error(`Ups, slide ${e} is already selected.`);if(-1===e||e>=_[S].elementsLength)throw new Error(`Ups, I can't find slide ${e}.`)}_[S].currentIndex=e,B(t),$(e),e<t&&(be("left"),V(t),U(e-1)),e>t&&(be("right"),V(t),U(e+1))},n.slidesCount=()=>_[S].elementsLength,n.selectGroup=D,n.currentGroup=()=>null!==S?S:I,n.on=(e,t)=>{c.addEventListener(e,t)},n.off=(e,t)=>{c.removeEventListener(e,t)},n}export{n as default};
