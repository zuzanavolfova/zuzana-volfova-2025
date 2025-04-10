import{d,r as _,w as p,c,a as t,t as n,o as s,_ as g,b as l,F as m,e as f,u as v,f as h}from"./index-DNLvgp5p.js";const b={class:"card__container"},S={class:"card__item"},D={class:"card__item__title"},y={class:"card__item__perex"},T={class:"card__item__button"},z=d({__name:"CardComponent",props:{cardTitle:{type:String,required:!1},cardImage:{type:String,required:!1},cardDescriptionShort:{type:String,required:!1},cardDescription:{type:String,required:!1},buttonTitle:{type:String,required:!1,default:"GitHub repository"},buttonRedirect:{type:String,required:!1}},setup(a){const o=a,i=_("");return p(async()=>{if(!o.cardImage){i.value="";return}try{const e=await g(()=>import(`./../assets/images/${o.cardImage}`),[]);i.value=e.default}catch(e){console.error("Failed to load image:",e),i.value=""}}),(e,r)=>(s(),c("div",b,[t("div",S,[t("h4",D,n(a.cardTitle),1),r[0]||(r[0]=t("p",{class:"card__item__image"},null,-1)),t("p",y,n(a.cardDescription),1),t("p",null,[t("button",T,n(a.buttonTitle),1)])])]))}}),V=l(z,[["__scopeId","data-v-a06bf737"]]),I=[{cardTitle:"Zuzana Volfová prezentace",cardImage:"cv.png",cardDescriptionShort:"Zuzana Volfová prezentace",cardDescription:"Vue.js, Pinia, Typescript, Bootstrap, Git, fetch",buttonRedirect:"https://github.com/zuzanavolfova/zuzana-volfova-2025"},{cardTitle:"React projekt",cardImage:"react.png",cardDescriptionShort:"React project",cardDescription:"React, TypeScript, @mui/x-data-grid, formik",buttonRedirect:"https://github.com/zuzanavolfova/react-project"},{cardTitle:"Vue.js s externí knihovnou",cardImage:"vue.png",cardDescriptionShort:"Vue.js s externí knihovnou",cardDescription:"Vue.js, Pinia, Typescript, PrimeVue, fetch, GIT",buttonRedirect:"https://github.com/zuzanavolfova/cz-nic"}],R={class:"coding"},j={class:"coding__title"},C={class:"coding__content"},k={class:"coding__content__items"},x=d({__name:"CodingView",setup(a){const o=I;return(i,e)=>(s(),c("div",R,[t("h2",j,n(i.$t("coding-h")),1),t("div",C,[e[0]||(e[0]=t("h3",null,"Vue.js, React",-1)),t("div",k,[(s(!0),c(m,null,f(v(o),(r,u)=>(s(),c("div",{class:"coding__content__item",key:u},[h(V,{"card-title":r.cardTitle,"card-image":r.cardImage,"card-description-short":r.cardDescriptionShort,"card-description":r.cardDescription,"button-redirect":r.buttonRedirect},null,8,["card-title","card-image","card-description-short","card-description","button-redirect"])]))),128))]),e[1]||(e[1]=t("div",null,[t("h3",null,"HTML, CSS")],-1)),e[2]||(e[2]=t("div",null,[t("h3",null,"JavaScript")],-1))])]))}}),q=l(x,[["__scopeId","data-v-95286d03"]]);export{q as default};
