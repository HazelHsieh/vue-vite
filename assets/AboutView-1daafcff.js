import{_ as o,o as s,c as a,a as n}from"./index-f840fdcc.js";const c={data(){return{data:{}}},mounted(){console.log("這是產品的環境");const e="https://randomuser.me/api/";this.$http.get(e).then(t=>{console.log(t),this.data=t.data.results[0],console.log(this.data)})}},_={class:"about"},r=n("h1",null,"This is an about page",-1),d=[r];function i(e,t,l,u,p,h){return s(),a("div",_,d)}const f=o(c,[["render",i]]);export{f as default};
