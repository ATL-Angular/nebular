(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"+cwC":function(t,e,n){"use strict";n.r(e);var s=n("CcnG"),i=function(){return function(){}}(),r=n("pMnS"),u=n("KM9H"),l=n("vuB0"),o=n("4vXS"),a=n("7uv5"),c=n("MGne"),b=n("NfCQ"),h=n("kztb"),g=n("V+dw"),f=n("8bEz"),d=n("k6ER"),p=n("4Ssn"),y=n("S+eJ"),v=n("Ip0R"),C=(n("NGJs"),n("jvbL")),m=function(){function t(t){var e=this;this.authService=t,this.alive=!0,this.authService.onTokenChange().pipe(Object(C.a)(function(){return e.alive})).subscribe(function(t){e.token=null,t&&t.isValid()&&(e.token=t)})}return t.prototype.login=function(){var t=this;this.authService.authenticate("google").pipe(Object(C.a)(function(){return t.alive})).subscribe(function(t){})},t.prototype.logout=function(){var t=this;this.authService.logout("google").pipe(Object(C.a)(function(){return t.alive})).subscribe(function(t){})},t.prototype.ngOnDestroy=function(){this.alive=!1},t}(),w=n("BDhN"),E=s.sb({encapsulation:2,styles:[],data:{}});function k(t){return s.Ob(0,[(t()(),s.ub(0,0,null,null,1,"button",[["nbButton",""],["status","success"]],null,[[null,"click"]],function(t,e,n){var s=!0;return"click"===e&&(s=!1!==t.component.login()&&s),s},null,null)),(t()(),s.Mb(-1,null,["Sign In with Google"]))],null,null)}function V(t){return s.Ob(0,[(t()(),s.ub(0,0,null,null,1,"button",[["nbButton",""],["status","warning"]],null,[[null,"click"]],function(t,e,n){var s=!0;return"click"===e&&(s=!1!==t.component.logout()&&s),s},null,null)),(t()(),s.Mb(-1,null,["Sign Out"]))],null,null)}function S(t){return s.Ob(0,[(t()(),s.ub(0,0,null,null,16,"nb-layout",[],[[2,"window-mode",null],[2,"with-scroll",null],[2,"with-subheader",null],[2,"overlay-scroll-block",null]],[["window","scroll"],["window","resize"]],function(t,e,n){var i=!0;return"window:scroll"===e&&(i=!1!==s.Eb(t,1).onScroll(n)&&i),"window:resize"===e&&(i=!1!==s.Eb(t,1).onResize(n)&&i),i},u.f,u.b)),s.tb(1,4374528,null,0,l.b,[o.a,a.a,s.k,s.F,c.f,c.b,s.C,b.c,h.a,g.a,f.a,d.a],null,null),(t()(),s.ub(2,0,null,3,14,"nb-layout-column",[],[[2,"left",null],[2,"start",null]],null,null,u.e,u.a)),s.tb(3,49152,null,0,l.a,[],null,null),(t()(),s.ub(4,0,null,0,12,"nb-card",[],[[1,"disabled",0],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,p.f,p.b)),s.tb(5,49152,null,0,y.b,[],null,null),(t()(),s.ub(6,0,null,1,10,"nb-card-body",[],null,null,null,p.e,p.a)),s.tb(7,49152,null,0,y.a,[],null,null),(t()(),s.ub(8,0,null,0,1,"p",[],null,null,null,null,null)),(t()(),s.Mb(9,null,["Current User Authenticated: ",""])),(t()(),s.ub(10,0,null,0,2,"p",[],null,null,null,null,null)),(t()(),s.Mb(11,null,["Current User Token: ",""])),s.Gb(0,v.h,[]),(t()(),s.lb(16777216,null,0,1,null,k)),s.tb(14,16384,null,0,v.n,[s.S,s.O],{ngIf:[0,"ngIf"]},null),(t()(),s.lb(16777216,null,0,1,null,V)),s.tb(16,16384,null,0,v.n,[s.S,s.O],{ngIf:[0,"ngIf"]},null)],function(t,e){var n=e.component;t(e,14,0,!n.token),t(e,16,0,n.token)},function(t,e){var n=e.component;t(e,0,0,s.Eb(e,1).windowModeValue,s.Eb(e,1).withScrollValue,s.Eb(e,1).withSubheader,s.Eb(e,1).overlayScrollBlock),t(e,2,0,s.Eb(e,3).leftValue,s.Eb(e,3).startValue),t(e,4,1,[s.Eb(e,5).disabled,s.Eb(e,5).tiny,s.Eb(e,5).small,s.Eb(e,5).medium,s.Eb(e,5).large,s.Eb(e,5).giant,s.Eb(e,5).primary,s.Eb(e,5).info,s.Eb(e,5).success,s.Eb(e,5).warning,s.Eb(e,5).danger,s.Eb(e,5).hasAccent,s.Eb(e,5).primaryAccent,s.Eb(e,5).infoAccent,s.Eb(e,5).successAccent,s.Eb(e,5).warningAccent,s.Eb(e,5).dangerAccent]),t(e,9,0,!!n.token),t(e,11,0,s.Nb(e,11,0,s.Eb(e,12).transform(n.token)))})}function D(t){return s.Ob(0,[(t()(),s.ub(0,0,null,null,1,"nb-playground-auth",[],null,null,null,S,E)),s.tb(1,180224,null,0,m,[w.a],null,null)],null,null)}var M=s.qb("nb-playground-auth",m,D,{},{},[]),O=function(){function t(t,e){var n=this;this.authService=t,this.router=e,this.alive=!0,this.authService.authenticate("google").pipe(Object(C.a)(function(){return n.alive})).subscribe(function(t){t.isSuccess()&&t.getRedirect()&&n.router.navigateByUrl(t.getRedirect())})}return t.prototype.ngOnDestroy=function(){this.alive=!1},t}(),B=n("ZYCi"),j=s.sb({encapsulation:2,styles:[],data:{}});function z(t){return s.Ob(0,[(t()(),s.ub(0,0,null,null,4,"nb-layout",[],[[2,"window-mode",null],[2,"with-scroll",null],[2,"with-subheader",null],[2,"overlay-scroll-block",null]],[["window","scroll"],["window","resize"]],function(t,e,n){var i=!0;return"window:scroll"===e&&(i=!1!==s.Eb(t,1).onScroll(n)&&i),"window:resize"===e&&(i=!1!==s.Eb(t,1).onResize(n)&&i),i},u.f,u.b)),s.tb(1,4374528,null,0,l.b,[o.a,a.a,s.k,s.F,c.f,c.b,s.C,b.c,h.a,g.a,f.a,d.a],null,null),(t()(),s.ub(2,0,null,3,2,"nb-layout-column",[],[[2,"left",null],[2,"start",null]],null,null,u.e,u.a)),s.tb(3,49152,null,0,l.a,[],null,null),(t()(),s.Mb(-1,0,["Authenticating..."]))],null,function(t,e){t(e,0,0,s.Eb(e,1).windowModeValue,s.Eb(e,1).withScrollValue,s.Eb(e,1).withSubheader,s.Eb(e,1).overlayScrollBlock),t(e,2,0,s.Eb(e,3).leftValue,s.Eb(e,3).startValue)})}function A(t){return s.Ob(0,[(t()(),s.ub(0,0,null,null,1,"nb-playground-oauth2-callback",[],null,null,null,z,j)),s.tb(1,180224,null,0,O,[w.a,B.l],null,null)],null,null)}var N=s.qb("nb-playground-oauth2-callback",O,A,{},{},[]),I=n("gIcY"),T=n("t/Na"),q=n("0ICW"),R=n("Abgx"),P=n("znn7"),L=n("Y4k2"),U=n("Bc6B"),X=n("6y2k"),F=n("++eV"),J=n("X/Iy"),G=n("i6JN"),K=n("F4EV"),Y=n("IVq4"),x=n("NFr4"),Q=n("0AKQ"),W=n("DJEY"),Z=n("+q8+"),H=n("+Zd3"),$=n("4aFR"),_=function(){return function(){}}(),tt=n("QEfX");n.d(e,"OAuth2PlaygroundModuleNgFactory",function(){return et});var et=s.rb(i,[],function(t){return s.Bb([s.Cb(512,s.j,s.fb,[[8,[r.a,M,N]],[3,s.j],s.y]),s.Cb(4608,v.p,v.o,[s.v,[2,v.E]]),s.Cb(4608,I.A,I.A,[]),s.Cb(4608,T.k,T.q,[v.d,s.C,T.o]),s.Cb(4608,T.r,T.r,[T.k,T.p]),s.Cb(5120,T.a,function(t){return[t]},[T.r]),s.Cb(4608,T.n,T.n,[]),s.Cb(6144,T.l,null,[T.n]),s.Cb(4608,T.j,T.j,[T.l]),s.Cb(6144,T.b,null,[T.j]),s.Cb(4608,T.g,T.m,[T.b,s.r]),s.Cb(4608,T.c,T.c,[T.g]),s.Cb(4608,f.a,f.a,[B.l]),s.Cb(5120,q.b,R.c,[q.f]),s.Cb(5120,q.c,R.d,[q.b,s.r]),s.Cb(5120,q.d,R.e,[q.c]),s.Cb(4608,P.b,P.b,[P.a,q.d]),s.Cb(4608,L.b,L.a,[P.b]),s.Cb(4608,U.a,U.a,[L.b]),s.Cb(4608,w.a,w.a,[U.a,q.c]),s.Cb(4608,X.a,X.a,[]),s.Cb(4608,F.a,F.a,[T.c,B.a]),s.Cb(4608,J.a,J.a,[T.c,B.a,c.f]),s.Cb(1073742336,v.c,v.c,[]),s.Cb(1073742336,I.y,I.y,[]),s.Cb(1073742336,I.i,I.i,[]),s.Cb(1073742336,T.e,T.e,[]),s.Cb(1073742336,T.d,T.d,[]),s.Cb(1073742336,B.p,B.p,[[2,B.v],[2,B.l]]),s.Cb(1073742336,G.a,G.a,[]),s.Cb(1073742336,K.a,K.a,[]),s.Cb(1073742336,Y.a,Y.a,[x.a]),s.Cb(1073742336,Q.a,Q.a,[]),s.Cb(1073742336,W.a,W.a,[]),s.Cb(1073742336,Z.a,Z.a,[]),s.Cb(1073742336,H.a,H.a,[]),s.Cb(1073742336,$.a,$.a,[]),s.Cb(1073742336,R.a,R.a,[]),s.Cb(1073742336,_,_,[]),s.Cb(1073742336,i,i,[]),s.Cb(256,T.o,"XSRF-TOKEN",[]),s.Cb(256,T.p,"X-XSRF-TOKEN",[]),s.Cb(1024,B.j,function(){return[[{path:"",component:m},{path:"callback",component:O}]]},[]),s.Cb(256,q.f,{strategies:[[J.a,{name:"google",clientId:"806751403568-03376bvlin9n3rhid0cahus6ei3lc69q.apps.googleusercontent.com",clientSecret:"",authorize:{endpoint:"https://accounts.google.com/o/oauth2/v2/auth",responseType:"token",scope:"https://www.googleapis.com/auth/userinfo.profile",redirectUri:"https://akveo.github.io/nebular/example/oauth2/callback"},redirect:{success:"/example/oauth2"}}]]},[]),s.Cb(256,P.a,tt.h,[]),s.Cb(256,q.a,"Authorization",[]),s.Cb(256,q.e,R.b,[])])})},"2Az5":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n("BDhN");var s=n("jvbL"),i=function(){function t(t,e){var n=this;this.auth=t,this.location=e,this.alive=!0,this.authenticated=!1,this.token="",this.subscription=t.onAuthenticationChange().pipe(Object(s.a)(function(){return n.alive})).subscribe(function(t){n.authenticated=t})}return t.prototype.back=function(){return this.location.back(),!1},t.prototype.ngOnDestroy=function(){this.alive=!1},t}()},"8qs0":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var s=n("iVvT"),i=(n("BDhN"),function(){function t(t,e,n,s){void 0===e&&(e={}),this.service=t,this.options=e,this.cd=n,this.router=s,this.redirectDelay=0,this.showMessages={},this.strategy="",this.submitted=!1,this.errors=[],this.messages=[],this.user={},this.redirectDelay=this.getConfigValue("forms.resetPassword.redirectDelay"),this.showMessages=this.getConfigValue("forms.resetPassword.showMessages"),this.strategy=this.getConfigValue("forms.resetPassword.strategy")}return t.prototype.resetPass=function(){var t=this;this.errors=this.messages=[],this.submitted=!0,this.service.resetPassword(this.strategy,this.user).subscribe(function(e){t.submitted=!1,e.isSuccess()?t.messages=e.getMessages():t.errors=e.getErrors();var n=e.getRedirect();n&&setTimeout(function(){return t.router.navigateByUrl(n)},t.redirectDelay),t.cd.detectChanges()})},t.prototype.getConfigValue=function(t){return Object(s.b)(this.options,t,null)},t}())},"9S34":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n("0ICW");var s=n("iVvT"),i=(n("BDhN"),function(){function t(t,e,n,s){void 0===e&&(e={}),this.service=t,this.options=e,this.cd=n,this.router=s,this.redirectDelay=0,this.showMessages={},this.strategy="",this.submitted=!1,this.errors=[],this.messages=[],this.user={},this.socialLinks=[],this.redirectDelay=this.getConfigValue("forms.register.redirectDelay"),this.showMessages=this.getConfigValue("forms.register.showMessages"),this.strategy=this.getConfigValue("forms.register.strategy"),this.socialLinks=this.getConfigValue("forms.login.socialLinks")}return t.prototype.register=function(){var t=this;this.errors=this.messages=[],this.submitted=!0,this.service.register(this.strategy,this.user).subscribe(function(e){t.submitted=!1,e.isSuccess()?t.messages=e.getMessages():t.errors=e.getErrors();var n=e.getRedirect();n&&setTimeout(function(){return t.router.navigateByUrl(n)},t.redirectDelay),t.cd.detectChanges()})},t.prototype.getConfigValue=function(t){return Object(s.b)(this.options,t,null)},t}())},"9XlZ":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var s=n("iVvT"),i=(n("BDhN"),function(){function t(t,e,n){void 0===e&&(e={}),this.service=t,this.options=e,this.router=n,this.redirectDelay=0,this.strategy="",this.redirectDelay=this.getConfigValue("forms.logout.redirectDelay"),this.strategy=this.getConfigValue("forms.logout.strategy")}return t.prototype.ngOnInit=function(){this.logout(this.strategy)},t.prototype.logout=function(t){var e=this;this.service.logout(t).subscribe(function(t){var n=t.getRedirect();n&&setTimeout(function(){return e.router.navigateByUrl(n)},e.redirectDelay)})},t.prototype.getConfigValue=function(t){return Object(s.b)(this.options,t,null)},t}())},DYSn:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n("0ICW");var s=n("iVvT"),i=(n("BDhN"),function(){function t(t,e,n,s){void 0===e&&(e={}),this.service=t,this.options=e,this.cd=n,this.router=s,this.redirectDelay=0,this.showMessages={},this.strategy="",this.errors=[],this.messages=[],this.user={},this.submitted=!1,this.socialLinks=[],this.rememberMe=!1,this.redirectDelay=this.getConfigValue("forms.login.redirectDelay"),this.showMessages=this.getConfigValue("forms.login.showMessages"),this.strategy=this.getConfigValue("forms.login.strategy"),this.socialLinks=this.getConfigValue("forms.login.socialLinks"),this.rememberMe=this.getConfigValue("forms.login.rememberMe")}return t.prototype.login=function(){var t=this;this.errors=[],this.messages=[],this.submitted=!0,this.service.authenticate(this.strategy,this.user).subscribe(function(e){t.submitted=!1,e.isSuccess()?t.messages=e.getMessages():t.errors=e.getErrors();var n=e.getRedirect();n&&setTimeout(function(){return t.router.navigateByUrl(n)},t.redirectDelay),t.cd.detectChanges()})},t.prototype.getConfigValue=function(t){return Object(s.b)(this.options,t,null)},t}())},K8rk:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var s=function(){return function(){}}()},"Lu/0":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var s=n("iVvT"),i=(n("BDhN"),function(){function t(t,e,n,s){void 0===e&&(e={}),this.service=t,this.options=e,this.cd=n,this.router=s,this.redirectDelay=0,this.showMessages={},this.strategy="",this.submitted=!1,this.errors=[],this.messages=[],this.user={},this.redirectDelay=this.getConfigValue("forms.requestPassword.redirectDelay"),this.showMessages=this.getConfigValue("forms.requestPassword.showMessages"),this.strategy=this.getConfigValue("forms.requestPassword.strategy")}return t.prototype.requestPass=function(){var t=this;this.errors=this.messages=[],this.submitted=!0,this.service.requestPassword(this.strategy,this.user).subscribe(function(e){t.submitted=!1,e.isSuccess()?t.messages=e.getMessages():t.errors=e.getErrors();var n=e.getRedirect();n&&setTimeout(function(){return t.router.navigateByUrl(n)},t.redirectDelay),t.cd.detectChanges()})},t.prototype.getConfigValue=function(t){return Object(s.b)(this.options,t,null)},t}())},NGJs:function(t,e,n){"use strict";n("0ICW"),n("Abgx");var s=n("2Az5"),i=n("DYSn"),r=n("9S34"),u=n("9XlZ"),l=n("Lu/0"),o=n("8qs0"),a=(n("K8rk"),n("QEfX")),c=n("Sbqb");n.d(e,"a",function(){return s.a}),n.d(e,"f",function(){return i.a}),n.d(e,"g",function(){return u.a}),n.d(e,"j",function(){return r.a}),n.d(e,"k",function(){return l.a}),n.d(e,"l",function(){return o.a}),n.d(e,"e",function(){return a.f}),n.d(e,"b",function(){return a.b}),n.d(e,"m",function(){return a.m}),n.d(e,"c",function(){return a.c}),n.d(e,"d",function(){return a.d}),n.d(e,"h",function(){return c.b}),n.d(e,"i",function(){return c.c})}}]);