import{_ as m,g as v,h as l,i as f,r as j,o as e,c as a,a as o,b as c,n as b,t as y,j as x,F as _,k as O,w as S,d as z,f as w}from"./index-DoHfoeR4.js";import{G as h}from"./GastronomyRestaurant-B_KWqN90.js";const k="/assets/espanola-CcoLI5Q9.jpg",R=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),T="/assets/italiana-YmPihHKZ.jpg",P=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),V="/assets/japonesa-DBcEw1l2.jpg",M=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"})),N="/assets/mexicana-TOaxGue_.jpg",C=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"})),G="/assets/tailandesa-DR3gg1Rn.jpg",B=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"})),D="/assets/venezolana-1Op0Yn8v.jpg",I=Object.freeze(Object.defineProperty({__proto__:null,default:D},Symbol.toStringTag,{value:"Module"})),K="/assets/plato-lujo-CzKGRKx3.jpeg",$={class:"contenedor-scroll"},E={class:"lista-restaurantes"},F=w('<div class="container-info" data-v-50945a9f><div data-v-50945a9f><p class="txt-1vw" data-v-50945a9f>Nombre del restaurante</p><p class="txt-1vw" data-v-50945a9f>Gastronomia del restaurante</p><p class="txt-1vw" data-v-50945a9f>Descripcion del restaurante</p></div><img src="'+K+'" alt="Imagen plato" data-v-50945a9f></div>',1),L={__name:"Restaurant",setup(i){const n=v(),t=l(()=>n.params.type),u=Object.assign({"/src/assets/images/gastronomy/espanola.jpg":R,"/src/assets/images/gastronomy/italiana.jpg":P,"/src/assets/images/gastronomy/japonesa.jpg":M,"/src/assets/images/gastronomy/mexicana.jpg":C,"/src/assets/images/gastronomy/tailandesa.jpg":B,"/src/assets/images/gastronomy/venezolana.jpg":I}),r=l(()=>{var s;return(s=u[`/src/assets/images/gastronomy/${t.value}.jpg`])==null?void 0:s.default}),p=f([1,2,3]);return(s,H)=>{const g=j("router-link");return e(),a(_,null,[o(h,{"show-return":!0}),c("div",$,[r.value?(e(),a("button",{key:0,class:"boton-gastronomia txt-1-5vw",style:b({backgroundImage:`url(${r.value})`})},y(t.value),5)):x("",!0)]),c("div",E,[(e(!0),a(_,null,O(p.value,(Q,d)=>(e(),a("div",{key:d,id:"restaurante",class:"info-restaurante"},[F,o(g,{class:"btn-carta txt-1vw"},{default:S(()=>[z("Ver carta")]),_:1})]))),128))])],64)}}},Y=m(L,[["__scopeId","data-v-50945a9f"]]),q={__name:"RestaurantView",setup(i){return(n,t)=>(e(),a("main",null,[o(Y)]))}};export{q as default};