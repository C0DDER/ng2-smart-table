!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{CHVS:function(e,n,t){"use strict";t.r(n),n.default='// ...\n\n@Component({\n  template: `\n    <ng2-smart-table [settings]="settings"></ng2-smart-table>\n  `\n})\n// ...'},PeCp:function(e,n,t){"use strict";t.r(n),n.default="import { Ng2SmartTableModule } from 'ng2-smart-table';"},YhRS:function(e,n,t){"use strict";t.r(n),n.default="// ...\n\n@NgModule({\n  imports: [\n    // ...\n    \n    Ng2SmartTableModule,\n    \n    // ...\n  ],\n  declarations: [ ... ]\n})\n// ..."},aRP8:function(e,n,t){"use strict";t.r(n),n.default='data = [\n  {\n    id: 1,\n    name: "Leanne Graham",\n    username: "Bret",\n    email: "Sincere@april.biz"\n  },\n  {\n    id: 2,\n    name: "Ervin Howell",\n    username: "Antonette",\n    email: "Shanna@melissa.tv"\n  },\n  \n  // ... list of items\n  \n  {\n    id: 11,\n    name: "Nicholas DuBuque",\n    username: "Nicholas.Stanton",\n    email: "Rey.Padberg@rosamond.biz"\n  }\n];'},cHIK:function(e,n,t){"use strict";t.r(n),n.default="settings = {\n  columns: {\n    id: {\n      title: 'ID'\n    },\n    name: {\n      title: 'Full Name'\n    },\n    username: {\n      title: 'User Name'\n    },\n    email: {\n      title: 'Email'\n    }\n  }\n};"},j1Yg:function(e,n,t){"use strict";t.r(n),n.default='// ...\n\n@Component({\n  template: `\n    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>\n  `\n})\n// ...'},"m+vt":function(n,t,a){"use strict";a.r(t),a.d(t,"DemoModule",(function(){return f}));var i,o,s=a("2kYt"),c=a("sEIs"),r=a("PCNd"),m=a("EM62"),l=a("aZ8m"),b=a("FT7q"),u=a("UjQs"),d=a("ObOt"),p=function(){return["/documentation"]},h=[{path:"",component:(i=function n(){e(this,n),this.snippets={install:a("vxW1").default,require:a("PeCp").default,directive:a("YhRS").default,settings:a("cHIK").default,template:a("CHVS").default,array:a("aRP8").default,dataTemplate:a("j1Yg").default,basicFull:a("x09U").default}},i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=m.Cb({type:i,selectors:[["demo"]],decls:107,vars:12,consts:[["tagline","Quick Start & Demo"],[1,"main-content"],["id","getting-started","href","#getting-started","aria-hidden","true",1,"anchor"],["aria-hidden","true",1,"octicon","octicon-link"],["id","installation","href","#installation","aria-hidden","true",1,"anchor"],["highlight","",1,"bash"],["id","examples","href","#examples","aria-hidden","true",1,"anchor"],["id","minimal-setup","href","#minimal-setup","aria-hidden","true",1,"anchor"],["highlight","",1,"typescript"],[3,"routerLink"],[1,"with-source"],["href","https://github.com/akveo/ng2-smart-table/blob/master/src/app/pages/shared/components/basic-example/basic-example-data.component.ts","target","_blank",1,"source"]],template:function(e,n){1&e&&(m.Jb(0,"header-component",0),m.Nb(1,"section",1),m.Nb(2,"h2"),m.Nb(3,"a",2),m.Jb(4,"span",3),m.Mb(),m.mc(5,"Getting Started"),m.Mb(),m.Nb(6,"p"),m.mc(7," Hello and Welcome! "),m.Mb(),m.Nb(8,"h3"),m.Nb(9,"a",4),m.Jb(10,"span",3),m.Mb(),m.mc(11,"Installation"),m.Mb(),m.Nb(12,"p"),m.mc(13," The library is available as npm package, so all you need to do is to run the following command: "),m.Mb(),m.Nb(14,"pre"),m.mc(15,"    "),m.Nb(16,"code",5),m.mc(17),m.Mb(),m.mc(18,"\n  "),m.Mb(),m.Nb(19,"p"),m.mc(20,"This command will create a record in your `package.json` file and install the package into the npm modules folder."),m.Mb(),m.Nb(21,"h2"),m.Nb(22,"a",6),m.Jb(23,"span",3),m.Mb(),m.mc(24,"Examples"),m.Mb(),m.Nb(25,"h3"),m.Nb(26,"a",7),m.Jb(27,"span",3),m.Mb(),m.mc(28,"Minimal Setup Example"),m.Mb(),m.Nb(29,"p"),m.mc(30," First thing you need to do is to import the ng2-smart-table directives into your component. "),m.Mb(),m.Nb(31,"pre"),m.mc(32,"    "),m.Nb(33,"code",8),m.mc(34),m.Mb(),m.mc(35,"\n  "),m.Mb(),m.Nb(36,"p"),m.mc(37," Then register it by adding to the list of directives of your module: "),m.Mb(),m.Nb(38,"pre"),m.mc(39,"    "),m.Nb(40,"code",8),m.mc(41),m.Mb(),m.mc(42,"\n  "),m.Mb(),m.Nb(43,"p"),m.mc(44," Now, we need to configure the table and add it into the template. The only "),m.Nb(45,"strong"),m.mc(46,"required"),m.Mb(),m.mc(47," setting for the component to start working is a columns configuration."),m.Jb(48,"br"),m.mc(49," Let's register "),m.Nb(50,"i"),m.mc(51,"settings"),m.Mb(),m.mc(52," property inside of the component where we want to have the table and configure some columns ("),m.Nb(53,"a",9),m.mc(54,"Settings documentation"),m.Mb(),m.mc(55,"): "),m.Mb(),m.Nb(56,"pre"),m.mc(57,"    "),m.Nb(58,"code",8),m.mc(59),m.Mb(),m.mc(60,"\n  "),m.Mb(),m.Nb(61,"p"),m.mc(62," Finally let's put the ng2-smart-table component inside of the template: "),m.Mb(),m.Nb(63,"pre"),m.mc(64,"    "),m.Nb(65,"code",8),m.mc(66),m.Mb(),m.mc(67,"\n  "),m.Mb(),m.Nb(68,"p"),m.mc(69," At this step you will have a minimally configured table which should look something like this: "),m.Mb(),m.Nb(70,"div"),m.Jb(71,"basic-example"),m.Mb(),m.Nb(72,"p"),m.mc(73," All functions are available by default and you don't need to configure them somehow, so you already able to add/edit/delete rows, sort or filter the table, etc. "),m.Mb(),m.Nb(74,"p"),m.mc(75," But it feels like something is missing... Right, there is no data in the table by default. To add some, let's create an array property with a list of objects in the component. Please note that object keys are same as in the columns configuration. "),m.Mb(),m.Nb(76,"pre"),m.mc(77,"    "),m.Nb(78,"code",8),m.mc(79),m.Mb(),m.mc(80,"\n  "),m.Mb(),m.Nb(81,"p"),m.mc(82,"And pass the data to the table:"),m.Mb(),m.Nb(83,"pre"),m.mc(84,"    "),m.Nb(85,"code",8),m.mc(86),m.Mb(),m.mc(87,"\n  "),m.Mb(),m.Nb(88,"p"),m.mc(89,"Now you have some data in the table:"),m.Mb(),m.Nb(90,"div"),m.Jb(91,"basic-example-data"),m.Mb(),m.Nb(92,"p"),m.mc(93," That's it for a minimal setup, our final component should look like this, pretty simple, huh? "),m.Mb(),m.Nb(94,"pre",10),m.mc(95,"    "),m.Nb(96,"a",11),m.mc(97,"Demo Source"),m.Mb(),m.mc(98,"\n    "),m.Nb(99,"code",8),m.mc(100),m.Mb(),m.mc(101,"\n  "),m.Mb(),m.Nb(102,"p"),m.mc(103,"Full component documentation you can find "),m.Nb(104,"a",9),m.mc(105,"here"),m.Mb(),m.mc(106,"."),m.Mb(),m.Mb()),2&e&&(m.xb(17),m.nc(n.snippets.install),m.xb(17),m.nc(n.snippets.require),m.xb(7),m.nc(n.snippets.directive),m.xb(12),m.Xb("routerLink",m.Zb(10,p)),m.xb(6),m.nc(n.snippets.settings),m.xb(7),m.nc(n.snippets.template),m.xb(13),m.nc(n.snippets.array),m.xb(7),m.nc(n.snippets.dataTemplate),m.xb(14),m.nc(n.snippets.basicFull),m.xb(4),m.Xb("routerLink",m.Zb(11,p)))},directives:[l.a,b.a,c.b,u.a,d.a],encapsulation:2}),i)}],f=((o=function n(){e(this,n)}).\u0275mod=m.Gb({type:o}),o.\u0275inj=m.Fb({factory:function(e){return new(e||o)},imports:[[s.b,c.c.forChild(h),r.a]]}),o)},vxW1:function(e,n,t){"use strict";t.r(n),n.default="npm install --save ng2-smart-table"},x09U:function(e,n,t){"use strict";t.r(n),n.default='import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'basic-example-data\',\n  styles: [],\n  template: `\n    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>\n  `\n})\nexport class BasicExampleDataComponent {\n\n  settings = {\n    columns: {\n      id: {\n        title: \'ID\'\n      },\n      name: {\n        title: \'Full Name\'\n      },\n      username: {\n        title: \'User Name\'\n      },\n      email: {\n        title: \'Email\'\n      }\n    }\n  };\n  \n  data = [\n    {\n      id: 1,\n      name: "Leanne Graham",\n      username: "Bret",\n      email: "Sincere@april.biz"\n    },\n    // ... other rows here\n    {\n      id: 11,\n      name: "Nicholas DuBuque",\n      username: "Nicholas.Stanton",\n      email: "Rey.Padberg@rosamond.biz"\n    }\n  ];\n}\n'}}])}();