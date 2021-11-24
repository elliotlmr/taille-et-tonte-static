(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{1947:function(e,a,t){"use strict";t.d(a,{Z:function(){return N}});var i=t(5893),o=t(9008),r=t(9163),n=t(1664),s=t(1163),d=t(7294),l=r.ZP.header.withConfig({displayName:"Header__HeaderContainer",componentId:"sc-136ffgk-0"})(["z-index:10;position:absolute;top:0;left:0;display:flex;flex-direction:row;justify-content:space-around;width:100vw;@media (max-width:1024px){justify-content:flex-start;}"]),c=r.ZP.div.withConfig({displayName:"Header__LogoContainer",componentId:"sc-136ffgk-1"})(["margin:30px 15px 0 15px;width:220px;filter:",";@media (max-width:600px){width:150px;}@media (max-width:400px){width:100px;}"],(function(e){return e.black?"drop-shadow(0 0.5px 0 var(--color-dark))":"drop-shadow(0 0.5px 0 var(--color-light))"})),p=r.ZP.img.withConfig({displayName:"Header__Logo",componentId:"sc-136ffgk-2"})(["cursor:pointer;width:100%;height:100%;"]),h=r.ZP.nav.withConfig({displayName:"Header__NavContainer",componentId:"sc-136ffgk-3"})(["transition:all 0.3s ease-in-out;transform-origin:left;display:flex;flex-direction:row;justify-content:space-around;align-items:center;width:70%;@media (max-width:1024px){transform:scaleX(0);position:fixed;left:0;top:0;flex-direction:column;width:50%;height:100vh;background-color:var(--color-dark-soft);border-right:2px solid var(--color-gll);backdrop-filter:blur(10px);&.menu-displayed{transform:scale(1);}}"]),m=r.ZP.div.withConfig({displayName:"Header__ButtonContainer",componentId:"sc-136ffgk-4"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;&:hover{& div{background-color:var(--color-light);width:100%;}}@media (max-width:1024px){transform:translateX(-150px);opacity:0;&#display-1{transition:all 0.5s ease-in-out;transform:translateX(0);opacity:1;}&#display-2{transition:all 0.6s ease-in-out;transform:translateX(0);opacity:1;}&#display-3{transition:all 0.7s ease-in-out;transform:translateX(0);opacity:1;}&#display-4{transition:all 0.8s ease-in-out;transform:translateX(0);opacity:1;}&#display-5{transition:all 0.9s ease-in-out;transform:translateX(0);opacity:1;}}"]),f=(0,r.ZP)(n.default).withConfig({displayName:"Header__NavButton",componentId:"sc-136ffgk-5"})([""]),x=r.ZP.a.withConfig({displayName:"Header__NavText",componentId:"sc-136ffgk-6"})(["transition:transform 0.3s ease-in-out;color:",";cursor:pointer;font-size:1.4rem;padding:10px;filter:",";text-decoration:none;&:hover{transform:scale(1.1);}&.active-nav{transform:scale(1.1);}@media (max-width:1024px){color:var(--color-light);filter:drop-shadow(0 0 1px var(--color-dark));}"],(function(e){return e.black?"var(--color-dark)":"var(--color-light)"}),(function(e){return e.black?"drop-shadow(0 0 1px var(--color-light))":"drop-shadow(0 0 1px var(--color-dark))"})),u=r.ZP.div.withConfig({displayName:"Header__Indicator",componentId:"sc-136ffgk-7"})(["transition:all 0.3s ease-in-out;transform-origin:center;height:3px;width:3px;border-radius:5px;background-color:var(--color-gll);filter:drop-shadow(0 0 1px var(--color-dark));&.active-indicator{background-color:var(--color-light);width:100%;}"]),g=r.ZP.div.withConfig({displayName:"Header__WrapContainer",componentId:"sc-136ffgk-8"})(["transition:all 0.5s ease-in-out;z-index:10;position:fixed;right:3%;top:5%;width:50px;height:50px;overflow:hidden;border-top:2px solid var(--color-gll);border-bottom:2px solid var(--color-gll);border-radius:100% 0% 100% 0% / 50% 50% 50% 50%;filter:drop-shadow(0 0 1px var(--color-dark));&.menu-displayed{border-color:var(--color-warm);}@media (min-width:1025px){display:none;}"]),w=r.ZP.div.withConfig({displayName:"Header__WrapBar",componentId:"sc-136ffgk-9"})(["transition:all 0.3s ease-in-out;position:absolute;left:0;right:0;margin:auto;width:25px;height:3px;border-radius:50px;background-color:var(--color-light);&#wrap-bar-1{top:12px;&.menu-displayed{transform:rotate(45deg);top:22.5px;}}&#wrap-bar-2{top:21px;&.menu-displayed{transform:translateX(200%);opacity:0;}}&#wrap-bar-3{top:30px;&.menu-displayed{transform:rotate(-45deg);top:22.5px;}}"]);function v(e){var a=(0,s.useRouter)(),t=(0,d.useState)(!1),o=t[0],r=t[1];return(0,i.jsxs)(l,{children:[(0,i.jsxs)(g,{className:o?"menu-displayed":"",onClick:function(){return r(!o)},children:[(0,i.jsx)(w,{id:"wrap-bar-1",className:o?"menu-displayed":""}),(0,i.jsx)(w,{id:"wrap-bar-2",className:o?"menu-displayed":""}),(0,i.jsx)(w,{id:"wrap-bar-3",className:o?"menu-displayed":""})]}),(0,i.jsx)(f,{href:"/",children:(0,i.jsx)(c,{black:e.black,children:(0,i.jsx)(p,{src:"/assets/logo-tt.png",width:"2045",height:"1287",layout:"responsive",priority:"true",alt:"Logo Taille et Tonte"})})}),(0,i.jsxs)(h,{className:o?"menu-displayed":"",children:[(0,i.jsxs)(m,{id:o?"display-1":"",children:[(0,i.jsx)(f,{passHref:!0,href:"/",children:(0,i.jsx)(x,{black:e.black,className:"/"==a.pathname?"active-nav":"",children:"Accueil"})}),(0,i.jsx)(u,{className:"/"==a.pathname?"active-indicator":""})]}),(0,i.jsxs)(m,{id:o?"display-2":"",children:[(0,i.jsx)(f,{passHref:!0,href:"/prestations",children:(0,i.jsx)(x,{black:e.black,className:"/prestations"==a.pathname?"active-nav":"",children:"Prestations"})}),(0,i.jsx)(u,{className:"/prestations"==a.pathname?"active-indicator":""})]}),(0,i.jsxs)(m,{id:o?"display-4":"",children:[(0,i.jsx)(f,{passHref:!0,href:"/certification",children:(0,i.jsx)(x,{black:e.black,className:"/certification"==a.pathname?"active-nav":"",children:"Certification"})}),(0,i.jsx)(u,{className:"/certification"==a.pathname?"active-indicator":""})]}),(0,i.jsxs)(m,{id:o?"display-5":"",children:[(0,i.jsx)(f,{passHref:!0,href:"/contact",children:(0,i.jsx)(x,{black:e.black,className:"/contact"==a.pathname?"active-nav":"",children:"Contact"})}),(0,i.jsx)(u,{className:"/contact"==a.pathname?"active-indicator":""})]})]})]})}var j=r.ZP.footer.withConfig({displayName:"Footer__FooterContainer",componentId:"sc-18u7u3j-0"})(["z-index:6;position:absolute;bottom:0;left:0;right:0;margin:auto;width:100%;"]),y=r.ZP.ul.withConfig({displayName:"Footer__FooterMenu",componentId:"sc-18u7u3j-1"})(["display:flex;flex-direction:row;justify-content:center;width:100%;list-style:none;padding:0;& a{text-decoration:none;}"]),b=r.ZP.li.withConfig({displayName:"Footer__MenuButton",componentId:"sc-18u7u3j-2"})(['font-family:"Montserrat-Bold";color:var(--color-gll);text-shadow:0 0 1px var(--color-dark);margin:0 5px;font-size:0.8rem;cursor:pointer;@media (max-width:800px){font-size:0.5rem;}@media (max-width:320px){font-size:0.4rem;}']);function k(){return(0,i.jsx)(j,{children:(0,i.jsxs)(y,{children:[(0,i.jsx)(n.default,{passHref:!0,href:"/mentions",children:(0,i.jsx)(b,{children:"Mentions L\xe9gales"})}),(0,i.jsx)(b,{children:"|"}),(0,i.jsx)(n.default,{passHref:!0,href:"/contact",children:(0,i.jsx)(b,{children:"Fr\xe9d\xe9ric Stravius"})}),(0,i.jsx)(b,{children:"|"}),(0,i.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://shiro-e-portfolio.vercel.app/",children:(0,i.jsx)(b,{children:"Shiro-e Web Design"})})]})})}var _=r.ZP.div.withConfig({displayName:"Layout__PageContainer",componentId:"sc-11vvgus-0"})(["position:relative;"]),C=r.ZP.main.withConfig({displayName:"Layout__MainContainer",componentId:"sc-11vvgus-1"})([""]);function N(e){var a=e.black,t=e.children,r=e.page;return(0,i.jsxs)(_,{children:[(0,i.jsxs)(o.default,{children:[(0,i.jsx)("title",{children:r}),(0,i.jsx)("meta",{name:"description",content:"Entretien de jardin, paysagiste professionnel agr\xe9\xe9 service \xe0 la personne. Taille et tonte sur Concarneau et environs. Contactez-moi pour parler de votre projet."}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(v,{black:a}),(0,i.jsx)(C,{id:"main",children:t}),(0,i.jsx)(k,{})]})}},2465:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return x}});var i=t(5893),o=t(9163),r=t(1947),n=(0,o.F4)(["from{transform:translateX(-200px);opacity:0;}to{transform:translateX(0);opacity:1;}"]),s=(0,o.F4)(["0%{transform:translateX(200px);opacity:0;}50%{transform:translateX(0);}100%{opacity:1;}"]),d=o.ZP.section.withConfig({displayName:"contact__Section",componentId:"sc-12prwoc-0"})(['z-index:0;position:relative;width:100vw;height:100vh;overflow:hidden;display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:var(--color-dark);&::before{content:"";position:absolute;bottom:0;width:100%;height:100px;background:linear-gradient(to top,var(--color-dark),transparent);z-index:1;}&::after{content:"";position:absolute;left:0;width:55%;height:100%;background:linear-gradient(to right,var(--color-dark),transparent);z-index:0;}']),l=o.ZP.img.withConfig({displayName:"contact__BgImage",componentId:"sc-12prwoc-1"})(["position:absolute;top:0;left:0;object-fit:cover;animation:"," 0.5s both ease-in-out;width:auto;min-width:100%;max-height:100%;"],s),c=o.ZP.h1.withConfig({displayName:"contact__Title",componentId:"sc-12prwoc-2"})(["animation:"," 0.5s ease-in-out;z-index:2;font-size:5rem;align-self:flex-start;margin:50px 15%;color:var(--color-light);text-shadow:0 0 2px var(--color-dark);@media (max-width:900px){font-size:4rem;}@media (max-width:550px){font-size:3rem;}@media (max-width:450px){font-size:2rem;margin:35px 5%;}"],n),p=o.ZP.p.withConfig({displayName:"contact__Text",componentId:"sc-12prwoc-3"})(["color:var(--color-light);font-size:1.5rem;text-shadow:0 0 2px var(--color-dark);align-self:flex-start;text-align:justify;&.contact-outro{@media (max-width:550px){font-size:0.8rem;}}"]),h=o.ZP.a.withConfig({displayName:"contact__ContactLink",componentId:"sc-12prwoc-4"})(["text-shadow:0 0 2px var(--color-dark);color:var(--color-warm);@media (max-width:450px){font-size:0.7rem;}@media (max-width:320px){font-size:0.6rem;}&.phone-number{font-size:2rem;margin-bottom:5%;@media (max-width:450px){font-size:1.5rem;}@media (max-width:320px){font-size:1.2rem;}}"]),m=o.ZP.div.withConfig({displayName:"contact__LinkContainer",componentId:"sc-12prwoc-5"})(["display:flex;flex-direction:row;align-items:center;& svg{width:35px;height:35px;margin:0 15px;color:var(--color-warm);filter:drop-shadow(0 0 2px var(--color-dark));cursor:pointer;}"]),f=o.ZP.div.withConfig({displayName:"contact__ContactContainer",componentId:"sc-12prwoc-6"})(["animation:"," 0.5s ease-in-out;z-index:2;width:50%;border:2px solid var(--color-gll);border-radius:15px;background-color:var(--color-dark-soft);backdrop-filter:blur(5px);padding:15px;display:flex;flex-direction:column;justify-content:center;align-items:center;@media (max-width:900px){width:80%;}@media (max-width:550px){width:95%;}"],n);function x(){return(0,i.jsx)(r.Z,{page:"Taille & Tonte | Contact - Entretien de Jardin",children:(0,i.jsxs)(d,{children:[(0,i.jsx)(l,{src:"/assets/images/gaz.jpg",layout:"fill"}),(0,i.jsx)(c,{children:"Contactez-moi :"}),(0,i.jsxs)(f,{children:[(0,i.jsx)(p,{children:"Par mail :"}),(0,i.jsxs)(m,{children:[(0,i.jsx)(h,{id:"mail",href:"mailto:fredericstravius.servicejardin@gmail.com",children:"fredericstravius.servicejardin@gmail.com"}),(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-clipboard",viewBox:"0 0 16 16",onClick:function(){var e=document.getElementById("mail").innerText;navigator.clipboard.writeText(e).then((function(){alert("E-mail copi\xe9 !")}))},children:[(0,i.jsx)("path",{d:"M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"}),(0,i.jsx)("path",{d:"M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"})]})]}),(0,i.jsx)(p,{children:"Par t\xe9l\xe9phone :"}),(0,i.jsx)(h,{className:"phone-number",href:"tel:0619394983",children:"06 19 39 49 83"}),(0,i.jsx)(p,{className:"contact-outro",children:"Cr\xe9ons ensemble un projet personnalis\xe9 pour votre jardin, ou posez-moi les questions que vous souhaitez, je vous r\xe9pondrai au plus vite."})]})]})})}},3269:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return t(2465)}])}},function(e){e.O(0,[349,774,888,179],(function(){return a=3269,e(e.s=a);var a}));var a=e.O();_N_E=a}]);