(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{27:function(e,t,a){e.exports=a(51)},37:function(e,t,a){e.exports=a.p+"static/media/logo.2810a88b.svg"},42:function(e,t,a){e.exports=a.p+"static/media/question1.aabc3fc1.jpg"},43:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},44:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},45:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},46:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.d9cb99ce.png"},47:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.3c569239.png"},48:function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.87e4d053.png"},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(15),l=a.n(r),s=a(13),o=a(6),c=a(3),m=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(s.a,Object.assign({},i,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},d=a(12),u=a(4),v=a.n(u),p=a(20),b=n.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),r=Object(d.a)(a,2),l=r[0],s=r[1],o=Object(i.useState)([]),c=Object(d.a)(o,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=l-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",E)),b())}),[m]);var h=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",E))},f=Object(p.throttle)((function(){h(),b()}),30),E=Object(p.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){h(),b()}),[l]),n.a.createElement(n.a.Fragment,null,e.children())}));b.propTypes={children:v.a.func.isRequired};var h=b,f=a(17),E=a(2),g=a.n(E),N=a(14),O=function(e){var t=e.className,a=e.src,r=e.width,l=e.height,s=e.alt,o=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],b=Object(i.useRef)(null);Object(i.useEffect)((function(){h(b.current)}),[]);var h=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return n.a.createElement("img",Object.assign({},o,{ref:b,className:t,src:a,width:r,height:l,alt:s,onLoad:function(){p(!0)}}))};O.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var w=O,D=function(e){var t=e.className,i=Object(c.a)(e,["className"]),r=g()("brand",t);return n.a.createElement("div",Object.assign({},i,{className:r}),n.a.createElement("h1",{className:"m-0"},n.a.createElement(N.a,{to:"/"},n.a.createElement(w,{src:a(37),alt:"Open",width:32,height:32}))))},x=function(e){var t=e.className,a=(e.navPosition,e.hideNav),r=e.hideSignin,l=e.bottomOuterDivider,s=e.bottomDivider,o=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],b=Object(i.useRef)(null),h=Object(i.useRef)(null);Object(i.useEffect)((function(){return v&&f(),document.addEventListener("keydown",N),document.addEventListener("click",O),function(){document.removeEventListener("keydown",N),document.removeEventListener("click",O),E()}}));var f=function(){document.body.classList.add("off-nav-is-active"),b.current.style.maxHeight=b.current.scrollHeight+"px",p(!0)},E=function(){document.body.classList.remove("off-nav-is-active"),b.current&&(b.current.style.maxHeight=null),p(!1)},N=function(e){v&&27===e.keyCode&&E()},O=function(e){b.current&&v&&!b.current.contains(e.target)&&e.target!==h.current&&E()},w=g()("site-header",l&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},o,{className:w}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:g()("site-header-inner",s&&"has-bottom-divider")},n.a.createElement(D,null),!a&&n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{ref:h,className:"header-nav-toggle",onClick:v?E:f},n.a.createElement("span",{className:"screen-reader"},"Menu"),n.a.createElement("span",{className:"hamburger"},n.a.createElement("span",{className:"hamburger-inner"}))),n.a.createElement("nav",{ref:b,className:g()("header-nav",v&&"is-active")},n.a.createElement("div",{className:"header-nav-inner"},n.a.createElement("ul",{className:"list-reset header-nav-right"},n.a.createElement("li",null,n.a.createElement("a",{className:"button button-primary button-wide-mobile button-sm",href:"https://www.linkedin.com/in/eidmone-tagaca-6ab45717b/"},"LinkedIn"))),!r&&n.a.createElement("ul",{className:"list-reset header-nav-right"},n.a.createElement("li",null,n.a.createElement("a",{className:"button button-primary button-wide-mobile button-sm",href:"https://github.com/Tagaca19e"},"Github")))))))))};x.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var j=x,y=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=g()("footer-nav",t);return n.a.createElement("nav",Object.assign({},a,{className:i}),n.a.createElement("ul",{className:"list-reset"},n.a.createElement("li",null,n.a.createElement("a",{href:"mailto: etagaca@csub.edu"},"Contact")),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/eidmone-tagaca-6ab45717b/"},"About me"))))},C=a(25),k=a.n(C),L=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,r=Object(c.a)(e,["className","topOuterDivider","topDivider"]),l=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},r,{className:l}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:g()("site-footer-inner",i&&"has-top-divider")},n.a.createElement("div",{className:"footer-top space-between text-xxs"},n.a.createElement(k.a,{style:{color:"white"},fontSize:"large"})),n.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},n.a.createElement(y,null),n.a.createElement("div",{className:"footer-copyright"},"Coded by"," ",n.a.createElement("a",{href:"https://www.linkedin.com/in/eidmone-tagaca-6ab45717b/"},"Eidmone"),". All right reserved")))))};L.defaultProps={topOuterDivider:!1,topDivider:!1};var P=L,q=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(j,{navPosition:"right",className:"reveal-from-bottom"}),n.a.createElement("main",{className:"site-content"},t),n.a.createElement(P,null))},A=a(5),F={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},S={types:Object(A.a)({},F.types),defaults:Object(A.a)({},F.defaults)},H={types:Object(A.a)({},F.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(A.a)({},F.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},B={types:Object(A.a)({},F.types,{pushLeft:v.a.bool}),defaults:Object(A.a)({},F.defaults,{pushLeft:!1})},T=function(e){var t=e.className,a=e.tag,i=e.color,r=e.size,l=e.loading,s=e.wide,o=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=g()("button",i&&"button-".concat(i),r&&"button-".concat(r),l&&"is-loading",s&&"button-block",o&&"button-wide-mobile",t),v=a;return n.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};T.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var I=function(e){var t=e.className,a=e.children,r=e.handleClose,l=e.show,s=e.closeHidden,o=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&r(e)},p=function(e){e.stopPropagation()},b=g()("modal",l&&"is-active",o&&"modal-video",t);return n.a.createElement(n.a.Fragment,null,l&&n.a.createElement("div",Object.assign({},d,{className:b,onClick:r}),n.a.createElement("div",{className:"modal-inner",onClick:p},o?n.a.createElement("div",{className:"responsive-video"},"iframe"===m?n.a.createElement("iframe",{title:"video",src:o,frameBorder:"0",allowFullScreen:!0}):n.a.createElement("video",{"v-else":!0,controls:!0,src:o})):n.a.createElement(n.a.Fragment,null,!s&&n.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:r}),n.a.createElement("div",{className:"modal-content"},a)))))};I.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var z=I,R=Object(A.a)({},S.defaults),M=function(e){var t=e.className,r=e.topOuterDivider,l=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),p=Object(i.useState)(!1),b=Object(d.a)(p,2),h=b[0],f=b[1],E=g()("hero section center-content",r&&"has-top-divider",l&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",t),N=g()("hero-inner section-inner",s&&"has-top-divider",o&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},v,{className:E}),n.a.createElement("div",{className:"container-sm"},n.a.createElement("div",{className:N},n.a.createElement("div",{className:"hero-content"},n.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Hello\ud83d\udc4b My name is"," ",n.a.createElement("span",{className:"text-color-primary"},"Eidmone")),n.a.createElement("div",{className:"container-xs"},n.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"I am driven and ambitious and my interests include software engineering, web development, and solving data structure problems. I am experienced in both frontend and backend programming."))),n.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},n.a.createElement("a",{"data-video":"https://vimeo.com/588115812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),f(!0)}},n.a.createElement(w,{className:"has-shadow",src:a(42),alt:"Hero",width:896,height:504}))),n.a.createElement(z,{id:"video-modal",show:h,handleClose:function(e){e.preventDefault(),f(!1)},video:"https://player.vimeo.com/video/588115812",videoTag:"iframe"}))))};M.defaultProps=R;var _=M,G=function(e){var t=e.className,a=e.data,i=e.children,r=e.tag,l=Object(c.a)(e,["className","data","children","tag"]),s=g()("section-header",t),o=r;return n.a.createElement(n.a.Fragment,null,(a.title||a.paragraph)&&n.a.createElement("div",Object.assign({},l,{className:s}),n.a.createElement("div",{className:"container-xs"},i,a.title&&n.a.createElement(o,{className:g()("mt-0",a.paragraph?"mb-16":"mb-0")},"EXPLAINING A CONCEPT"),a.paragraph&&n.a.createElement("p",{className:"m-0"},"In this video I will cover on how I would I explain a simple concept to a friend. I simply broke it down to simple steps and made sure I had an example. Enjoy!"))))};G.defaultProps={children:null,tag:"h2"};var W=G,U=Object(A.a)({},B.defaults),K=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=g()("features-tiles section",i&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),p=g()("features-tiles-inner section-inner pt-0",l&&"has-top-divider",s&&"has-bottom-divider"),b=g()("tiles-wrap center-content",d&&"push-left");return n.a.createElement("section",Object.assign({},u,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:p},n.a.createElement(W,{data:{title:"Build up the whole picture",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),n.a.createElement("div",{className:b},n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(w,{src:a(43),alt:"Features tile icon 01",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"#Problem Solver"),n.a.createElement("p",{className:"m-0 text-sm"})))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(w,{src:a(44),alt:"Features tile icon 05",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"#Developer"),n.a.createElement("p",{className:"m-0 text-sm"})))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(w,{src:a(45),alt:"Features tile icon 06",width:64,height:64}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8"},"#Leader"),n.a.createElement("p",{className:"m-0 text-sm"}))))))))};K.defaultProps=U;var J=K,V=Object(A.a)({},H.defaults),X=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,b=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),h=g()("features-split section",i&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),f=g()("features-split-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider"),E=g()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return n.a.createElement("section",Object.assign({},b,{className:h}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:f},n.a.createElement(W,{data:{title:"Workflow that just works",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),n.a.createElement("div",{className:E},n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),n.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),n.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(w,{src:a(46),alt:"Features split 01",width:528,height:396}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),n.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),n.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(w,{src:a(47),alt:"Features split 02",width:528,height:396}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),n.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),n.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(w,{src:a(48),alt:"Features split 03",width:528,height:396})))))))};X.defaultProps=V;var Y=Object(A.a)({},B.defaults),$=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=g()("testimonial-inner section-inner",r&&"has-top-divider",l&&"has-bottom-divider"),p=g()("tiles-wrap",m&&"push-left");return n.a.createElement("section",Object.assign({},d,{className:u}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:v},n.a.createElement(W,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),n.a.createElement("div",{className:p},n.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"AppName"))))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"AppName"))))),n.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"testimonial-item-content"},n.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),n.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},n.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),n.a.createElement("span",{className:"text-color-low"}," / "),n.a.createElement("span",{className:"testimonial-item-link"},n.a.createElement("a",{href:"#0"},"AppName")))))))))};$.defaultProps=Y;var Q=function(e){var t=e.className,a=e.children,i=e.labelHidden,r=e.id,l=Object(c.a)(e,["className","children","labelHidden","id"]),s=g()("form-label",i&&"screen-reader",t);return n.a.createElement("label",Object.assign({},l,{className:s,htmlFor:r}),a)};Q.defaultProps={children:null,labelHidden:!1,id:null};var Z=Q,ee=function(e){var t=e.children,a=e.className,i=e.status,r=Object(c.a)(e,["children","className","status"]),l=g()("form-hint",i&&"text-color-".concat(i),a);return n.a.createElement("div",Object.assign({},r,{className:l}),t)};ee.defaultProps={children:null,status:!1};var te=ee,ae=function(e){var t=e.className,a=e.children,i=e.label,r=e.labelHidden,l=e.type,s=e.name,o=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,b=e.placeholder,h=e.rows,f=e.hint,E=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=g()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),O=g()("form-input",p&&"form-input-".concat(p),o&&"form-".concat(o),t),w="textarea"===l?"textarea":"input";return n.a.createElement(n.a.Fragment,null,i&&n.a.createElement(Z,{labelHidden:r,id:E.id},i),n.a.createElement("div",{className:N},n.a.createElement(w,Object.assign({},E,{type:"textarea"!==l?l:null,className:O,name:s,disabled:m,value:d,placeholder:b,rows:"textarea"===l?h:null})),a),f&&n.a.createElement(te,{status:o},f))};ae.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ie=ae,ne=Object(A.a)({},S.defaults,{split:!1}),re=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=g()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=g()("cta-inner section-inner",r&&"has-top-divider",l&&"has-bottom-divider",m&&"cta-split");return n.a.createElement("section",Object.assign({},d,{className:u}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:v},n.a.createElement("div",{className:"cta-slogan"},n.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),n.a.createElement("div",{className:"cta-action"},n.a.createElement(ie,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},n.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};re.defaultProps=ne;var le=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(_,{className:"illustration-section-01"}),n.a.createElement(J,null))};f.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/Microsoft2021",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var se=function(){var e=Object(i.useRef)(),t=Object(s.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(a)}),[t]),n.a.createElement(h,{ref:e,children:function(){return n.a.createElement(s.c,null,n.a.createElement(m,{exact:!0,path:"/",component:le,layout:q}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(49);var oe=Object(o.a)();l.a.render(n.a.createElement(s.b,{history:oe},n.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.a7656aee.chunk.js.map