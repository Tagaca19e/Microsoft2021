(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{27:function(e,t,a){e.exports=a(51)},37:function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},42:function(e,t,a){e.exports=a.p+"static/media/question1.aabc3fc1.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},44:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},45:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},46:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.d9cb99ce.png"},47:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.3c569239.png"},48:function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.87e4d053.png"},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),n=a(15),r=a.n(n),s=a(5),o=a(7),c=a(13),m=a(4),d=a.n(m),u=a(18),v=l.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),n=Object(c.a)(a,2),r=n[0],s=n[1],o=Object(i.useState)([]),m=Object(c.a)(o,2),d=m[0],v=m[1],p=function(){return d.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!p())for(var e=function(e){var t=d[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=r-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<d.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){v(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof d&&d.length>0&&(p()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),b())}),[d]);var h=function(){p()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(u.throttle)((function(){h(),b()}),30),E=Object(u.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){h(),b()}),[r]),l.a.createElement(l.a.Fragment,null,e.children())}));v.propTypes={children:d.a.func.isRequired};var p=v,b=a(17),h=a(3),f=a(2),E=a.n(f),g=a(14),N=function(e){var t=e.className,a=e.src,n=e.width,r=e.height,s=e.alt,o=Object(h.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),d=Object(c.a)(m,2),u=d[0],v=d[1],p=Object(i.useRef)(null);Object(i.useEffect)((function(){b(p.current)}),[]);var b=function(e){var t,a,i=document.createElement("img");u||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return l.a.createElement("img",Object.assign({},o,{ref:p,className:t,src:a,width:n,height:r,alt:s,onLoad:function(){v(!0)}}))};N.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var w=N,O=function(e){var t=e.className,i=Object(h.a)(e,["className"]),n=E()("brand",t);return l.a.createElement("div",Object.assign({},i,{className:n}),l.a.createElement("h1",{className:"m-0"},l.a.createElement(g.a,{to:"/"},l.a.createElement(w,{src:a(37),alt:"Open",width:32,height:32}))))},D=function(e){var t=e.className,a=(e.navPosition,e.hideNav),n=e.hideSignin,r=e.bottomOuterDivider,s=e.bottomDivider,o=Object(h.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),m=Object(i.useState)(!1),d=Object(c.a)(m,2),u=d[0],v=d[1],p=Object(i.useRef)(null),b=Object(i.useRef)(null);Object(i.useEffect)((function(){return u&&f(),document.addEventListener("keydown",N),document.addEventListener("click",w),function(){document.removeEventListener("keydown",N),document.removeEventListener("click",w),g()}}));var f=function(){document.body.classList.add("off-nav-is-active"),p.current.style.maxHeight=p.current.scrollHeight+"px",v(!0)},g=function(){document.body.classList.remove("off-nav-is-active"),p.current&&(p.current.style.maxHeight=null),v(!1)},N=function(e){u&&27===e.keyCode&&g()},w=function(e){p.current&&u&&!p.current.contains(e.target)&&e.target!==b.current&&g()},D=E()("site-header",r&&"has-bottom-divider",t);return l.a.createElement("header",Object.assign({},o,{className:D}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:E()("site-header-inner",s&&"has-bottom-divider")},l.a.createElement(O,null),!a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{ref:b,className:"header-nav-toggle",onClick:u?g:f},l.a.createElement("span",{className:"screen-reader"},"Menu"),l.a.createElement("span",{className:"hamburger"},l.a.createElement("span",{className:"hamburger-inner"}))),l.a.createElement("nav",{ref:p,className:E()("header-nav",u&&"is-active")},l.a.createElement("div",{className:"header-nav-inner"},l.a.createElement("ul",{className:"list-reset header-nav-right"},l.a.createElement("li",null,l.a.createElement("a",{className:"button button-primary button-wide-mobile button-sm",href:"https://www.linkedin.com/in/eidmone-tagaca-6ab45717b/"},"LinkedIn"))),!n&&l.a.createElement("ul",{className:"list-reset header-nav-right"},l.a.createElement("li",null,l.a.createElement("a",{className:"button button-primary button-wide-mobile button-sm",href:"https://github.com/Tagaca19e"},"Github")))))))))};D.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var x=D,j=function(e){var t=e.className,a=Object(h.a)(e,["className"]),i=E()("footer-nav",t);return l.a.createElement("nav",Object.assign({},a,{className:i}),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement("a",{href:"mailto: etagaca@csub.edu"},"Contact")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/eidmone-tagaca-6ab45717b/"},"About me"))))},y=a(25),C=a.n(y),k=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,n=Object(h.a)(e,["className","topOuterDivider","topDivider"]),r=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return l.a.createElement("footer",Object.assign({},n,{className:r}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:E()("site-footer-inner",i&&"has-top-divider")},l.a.createElement("div",{className:"footer-top space-between text-xxs"},l.a.createElement(C.a,{style:{color:"white"},fontSize:"large"})),l.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},l.a.createElement(j,null),l.a.createElement("div",{className:"footer-copyright"},"Coded by"," ",l.a.createElement("a",{href:"https://www.linkedin.com/in/eidmone-tagaca-6ab45717b/"},"Eidmone"),". All right reserved")))))};k.defaultProps={topOuterDivider:!1,topDivider:!1};var L=k,P=a(6),q={types:{topOuterDivider:d.a.bool,bottomOuterDivider:d.a.bool,topDivider:d.a.bool,bottomDivider:d.a.bool,hasBgColor:d.a.bool,invertColor:d.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},A={types:Object(P.a)({},q.types),defaults:Object(P.a)({},q.defaults)},S={types:Object(P.a)({},q.types,{invertMobile:d.a.bool,invertDesktop:d.a.bool,alignTop:d.a.bool,imageFill:d.a.bool}),defaults:Object(P.a)({},q.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},H={types:Object(P.a)({},q.types,{pushLeft:d.a.bool}),defaults:Object(P.a)({},q.defaults,{pushLeft:!1})},F=function(e){var t=e.className,a=e.tag,i=e.color,n=e.size,r=e.loading,s=e.wide,o=e.wideMobile,c=e.disabled,m=Object(h.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),d=E()("button",i&&"button-".concat(i),n&&"button-".concat(n),r&&"is-loading",s&&"button-block",o&&"button-wide-mobile",t),u=a;return l.a.createElement(u,Object.assign({},m,{className:d,disabled:c}))};F.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var B=function(e){var t=e.className,a=e.children,n=e.handleClose,r=e.show,s=e.closeHidden,o=e.video,c=e.videoTag,m=Object(h.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",u),document.addEventListener("click",v),function(){document.removeEventListener("keydown",u),document.removeEventListener("click",v)}})),Object(i.useEffect)((function(){d()}),[m.show]);var d=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},u=function(e){27===e.keyCode&&n(e)},v=function(e){e.stopPropagation()},p=E()("modal",r&&"is-active",o&&"modal-video",t);return l.a.createElement(l.a.Fragment,null,r&&l.a.createElement("div",Object.assign({},m,{className:p,onClick:n}),l.a.createElement("div",{className:"modal-inner",onClick:v},o?l.a.createElement("div",{className:"responsive-video"},"iframe"===c?l.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):l.a.createElement("video",{"v-else":!0,controls:!0,src:o})):l.a.createElement(l.a.Fragment,null,!s&&l.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:n}),l.a.createElement("div",{className:"modal-content"},a)))))};B.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var T=B,I=Object(P.a)({},A.defaults),z=function(e){var t=e.className,n=e.topOuterDivider,r=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,m=e.hasBgColor,d=e.invertColor,u=Object(h.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),v=Object(i.useState)(!1),p=Object(c.a)(v,2),b=p[0],f=p[1],g=E()("hero section center-content",n&&"has-top-divider",r&&"has-bottom-divider",m&&"has-bg-color",d&&"invert-color",t),N=E()("hero-inner section-inner",s&&"has-top-divider",o&&"has-bottom-divider");return l.a.createElement("section",Object.assign({},u,{className:g}),l.a.createElement("div",{className:"container-sm"},l.a.createElement("div",{className:N},l.a.createElement("div",{className:"hero-content"},l.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Hello\ud83d\udc4b My name is"," ",l.a.createElement("span",{className:"text-color-primary"},"Eidmone")),l.a.createElement("div",{className:"container-xs"},l.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"I am driven and ambitious and my interests include software engineering, web development, and solving data structure problems. I am experienced in both frontend and backend programming."))),l.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},l.a.createElement("a",{"data-video":"https://vimeo.com/588115812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),f(!0)}},l.a.createElement(w,{className:"has-shadow",src:a(42),alt:"Hero",width:896,height:504}))),l.a.createElement(T,{id:"video-modal",show:b,handleClose:function(e){e.preventDefault(),f(!1)},video:"https://player.vimeo.com/video/588115812",videoTag:"iframe"}))))};z.defaultProps=I;var R=z,M=function(e){var t=e.className,a=e.data,i=e.children,n=e.tag,r=Object(h.a)(e,["className","data","children","tag"]),s=E()("section-header",t),o=n;return l.a.createElement(l.a.Fragment,null,(a.title||a.paragraph)&&l.a.createElement("div",Object.assign({},r,{className:s}),l.a.createElement("div",{className:"container-xs"},i,a.title&&l.a.createElement(o,{className:E()("mt-0",a.paragraph?"mb-16":"mb-0")},"EXPLAINING A CONCEPT"),a.paragraph&&l.a.createElement("p",{className:"m-0"},"In this video I will cover on how I would I explain a simple concept to a friend. I simply broke it down to simple steps and made sure I had an example. Enjoy!"))))};M.defaultProps={children:null,tag:"h2"};var _=M,G=Object(P.a)({},H.defaults),W=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,r=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,m=e.pushLeft,d=Object(h.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=E()("features-tiles section",i&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",t),v=E()("features-tiles-inner section-inner pt-0",r&&"has-top-divider",s&&"has-bottom-divider"),p=E()("tiles-wrap center-content",m&&"push-left");return l.a.createElement("section",Object.assign({},d,{className:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:v},l.a.createElement(_,{data:{title:"Build up the whole picture",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),l.a.createElement("div",{className:p},l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(w,{src:a(43),alt:"Features tile icon 01",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"#Problem Solver"),l.a.createElement("p",{className:"m-0 text-sm"})))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(w,{src:a(44),alt:"Features tile icon 05",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"#Developer"),l.a.createElement("p",{className:"m-0 text-sm"})))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"features-tiles-item-header"},l.a.createElement("div",{className:"features-tiles-item-image mb-16"},l.a.createElement(w,{src:a(45),alt:"Features tile icon 06",width:64,height:64}))),l.a.createElement("div",{className:"features-tiles-item-content"},l.a.createElement("h4",{className:"mt-0 mb-8"},"#Leader"),l.a.createElement("p",{className:"m-0 text-sm"}))))))))};W.defaultProps=G;var U=W,K=function(e){e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(x,{navPosition:"right",className:"reveal-from-bottom"}),l.a.createElement("main",{className:"site-content"},l.a.createElement(R,null),l.a.createElement(U,null)),l.a.createElement(L,null))},J=Object(P.a)({},S.defaults),V=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,r=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,c=e.invertColor,m=e.invertMobile,d=e.invertDesktop,u=e.alignTop,v=e.imageFill,p=Object(h.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),b=E()("features-split section",i&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",c&&"invert-color",t),f=E()("features-split-inner section-inner",r&&"has-top-divider",s&&"has-bottom-divider"),g=E()("split-wrap",m&&"invert-mobile",d&&"invert-desktop",u&&"align-top");return l.a.createElement("section",Object.assign({},p,{className:b}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:f},l.a.createElement(_,{data:{title:"Workflow that just works",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),l.a.createElement("div",{className:g},l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",v&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(w,{src:a(46),alt:"Features split 01",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",v&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(w,{src:a(47),alt:"Features split 02",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",v&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(w,{src:a(48),alt:"Features split 03",width:528,height:396})))))))};V.defaultProps=J;var X=Object(P.a)({},H.defaults),Y=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,r=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,c=e.pushLeft,m=Object(h.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),d=E()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),u=E()("testimonial-inner section-inner",n&&"has-top-divider",r&&"has-bottom-divider"),v=E()("tiles-wrap",c&&"push-left");return l.a.createElement("section",Object.assign({},m,{className:d}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:u},l.a.createElement(_,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),l.a.createElement("div",{className:v},l.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName")))))))))};Y.defaultProps=X;var $=function(e){var t=e.className,a=e.children,i=e.labelHidden,n=e.id,r=Object(h.a)(e,["className","children","labelHidden","id"]),s=E()("form-label",i&&"screen-reader",t);return l.a.createElement("label",Object.assign({},r,{className:s,htmlFor:n}),a)};$.defaultProps={children:null,labelHidden:!1,id:null};var Q=$,Z=function(e){var t=e.children,a=e.className,i=e.status,n=Object(h.a)(e,["children","className","status"]),r=E()("form-hint",i&&"text-color-".concat(i),a);return l.a.createElement("div",Object.assign({},n,{className:r}),t)};Z.defaultProps={children:null,status:!1};var ee=Z,te=function(e){var t=e.className,a=e.children,i=e.label,n=e.labelHidden,r=e.type,s=e.name,o=e.status,c=e.disabled,m=e.value,d=e.formGroup,u=e.hasIcon,v=e.size,p=e.placeholder,b=e.rows,f=e.hint,g=Object(h.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=E()(d&&""!==d&&("desktop"===d?"form-group-desktop":"form-group"),u&&""!==u&&"has-icon-"+u),w=E()("form-input",v&&"form-input-".concat(v),o&&"form-".concat(o),t),O="textarea"===r?"textarea":"input";return l.a.createElement(l.a.Fragment,null,i&&l.a.createElement(Q,{labelHidden:n,id:g.id},i),l.a.createElement("div",{className:N},l.a.createElement(O,Object.assign({},g,{type:"textarea"!==r?r:null,className:w,name:s,disabled:c,value:m,placeholder:p,rows:"textarea"===r?b:null})),a),f&&l.a.createElement(ee,{status:o},f))};te.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ae=te,ie=Object(P.a)({},A.defaults,{split:!1}),le=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,r=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,c=e.split,m=Object(h.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),d=E()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),u=E()("cta-inner section-inner",n&&"has-top-divider",r&&"has-bottom-divider",c&&"cta-split");return l.a.createElement("section",Object.assign({},m,{className:d}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:u},l.a.createElement("div",{className:"cta-slogan"},l.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),l.a.createElement("div",{className:"cta-action"},l.a.createElement(ae,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},l.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};le.defaultProps=ie;b.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/Microsoft2021",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var ne=function(){var e=Object(i.useRef)(),t=Object(s.d)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){b.a.set({page:e}),b.a.pageview(e)}(a)}),[t]),l.a.createElement(p,{ref:e,children:function(){return l.a.createElement("p",null,l.a.createElement(K,null))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(49);var re=Object(o.a)();r.a.render(l.a.createElement(s.a,{history:re},l.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.3b018971.chunk.js.map