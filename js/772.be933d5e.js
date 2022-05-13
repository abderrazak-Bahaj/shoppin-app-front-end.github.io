"use strict";(self["webpackChunkshopping"]=self["webpackChunkshopping"]||[]).push([[772],{9026:function(t,a,e){e.d(a,{Z:function(){return l}});var i=e(3396),s=e(7139);const o={class:"pagination pagination-lg justify-content-center wrapper"};function r(t,a,e,r,n,d){const c=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("ul",o,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.links,(t=>((0,i.wg)(),(0,i.iD)("li",{class:"page-item",key:t.url},[(0,i.Wm)(c,{class:"page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark",to:t.url,tabindex:"-1"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(t.label),1)])),_:2},1032,["to"])])))),128))])}var n={props:["links"]},d=e(89);const c=(0,d.Z)(n,[["render",r]]);var l=c},9565:function(t,a,e){e.d(a,{Z:function(){return L}});var i=e(3396),s=e(7139);const o={class:"product-grid"},r={class:"product-image wow fadeInUp","data-wow-delay":"0.4s","data-wow-duration":"1.5s"},n=(0,i.Uk)("  "),d=(0,i.Uk)("   "),c=["src"],l=(0,i.Uk)("   "),u=["src"],p={key:0,class:"product-sale-label"},w=(0,i.Uk)("   "),g=(0,i.Uk)("    "),h=(0,i._)("i",{class:"far fa-heart"},null,-1),f=[g,h],m=(0,i._)("i",{class:"fa-solid fa-heart"},null,-1),v=[m],k=(0,i.Uk)("      "),_={class:"product-links"},y=(0,i.Uk)("               "),D=(0,i._)("i",{class:"far fa-eye"},null,-1),b=(0,i.Uk)("          "),C=(0,i._)("i",{class:"fas fa-shopping-cart"},null,-1),U=[C],F=(0,i.Uk)("            "),P=(0,i.Uk)("      "),$={class:"product-content"},A={class:"h5 text-center wow fadeInDown","data-wow-delay":"0.2s","data-wow-duration":"1s"},I={class:"price text-center wow fadeInDown","data-wow-delay":"0.4s","data-wow-duration":"1s"},Z=(0,i.Uk)("          ");function q(t,a,e,g,h,m){const C=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("div",r,[n,(0,i.Wm)(C,{to:"shope/"+e.product.id,class:"image"},{default:(0,i.w5)((()=>[d,(0,i._)("img",{class:"pic-1 img-fluid",src:e.product.p_image_1},null,8,c),l,(0,i._)("img",{class:"pic-2 img-fluid",src:e.product.p_image_2},null,8,u)])),_:1},8,["to"]),m.ProductIsNew(e.product.created_at)?((0,i.wg)(),(0,i.iD)("span",p,"new")):(0,i.kq)("",!0),w,t.hasFavorite(e.product.id)?((0,i.wg)(),(0,i.iD)("button",{key:2,onClick:a[1]||(a[1]=t=>m.deleteFavorite(e.product.id)),class:"product-like-icon cls-btn-def","data-tip":"remove in Favorite"},v)):((0,i.wg)(),(0,i.iD)("button",{key:1,onClick:a[0]||(a[0]=t=>m.addFavorite(e.product.id)),class:"product-like-icon cls-btn-def","data-tip":"Add to Favorite"},f)),k,(0,i._)("ul",_,[y,(0,i._)("li",null,[(0,i.Wm)(C,{to:"/shope/"+e.product.id},{default:(0,i.w5)((()=>[D])),_:1},8,["to"])]),b,(0,i._)("li",null,[(0,i._)("button",{onClick:a[2]||(a[2]=t=>m.addToCart(e.product.id))},U)]),F]),P]),(0,i._)("div",$,[(0,i._)("h3",A,(0,s.zw)(e.product.p_name),1),(0,i._)("div",I,(0,s.zw)(e.product.p_price|t.filterPrice),1)]),Z])}var x=e(65),H={props:["product"],computed:{...(0,x.Se)(["findFavorite","hasFavorite","userHasAuth","getAllCarts"])},filters:{filterPrice:t=>t+" $"},methods:{addFavorite:async function(t){if(!this.userHasAuth)return void Swal.fire("you need be authenticated to add in favorite ");let a=new FormData;a.append("product_id",t),this.$store.dispatch("addFavorite",a),this.$helpers.showToast("Product has been Added to favorite","success")},deleteFavorite:async function(t){let a=this.findFavorite(t);this.$store.dispatch("destroyFavorite",a.id),this.$helpers.showToast("Product has removed in favorite success","warning")},addToCart:async function(t){if(!this.userHasAuth)return void Swal.fire("you need be authenticated to add in your bag ");let a=await Swal.fire({title:"How much product you wan't?",icon:"question",input:"range",inputLabel:"Quantity Product",inputValue:a,inputAttributes:{min:1,max:30,step:1},inputValue:2});if(a.isConfirmed){let e=this.getAllCarts.find((a=>a.product_id==t));if(void 0==e){let e=new FormData;e.append("product_id",parseInt(t)),e.append("quantity",a.value),await this.$store.dispatch("addCartForUser",e)}else{let t=parseInt(e.quantity)+parseInt(a.value),i={id:parseInt(e.id),quantity:t};await this.$store.dispatch("UpdateCartForUser",i).then((()=>{})).catch((()=>{}))}this.$helpers.showToast("Product has been Added to cart successfully","success")}},ProductIsNew:function(t){var a=new Date(Date.parse(t)),e=a.getTime(),i=(new Date).getTime();return Math.floor((i-e)/864e5)<=8}}},T=e(89);const W=(0,T.Z)(H,[["render",q]]);var L=W},3014:function(t,a,e){e.d(a,{Z:function(){return g}});var i=e(3396),s=e(7139);const o={class:"mt-md-5"},r=(0,i._)("h1",{class:"h2 pb-4 mt-md-5"},"Categories",-1),n={class:"list-unstyled templatemo-accordion"},d={class:"pb-3"},c={class:"collapse show list-unstyled pl-3"};function l(t,a,e,l,u,p){const w=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",o,[r,(0,i._)("ul",n,[(0,i._)("li",d,[(0,i._)("ul",c,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.categorais,(t=>((0,i.wg)(),(0,i.iD)("li",{key:t.id,class:"m-md-3"},[(0,i.Wm)(w,{to:`/shope/category/${t.id}`,class:"text-decoration-none"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(t.cat_name),1)])),_:2},1032,["to"])])))),128))])])])])}var u={props:["categorais"]},p=e(89);const w=(0,p.Z)(u,[["render",l]]);var g=w},772:function(t,a,e){e.r(a),e.d(a,{default:function(){return k}});var i=e(3396);const s={class:"container p-3"},o={class:"row"},r={class:"col-md-3 wow fadeInLeft","data-wow-delay":"0.8s"},n={key:0,class:"col-md-9"},d={class:"text-center wow fadeInRight","data-wow-delay":"1s"},c={class:"row"};function l(t,a,e,l,u,p){const w=(0,i.up)("categorais-said-bar"),g=(0,i.up)("pagination"),h=(0,i.up)("card-item"),f=(0,i.up)("loading-progress");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",o,[(0,i._)("div",r,[(0,i.Wm)(w,{categorais:t.getAllCategorais},null,8,["categorais"])]),t.loading?((0,i.wg)(),(0,i.iD)("div",n,[(0,i._)("div",d,[(0,i.Wm)(g,{links:t.getLinksProducts("")},null,8,["links"])]),(0,i._)("div",c,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.getAllProducts,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"col-md-4 col-lg-3",key:t.id},[(0,i.Wm)(h,{product:t},null,8,["product"])])))),128))])])):((0,i.wg)(),(0,i.j4)(f,{key:1}))])])}var u=e(65),p=e(5932),w=e(9026),g=e(9565),h=e(3014),f={data:()=>({loading:!0}),components:{CardItem:g.Z,CategoraisSaidBar:h.Z,LoadingProgress:p.Z,Pagination:w.Z},computed:{...(0,u.Se)(["productIsLoaded","getAllProducts","getAllCategorais","getLinksProducts"])},methods:{fetchData:async function(t=""){this.loading=!1,this.$store.dispatch("getProductByCategory",this.$route.params.id+t),this.loading=!0}},created(){this.$watch((()=>this.$route.params),(()=>{void 0!=this.$route.query.page?this.fetchData("?page="+this.$route.query.page):this.fetchData()}),{immediate:!0})}},m=e(89);const v=(0,m.Z)(f,[["render",l]]);var k=v}}]);
//# sourceMappingURL=772.be933d5e.js.map