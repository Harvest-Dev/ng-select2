import{a as $}from"./chunk-JU7XZHPP.js";import"./chunk-4FOF4764.js";import{a as q,c as H,d as K,e as Q,g as X,o as Y,w as Z}from"./chunk-UCOFRL62.js";import"./chunk-6BM7Z6DR.js";import{b as F,c as b,e as N,f as L,i as T,j,k as O,l as k,m as D,n as J,p as R,q as G,s as P,t as A,u as W,x as z,y as U}from"./chunk-TFLA3MJ3.js";import{Eb as i,Fb as a,Gb as x,Gc as V,Ib as w,Kb as v,Tb as E,Ua as t,Ub as n,Va as _,Vb as r,Wb as S,Yb as M,Zb as g,_b as B,fb as I,gc as l,hc as o,jb as C,ka as m,la as u,wb as c}from"./chunk-NMNW4KSO.js";import"./chunk-EQDQRRRY.js";var de=(()=>{class y extends ${constructor(h){super(),this.fb=h,this.data5=K,this.data6=Q,this.data7=JSON.parse(JSON.stringify(H)),this.data9=JSON.parse(JSON.stringify(q)),this.data18=X,this.data28=Y,this.value5=0,this.value6="foo3",this.value7="",this.value9=[],this.value18="",this.value28="",this.minCountForSearch=1/0,this.limitSelection=0,this.ctrlForm2=this.fb.group({test5:new T(0,b.required)})}addItem(){let h=this.data6.length+1;this.data6.push({value:"foo"+h,label:"foo"+h})}removeItem(){this.data6.pop()}static{this.\u0275fac=function(f){return new(f||y)(_(P))}}static{this.\u0275cmp=I({type:y,selectors:[["examples-limits"]],features:[C],decls:97,vars:90,consts:[["limit",""],["status",""],[1,"container"],[1,"row"],["id","ex-5",1,"col-12"],[1,"col-6",3,"formGroup"],["formControlName","test5","id","select2-5",3,"update","overlay","styleMode","data","minCountForSearch"],[1,"col-12","value"],["id","ex-6",1,"col-12"],["size","3","value","7"],[1,"col-12"],["selected",""],["type","button",3,"click"],["id","select2-6",1,"col-6",3,"update","overlay","styleMode","data","value","minCountForSearch","displaySearchStatus"],["id","ex-9",1,"col-12"],["type","number","size","3",3,"ngModelChange","ngModel"],["multiple","true","customSearchEnabled","","id","select2-9",1,"col-6",3,"overlay","data","value","limitSelection"],["id","ex-28",1,"col-12"],["listPosition","auto","id","select2-28","maxResults","50",1,"col-6",3,"update","overlay","styleMode","data","value","maxResultsMessage"],["id","ex-18",1,"col-12"],["minCharForSearch","3","id","select2-18",1,"col-6",3,"update","overlay","data","value"]],template:function(f,e){if(f&1){let d=w();i(0,"h2"),n(1),l(2,"transloco"),a(),i(3,"div",2)(4,"div",3)(5,"h3",4),n(6),l(7,"transloco"),i(8,"code"),n(9,"infinity"),a(),n(10),a(),i(11,"form",5)(12,"select2",6),v("update",function(p){return m(d),u(e.update("value5",p))}),a()(),i(13,"div",7)(14,"div")(15,"span"),n(16),l(17,"transloco"),a(),i(18,"code"),n(19),l(20,"json"),a()()(),i(21,"h3",8),n(22),l(23,"transloco"),x(24,"input",9,0),n(26),l(27,"transloco"),a(),i(28,"div",10)(29,"select",null,1)(31,"option",11),n(32,"default"),a(),i(33,"option"),n(34,"hidden"),a(),i(35,"option"),n(36,"always"),a()(),n(37," - "),i(38,"button",12),v("click",function(){return m(d),u(e.addItem())}),n(39),l(40,"transloco"),a(),i(41,"button",12),v("click",function(){return m(d),u(e.removeItem())}),n(42),l(43,"transloco"),a()(),i(44,"select2",13),v("update",function(p){return m(d),u(e.update("value6",p))}),a(),i(45,"div",7)(46,"div")(47,"span"),n(48),l(49,"transloco"),a(),i(50,"code"),n(51),l(52,"json"),a()()(),i(53,"h3",14),n(54),l(55,"transloco"),a(),i(56,"div")(57,"label"),n(58),l(59,"transloco"),i(60,"input",15),B("ngModelChange",function(p){return m(d),g(e.limitSelection,p)||(e.limitSelection=p),u(p)}),a()(),n(61),l(62,"transloco"),a(),x(63,"select2",16),i(64,"div",7)(65,"div")(66,"span"),n(67),l(68,"transloco"),a(),i(69,"code"),n(70),l(71,"json"),a()()(),i(72,"h3",17),n(73),l(74,"transloco"),a(),i(75,"select2",18),l(76,"transloco"),v("update",function(p){return m(d),u(e.update("value28",p))}),a(),i(77,"div",7)(78,"div")(79,"span"),n(80),l(81,"transloco"),a(),i(82,"code"),n(83),l(84,"json"),a()()(),i(85,"h3",19),n(86),l(87,"transloco"),a(),i(88,"select2",20),v("update",function(p){return m(d),u(e.update("value18",p))}),a(),i(89,"div",7)(90,"div")(91,"span"),n(92),l(93,"transloco"),a(),i(94,"code"),n(95),l(96,"json"),a()()()()()}if(f&2){let d=E(25),s=E(30);t(),r(o(2,46,"Limits")),t(5),S(" ",o(7,48,"Search box always show")," (minCountForSearch = "),t(4),S(") (",e.value5,") "),t(),c("formGroup",e.ctrlForm2),t(),c("overlay",e.overlay)("styleMode",e.styleMode)("data",e.data5)("minCountForSearch",e.minCountForSearch),t(4),r(o(17,50,"value:")),t(3),r(o(20,52,e.value5)),t(3),S(" ",o(23,54,"Search box limit to "),""),t(4),S("",o(27,56," / display status")," "),t(13),r(o(40,58,"Add item")),t(3),r(o(43,60,"Remove item")),t(2),c("overlay",e.overlay)("styleMode",e.styleMode)("data",e.data6)("value",e.value6)("minCountForSearch",d.value)("displaySearchStatus",s.value),t(4),r(o(49,62,"value:")),t(3),r(o(52,64,e.value6)),t(3),r(o(55,66,"Multiple with limited selection")),t(4),S("",o(59,68,"Limit:")," "),t(2),M("ngModel",e.limitSelection),t(),S(" ",o(62,70,"(0 = no limit)")," "),t(2),c("overlay",e.overlay)("data",e.data9)("value",e.value9)("limitSelection",e.limitSelection),t(4),r(o(68,72,"value:")),t(3),r(o(71,74,e.value9)),t(3),r(o(74,76,"Max results (50)")),t(2),c("overlay",e.overlay)("styleMode",e.styleMode)("data",e.data28)("value",e.value28)("maxResultsMessage",o(76,78,"Too much results in this list.")),t(5),r(o(81,80,"value:")),t(3),r(o(84,82,e.value28)),t(3),r(o(87,84,"Search starts with 3 chars")),t(2),c("overlay",e.overlay)("data",e.data18)("value",e.value18),t(4),r(o(93,86,"value:")),t(3),r(o(96,88,e.value18))}},dependencies:[A,O,R,G,F,k,N,L,j,W,D,J,Z,U,z,V],encapsulation:2})}}return y})();export{de as ExamplesLimitsComponent};