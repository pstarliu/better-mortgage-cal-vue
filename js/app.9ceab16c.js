(function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)i=s[d],r[i]&&p.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,s=1;s<o.length;s++){var c=o[s];0!==r[c]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=o[0]))}return e}var a={},r={app:0},n=[];function i(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=a,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(o,a,function(t){return e[t]}.bind(null,a));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/better-mortgage-cal-vue/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0033":function(e,t,o){e.exports=o.p+"img/mortgage-unsplash-xs.bc8f751d.jpg"},"034f":function(e,t,o){"use strict";var a=o("c21b"),r=o.n(a);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("744f"),o("6c7b"),o("7514"),o("20d6"),o("1c4c"),o("6762"),o("cadf"),o("e804"),o("55dd"),o("d04f"),o("c8ce"),o("217b"),o("7f7f"),o("f400"),o("7f25"),o("536b"),o("d9ab"),o("f9ab"),o("32d7"),o("25c9"),o("9f3c"),o("042e"),o("c7c6"),o("f4ff"),o("049f"),o("7872"),o("a69f"),o("0b21"),o("6c1a"),o("c7c62"),o("84b4"),o("c5f6"),o("2e37"),o("fca0"),o("7cdf"),o("ee1d"),o("b1b1"),o("87f3"),o("9278"),o("5df2"),o("04ff"),o("f751"),o("4504"),o("fee7"),o("ffc1"),o("0d6d"),o("9986"),o("8e6e"),o("25db"),o("e4f7"),o("b9a1"),o("64d5"),o("9aea"),o("db97"),o("66c8"),o("57f0"),o("165b"),o("456d"),o("cf6a"),o("fd24"),o("8615"),o("551c"),o("097d"),o("df1b"),o("2397"),o("88ca"),o("ba16"),o("d185"),o("ebde"),o("2d34"),o("f6b3"),o("2251"),o("c698"),o("a19f"),o("9253"),o("9275"),o("3b2b"),o("3846"),o("4917"),o("a481"),o("28a5"),o("386d"),o("6b54"),o("4f7f"),o("8a81"),o("ac4d"),o("8449"),o("9c86"),o("fa83"),o("48c0"),o("a032"),o("aef6"),o("d263"),o("6c37"),o("9ec8"),o("5695"),o("2fdb"),o("d0b0"),o("b54a"),o("f576"),o("ed50"),o("788d"),o("14b9"),o("f386"),o("f559"),o("1448"),o("673e"),o("242a"),o("c66f"),o("b05c"),o("34ef"),o("6aa2"),o("15ac"),o("af56"),o("b6e4"),o("9c29"),o("63d9"),o("4dda"),o("10ad"),o("c02b"),o("4795"),o("130f"),o("ac6a"),o("96cf");var a=o("2b0e"),r=o("9f7b");o("ab8b"),o("2dd8");a["a"].use(r["a"]);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("b-container",[o("p",[o("app-header")],1),o("router-view")],1)},s=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-navbar",{attrs:{toggleable:"md",type:"light",variant:"faded"}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),a("b-navbar-brand",{attrs:{to:"/"}},[a("img",{staticStyle:{height:"35px"},attrs:{src:o("cf05"),alt:"house"}})]),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/calculate"}},[e._v("Calculate")]),a("b-nav-item",{attrs:{to:"/privacy"}},[e._v("Privacy Policy")]),a("b-nav-item",{attrs:{to:"/about"}},[e._v("About")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item-dropdown",{attrs:{text:"Lang",right:"",disabled:""}},[a("b-dropdown-item",{attrs:{href:"#"}},[e._v("EN")]),a("b-dropdown-item",{attrs:{href:"#"}},[e._v("ZH")])],1),a("b-nav-item",{attrs:{href:"#"},on:{click:e.authorGoogle}},[e._v("SignInGoogle")]),a("b-nav-item",{attrs:{href:"#"},on:{click:e.authorFacebook}},[e._v("SignInFacebook")]),a("b-nav-item-dropdown",{attrs:{right:""}},[a("template",{slot:"button-content"},[a("em",[e._v(e._s(e.userName))])]),e.isAuthorized?a("b-dropdown-item",{attrs:{href:"#"}},[e._v("Profile")]):e._e(),a("b-dropdown-item",{attrs:{href:"#"},on:{click:e.signOut}},[e._v("Signout")])],2)],1)],1)],1)},l=[],u={data:function(){return{isAuthorized:!1,userName:"Not Sign In"}},methods:{authorFacebook:function(){var e=new firebase.auth.FacebookAuthProvider;firebase.auth().signInWithPopup(e).then(function(e){e.credential.accessToken;var t=e.user;this.userName=t.displayName;t.displayName;this.isAuthorized=!0}).catch(function(e){var t=e.code,o=e.message;e.email,e.credential;console&&console.log("Sign in error, ",t,o)})},authorGoogle:function(){var e=this,t=new firebase.auth.GoogleAuthProvider;firebase.auth().signInWithPopup(t).then(function(t){t.credential.accessToken;var o=t.user;e.userName=o.displayName;o.displayName;e.isAuthorized=!0}).catch(function(e){var t=e.code,o=e.message;e.email,e.credential;console.log("Sign in error, ",t,o)})},signOut:function(){var e=this;firebase.auth().signOut().then(function(){e.isAuthorized=!1,e.userName="Not Sign In",console.log("sign out successfull")}).catch(function(e){this.isAuthorized=!1,this.userName="Not Sign In";var t=e.code,o=e.message;e.email,e.credential;i,console.log("Error: "+t+", "+o)})}}},d=u,p=o("2877"),f=Object(p["a"])(d,c,l,!1,null,null,null);f.options.__file="Header.vue";var v=f.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("A Better Mortgage Calculator")]),a("b-img",{attrs:{alt:"Mortgage Calculator logo",fluid:"",src:o("0033")}})],1)},m=[],b={},y=Object(p["a"])(b,h,m,!1,null,null,null);y.options.__file="Home.vue";var g=y.exports,_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("About")])])}],P={},A=Object(p["a"])(P,_,w,!1,null,null,null);A.options.__file="About.vue";var k=A.exports,S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Repayment Calculation")]),o("b-form",[o("b-form-group",{attrs:{id:"bankSelectionGrp",label:"Your Bank","label-for":"bankSelection",description:"Who provide your loan"}},[o("b-form-select",{attrs:{id:"bankSelection",options:e.bankOptions},model:{value:e.bankSelection,callback:function(t){e.bankSelection=t},expression:"bankSelection"}})],1),o("b-form-group",{attrs:{id:"interestGrp",label:"Interest Rate:","label-for":"txbInterest"}},[o("b-form-input",{attrs:{id:"txbInterest",type:"number",min:"0.01",max:"99.99",step:"0.01",required:"",placeholder:"0.00%"},model:{value:e.interest,callback:function(t){e.interest=t},expression:"interest"}})],1),o("b-form-group",{attrs:{id:"loanAmountGrp",label:"Total Loan Amount:","label-for":"txbloanAmount"}},[o("b-form-input",{attrs:{id:"txbLoanAmount",required:"",placeholder:"Loan Amount"},model:{value:e.loanAmountComput,callback:function(t){e.loanAmountComput=t},expression:"loanAmountComput"}})],1),o("b-form-group",{attrs:{id:"loanTermGrp",label:"Loan Term (Years):","label-for":"txbLoanTerm"}},[o("b-form-input",{attrs:{id:"txbLoanTerm",type:"number",required:"",placeholder:"The term for the loan"},model:{value:e.loanTerm,callback:function(t){e.loanTerm=e._n(t)},expression:"loanTerm"}})],1),o("b-button",{attrs:{variant:"primary"},on:{click:e.calculatePayment}},[e._v("Submit")])],1),e.calculated?o("div",{attrs:{id:"divRepayment"}},[o("b-form-group",{attrs:{id:"repayFnGrp",horizontal:"",label:"Payment Fortnighly:"}},[e._v("\n      "+e._s(e._f("toCurrency")(e.repayFn))+"\n    ")]),o("b-form-group",{attrs:{id:"repayMtGrp",horizontal:"",label:"Payment Monthly:"}},[e._v("\n      "+e._s(e._f("toCurrency")(e.repayMt))+"\n    ")]),o("b-form-group",{attrs:{id:"repayInterestGrp",horizontal:"",label:"Total Interest Paid:"}},[e._v("\n      "+e._s(e._f("toCurrency")(e.interestPaid))+"\n    ")])],1):e._e()],1)},T=[],C={data:function(){return{calculated:!1,bankOptions:[{text:"ANZ",vaule:"ANZ"},{text:"ASB",vaule:"ASB"},{text:"Bank of New Zealand",value:"BNZ"},{text:"Kiwi",value:"KIWI"},{text:"Robobank",value:"ROBOBANK"},{text:"TSB Bank",value:"TSB"},{text:"Westpac",value:"WESTPAC"}],bankSelection:"",interest:5.5,loanAmount:5e5,loanTerm:30,repayFn:0,repayMt:0,interestPaid:0}},methods:{calculatePayment:function(){var e=this.interest/1200,t=this.interest/2600;this.repayMt=this.payment(e,12*this.loanTerm,this.loanAmount),this.repayFn=this.payment(t,26*this.loanTerm,this.loanAmount),this.interestPaid=this.repayMt*this.loanTerm*12-this.loanAmount,this.calculated=!0},payment:function(e,t,o){return e*Math.pow(1+e,t)*o/(Math.pow(1+e,t)-1)}},computed:{loanAmountComput:{get:function(){return this.$options.filters.toCurrency(this.loanAmount)},set:function(e){this.loanAmount=Number(e.replace(/[,$]/g,""))}}},created:function(){}},x=C,O=Object(p["a"])(x,S,T,!1,null,null,null);O.options.__file="Calculate.vue";var N=O.exports,E={name:"app",components:{appHeader:v,Home:g,Calculate:N,About:k}},I=E,D=(o("034f"),Object(p["a"])(I,n,s,!1,null,null,null));D.options.__file="App.vue";var W=D.exports,F=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},j=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Privacy Policy")]),o("p",[e._v("Effective date: December 26, 2018")]),o("p",[e._v('better-mortgage-cal-vue ("us", "we", or "our") operates the https://pstarliu.github.io/ website (the "Service").')]),o("p",[e._v("This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy  for better-mortgage-cal-vue is based on the "),o("a",{attrs:{href:"https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/"}},[e._v("Free Privacy Policy Template Website")]),e._v(".")]),o("p",[e._v("We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from https://pstarliu.github.io/")]),o("h2",[e._v("Information Collection And Use")]),o("p",[e._v("We collect several different types of information for various purposes to provide and improve our Service to you.")]),o("h3",[e._v("Types of Data Collected")]),o("h4",[e._v("Personal Data")]),o("p",[e._v('While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:')]),o("ul",[o("li",[e._v("Email address")]),o("li",[e._v("First name and last name")]),o("li",[e._v("Cookies and Usage Data")])]),o("h4",[e._v("Usage Data")]),o("p",[e._v('We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer\'s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.')]),o("h4",[e._v("Tracking & Cookies Data")]),o("p",[e._v("We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.")]),o("p",[e._v("Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.")]),o("p",[e._v("You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.")]),o("p",[e._v("Examples of Cookies we use:")]),o("ul",[o("li",[o("strong",[e._v("Session Cookies.")]),e._v(" We use Session Cookies to operate our Service.")]),o("li",[o("strong",[e._v("Preference Cookies.")]),e._v(" We use Preference Cookies to remember your preferences and various settings.")]),o("li",[o("strong",[e._v("Security Cookies.")]),e._v(" We use Security Cookies for security purposes.")])]),o("h2",[e._v("Use of Data")]),o("p",[e._v("better-mortgage-cal-vue uses the collected data for various purposes:")]),o("ul",[o("li",[e._v("To provide and maintain the Service")]),o("li",[e._v("To notify you about changes to our Service")]),o("li",[e._v("To allow you to participate in interactive features of our Service when you choose to do so")]),o("li",[e._v("To provide customer care and support")]),o("li",[e._v("To provide analysis or valuable information so that we can improve the Service")]),o("li",[e._v("To monitor the usage of the Service")]),o("li",[e._v("To detect, prevent and address technical issues")])]),o("h2",[e._v("Transfer Of Data")]),o("p",[e._v("Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.")]),o("p",[e._v("If you are located outside New Zealand and choose to provide information to us, please note that we transfer the data, including Personal Data, to New Zealand and process it there.")]),o("p",[e._v("Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.")]),o("p",[e._v("better-mortgage-cal-vue will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.")]),o("h2",[e._v("Disclosure Of Data")]),o("h3",[e._v("Legal Requirements")]),o("p",[e._v("better-mortgage-cal-vue may disclose your Personal Data in the good faith belief that such action is necessary to:")]),o("ul",[o("li",[e._v("To comply with a legal obligation")]),o("li",[e._v("To protect and defend the rights or property of better-mortgage-cal-vue")]),o("li",[e._v("To prevent or investigate possible wrongdoing in connection with the Service")]),o("li",[e._v("To protect the personal safety of users of the Service or the public")]),o("li",[e._v("To protect against legal liability")])]),o("h2",[e._v("Security Of Data")]),o("p",[e._v("The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.")]),o("h2",[e._v("Service Providers")]),o("p",[e._v('We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.')]),o("p",[e._v("These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.")]),o("h2",[e._v("Links To Other Sites")]),o("p",[e._v("Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.")]),o("p",[e._v("We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.")]),o("h2",[e._v("Children's Privacy")]),o("p",[e._v('Our Service does not address anyone under the age of 18 ("Children").')]),o("p",[e._v("We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.")]),o("h2",[e._v("Changes To This Privacy Policy")]),o("p",[e._v("We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.")]),o("p",[e._v('We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.')]),o("p",[e._v("You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.")]),o("h2",[e._v("Contact Us")]),o("p",[e._v("If you have any questions about this Privacy Policy, please contact us:")]),o("ul",[o("li",[e._v("By visitting this page on our website: https://github.com/pstarliu/better-mortgage-cal-vue")])])])}],z={},M=Object(p["a"])(z,F,j,!1,null,null,null);M.options.__file="PrivacyPolicy.vue";var G=M.exports,H=[{path:"/",component:g},{path:"/calculate",component:N},{path:"/about",component:k},{path:"/privacy",component:G}],L=o("8c4f");o("f9e3");a["a"].use(L["a"]),a["a"].use(r["a"]),a["a"].config.productionTip=!1,a["a"].filter("toCurrency",function(e){if("number"!==typeof e)return e;var t=new Intl.NumberFormat("en-NZ",{style:"currency",currency:"NZD",minimumFractionDigits:0});return t.format(e)});var K=new L["a"]({mode:"history",routes:H});new a["a"]({render:function(e){return e(W)},router:K}).$mount("#app")},c21b:function(e,t,o){},cf05:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADdElEQVR42u3dTWrcMBQHcB/BJ2i9Km2h4O7SVUxoS6AtGNpC6cpHmBOEgTnAHGF2WcZH8BG8yqKbQiCrQtERXNmVQWNkj53xe3qS3sAf8jWO88PRaCT5KYoIPXZ3fxOZXGYrU8pUMs3MVOo5W3WMJOLHEWyhgMQC1LkR6thFcPDyD45lNjI1AOyp1Op3xz4DZzIHC7hjac8l8w24IgRsatszl4FT4sAm8NS1NnjvEPAwe/JtuOpWCYeR9d5KzldxiFe36gvXHiLrXcKEwgue8BhZb0pSW8hFAMDDFIzsG3bgyDjYjIyArV74GPg4KUQXTjCssTeSrPlmhEQ/+eb2ofl4/aVL+zGhfna8BvSeEvLF25ddiGHv1xi7IIX889unLgSx83OaDEEN+fH3fReC2OJJTQiFJsOELP48dJnC/nz1obl89cyY9ntkmhAKXbkp5FPYY8h9yHT5bM+MzEGewu5BH7+/PwoSdLVkjs8J5DHsy9fPbUI3s+YgbV7NT0E2Yb9LX3TYFqErslfzOchj2L++XtmCnr6qba27WAPZhP3j4s0RNjL0Yarf7DTyKWxk6MbYr1ZLpZxHnsK2AL0xQde+II9h970RzAEn0zCoV8hTvRHk/9zEyswJJvIYNvLYSKFDl74izxkbAU6pQwufkS1jC7T2mQKyZewEfHCfErJF7DxSN9egTD9RQNaxEafFtmAvhEPkNlSQ++jnBoxdgozW6cg6NlVo/VyBsKsIGrn9nDq06ZzXdomgkduvU4eeOneS0GMn6gK0CZs0tOlqcAV6uBqKLPRYXIKGCkMzNEMzNEMzNENjLJhh6P9vwUuq0P1Q5py0P0sYugQdJj0Xei7yucdHgN6irOqHhnAAOkeZymJoteQAenI2cGiBttwgcOgSbQFN4NAF2pKwwKETtEWOAUPXqMt2A4beoC5EDxg6Rr21IlDoA/rNQoFCZ+i3vwUIXVm5oXPp4NAwto8PckMnxFU9XIO3JHOm/aGPD3KLMtdPQq6z5GmtUXqVaKgURnGskFXsdKkfR5J7UbzKuyaDcjk2wmWP16kxzQUGEQoMcpcPsWQmF4HlirtcQ5qRGdsdZN5MgbcH8XN7EN7whrdwWqOpoLeFE29KxtvsLZoZ2bm0zd7IHGRFHDiLfHnseCtUK204b+5roQ/O21VbgvdyA/Z/D9ki8Ny/28oAAAAASUVORK5CYII="}});
//# sourceMappingURL=app.9ceab16c.js.map