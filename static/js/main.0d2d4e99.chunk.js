(this.webpackJsonphealthsetgo=this.webpackJsonphealthsetgo||[]).push([[0],{102:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(9),l=a.n(s),r=(a(50),a(51),a(10)),c=a(108);function o(e){e.count;var t=e.teachers,a=e.student,n=t+a;return i.a.createElement("div",{style:{display:"flex",marginLeft:"10px",paddingLeft:"10px",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}},i.a.createElement(c.a,{style:{width:"18rem",margin:"10px",backgroundColor:"white",boxShadow:"5px 2px 5px #e8e8e8"}},i.a.createElement(c.a.Body,null,i.a.createElement(c.a.Title,{style:{font:"bold 1.3rem",color:"Green"}},"Total number of Teachers"),i.a.createElement(c.a.Subtitle,{className:"mb-2 text-muted"},t))),i.a.createElement(c.a,{style:{width:"18rem",margin:"10px",boxShadow:"5px 2px 5px #e8e8e8"}},i.a.createElement(c.a.Body,null,i.a.createElement(c.a.Title,{style:{font:"bold 1.3rem",color:"blue"}},"Total number of Students"),i.a.createElement(c.a.Subtitle,{className:"mb-2 text-muted"},a))),i.a.createElement(c.a,{style:{width:"18rem",margin:"10px",boxShadow:"5px 2px 5px #e8e8e8"}},i.a.createElement(c.a.Body,null,i.a.createElement(c.a.Title,{style:{font:"bold 1.3rem",color:"purple"}},"Total member"),i.a.createElement(c.a.Subtitle,{className:"mb-2 text-muted"},n))))}var d=a(109),u=a(39),m=a.n(u),I=a(41),b=a.n(I),p=a(42);function x(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(!1),c=Object(r.a)(l,2),u=c[0],I=c[1],x=Object(n.useState)([]),h=Object(r.a)(x,2),J=h[0],j=h[1],C=Object(n.useState)(""),y=Object(r.a)(C,2),W=y[0],f=y[1],w=Object(n.useState)(""),O=Object(r.a)(w,2),E=O[0],L=O[1];Object(n.useEffect)((function(){fetch("https://api.healthsetgo.info/api/v2/candidate/assignment/community/search",{method:"GET",headers:{"Content-Type":"application/json",authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZGRyZXNzIjpudWxsLCJyb2xlIjpbeyJyb2xlX3R5cGVfaWQiOjEwLCJjcmVhdGVkX3RpbWUiOiIyMDE3LTEwLTA0VDA3OjQ0OjI0LjI4NDUxIiwibW9kaWZpZWRfdGltZSI6IjIwMTctMTAtMDRUMDc6NDQ6MjQuMjg0NTEiLCJ1c2VyX2lkIjoxLCJyb2xlX2Rlc2MiOiJHdWVzdCIsImlkIjoxLCJyb2xlX2FjdGl2ZSI6MX1dLCJwcm9maWxlIjpudWxsLCJjdXN0b20iOm51bGwsImV4dF9wcm92aWRlcl9pZCI6bnVsbCwidXVpZCI6IkhTR18xIiwidG9rZW4iOm51bGwsInVzZXJfYWN0aXZlIjoxLCJwaG9uZSI6bnVsbCwib3JnYW5pemF0aW9uIjpudWxsLCJpZCI6MSwiaWF0IjoxNTA3MTE1ODg1LCJlbWFpbCI6bnVsbCwidXNlcm5hbWUiOiJndWVzdHVzZXJAaHNnLmNvbSIsInN0YXR1cyI6MjAwfQ==.P1iOu3IgTvv5WvinQ7yEIZCQC2bg58QF8RJAq82T_aU=","x-select":'{"inRoleTypeId": 9, "inLimit": 188, "inOffset":0}'}}).then((function(e){return e.json()})).then((function(e){console.log("Success:",JSON.parse(e.results[0].users)),console.log(e.results[0].count),f(e.results[0].count),I(!0),j(JSON.parse(e.results[0].users))})).catch((function(e){I(!0),s(e),console.error("Error:",e)}))}),[]);return a?i.a.createElement("div",null,"Error: ",a.message):u?i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{variant:"primary",name:"students",onClick:function(){fetch("https://api.healthsetgo.info/api/v2/candidate/assignment/community/search",{method:"GET",headers:{"Content-Type":"application/json",authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZGRyZXNzIjpudWxsLCJyb2xlIjpbeyJyb2xlX3R5cGVfaWQiOjEwLCJjcmVhdGVkX3RpbWUiOiIyMDE3LTEwLTA0VDA3OjQ0OjI0LjI4NDUxIiwibW9kaWZpZWRfdGltZSI6IjIwMTctMTAtMDRUMDc6NDQ6MjQuMjg0NTEiLCJ1c2VyX2lkIjoxLCJyb2xlX2Rlc2MiOiJHdWVzdCIsImlkIjoxLCJyb2xlX2FjdGl2ZSI6MX1dLCJwcm9maWxlIjpudWxsLCJjdXN0b20iOm51bGwsImV4dF9wcm92aWRlcl9pZCI6bnVsbCwidXVpZCI6IkhTR18xIiwidG9rZW4iOm51bGwsInVzZXJfYWN0aXZlIjoxLCJwaG9uZSI6bnVsbCwib3JnYW5pemF0aW9uIjpudWxsLCJpZCI6MSwiaWF0IjoxNTA3MTE1ODg1LCJlbWFpbCI6bnVsbCwidXNlcm5hbWUiOiJndWVzdHVzZXJAaHNnLmNvbSIsInN0YXR1cyI6MjAwfQ==.P1iOu3IgTvv5WvinQ7yEIZCQC2bg58QF8RJAq82T_aU=","x-select":'{"inRoleTypeId": 9, "inLimit": 293, "inOffset":0}'}}).then((function(e){return e.json()})).then((function(e){console.log("Success:",JSON.parse(e.results[0].users)),f(e.results[0].count),I(!0),j(JSON.parse(e.results[0].users))})).catch((function(e){I(!0),s(e),console.error("Error:",e)}))},style:{margin:"10px"}},"Students"),i.a.createElement(d.a,{variant:"primary",name:"teachers",onClick:function(){fetch("https://api.healthsetgo.info/api/v2/candidate/assignment/community/search",{method:"GET",headers:{"Content-Type":"application/json",authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhZGRyZXNzIjpudWxsLCJyb2xlIjpbeyJyb2xlX3R5cGVfaWQiOjEwLCJjcmVhdGVkX3RpbWUiOiIyMDE3LTEwLTA0VDA3OjQ0OjI0LjI4NDUxIiwibW9kaWZpZWRfdGltZSI6IjIwMTctMTAtMDRUMDc6NDQ6MjQuMjg0NTEiLCJ1c2VyX2lkIjoxLCJyb2xlX2Rlc2MiOiJHdWVzdCIsImlkIjoxLCJyb2xlX2FjdGl2ZSI6MX1dLCJwcm9maWxlIjpudWxsLCJjdXN0b20iOm51bGwsImV4dF9wcm92aWRlcl9pZCI6bnVsbCwidXVpZCI6IkhTR18xIiwidG9rZW4iOm51bGwsInVzZXJfYWN0aXZlIjoxLCJwaG9uZSI6bnVsbCwib3JnYW5pemF0aW9uIjpudWxsLCJpZCI6MSwiaWF0IjoxNTA3MTE1ODg1LCJlbWFpbCI6bnVsbCwidXNlcm5hbWUiOiJndWVzdHVzZXJAaHNnLmNvbSIsInN0YXR1cyI6MjAwfQ==.P1iOu3IgTvv5WvinQ7yEIZCQC2bg58QF8RJAq82T_aU=","x-select":'{"inRoleTypeId": 20, "inLimit": 293, "inOffset":0}'}}).then((function(e){return e.json()})).then((function(e){console.log("Success:",JSON.parse(e.results[0].users)),L(e.results[0].count),I(!0),j(JSON.parse(e.results[0].users))})).catch((function(e){I(!0),s(e),console.error("Error:",e)}))}},"Teachers"),i.a.createElement(o,{student:W,teachers:E}),i.a.createElement(d.a,{variant:"warning",style:{float:"right",margin:"10px"}},i.a.createElement(p.CSVLink,{data:J,style:{textDecoration:"none",float:"right"}},"Export as CSV file")),i.a.createElement(m.a,{keyField:"hsgId",data:J,columns:[{dataField:"name",text:"Student name"},{dataField:"class",text:"class"},{dataField:"hsgId",text:"HSG ID"},{dataField:"userClass",text:" User class"},{dataField:"userId",text:" User ID"},{dataField:"userRole",text:" User Role"},{dataField:"riskStatus",text:"Risk Status"}],pagination:b()()})):i.a.createElement("div",null,"Loading...")}a(102),a(103);var h=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(104),a(105);l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,t,a){e.exports=a(107)},50:function(e,t,a){},51:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[45,1,2]]]);
//# sourceMappingURL=main.0d2d4e99.chunk.js.map