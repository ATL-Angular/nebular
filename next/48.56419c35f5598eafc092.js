(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"4Ssn":function(l,n,t){"use strict";var e=t("CcnG");t("S+eJ"),t.d(n,"d",function(){return u}),t.d(n,"h",function(){return o}),t.d(n,"a",function(){return i}),t.d(n,"e",function(){return s}),t.d(n,"c",function(){return r}),t.d(n,"g",function(){return a}),t.d(n,"b",function(){return c}),t.d(n,"f",function(){return b});var u=e.tb({encapsulation:2,styles:[],data:{}});function o(l){return e.Pb(0,[e.Eb(null,0)],null,null)}var i=e.tb({encapsulation:2,styles:[],data:{}});function s(l){return e.Pb(0,[e.Eb(null,0)],null,null)}var r=e.tb({encapsulation:2,styles:[],data:{}});function a(l){return e.Pb(0,[e.Eb(null,0)],null,null)}var c=e.tb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}"]],data:{}});function b(l){return e.Pb(0,[e.Eb(null,0),e.Eb(null,1),e.Eb(null,2),e.Eb(null,3)],null,null)}},c2hK:function(l,n,t){"use strict";t.r(n);var e=t("CcnG"),u=function(){return function(){}}(),o=t("pMnS"),i=t("7s4d"),s=["body{height:30rem}[_nghost-%COMP%]{display:block;margin:0 auto;max-width:50rem}.nb-spinner-container[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 0 4rem;flex:1 0 4rem}"],r=t("aJCS"),a=t("jXul"),c=function(){return function(){this.label="Loading"}}(),b=e.tb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:block}.title-placeholder[_ngcontent-%COMP%]{height:1.8rem;margin-bottom:.5rem;width:80%}.text-placeholder[_ngcontent-%COMP%]{height:4rem;margin-bottom:1rem}.link-placeholder[_ngcontent-%COMP%]{height:1.25rem;width:5rem}.nb-theme-default   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:#dde1eb}.nb-theme-cosmic   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:#171b47}.nb-theme-corporate   [_nghost-%COMP%]   [class$=placeholder][_ngcontent-%COMP%]{background:#dde1eb}"]],data:{}});function d(l){return e.Pb(0,[(l()(),e.vb(0,0,null,null,0,"div",[["class","title-placeholder"]],null,null,null,null,null)),(l()(),e.vb(1,0,null,null,0,"div",[["class","text-placeholder"]],null,null,null,null,null)),(l()(),e.vb(2,0,null,null,0,"div",[["class","link-placeholder"]],null,null,null,null,null))],null,null)}var h=t("67Y/"),p=t("vubp"),g=function(){function l(l){this.http=l}return l.prototype.load=function(l,n){var t=(l-1)%7*n;return this.http.get("assets/data/news.json").pipe(Object(h.a)(function(l){return l.splice(t,n)}),Object(p.a)(1500))},l}(),f=function(){return function(){}}(),m=e.tb({encapsulation:2,styles:[],data:{}});function F(l){return e.Pb(0,[(l()(),e.vb(0,0,null,null,6,"article",[],null,null,null,null,null)),(l()(),e.vb(1,0,null,null,1,"h2",[["class","h5"]],null,null,null,null,null)),(l()(),e.Nb(2,null,["",""])),(l()(),e.vb(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Nb(4,null,["",""])),(l()(),e.vb(5,0,null,null,1,"a",[],[[1,"href",4]],null,null,null,null)),(l()(),e.Nb(-1,null,["Read full article"]))],null,function(l,n){var t=n.component;l(n,2,0,t.post.title),l(n,4,0,t.post.text),l(n,5,0,t.post.link)})}var v=t("4Ssn"),w=t("S+eJ"),y=t("66B6"),P=t("eBxF"),S=t("kztb"),O=t("V+dw"),x=t("Ip0R"),z=t("t/Na"),T=t("dEwP"),N=t("t9fZ"),C=t("Qgas");function A(l,n,t){return 0===t?[n]:(l.push(n),l)}t("cwSc");var k=function(){function l(l,n,t,e,u,o,i){this.newsService=l,this.router=n,this.route=t,this.scrollService=e,this.layoutService=u,this.platformId=o,this.window=i,this.news=[],this.topPlaceholders=[],this.bottomPlaceholders=[],this.pageSize=10,this.loadingNext=!1,this.loadingPrevious=!1,Object(x.B)(this.platformId)&&this.window.history.scrollRestoration&&(this.initialScrollRestoration=i.history.scrollRestoration,history.scrollRestoration="manual")}return l.prototype.ngOnInit=function(){var l=this.route.snapshot.queryParams.page;this.startPage=l?Number.parseInt(l,10):100,this.pageToLoadNext=this.startPage},l.prototype.ngOnDestroy=function(){this.initialScrollRestoration&&(this.window.history.scrollRestoration=this.initialScrollRestoration)},l.prototype.updateUrl=function(l){this.router.navigate(["."],{queryParams:{page:l},replaceUrl:!0,relativeTo:this.route,queryParamsHandling:"merge"})},l.prototype.loadPrevious=function(){var l=this;this.loadingPrevious||1===this.startPage||(this.loadingPrevious=!0,this.topPlaceholders=new Array(this.pageSize),this.restoreScrollPosition(),this.startPage--,this.newsService.load(this.startPage,this.pageSize).subscribe(function(n){var t;l.topPlaceholders=[],(t=l.news).unshift.apply(t,n),l.loadingPrevious=!1},function(n){return l.startPage++}))},l.prototype.loadNext=function(){var l=this;this.loadingNext||(this.loadingNext=!0,this.bottomPlaceholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(function(n){var t;l.bottomPlaceholders=[],(t=l.news).push.apply(t,n),l.loadingNext=!1,l.pageToLoadNext++}))},l.prototype.restoreScrollPosition=function(){var l=this;Object(T.a)(this.layoutService.getDimensions(),this.scrollService.getPosition(),this.listItems.changes.pipe(Object(N.a)(1)),this.layoutService.getDimensions(),this.scrollService.getPosition()).pipe(Object(C.a)(A,[])).subscribe(function(n){var t=n[4].y,e=n[3].scrollHeight-n[0].scrollHeight;n[1].y+e!==t&&l.scrollService.scrollTo(null,t+e)})},l}(),I=t("ZYCi"),L=t("MGne"),D=e.tb({encapsulation:0,styles:[s],data:{}});function M(l){return e.Pb(0,[(l()(),e.vb(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.ub(1,49152,[[3,4]],0,a.b,[],null,null),(l()(),e.vb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.ub(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Fb(n,1).role),l(n,2,0,e.Fb(n,3).label)})}function E(l){return e.Pb(0,[(l()(),e.vb(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.ub(1,49152,[[3,4]],0,a.b,[],null,null),(l()(),e.vb(2,0,null,0,1,"nb-news-post",[],null,null,null,F,m)),e.ub(3,49152,null,0,f,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Fb(n,1).role)})}function j(l){return e.Pb(0,[(l()(),e.vb(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.ub(1,49152,[[3,4]],0,a.b,[],null,null),(l()(),e.vb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.ub(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Fb(n,1).role),l(n,2,0,e.Fb(n,3).label)})}function R(l){return e.Pb(0,[e.Lb(671088640,1,{listItems:1}),(l()(),e.vb(1,0,null,null,13,"nb-card",[],[[1,"disabled",0],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,v.f,v.b)),e.ub(2,49152,null,0,w.b,[],null,null),(l()(),e.vb(3,0,null,2,11,"nb-list",[["listenWindowScroll",""],["nbInfiniteList",""],["nbListPageTracker",""]],[[1,"role",0]],[[null,"topThreshold"],[null,"bottomThreshold"],[null,"pageChange"],[null,"scroll"]],function(l,n,t){var u=!0,o=l.component;return"scroll"===n&&(u=!1!==e.Fb(l,7).onElementScroll()&&u),"topThreshold"===n&&(u=!1!==o.loadPrevious()&&u),"bottomThreshold"===n&&(u=!1!==o.loadNext()&&u),"pageChange"===n&&(u=!1!==o.updateUrl(t)&&u),u},r.c,r.a)),e.ub(4,49152,null,0,a.a,[],null,null),e.ub(5,4341760,null,1,y.a,[],{pageSize:[0,"pageSize"],startPage:[1,"startPage"]},{pageChange:"pageChange"}),e.Lb(603979776,2,{listItems:1}),e.ub(7,4341760,null,1,P.a,[e.k,S.a,O.a],{threshold:[0,"threshold"],listenWindowScroll:[1,"listenWindowScroll"]},{bottomThreshold:"bottomThreshold",topThreshold:"topThreshold"}),e.Lb(603979776,3,{listItems:1}),(l()(),e.kb(16777216,null,0,1,null,M)),e.ub(10,278528,null,0,x.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null),(l()(),e.kb(16777216,null,0,1,null,E)),e.ub(12,278528,null,0,x.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null),(l()(),e.kb(16777216,null,0,1,null,j)),e.ub(14,278528,null,0,x.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,5,0,t.pageSize,t.startPage),l(n,7,0,500,""),l(n,10,0,t.topPlaceholders),l(n,12,0,t.news),l(n,14,0,t.bottomPlaceholders)},function(l,n){l(n,1,1,[e.Fb(n,2).disabled,e.Fb(n,2).tiny,e.Fb(n,2).small,e.Fb(n,2).medium,e.Fb(n,2).large,e.Fb(n,2).giant,e.Fb(n,2).primary,e.Fb(n,2).info,e.Fb(n,2).success,e.Fb(n,2).warning,e.Fb(n,2).danger,e.Fb(n,2).hasAccent,e.Fb(n,2).primaryAccent,e.Fb(n,2).infoAccent,e.Fb(n,2).successAccent,e.Fb(n,2).warningAccent,e.Fb(n,2).dangerAccent]),l(n,3,0,e.Fb(n,4).role)})}function _(l){return e.Pb(0,[(l()(),e.vb(0,0,null,null,2,"ng-component",[],null,null,null,R,D)),e.Kb(512,null,g,g,[z.c]),e.ub(2,245760,null,0,k,[g,I.l,I.a,S.a,O.a,e.C,L.f],null,null)],function(l,n){l(n,2,0)},null)}var W=e.rb("ng-component",k,_,{},{},[]),q=function(){function l(l){this.newsService=l,this.firstCard={news:[],placeholders:[],loading:!1,pageToLoadNext:1},this.secondCard={news:[],placeholders:[],loading:!1,pageToLoadNext:1},this.pageSize=10}return l.prototype.loadNext=function(l){l.loading||(l.loading=!0,l.placeholders=new Array(this.pageSize),this.newsService.load(l.pageToLoadNext,this.pageSize).subscribe(function(n){var t;l.placeholders=[],(t=l.news).push.apply(t,n),l.loading=!1,l.pageToLoadNext++}))},l}(),$=e.tb({encapsulation:0,styles:[s,["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}nb-card[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 1 45%;flex:1 1 45%;margin:0 2.5%}nb-card.own-scroll[_ngcontent-%COMP%]{height:30rem}"]],data:{}});function J(l){return e.Pb(0,[(l()(),e.vb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.ub(1,49152,[[1,4]],0,a.b,[],null,null),(l()(),e.vb(2,0,null,0,1,"nb-news-post",[],null,null,null,F,m)),e.ub(3,49152,null,0,f,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Fb(n,1).role)})}function K(l){return e.Pb(0,[(l()(),e.vb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.ub(1,49152,[[1,4]],0,a.b,[],null,null),(l()(),e.vb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.ub(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Fb(n,1).role),l(n,2,0,e.Fb(n,3).label)})}function U(l){return e.Pb(0,[(l()(),e.vb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.ub(1,49152,[[2,4]],0,a.b,[],null,null),(l()(),e.vb(2,0,null,0,1,"nb-news-post",[],null,null,null,F,m)),e.ub(3,49152,null,0,f,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Fb(n,1).role)})}function B(l){return e.Pb(0,[(l()(),e.vb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.ub(1,49152,[[2,4]],0,a.b,[],null,null),(l()(),e.vb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.ub(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Fb(n,1).role),l(n,2,0,e.Fb(n,3).label)})}function G(l){return e.Pb(0,[(l()(),e.vb(0,0,null,null,12,"nb-card",[["class","own-scroll"]],[[1,"disabled",0],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,v.f,v.b)),e.ub(1,49152,null,0,w.b,[],null,null),(l()(),e.vb(2,0,null,0,2,"nb-card-header",[],null,null,null,v.h,v.d)),e.ub(3,49152,null,0,w.d,[],null,null),(l()(),e.Nb(-1,0,[" Own scroll "])),(l()(),e.vb(5,0,null,2,7,"nb-list",[["nbInfiniteList",""]],[[1,"role",0]],[[null,"bottomThreshold"],[null,"scroll"]],function(l,n,t){var u=!0,o=l.component;return"scroll"===n&&(u=!1!==e.Fb(l,7).onElementScroll()&&u),"bottomThreshold"===n&&(u=!1!==o.loadNext(o.firstCard)&&u),u},r.c,r.a)),e.ub(6,49152,null,0,a.a,[],null,null),e.ub(7,4341760,null,1,P.a,[e.k,S.a,O.a],{threshold:[0,"threshold"]},{bottomThreshold:"bottomThreshold"}),e.Lb(603979776,1,{listItems:1}),(l()(),e.kb(16777216,null,0,1,null,J)),e.ub(10,278528,null,0,x.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null),(l()(),e.kb(16777216,null,0,1,null,K)),e.ub(12,278528,null,0,x.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null),(l()(),e.vb(13,0,null,null,12,"nb-card",[],[[1,"disabled",0],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,v.f,v.b)),e.ub(14,49152,null,0,w.b,[],null,null),(l()(),e.vb(15,0,null,0,2,"nb-card-header",[],null,null,null,v.h,v.d)),e.ub(16,49152,null,0,w.d,[],null,null),(l()(),e.Nb(-1,0,[" Window scroll "])),(l()(),e.vb(18,0,null,2,7,"nb-list",[["listenWindowScroll",""],["nbInfiniteList",""]],[[1,"role",0]],[[null,"bottomThreshold"],[null,"scroll"]],function(l,n,t){var u=!0,o=l.component;return"scroll"===n&&(u=!1!==e.Fb(l,20).onElementScroll()&&u),"bottomThreshold"===n&&(u=!1!==o.loadNext(o.secondCard)&&u),u},r.c,r.a)),e.ub(19,49152,null,0,a.a,[],null,null),e.ub(20,4341760,null,1,P.a,[e.k,S.a,O.a],{threshold:[0,"threshold"],listenWindowScroll:[1,"listenWindowScroll"]},{bottomThreshold:"bottomThreshold"}),e.Lb(603979776,2,{listItems:1}),(l()(),e.kb(16777216,null,0,1,null,U)),e.ub(23,278528,null,0,x.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null),(l()(),e.kb(16777216,null,0,1,null,B)),e.ub(25,278528,null,0,x.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,7,0,500),l(n,10,0,t.firstCard.news),l(n,12,0,t.firstCard.placeholders),l(n,20,0,500,""),l(n,23,0,t.secondCard.news),l(n,25,0,t.secondCard.placeholders)},function(l,n){l(n,0,1,[e.Fb(n,1).disabled,e.Fb(n,1).tiny,e.Fb(n,1).small,e.Fb(n,1).medium,e.Fb(n,1).large,e.Fb(n,1).giant,e.Fb(n,1).primary,e.Fb(n,1).info,e.Fb(n,1).success,e.Fb(n,1).warning,e.Fb(n,1).danger,e.Fb(n,1).hasAccent,e.Fb(n,1).primaryAccent,e.Fb(n,1).infoAccent,e.Fb(n,1).successAccent,e.Fb(n,1).warningAccent,e.Fb(n,1).dangerAccent]),l(n,5,0,e.Fb(n,6).role),l(n,13,1,[e.Fb(n,14).disabled,e.Fb(n,14).tiny,e.Fb(n,14).small,e.Fb(n,14).medium,e.Fb(n,14).large,e.Fb(n,14).giant,e.Fb(n,14).primary,e.Fb(n,14).info,e.Fb(n,14).success,e.Fb(n,14).warning,e.Fb(n,14).danger,e.Fb(n,14).hasAccent,e.Fb(n,14).primaryAccent,e.Fb(n,14).infoAccent,e.Fb(n,14).successAccent,e.Fb(n,14).warningAccent,e.Fb(n,14).dangerAccent]),l(n,18,0,e.Fb(n,19).role)})}function H(l){return e.Pb(0,[(l()(),e.vb(0,0,null,null,2,"ng-component",[],null,null,null,G,$)),e.Kb(512,null,g,g,[z.c]),e.ub(2,49152,null,0,q,[g],null,null)],null,null)}var Y=e.rb("ng-component",q,H,{},{},[]),V=function(){function l(l){this.newsService=l,this.news=[],this.placeholders=[],this.pageSize=10,this.pageToLoadNext=1,this.loading=!1}return l.prototype.loadNext=function(){var l=this;this.loading||(this.loading=!0,this.placeholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(function(n){var t;l.placeholders=[],(t=l.news).push.apply(t,n),l.loading=!1,l.pageToLoadNext++}))},l}(),Q=e.tb({encapsulation:0,styles:[s],data:{}});function Z(l){return e.Pb(0,[(l()(),e.vb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.ub(1,49152,[[1,4]],0,a.b,[],null,null),(l()(),e.vb(2,0,null,0,1,"nb-news-post",[],null,null,null,F,m)),e.ub(3,49152,null,0,f,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Fb(n,1).role)})}function X(l){return e.Pb(0,[(l()(),e.vb(0,0,null,null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.ub(1,49152,[[1,4]],0,a.b,[],null,null),(l()(),e.vb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.ub(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Fb(n,1).role),l(n,2,0,e.Fb(n,3).label)})}function ll(l){return e.Pb(0,[(l()(),e.vb(0,0,null,null,9,"nb-card",[],[[1,"disabled",0],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,v.f,v.b)),e.ub(1,49152,null,0,w.b,[],null,null),(l()(),e.vb(2,0,null,2,7,"nb-list",[["listenWindowScroll",""],["nbInfiniteList",""]],[[1,"role",0]],[[null,"bottomThreshold"],[null,"scroll"]],function(l,n,t){var u=!0,o=l.component;return"scroll"===n&&(u=!1!==e.Fb(l,4).onElementScroll()&&u),"bottomThreshold"===n&&(u=!1!==o.loadNext()&&u),u},r.c,r.a)),e.ub(3,49152,null,0,a.a,[],null,null),e.ub(4,4341760,null,1,P.a,[e.k,S.a,O.a],{threshold:[0,"threshold"],listenWindowScroll:[1,"listenWindowScroll"]},{bottomThreshold:"bottomThreshold"}),e.Lb(603979776,1,{listItems:1}),(l()(),e.kb(16777216,null,0,1,null,Z)),e.ub(7,278528,null,0,x.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null),(l()(),e.kb(16777216,null,0,1,null,X)),e.ub(9,278528,null,0,x.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,4,0,500,""),l(n,7,0,t.news),l(n,9,0,t.placeholders)},function(l,n){l(n,0,1,[e.Fb(n,1).disabled,e.Fb(n,1).tiny,e.Fb(n,1).small,e.Fb(n,1).medium,e.Fb(n,1).large,e.Fb(n,1).giant,e.Fb(n,1).primary,e.Fb(n,1).info,e.Fb(n,1).success,e.Fb(n,1).warning,e.Fb(n,1).danger,e.Fb(n,1).hasAccent,e.Fb(n,1).primaryAccent,e.Fb(n,1).infoAccent,e.Fb(n,1).successAccent,e.Fb(n,1).warningAccent,e.Fb(n,1).dangerAccent]),l(n,2,0,e.Fb(n,3).role)})}function nl(l){return e.Pb(0,[(l()(),e.vb(0,0,null,null,2,"ng-component",[],null,null,null,ll,Q)),e.Kb(512,null,g,g,[z.c]),e.ub(2,49152,null,0,V,[g],null,null)],null,null)}var tl=e.rb("ng-component",V,nl,{},{},[]),el=t("1Ei1"),ul=t("VnD/"),ol=t("FA0J"),il=function(){function l(l,n,t,e,u,o){this.newsService=l,this.router=n,this.route=t,this.scrollService=e,this.platformId=u,this.window=o,this.news=[],this.placeholders=[],this.pageSize=10,this.loadingNext=!1,this.loadingPrevious=!1,Object(x.B)(this.platformId)&&this.window.history.scrollRestoration&&(this.initialScrollRestoration=o.history.scrollRestoration,history.scrollRestoration="manual")}return l.prototype.ngOnInit=function(){var l=this.route.snapshot.queryParams.page;this.startPage=l?Number.parseInt(l,10):1,this.pageToLoadNext=this.startPage},l.prototype.ngOnDestroy=function(){this.initialScrollRestoration&&(this.window.history.scrollRestoration=this.initialScrollRestoration)},l.prototype.updateUrl=function(l){this.router.navigate(["."],{queryParams:{page:l},replaceUrl:!0,relativeTo:this.route,queryParamsHandling:"merge"})},l.prototype.loadPrevious=function(){var l=this;this.loadingPrevious||1===this.startPage||(this.loadingPrevious=!0,this.newsService.load(this.startPage-1,this.pageSize).subscribe(function(n){var t;(t=l.news).unshift.apply(t,n),l.loadingPrevious=!1,l.restoreScrollPosition(),l.startPage--}))},l.prototype.loadNext=function(){var l=this;this.loadingNext||(this.loadingNext=!0,this.placeholders=new Array(this.pageSize),this.newsService.load(this.pageToLoadNext,this.pageSize).subscribe(function(n){var t;l.placeholders=[],(t=l.news).push.apply(t,n),l.loadingNext=!1,l.pageToLoadNext++}))},l.prototype.restoreScrollPosition=function(){var l=this,n=this.listItems.length>0?this.listItems.first.nativeElement:null;this.listItems.changes.pipe(Object(h.a)(function(){return l.listItems.first.nativeElement}),Object(ul.a)(function(l){return l!==n}),Object(N.a)(1)).subscribe(function(){for(var t=0,e=0,u=l.listItems.toArray();e<u.length;e++){var o=u[e].nativeElement;if(o===n)break;t+=Object(ol.b)(o)}l.scrollService.scrollTo(null,t)})},l}(),sl=e.tb({encapsulation:0,styles:[s],data:{}});function rl(l){return e.Pb(0,[(l()(),e.vb(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.ub(1,49152,[[3,4]],0,a.b,[],null,null),(l()(),e.vb(2,0,null,0,1,"nb-news-post",[],null,null,null,F,m)),e.ub(3,49152,null,0,f,[],{post:[0,"post"]},null)],function(l,n){l(n,3,0,n.context.$implicit)},function(l,n){l(n,0,0,e.Fb(n,1).role)})}function al(l){return e.Pb(0,[(l()(),e.vb(0,0,[[2,0],[1,0]],null,3,"nb-list-item",[],[[1,"role",0]],null,null,r.d,r.b)),e.ub(1,49152,[[3,4]],0,a.b,[],null,null),(l()(),e.vb(2,0,null,0,1,"nb-news-post-placeholder",[],[[1,"aria-label",0]],null,null,d,b)),e.ub(3,49152,null,0,c,[],null,null)],null,function(l,n){l(n,0,0,e.Fb(n,1).role),l(n,2,0,e.Fb(n,3).label)})}function cl(l){return e.Pb(0,[e.Lb(671088640,1,{listItems:1}),(l()(),e.vb(1,0,null,null,13,"nb-card",[],[[1,"disabled",0],[2,"size-tiny",null],[2,"size-small",null],[2,"size-medium",null],[2,"size-large",null],[2,"size-giant",null],[2,"status-primary",null],[2,"status-info",null],[2,"status-success",null],[2,"status-warning",null],[2,"status-danger",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null]],null,null,v.f,v.b)),e.ub(2,49152,null,0,w.b,[],null,null),(l()(),e.vb(3,16777216,null,2,1,"div",[],[[2,"nb-spinner-container",null]],null,null,null,null)),e.ub(4,81920,null,0,el.a,[e.S,e.j,e.F,e.k],{nbSpinner:[0,"nbSpinner"]},null),(l()(),e.vb(5,0,null,2,9,"nb-list",[["listenWindowScroll",""],["nbInfiniteList",""],["nbListPageTracker",""]],[[1,"role",0]],[[null,"topThreshold"],[null,"bottomThreshold"],[null,"pageChange"],[null,"scroll"]],function(l,n,t){var u=!0,o=l.component;return"scroll"===n&&(u=!1!==e.Fb(l,9).onElementScroll()&&u),"topThreshold"===n&&(u=!1!==o.loadPrevious()&&u),"bottomThreshold"===n&&(u=!1!==o.loadNext()&&u),"pageChange"===n&&(u=!1!==o.updateUrl(t)&&u),u},r.c,r.a)),e.ub(6,49152,null,0,a.a,[],null,null),e.ub(7,4341760,null,1,y.a,[],{pageSize:[0,"pageSize"],startPage:[1,"startPage"]},{pageChange:"pageChange"}),e.Lb(603979776,2,{listItems:1}),e.ub(9,4341760,null,1,P.a,[e.k,S.a,O.a],{threshold:[0,"threshold"],listenWindowScroll:[1,"listenWindowScroll"]},{bottomThreshold:"bottomThreshold",topThreshold:"topThreshold"}),e.Lb(603979776,3,{listItems:1}),(l()(),e.kb(16777216,null,0,1,null,rl)),e.ub(12,278528,null,0,x.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null),(l()(),e.kb(16777216,null,0,1,null,al)),e.ub(14,278528,null,0,x.m,[e.S,e.O,e.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var t=n.component;l(n,4,0,t.loadingPrevious),l(n,7,0,t.pageSize,t.startPage),l(n,9,0,500,""),l(n,12,0,t.news),l(n,14,0,t.placeholders)},function(l,n){l(n,1,1,[e.Fb(n,2).disabled,e.Fb(n,2).tiny,e.Fb(n,2).small,e.Fb(n,2).medium,e.Fb(n,2).large,e.Fb(n,2).giant,e.Fb(n,2).primary,e.Fb(n,2).info,e.Fb(n,2).success,e.Fb(n,2).warning,e.Fb(n,2).danger,e.Fb(n,2).hasAccent,e.Fb(n,2).primaryAccent,e.Fb(n,2).infoAccent,e.Fb(n,2).successAccent,e.Fb(n,2).warningAccent,e.Fb(n,2).dangerAccent]),l(n,3,0,e.Fb(n,4).isSpinnerExist),l(n,5,0,e.Fb(n,6).role)})}function bl(l){return e.Pb(0,[(l()(),e.vb(0,0,null,null,2,"ng-component",[],null,null,null,cl,sl)),e.Kb(512,null,g,g,[z.c]),e.ub(2,245760,null,0,il,[g,I.l,I.a,S.a,e.C,L.f],null,null)],function(l,n){l(n,2,0)},null)}var dl=e.rb("ng-component",il,bl,{},{},[]),hl=t("gIcY"),pl=t("n81q"),gl=t("i6JN"),fl=t("IVq4"),ml=t("NFr4"),Fl=t("0AKQ"),vl=t("YNTD"),wl=function(){return function(){}}();t.d(n,"InfiniteListModuleNgFactory",function(){return yl});var yl=e.sb(u,[],function(l){return e.Cb([e.Db(512,e.j,e.eb,[[8,[o.a,i.a,W,Y,tl,dl]],[3,e.j],e.y]),e.Db(4608,x.p,x.o,[e.v,[2,x.G]]),e.Db(4608,hl.z,hl.z,[]),e.Db(1073742336,x.c,x.c,[]),e.Db(1073742336,pl.a,pl.a,[]),e.Db(1073742336,hl.y,hl.y,[]),e.Db(1073742336,hl.i,hl.i,[]),e.Db(1073742336,I.p,I.p,[[2,I.u],[2,I.l]]),e.Db(1073742336,gl.a,gl.a,[]),e.Db(1073742336,fl.a,fl.a,[ml.a]),e.Db(1073742336,Fl.a,Fl.a,[]),e.Db(1073742336,vl.a,vl.a,[]),e.Db(1073742336,wl,wl,[]),e.Db(1073742336,u,u,[]),e.Db(1024,I.j,function(){return[[{path:"infinite-list-placeholders.component",component:k},{path:"infinite-list-scroll-modes.component",component:q},{path:"infinite-list-showcase.component",component:V},{path:"infinite-news-list.component",component:il}]]},[])])})}}]);