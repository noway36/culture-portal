(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{199:function(e,r,t){"use strict";t.r(r);var a=t(0),i=t.n(a),n=t(200),o=(t(315),function(e){var r=e.searchFio,t=Object(n.c)().t;return i.a.createElement("input",{className:"search-line",type:"search",placeholder:t("Search"),onChange:r})}),s=(t(234),t(229)),c=t(255),h=(t(316),t(317));var l=function(e){var r,t;function a(r){var t;return(t=e.call(this,r)||this).searchQuery=r.searchQuery,t.personsList=h.data,t}t=e,(r=a).prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t;var o=a.prototype;return o.componentWillReceiveProps=function(e){var r=this,t=c.a.language,a="fioRus",i="birthplaceRus";"ru"===t?(a="fioRus",i="birthplaceRus"):"en"===t?(a="fioEng",i="birthplaceEng"):"be"===t&&(a="fioBel",i="birthplaceBel"),this.searchQuery=e.searchQuery,this.personsList=h.data.filter(function(e){return e[a].toLowerCase().indexOf(r.searchQuery.toLowerCase())>-1||e.yearOfBirth===r.searchQuery||e[i].toLowerCase().indexOf(r.searchQuery.toLowerCase())>-1}),0===this.personsList.length&&(this.personsList=[{link:"/search",fioRus:"Ничего не найдено."}])},o.render=function(){return i.a.createElement("ul",{className:"photographers-list"},this.personsList.map(function(e){return i.a.createElement("li",{className:"photographer-link",key:e.link},i.a.createElement(s.a,{to:e.link},i.a.createElement(n.a,null,e.fioEng)))}))},a}(i.a.Component);l.defaultProps={searchQuery:""};var p=Object(n.d)()(l);var u=function(e){var r,t;function a(){var r;return(r=e.call(this)||this).state={searchQuery:""},r.searchFio=r.searchFio.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r)),r}t=e,(r=a).prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t;var n=a.prototype;return n.searchFio=function(e){e.preventDefault();var r=e.target.value;r!==this.state&&this.setState({searchQuery:r})},n.render=function(){var e=this.state.searchQuery;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o,{searchFio:this.searchFio}),i.a.createElement(p,{searchQuery:e}))},a}(i.a.Component),f=t(210),b=t(209);r.default=function(){var e=Object(n.c)().t;return i.a.createElement(f.a,null,i.a.createElement(b.a,{title:e("Search")}),i.a.createElement(u,null))}},317:function(e){e.exports={data:[{link:"/photographers/anempodistov",fioRus:"Анемподистов Михаил Владимирович",fioBel:"Анемпадыстаў Міхаіл Уладзіміравіч",fioEng:"Anempodistov Mikhail Vladimirovich",yearOfBirth:"1964",birthplaceRus:"Минск",birthplaceEng:"Minsk",birthplaceBel:"Мінск"},{link:"/photographers/parfenok",fioRus:"Парфенок Владимир Петрович",fioBel:"Парфенак Уладзімір Пятровіч",fioEng:"Parfenok Vladimir Petrovich",yearOfBirth:"1958",birthplaceRus:"Гродненская область",birthplaceEng:"Grodno region",birthplaceBel:"Гродзенская вобласць"},{link:"/photographers/savchenko",fioRus:"Савченко Игорь Викторович",fioBel:"Саўчанка Ігар Віктаравіч",fioEng:"Savchenko Igor Viktorovich",yearOfBirth:"1962",birthplaceRus:"Минск",birthplaceEng:"Minsk",birthplaceBel:"Мінск"},{link:"/photographers/kachan",fioRus:"Качан Вадим Аркадьевич",fioBel:"Качан Вадзім Аркадзьевіч",fioEng:"Kachan Vadim Arkadyevich",yearOfBirth:"1958",birthplaceRus:"Брестская область",birthplaceEng:"Brest region",birthplaceBel:"Брэсцкая вобласць"},{link:"/photographers/klinov",fioRus:"Клинов Артур Александрович",fioBel:"Клінаў Артур Аляксандравіч",fioEng:"Klinov Artur Aleksandrovich",yearOfBirth:"1965",birthplaceRus:"Минск",birthplaceEng:"Minsk",birthplaceBel:"Мінск"}]}}}]);
//# sourceMappingURL=component---src-pages-search-js-6227e005c0de4ec306d5.js.map