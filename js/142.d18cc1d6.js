"use strict";(self["webpackChunkshopping"]=self["webpackChunkshopping"]||[]).push([[142],{2142:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var o=r(3396),n=r(7139);const s={class:"container text-center"},l=(0,o._)("h2",{class:"h1 wow fadeInLeft","data-wow-delay":"0.2s"},"History",-1),i=(0,o._)("hr",{class:"m-md-3 m-sm-2"},null,-1),a={key:0},d={class:"container float-right wow fadeInLeft","data-wow-delay":"0.4s"},c={class:"pagination pagination-lg justify-content-center wrapper"},u={class:"table table-hover wow fadeInLeft","data-wow-delay":"0.8s",id:"printMe"},h=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{scope:"col"},"Id"),(0,o._)("th",{scope:"col"},"Product name"),(0,o._)("th",{scope:"col"},"Quantity"),(0,o._)("th",{scope:"col"},"Price Uniter"),(0,o._)("th",{scope:"col"},"Price Total"),(0,o._)("th",{scope:"col"},"State"),(0,o._)("th",{scope:"col"},"Action")])],-1),p={scope:"row"},w=["onClick"],g=(0,o._)("i",{class:"fa-solid fa-trash"},null,-1),_=[g],f={key:1,class:"cls-height-loading justify-content-center align-items-center"};function m(e,t,r,g,m,y){const k=(0,o.up)("router-link"),b=(0,o.up)("loading-progress");return(0,o.wg)(),(0,o.iD)("div",s,[l,i,e.getOrderIsLoaded?((0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("div",d,[(0,o._)("ul",c,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.getLinksOrders,(e=>((0,o.wg)(),(0,o.iD)("li",{class:"page-item",key:e.url},[(0,o.Wm)(k,{class:"page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark",to:e.url,tabindex:"-1"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(e.label),1)])),_:2},1032,["to"])])))),128))])]),(0,o._)("table",u,[h,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.getAllOrders,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t.id},[(0,o._)("th",p,(0,n.zw)(t.id),1),(0,o._)("td",null,[(0,o.Wm)(k,{to:"/shope/"+t.product_id,class:"link-secondary"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(t.name),1)])),_:2},1032,["to"])]),(0,o._)("th",null,(0,n.zw)(t.quantity_product),1),(0,o._)("td",null,(0,n.zw)(t.price_uniter|e.moneyFilter),1),(0,o._)("td",null,(0,n.zw)(t.price_total|e.moneyFilter),1),(0,o._)("td",{class:(0,n.C_)("reversion"==t.State?"text-danger":"text-success")},(0,n.zw)(t.State),3),(0,o._)("td",null,[(0,o._)("button",{class:"btn-lg btn-outline-danger rounded",onClick:e=>y.deleteOrder(t.id)},_,8,w)])])))),128))])])])):((0,o.wg)(),(0,o.iD)("div",f,[(0,o.Wm)(b)]))])}var y=r(65),k=r(5932),b={data(){return{output:null}},created(){this.$watch((()=>this.$route.params),(()=>{void 0!=this.$route.query.page?this.getOrders(this.$route.query.page):this.getOrders()}),{immediate:!0})},components:{loadingProgress:k.Z},computed:{...(0,y.Se)(["getAllOrders","getOrderIsLoaded","getLinksOrders"])},methods:{getOrders:async function(e=""){this.$store.dispatch("getOrders",e,{root:!0})},print:async function(){await this.$htmlToPaper("printMe")},deleteOrder:async function(e){await Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((t=>{t.isConfirmed&&(this.$store.dispatch("deleteOrder",e),Swal.fire("Deleted!","Your file has been deleted.","success"))}))}},filters:{moneyFilter:e=>e+" $"}},O=r(89);const v=(0,O.Z)(b,[["render",m]]);var C=v}}]);
//# sourceMappingURL=142.d18cc1d6.js.map