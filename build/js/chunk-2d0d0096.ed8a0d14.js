(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0096"],{"65ef":function(e,t,l){"use strict";l.r(t);var n=l("7a23"),c={class:"list row"},i={class:"col-md-6"},r=Object(n["e"])("h4",null,"Sitios Prioritarios Marinos para la Conservación de la Biodiversidad",-1),b=Object(n["e"])("br",null,null,-1),o={class:"list-group"},u=["onClick"],a={class:"col-md-6"},s={key:0},O=Object(n["e"])("h4",null,"Detalles",-1),j=Object(n["e"])("br",null,null,-1),d=Object(n["e"])("label",null,[Object(n["e"])("strong",null,"Ecoregión:")],-1),f=Object(n["e"])("br",null,null,-1),g=Object(n["e"])("label",null,[Object(n["e"])("strong",null,"Fisiografía:")],-1),m=Object(n["e"])("br",null,null,-1),S=Object(n["e"])("label",null,[Object(n["e"])("strong",null,"Formas Emergentes:")],-1),v=Object(n["e"])("br",null,null,-1),h=Object(n["e"])("label",null,[Object(n["e"])("strong",null,"Formas Sumergidas:")],-1),p=Object(n["e"])("br",null,null,-1),x=Object(n["e"])("label",null,[Object(n["e"])("strong",null,"Habitat:")],-1),C=Object(n["e"])("br",null,null,-1),k=Object(n["e"])("label",null,[Object(n["e"])("strong",null,"Perimetro(km):")],-1),N=Object(n["e"])("br",null,null,-1),w=Object(n["e"])("label",null,[Object(n["e"])("strong",null,"Área(ha):")],-1),A=Object(n["e"])("br",null,null,-1),P=Object(n["e"])("label",null,[Object(n["e"])("strong",null,"Importancia:")],-1),q=Object(n["e"])("div",null,[Object(n["e"])("br"),Object(n["e"])("br"),Object(n["e"])("p",null,"Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO), Comisión Nacional de Áreas Naturales Protegidas (CONANP), The Nature Conservancy - Programa México (TNC), Pronatura. (2007) ")],-1),y={key:1},I=Object(n["e"])("br",null,null,-1),_=Object(n["e"])("p",null," Selecciona un Sitio.",-1),B=[I,_];function F(e,t,l,I,_,F){return Object(n["q"])(),Object(n["d"])("div",c,[Object(n["e"])("div",i,[r,b,Object(n["e"])("ul",o,[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["u"])(_.sitios,(function(e,t){return Object(n["q"])(),Object(n["d"])("li",{class:Object(n["m"])(["list-group-item",{active:t==_.currentIndex}]),key:t,onClick:function(l){return F.setActiveSitio(e,t)}},Object(n["x"])(e.id)+Object(n["x"])(" | ")+" "+Object(n["x"])(e.sitio_prioritario),11,u)})),128))])]),Object(n["e"])("div",a,[_.currentSitio?(Object(n["q"])(),Object(n["d"])("div",s,[O,Object(n["e"])("div",null,[j,d,Object(n["f"])(" "+Object(n["x"])(_.currentSitio.ecorregion)+" ",1),f,g,Object(n["f"])(" "+Object(n["x"])(_.currentSitio.fisiografia)+" ",1),m,S,Object(n["f"])(" "+Object(n["x"])(_.currentSitio.formas_emergentes)+" ",1),v,h,Object(n["f"])(" "+Object(n["x"])(_.currentSitio.formas_sumergidas)+" ",1),p,x,Object(n["f"])(" "+Object(n["x"])(_.currentSitio.habitat)+" ",1),C,k,Object(n["f"])(" "+Object(n["x"])(_.currentSitio.perimetro)+" ",1),N,w,Object(n["f"])(" "+Object(n["x"])(_.currentSitio.area_hectareas)+" ",1),A,P,Object(n["f"])(" "+Object(n["x"])(_.currentSitio.importancia),1)]),q])):(Object(n["q"])(),Object(n["d"])("div",y,B))])])}var E=l("def3"),J={id:"id-list",data:function(){return{sitios:[],currentSitio:null,currentIndex:-1}},methods:{getAllSitios:function(){var e=this;E["a"].getAll().then((function(t){e.sitios=t.data})).catch((function(e){console.log(e)}))},setActiveSitio:function(e,t){this.currentSitio=e,this.currentIndex=e?t:-1}},mounted:function(){this.getAllSitios()}},M=l("6b0d"),T=l.n(M);const D=T()(J,[["render",F]]);t["default"]=D}}]);
//# sourceMappingURL=chunk-2d0d0096.ed8a0d14.js.map