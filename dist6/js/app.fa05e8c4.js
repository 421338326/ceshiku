(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],f=0,m=[];f<r.length;f++)o=r[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},i={app:0},a=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c71":function(t,e,n){},2395:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("foot"),n("router-view")],1)},a=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("mt-tabbar",{attrs:{fixed:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[n("mt-tab-item",{attrs:{id:"home"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:"home"==t.selected,expression:"selected=='home'"}],attrs:{slot:"icon",src:"icons/hema-sel.png"},slot:"icon"}),n("img",{directives:[{name:"show",rawName:"v-show",value:"home"!=t.selected,expression:"selected!='home'"}],attrs:{slot:"icon",src:"icons/hema.png"},slot:"icon"}),t._v(" 首页 ")]),n("mt-tab-item",{attrs:{id:"fenlei"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:"fenlei"==t.selected,expression:"selected=='fenlei'"}],attrs:{slot:"icon",src:"icons/sort-sel.png"},slot:"icon"}),n("img",{directives:[{name:"show",rawName:"v-show",value:"fenlei"!=t.selected,expression:"selected!='fenlei'"}],attrs:{slot:"icon",src:"icons/sort.png"},slot:"icon"}),t._v(" 分类 ")]),n("mt-tab-item",{attrs:{id:"car"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:"car"==t.selected,expression:"selected=='car'"}],attrs:{slot:"icon",src:"icons/shopping-sel.png"},slot:"icon"}),n("img",{directives:[{name:"show",rawName:"v-show",value:"car"!=t.selected,expression:"selected!='car'"}],attrs:{slot:"icon",src:"icons/shopping.png"},slot:"icon"}),t._v(" 购物车 ")]),n("mt-tab-item",{attrs:{id:"mine"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:"mine"==t.selected,expression:"selected=='mine'"}],attrs:{slot:"icon",src:"icons/mine-sel.png"},slot:"icon"}),n("img",{directives:[{name:"show",rawName:"v-show",value:"mine"!=t.selected,expression:"selected!='mine'"}],attrs:{slot:"icon",src:"icons/mine.png"},slot:"icon"}),t._v(" 我的 ")])],1)},r=[],c={data:function(){return{selected:"home"}},watch:{selected:function(t,e){this.$router.push("/"+t)}},methods:{}},l=c,u=n("2877"),f=Object(u["a"])(l,o,r,!1,null,null,null),m=f.exports,p={components:{foot:m}},d=p,h=(n("7c55"),Object(u["a"])(d,i,a,!1,null,null,null)),v=h.exports,g=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-header",{attrs:{title:"盒马生鲜"}},[n("router-link",{attrs:{slot:"left",to:"/"},slot:"left"}),n("mt-button",{attrs:{slot:"right",icon:"more"},slot:"right"})],1),t._m(0),n("div",{staticClass:"lunbo"},[n("mt-swipe",{attrs:{auto:4e3}},t._l(t.lunbo,(function(t,e){return n("mt-swipe-item",{key:e},[n("img",{attrs:{src:t,alt:""}})])})),1)],1),n("div",{staticClass:"fenlei"},[n("ul",t._l(t.fenlei,(function(e,s){return n("li",{key:s,on:{click:function(n){return t.fn(e.text)}}},[n("span",[n("img",{attrs:{src:e.imgSrc}})]),n("p",[t._v(t._s(e.text))])])})),0)])],1)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("span",[n("img",{attrs:{src:"icons/search.png",alt:""}})]),n("input",{attrs:{type:"text",placeholder:"奇异果"}})])}],w={data:function(){return{lunbo:["https://gw.alicdn.com/tfs/TB1AoIXeLDH8KJjy1XcXXcpdXXa-750-291.jpg_Q90.jpg","https://img.alicdn.com/imgextra/i1/771510470/TB21SB0fIbI8KJjy1zdXXbe1VXa-771510470.jpg_Q90.jpg","https://img.alicdn.com/imgextra/i2/745949152/TB2ATrSexPI8KJjSspfXXcCFXXa_!!745949152.jpg_Q90.jpg"],fenlei:""}},methods:{get:function(){var t=this,e="data/goodsSorts.txt";this.axios.get(e).then((function(e){t.fenlei=e.data.data}))},fn:function(t){this.$router.push("/tongyong/"+t)}},mounted:function(){this.get()}},x=w,y=(n("7b42"),Object(u["a"])(x,_,b,!1,null,"666c8d47",null)),$=y.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fenlei"},[n("tou"),t._m(0),n("span",{staticClass:"sp1"},[t._v("删除")]),n("div",{staticClass:"mains"},t._l(t.tongyong,(function(e,s){return n("div",{key:s,staticClass:"m1"},[n("div",[n("img",{attrs:{src:e.image,alt:""}})]),n("div",[t._v(" "+t._s(e.name)+" "),n("span",[t._v("￥"+t._s(e.price))])])])})),0),n("div",{staticClass:"jiesuan"},[n("h1",[t._v("全选")]),t._m(1),n("div",[n("mt-button",{attrs:{type:"primary",size:"large"}},[t._v("去结算")])],1)])],1)},C=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"p1"},[n("span",{staticClass:"sp2"},[t._v("购物车")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" 合计：￥ "),n("span")])}],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("mt-header",{attrs:{title:"盒马生鲜"}},[n("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[n("mt-button",{attrs:{icon:"back"}}),n("mt-button",[t._v("返回")])],1),n("mt-button",{attrs:{slot:"right",icon:"more"},slot:"right"})],1)],1)},k=[],E={},S=E,X=Object(u["a"])(S,O,k,!1,null,"4e3f6850",null),T=X.exports,I=new s["default"],N=I,B={components:{tou:T},data:function(){return{tongyong:"",index:"",fenlei:""}},methods:{get:function(){var t=this,e="data/getGoods.txt";this.axios.get(e).then((function(e){var n="";"休闲零食"==t.fenlei&&(n=0),"中外名酒"==t.fenlei&&(n=1,alert("ad")),"饮料水"==t.fenlei&&(n=2),"乳品冲饮"==t.fenlei&&(n=3),"粮油副食"==t.fenlei&&(n=4),"美妆个护"==t.fenlei&&(n=5),"母婴保健"==t.fenlei&&(n=6),"厨卫清洁"==t.fenlei&&(n=7),"日用百货"==t.fenlei&&(n=8),"礼品卡券"==t.fenlei&&(n=9);e.data.data[n]}))}},mounted:function(){var t=this;this.get(),N.$on("to-car",(function(e){t.fenlei=e,console.log(t.fenlei)}))}},P=B,J=(n("c14c"),Object(u["a"])(P,j,C,!1,null,"30ff8b2e",null)),z=J.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fenlei"},[n("tou"),t._m(0),t._m(1),t._l(t.lunbo,(function(t,e){return n("div",{key:e,staticClass:"bq"},[n("img",{attrs:{src:t}})])})),n("div",{staticClass:"fenlei2"},[n("ul",t._l(t.fenlei,(function(e,s){return n("li",{key:s,on:{click:function(n){return t.fn(e.text)}}},[n("span",[n("img",{attrs:{src:e.imgSrc}})]),n("p",[t._v(t._s(e.text))])])})),0)])],2)},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"p1"},[n("span",{staticClass:"sp2"},[t._v("分类")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"sp1"},[n("img",{attrs:{src:"icons/sort-search.png",alt:""}})])}],Q=(n("fb6a"),{data:function(){return{lunbo:["https://img.alicdn.com/imgextra/i1/771510470/TB21SB0fIbI8KJjy1zdXXbe1VXa-771510470.jpg_Q90.jpg"],fenlei:""}},methods:{get:function(){var t=this,e="data/goodsSorts.txt";this.axios.get(e).then((function(e){t.fenlei=e.data.data.slice(0,9),console.log(t.fenlei)}))},fn:function(t){this.$router.push("/tongyong/"+t)}},mounted:function(){this.get()},components:{tou:T}}),V=Q,A=(n("58d6"),Object(u["a"])(V,K,M,!1,null,"0af682b9",null)),G=A.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mine"},[n("tou"),t._m(0),n("div",{staticClass:"im"},[n("ul",t._l(t.im,(function(e,s){return n("li",{key:s},[n("img",{attrs:{src:e.img,alt:""}}),n("p",[t._v(t._s(e.text))])])})),0)])],1)},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min1"},[n("span",[n("img",{attrs:{src:"images/avatar.jpg",alt:""}}),n("p",[t._v("zlw20200110")])])])}],F={components:{tou:T},data:function(){return{im:""}},methods:{get:function(){var t=this,e="data/im.txt";this.axios.get(e).then((function(e){t.im=e.data.data,console.log(t.im)}))}},mounted:function(){this.get()}},H=F,L=(n("9433"),Object(u["a"])(H,q,D,!1,null,"14122328",null)),R=L.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("tou"),n("h2",[t._v("shouye")])],1)},W=[],Y={components:{tou:T}},Z=Y,tt=Object(u["a"])(Z,U,W,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fenlei"},[n("tou"),t._m(0),t._m(1),n("div",{staticClass:"mains"},t._l(t.tongyong,(function(e,s){return n("div",{key:s,staticClass:"m1"},[n("div",[n("img",{attrs:{src:e.image,alt:""}})]),n("div",[t._v(" "+t._s(e.name)+" "),n("span",[t._v("￥"+t._s(e.price))])]),n("p",{on:{click:function(e){t.toView(s),t.emitNews()}}},[n("img",{attrs:{src:"icons/addBtn.png",alt:""},on:{click:function(e){return t.show()}}})])])})),0)],1)},st=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"p1"},[n("span",{staticClass:"sp2"},[t._v("分类")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"sp1"},[n("img",{attrs:{src:"icons/sort-search.png",alt:""}})])}],it=n("76a0"),at=n.n(it),ot={components:{tou:T},data:function(){return{tongyong:"",index:"",fenlei:""}},methods:{toView:function(t){this.$router.push("/car"),this.index=t},emitNews:function(){N.$emit("to-car",this.fenlei)},show:function(){Object(it["Toast"])({message:"操作成功",iconClass:"icon icon-success",duration:1e3})},get:function(){var t=this,e="data/getGoods.txt";this.axios.get(e).then((function(e){var n="";"休闲零食"==t.$route.params.id&&(n=0,t.fenlei="休闲零食"),"中外名酒"==t.$route.params.id&&(n=1,t.fenlei="中外名酒"),"饮料水"==t.$route.params.id&&(n=2,t.fenlei="饮料水"),"乳品冲饮"==t.$route.params.id&&(n=3,t.fenlei="乳品冲饮"),"粮油副食"==t.$route.params.id&&(n=4,t.fenlei="粮油副食"),"美妆个护"==t.$route.params.id&&(n=5,t.fenlei="美妆个护"),"母婴保健"==t.$route.params.id&&(n=6,t.fenlei="母婴保健"),"厨卫清洁"==t.$route.params.id&&(n=7,t.fenlei="厨卫清洁"),"日用百货"==t.$route.params.id&&(n=8,t.fenlei="日用百货"),"礼品卡券"==t.$route.params.id&&(n=9,t.fenlei="礼品卡券"),t.tongyong=e.data.data[n]}))}},mounted:function(){this.get()}},rt=ot,ct=(n("8fcc"),Object(u["a"])(rt,nt,st,!1,null,"e4a14dd2",null)),lt=ct.exports;s["default"].use(g["a"]);var ut=[{path:"/",component:$},{path:"/home",name:"home",component:$},{path:"/car",name:"car",component:z},{path:"/fenlei",name:"fenlei",component:G},{path:"/mine",name:"mine",component:R},{path:"/shouye",name:"shouye",component:et},{path:"/tongyong/:id",name:"tongyong",component:lt}],ft=new g["a"]({routes:ut}),mt=ft,pt=n("bc3a"),dt=n.n(pt),ht=n("a7fe"),vt=n.n(ht);n("aa35");s["default"].component(it["Button"].name,it["Button"]),s["default"].component(it["Swipe"].name,it["Swipe"]),s["default"].component(it["SwipeItem"].name,it["SwipeItem"]),s["default"].component(it["Tabbar"].name,it["Tabbar"]),s["default"].component(it["TabItem"].name,it["TabItem"]),s["default"].use(vt.a,dt.a),s["default"].config.productionTip=!1,s["default"].use(at.a),new s["default"]({router:mt,render:function(t){return t(v)}}).$mount("#app")},"58d6":function(t,e,n){"use strict";var s=n("ea7f"),i=n.n(s);i.a},"600f":function(t,e,n){},"7b42":function(t,e,n){"use strict";var s=n("600f"),i=n.n(s);i.a},"7c55":function(t,e,n){"use strict";var s=n("2395"),i=n.n(s);i.a},"8fcc":function(t,e,n){"use strict";var s=n("b2d5"),i=n.n(s);i.a},9433:function(t,e,n){"use strict";var s=n("fe67"),i=n.n(s);i.a},b2d5:function(t,e,n){},c14c:function(t,e,n){"use strict";var s=n("0c71"),i=n.n(s);i.a},ea7f:function(t,e,n){},fe67:function(t,e,n){}});
//# sourceMappingURL=app.fa05e8c4.js.map