(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1947:function(e,a,t){"use strict";t.d(a,{Z:function(){return z}});var i=t(5893),o=t(9008),r=t(9163),n=t(1664),s=t(1163),l=t(7294),d=r.ZP.header.withConfig({displayName:"Header__HeaderContainer",componentId:"sc-136ffgk-0"})(["z-index:10;position:absolute;top:0;left:0;display:flex;flex-direction:row;justify-content:space-around;width:100vw;@media (max-width:1024px){justify-content:flex-start;}"]),c=r.ZP.div.withConfig({displayName:"Header__LogoContainer",componentId:"sc-136ffgk-1"})(["margin:30px 15px 0 15px;width:220px;filter:",";@media (max-width:600px){width:150px;}@media (max-width:400px){width:100px;}"],(function(e){return e.black?"drop-shadow(0 0.5px 0 var(--color-dark))":"drop-shadow(0 0.5px 0 var(--color-light))"})),p=r.ZP.img.withConfig({displayName:"Header__Logo",componentId:"sc-136ffgk-2"})(["cursor:pointer;width:100%;height:100%;"]),m=r.ZP.nav.withConfig({displayName:"Header__NavContainer",componentId:"sc-136ffgk-3"})(["transition:all 0.3s ease-in-out;transform-origin:left;display:flex;flex-direction:row;justify-content:space-around;align-items:center;width:70%;@media (max-width:1024px){transform:scaleX(0);position:fixed;left:0;top:0;flex-direction:column;width:50%;height:100vh;background-color:var(--color-dark-soft);border-right:2px solid var(--color-gll);backdrop-filter:blur(10px);&.menu-displayed{transform:scale(1);}}"]),h=r.ZP.div.withConfig({displayName:"Header__ButtonContainer",componentId:"sc-136ffgk-4"})(["display:flex;flex-direction:column;justify-content:center;align-items:center;&:hover{& div{background-color:var(--color-light);width:100%;}}@media (max-width:1024px){transform:translateX(-150px);opacity:0;&#display-1{transition:all 0.5s ease-in-out;transform:translateX(0);opacity:1;}&#display-2{transition:all 0.6s ease-in-out;transform:translateX(0);opacity:1;}&#display-3{transition:all 0.7s ease-in-out;transform:translateX(0);opacity:1;}&#display-4{transition:all 0.8s ease-in-out;transform:translateX(0);opacity:1;}&#display-5{transition:all 0.9s ease-in-out;transform:translateX(0);opacity:1;}}"]),x=(0,r.ZP)(n.default).withConfig({displayName:"Header__NavButton",componentId:"sc-136ffgk-5"})([""]),f=r.ZP.a.withConfig({displayName:"Header__NavText",componentId:"sc-136ffgk-6"})(["transition:transform 0.3s ease-in-out;color:",";cursor:pointer;font-size:1.4rem;padding:10px;filter:",";text-decoration:none;&:hover{transform:scale(1.1);}&.active-nav{transform:scale(1.1);}@media (max-width:1024px){color:var(--color-light);filter:drop-shadow(0 0 1px var(--color-dark));}"],(function(e){return e.black?"var(--color-dark)":"var(--color-light)"}),(function(e){return e.black?"drop-shadow(0 0 1px var(--color-light))":"drop-shadow(0 0 1px var(--color-dark))"})),u=r.ZP.div.withConfig({displayName:"Header__Indicator",componentId:"sc-136ffgk-7"})(["transition:all 0.3s ease-in-out;transform-origin:center;height:3px;width:3px;border-radius:5px;background-color:var(--color-gll);filter:drop-shadow(0 0 1px var(--color-dark));&.active-indicator{background-color:var(--color-light);width:100%;}"]),g=r.ZP.div.withConfig({displayName:"Header__WrapContainer",componentId:"sc-136ffgk-8"})(["transition:all 0.5s ease-in-out;z-index:10;position:fixed;right:3%;top:5%;width:50px;height:50px;overflow:hidden;border-top:2px solid var(--color-gll);border-bottom:2px solid var(--color-gll);border-radius:100% 0% 100% 0% / 50% 50% 50% 50%;filter:drop-shadow(0 0 1px var(--color-dark));&.menu-displayed{border-color:var(--color-warm);}@media (min-width:1025px){display:none;}"]),v=r.ZP.div.withConfig({displayName:"Header__WrapBar",componentId:"sc-136ffgk-9"})(["transition:all 0.3s ease-in-out;position:absolute;left:0;right:0;margin:auto;width:25px;height:3px;border-radius:50px;background-color:var(--color-light);&#wrap-bar-1{top:12px;&.menu-displayed{transform:rotate(45deg);top:22.5px;}}&#wrap-bar-2{top:21px;&.menu-displayed{transform:translateX(200%);opacity:0;}}&#wrap-bar-3{top:30px;&.menu-displayed{transform:rotate(-45deg);top:22.5px;}}"]);function w(e){var a=(0,s.useRouter)(),t=(0,l.useState)(!1),o=t[0],r=t[1];return(0,i.jsxs)(d,{children:[(0,i.jsxs)(g,{className:o?"menu-displayed":"",onClick:function(){return r(!o)},children:[(0,i.jsx)(v,{id:"wrap-bar-1",className:o?"menu-displayed":""}),(0,i.jsx)(v,{id:"wrap-bar-2",className:o?"menu-displayed":""}),(0,i.jsx)(v,{id:"wrap-bar-3",className:o?"menu-displayed":""})]}),(0,i.jsx)(x,{href:"/",children:(0,i.jsx)(c,{black:e.black,children:(0,i.jsx)(p,{src:"/assets/logo-tt.png",width:"2045",height:"1287",layout:"responsive",priority:"true",alt:"Logo Taille et Tonte"})})}),(0,i.jsxs)(m,{className:o?"menu-displayed":"",children:[(0,i.jsxs)(h,{id:o?"display-1":"",children:[(0,i.jsx)(x,{passHref:!0,href:"/",children:(0,i.jsx)(f,{black:e.black,className:"/"==a.pathname?"active-nav":"",children:"Accueil"})}),(0,i.jsx)(u,{className:"/"==a.pathname?"active-indicator":""})]}),(0,i.jsxs)(h,{id:o?"display-2":"",children:[(0,i.jsx)(x,{passHref:!0,href:"/prestations",children:(0,i.jsx)(f,{black:e.black,className:"/prestations"==a.pathname?"active-nav":"",children:"Prestations"})}),(0,i.jsx)(u,{className:"/prestations"==a.pathname?"active-indicator":""})]}),(0,i.jsxs)(h,{id:o?"display-4":"",children:[(0,i.jsx)(x,{passHref:!0,href:"/certification",children:(0,i.jsx)(f,{black:e.black,className:"/certification"==a.pathname?"active-nav":"",children:"Certification"})}),(0,i.jsx)(u,{className:"/certification"==a.pathname?"active-indicator":""})]}),(0,i.jsxs)(h,{id:o?"display-5":"",children:[(0,i.jsx)(x,{passHref:!0,href:"/contact",children:(0,i.jsx)(f,{black:e.black,className:"/contact"==a.pathname?"active-nav":"",children:"Contact"})}),(0,i.jsx)(u,{className:"/contact"==a.pathname?"active-indicator":""})]})]})]})}var b=r.ZP.footer.withConfig({displayName:"Footer__FooterContainer",componentId:"sc-18u7u3j-0"})(["z-index:6;position:absolute;bottom:0;left:0;right:0;margin:auto;width:100%;"]),j=r.ZP.ul.withConfig({displayName:"Footer__FooterMenu",componentId:"sc-18u7u3j-1"})(["display:flex;flex-direction:row;justify-content:center;width:100%;list-style:none;padding:0;& a{text-decoration:none;}"]),y=r.ZP.li.withConfig({displayName:"Footer__MenuButton",componentId:"sc-18u7u3j-2"})(['font-family:"Montserrat-Bold";color:var(--color-gll);text-shadow:0 0 1px var(--color-dark);margin:0 5px;font-size:0.8rem;cursor:pointer;@media (max-width:800px){font-size:0.5rem;}@media (max-width:320px){font-size:0.4rem;}']);function k(){return(0,i.jsx)(b,{children:(0,i.jsxs)(j,{children:[(0,i.jsx)(n.default,{passHref:!0,href:"/mentions",children:(0,i.jsx)(y,{children:"Mentions L\xe9gales"})}),(0,i.jsx)(y,{children:"|"}),(0,i.jsx)(n.default,{passHref:!0,href:"/contact",children:(0,i.jsx)(y,{children:"Fr\xe9d\xe9ric Stravius"})}),(0,i.jsx)(y,{children:"|"}),(0,i.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://shiro-e-portfolio.vercel.app/",children:(0,i.jsx)(y,{children:"Shiro-e Web Design"})})]})})}var _=r.ZP.div.withConfig({displayName:"Layout__PageContainer",componentId:"sc-11vvgus-0"})(["position:relative;"]),N=r.ZP.main.withConfig({displayName:"Layout__MainContainer",componentId:"sc-11vvgus-1"})([""]);function z(e){var a=e.black,t=e.children,r=e.page;return(0,i.jsxs)(_,{children:[(0,i.jsxs)(o.default,{children:[(0,i.jsx)("title",{children:r}),(0,i.jsx)("meta",{name:"description",content:"Entretien de jardin, paysagiste professionnel agr\xe9\xe9 service \xe0 la personne. Taille et tonte sur Concarneau et environs. Contactez-moi pour parler de votre projet."}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(w,{black:a}),(0,i.jsx)(N,{id:"main",children:t}),(0,i.jsx)(k,{})]})}},6124:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return b}});var i=t(5893),o=t(9163),r=t(1947),n=t(7294),s=t(1664),l=(0,o.F4)(["0%{transform:translateX(200px);opacity:0;}50%{transform:translateX(0);}100%{opacity:1;}"]),d=(0,o.F4)(["0%{transform:translateX(-500px);opacity:0;}100%{transform:translateX(0);opacity:1;}"]),c=o.ZP.section.withConfig({displayName:"pages__BgContainer",componentId:"sc-1mqmtra-0"})(['z-index:0;position:relative;width:100vw;height:100vh;overflow:hidden;display:flex;justify-content:center;align-items:center;flex-direction:column;&.homepage-s1{background-color:var(--color-dark);border-bottom:2px solid var(--color-gll);&::before{content:"";position:absolute;bottom:0;width:100%;height:100px;background:linear-gradient(to top,var(--color-dark),transparent);z-index:1;}&::after{content:"";position:absolute;left:0;width:55%;height:100%;background:linear-gradient(to right,var(--color-dark),transparent);z-index:1;}}&.homepage-s2{background-color:var(--color-light);justify-content:space-between;}&.homepage-s3{background-color:var(--color-light);height:auto;min-height:100vh;padding-bottom:6%;@media (max-width:800px){padding-bottom:15%;}}']),p=o.ZP.img.withConfig({displayName:"pages__BgImage",componentId:"sc-1mqmtra-1"})(["position:absolute;top:0;left:0;object-fit:cover;animation:"," 0.5s both ease-in-out;width:auto;min-width:100%;max-height:100%;"],l),m=o.ZP.div.withConfig({displayName:"pages__Subcontainer",componentId:"sc-1mqmtra-2"})(['position:relative;display:flex;justify-content:center;flex-direction:column;width:100%;height:50%;&.homepage-sub-1{align-items:center;}&.homepage-sub-2{border-top:2px solid var(--color-gll);border-bottom:2px solid var(--color-gll);background-image:url("/assets/images/gazon.jpg");background-attachment:fixed;background-position:center;justify-content:center;}&.homepage-sub-3{height:auto;flex-direction:row;align-items:center;justify-content:space-around;@media (max-width:800px){flex-direction:column;}}']),h=o.ZP.h1.withConfig({displayName:"pages__Title",componentId:"sc-1mqmtra-3"})(["animation:"," 0.5s both ease-in-out;z-index:2;position:relative;left:0;font-size:7rem;color:var(--color-light);align-self:flex-start;margin:0 100px;filter:drop-shadow(0 0 1px var(--color-dark));@media (max-width:800px){font-size:6rem;margin:0 50px;}@media (max-width:600px){font-size:5rem;margin:0 50px;}@media (max-width:500px){font-size:4rem;margin:0 50px;}@media (max-width:400px){font-size:3rem;margin:0 30px;}"],d),x=o.ZP.h2.withConfig({displayName:"pages__Subtitle",componentId:"sc-1mqmtra-4"})(["z-index:2;color:var(--color-gll);font-size:4rem;margin:50px 50px;filter:drop-shadow(0 0 1px var(--color-dark));&.homepage-subtitle-2{align-self:flex-start;margin:50px 5%;@media (max-width:800px){font-size:3.8rem;}@media (max-width:650px){font-size:2.8rem;}@media (max-width:450px){font-size:1.8rem;margin-bottom:0;}}@media (max-width:650px){font-size:3rem;margin:50px 5%;}@media (max-width:450px){font-size:2rem;}"]),f=o.ZP.p.withConfig({displayName:"pages__Reference",componentId:"sc-1mqmtra-5"})(["animation:",' 0.5s both ease-in-out;z-index:2;position:absolute;bottom:5%;right:5%;text-align:center;font-family:"Reey",Arial,Helvetica,sans-serif;font-size:2rem;color:var(--color-light);filter:drop-shadow(0 0 1px var(--color-dark));& a{font-family:"Montserrat-Medium",Arial,Helvetica,sans-serif;font-size:1.2rem;color:var(--color-light);}@media (max-width:800px){font-size:1.5rem;}@media (max-width:450px){font-size:1rem;}'],d),u=o.ZP.h2.withConfig({displayName:"pages__Text",componentId:"sc-1mqmtra-6"})(["z-index:2;font-size:3rem;color:var(--color-light);margin:0 50px;&.homepage-text-1{filter:drop-shadow(0 0 1px var(--color-dark));margin:20px 50px;font-size:2rem;align-self:center;text-align:left;@media (max-width:550px){font-size:1.5rem;}@media (max-width:450px){font-size:1rem;}}&.homepage-text-2{filter:drop-shadow(0 0 1px var(--color-dark));align-self:flex-end;font-size:1.5rem;font-style:italic;margin-bottom:40px;margin-right:10%;@media (max-width:550px){font-size:1rem;}@media (max-width:450px){font-size:0.5rem;}}&.homepage-text-3{color:var(--color-dark);font-size:1.2rem;margin:50px 5%;width:45%;align-self:flex-start;& a{color:var(--color-warm);}& span{color:var(--color-gll);}@media (max-width:800px){width:90%;}}"]),g=o.ZP.ul.withConfig({displayName:"pages__Liste",componentId:"sc-1mqmtra-7"})(["margin:50px 5%;align-self:flex-start;width:45%;padding:0;@media (max-width:800px){width:85%;align-self:center;}"]),v=o.ZP.li.withConfig({displayName:"pages__Puce",componentId:"sc-1mqmtra-8"})(['font-family:"Montserrat-Bold",Arial,Helvetica,sans-serif;color:var(--color-dark);font-size:1.2rem;margin-bottom:15px;& a{color:var(--color-warm);}& span{color:var(--color-gll);}']),w=o.ZP.button.withConfig({displayName:"pages__Button",componentId:"sc-1mqmtra-9"})(['transition:all 0.2s ease-in-out;z-index:2;width:300px;height:100px;border:2px solid var(--color-gll);border-radius:5px;filter:drop-shadow(0 0 1px var(--color-dark));background-color:var(--color-gll);font-family:"Montserrat-Bold";color:var(--color-light);font-size:2rem;text-shadow:0 0 1px var(--color-dark);&.homepage-btn-1{position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;}&.homepage-btn-2{}&:hover{transform:scale(1.1);}&:focus{transform:scale(1.1);}@media (max-width:400px){width:200px;height:75px;font-size:1.5rem;}']);function b(){return(0,n.useEffect)((function(){var e=document.getElementById("title-homepage"),a=document.getElementById("bg-img-1");window.onscroll=function(){var t=window.scrollY;a.style.top=.7*t+"px",e.style.left=.2*t+"px"}}),[]),(0,i.jsxs)(r.Z,{animation:!0,page:"Taille et Tonte | Accueil - Entretien de Jardin",children:[(0,i.jsxs)(c,{className:"homepage-s1",children:[(0,i.jsx)(p,{src:"/assets/images/gaz.jpg",alt:"Photo de gazon",layout:"fill",priority:"true",id:"bg-img-1"}),(0,i.jsx)(h,{id:"title-homepage",children:"Entretenir votre jardin"}),(0,i.jsxs)(f,{children:["par Fr\xe9d\xe9ric Stravius ",(0,i.jsx)("br",{}),"-"," ",(0,i.jsx)("a",{href:"tel:0619394983",children:"06 19 39 49 83"})," -",(0,i.jsx)("br",{}),"Concarneau"]})]}),(0,i.jsxs)(c,{className:"homepage-s2",children:[(0,i.jsx)(m,{className:"homepage-sub-1",children:(0,i.jsx)(x,{children:"Choisissez les prestations qui vous int\xe9ressent."})}),(0,i.jsx)(s.default,{passHref:!0,href:"/prestations",children:(0,i.jsx)(w,{className:"homepage-btn-1",children:"En savoir plus"})}),(0,i.jsxs)(m,{className:"homepage-sub-2",children:[(0,i.jsxs)(u,{className:"homepage-text-1",children:["Intervention ponctuelle, ou contrat \xe0 l'ann\xe9e : ",(0,i.jsx)("br",{}),"Nous d\xe9cidons ensemble de la formule id\xe9ale pour l'entretien de votre jardin."]}),(0,i.jsx)(u,{className:"homepage-text-2",children:"Devis gratuits et sans conditions."})]})]}),(0,i.jsxs)(c,{className:"homepage-s3",children:[(0,i.jsx)(x,{className:"homepage-subtitle-2",children:"Comment proc\xe9der ?"}),(0,i.jsxs)(m,{className:"homepage-sub-3",children:[(0,i.jsxs)(g,{children:[(0,i.jsxs)(v,{children:[(0,i.jsx)(s.default,{href:"/contact",children:"Contactez moi"})," afin que nous puissions convenir d'un ",(0,i.jsx)("span",{children:"rendez-vous"}),"."]}),(0,i.jsxs)(v,{children:[(0,i.jsx)("span",{children:"Je me d\xe9place chez vous"})," et, ensemble, nous \xe9valuons le travail \xe0 effectuer. J'estime un nombre d\u2019heures pour pouvoir vous faire parvenir un devis avec le d\xe9tail des travaux."]}),(0,i.jsxs)(v,{children:[(0,i.jsx)("span",{children:"J'interviens rapidement"})," apr\xe8s avoir re\xe7u le devis sign\xe9. Vous receverez alors une facture et le r\xe8glement \xe0 me faire parvenir (ch\xe8que, virement bancaire\u2026)."]}),(0,i.jsxs)(v,{children:[(0,i.jsx)("span",{children:"Je r\xe9dige une attestation fiscale"})," en d\xe9but d'ann\xe9e suivante, qui vous permettra de b\xe9n\xe9ficier d'une"," ",(0,i.jsx)(s.default,{href:"/certification",children:"r\xe9duction d'imp\xf4ts"})," \xe9gale \xe0"," ",(0,i.jsx)("span",{children:"50% du prix des travaux effectu\xe9s"}),"."]})]}),(0,i.jsxs)(u,{className:"homepage-text-3",children:["Pour les contrats dits ",(0,i.jsx)("span",{children:"\xab \xe0 l'ann\xe9e \xbb"}),", il s\u2019agit d'un forfait avec un nombre de passages d\xe9finis \xe0 l'avance.",(0,i.jsx)("br",{}),(0,i.jsx)("span",{children:"Par exemple :"})," 12 interventions \xe0 l'ann\xe9e pour les tontes, dont deux interventions qui comprennent la taille de vos haies, au printemps et en automne.",(0,i.jsx)("br",{}),(0,i.jsxs)("em",{children:["Lorsque vous renvoyez le devis il doit \xeatre accompagn\xe9 d'un"," ",(0,i.jsx)("span",{children:"premier r\xe8glement"})," \xe9gal \xe0 la moiti\xe9 du prix total du contrat. Le deuxi\xe8me r\xe8glement s'effectuera le semestre suivant."]})]})]}),(0,i.jsx)(s.default,{passHref:!0,href:"/contact",children:(0,i.jsx)(w,{className:"homepage-btn-2",children:"Contactez-moi !"})})]})]})}},8581:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6124)}])}},function(e){e.O(0,[349,774,888,179],(function(){return a=8581,e(e.s=a);var a}));var a=e.O();_N_E=a}]);