(this.webpackJsonptrybetunes=this.webpackJsonptrybetunes||[]).push([[0],{29:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(22),s=n.n(c),i=(n(29),n(14)),o=n(3),u=n(4),l=n(6),d=n(5),j=n(13),h=n(8),b=n(2),m=n.n(b),p=n(7),f=n(0),O=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.placeholder,a=e.testInput,r=e.testBtn,c=e.id,s=e.value,i=e.onChange,o=e.onClick,u=e.textBtn,l=e.icon,d=e.disabled;return Object(f.jsxs)("form",{className:t,children:[Object(f.jsxs)("label",{htmlFor:c,children:[Object(f.jsx)("input",{"data-testid":a,type:"text",placeholder:n,id:c,value:s,onChange:i}),l]}),Object(f.jsx)("button",{"data-testid":r,type:"submit",disabled:!d,onClick:o,children:u})]})}}]),n}(a.Component),v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)("p",{className:"loading",children:"Carregando..."})}}]),n}(a.Component),x="user",g=function(e){return localStorage.setItem(x,JSON.stringify(e))},k=function(e){return function(t){setTimeout((function(){t(e)}),1500)}},N=function(){return new Promise((function(e){var t=JSON.parse(localStorage.getItem(x));null===t&&(t={}),k(t)(e)}))},w=function(e){return new Promise((function(t){g(Object(i.a)(Object(i.a)({},{name:"",email:"",image:"",description:""}),e)),k("OK")(t)}))},S=function(e){return new Promise((function(t){g(Object(i.a)({},e)),k("OK")(t)}))},y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).submitButton=function(){var t=Object(p.a)(m.a.mark((function t(n){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.setState({loading:!0}),a=e.state.inputName,t.next=5,w({name:a});case 5:e.setState({redirect:!0});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var n=t.target.value;e.setState({inputName:n})},e.createForm=function(){var t=e.state.inputName,n=t.length>=3;return Object(f.jsx)(O,{placeholder:"Nome",testInput:"login-name-input",testBtn:"login-submit-button",id:"input_name",className:"form-login",value:t,onChange:e.handleChange,textBtn:"Entrar",disabled:n,onClick:e.submitButton})},e.state={inputName:"",loading:!1,redirect:!1},e}return Object(u.a)(n,[{key:"componentWillUnmount",value:function(){this.setState=function(){}}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.redirect;return Object(f.jsxs)("div",{"data-testid":"page-login",children:[t?Object(f.jsx)(v,{}):this.createForm(),n&&Object(f.jsx)(h.a,{to:"/search"})]})}}]),n}(a.Component),C=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).getUsername=Object(p.a)(m.a.mark((function t(){var n,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:n=t.sent,a=n.name,e.setState({loading:!1,username:a});case 5:case"end":return t.stop()}}),t)}))),e.showHeader=function(){var t=e.state.username;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"user",children:Object(f.jsxs)("div",{className:"user-logo",children:[Object(f.jsx)("i",{className:"fas fa-user"}),Object(f.jsx)("p",{"data-testid":"header-user-name",children:t})]})}),Object(f.jsxs)("div",{className:"nav",children:[Object(f.jsx)(j.b,{to:"/search",children:Object(f.jsx)("span",{"data-testid":"link-to-search",children:"Pesquisa"})}),Object(f.jsx)(j.b,{to:"/favorites",children:Object(f.jsx)("span",{"data-testid":"link-to-favorites",children:"Favoritas"})}),Object(f.jsx)(j.b,{to:"/profile",children:Object(f.jsx)("span",{"data-testid":"link-to-profile",children:"Perfil"})})]})]})},e.state={loading:!0,username:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getUsername()}},{key:"render",value:function(){var e=this.state.loading;return Object(f.jsx)("div",{children:Object(f.jsx)("header",{"data-testid":"header-component",children:e?Object(f.jsx)(v,{}):this.showHeader()})})}}]),n}(a.Component),I=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a,r,c,s,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURI(t).replaceAll("%20","+"),a="https://itunes.apple.com/search?entity=album&term=".concat(n,"&attribute=allArtistTerm"),e.next=4,fetch(a);case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,s=c.results,i=s.map((function(e){return{artistId:e.artistId,artistName:e.artistName,collectionId:e.collectionId,collectionName:e.collectionName,collectionPrice:e.collectionPrice,artworkUrl100:e.artworkUrl100,releaseDate:e.releaseDate,trackCount:e.trackCount}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=I,F=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).handleChange=function(t){var n=t.target.value;e.setState({inputSearch:n})},e.findAlbum=function(){var t=Object(p.a)(m.a.mark((function t(n){var a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=e.state.inputSearch,e.setState({inputSearch:"",loading:!0}),t.next=5,U(a);case 5:r=t.sent,e.setState({albumArtist:r,loading:!1,searchValue:a});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.showForm=function(){var t=e.state.inputSearch,n=t.length>=2;return Object(f.jsx)(O,{testInput:"search-artist-input",testBtn:"search-artist-button",id:"input_search",value:t,onChange:e.handleChange,textBtn:"Pesquisar",disabled:n,onClick:e.findAlbum,icon:Object(f.jsx)("i",{className:"fas fa-search"}),className:"formSearch",placeholder:"Nome do artista"})},e.showAlbumArtist=function(){var t=e.state,n=t.albumArtist,a=t.searchValue,r="Resultado de \xe1lbuns de: ".concat(a);return Object(f.jsxs)("section",{className:"albums",children:[Object(f.jsx)("p",{children:r}),n.map((function(e){return Object(f.jsx)(j.b,{"data-testid":"link-to-album-".concat(e.collectionId),to:"album/".concat(e.collectionId),children:Object(f.jsxs)("section",{className:"card_album",children:[Object(f.jsx)("img",{src:e.artworkUrl100,alt:"Imagem do album"}),Object(f.jsx)("h1",{children:e.collectionName}),Object(f.jsx)("h2",{children:e.artistName})]})},e.collectionId)}))]})},e.state={loading:!1,inputSearch:"",albumArtist:"",searchValue:""},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.loading,n=e.albumArtist,a=e.searchValue.length>0&&0===n.length;return Object(f.jsxs)("div",{"data-testid":"page-search",children:[Object(f.jsx)(C,{search:"search"}),t?Object(f.jsx)(v,{}):this.showForm(),n.length>0&&this.showAlbumArtist(),a&&Object(f.jsx)("span",{className:"notFoundAlbum",children:"Nenhum \xe1lbum foi encontrado"})]})}}]),n}(a.Component),A=n(18),P=function(){var e=Object(p.a)(m.a.mark((function e(t){var n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://itunes.apple.com/lookup?id=".concat(t,"&entity=song"));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a.results);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=P,D=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.preview,a=e.id,r=e.checked,c=e.onChange,s=e.thumb;return Object(f.jsxs)("div",{className:"music",children:[s&&Object(f.jsx)("img",{src:s,alt:"Album da m\xfasica"}),Object(f.jsx)("h2",{children:t}),Object(f.jsxs)("audio",{"data-testid":"audio-component",src:n,controls:!0,children:[Object(f.jsx)("track",{kind:"captions"}),"O seu navegador n\xe3o suporta o elemento",Object(f.jsx)("code",{children:"audio"})]}),Object(f.jsxs)("label",{htmlFor:a,children:["Favorita",Object(f.jsx)("input",{type:"checkbox","data-testid":"checkbox-music-".concat(a),id:a,name:t,checked:r,onChange:c})]}),Object(f.jsx)("hr",{})]})}}]),n}(a.Component),M="favorite_songs";JSON.parse(localStorage.getItem(M))||localStorage.setItem(M,JSON.stringify([]));var E=function(){return JSON.parse(localStorage.getItem(M))},J=function(e){return localStorage.setItem(M,JSON.stringify(e))},T=function(e){return function(t){setTimeout((function(){t(e)}),500)}},_=function(){return new Promise((function(e){var t=E();T(t)(e)}))},q=function(e){return new Promise((function(t){if(e){var n=E();J([].concat(Object(A.a)(n),[e]))}T("OK")(t)}))},K=function(e){return new Promise((function(t){var n=E();J(n.filter((function(t){return t.trackId!==e.trackId}))),T("OK")(t)}))},V=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).getFavoriteTracks=Object(p.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0}),t.next=3,_();case 3:n=t.sent,e.setState((function(){return{loading:!1,favoriteSongs:n}}));case 5:case"end":return t.stop()}}),t)}))),e.getMusicsAPI=Object(p.a)(m.a.mark((function t(){var n,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.props.match.params.id,t.next=3,B(n);case 3:(a=t.sent).forEach((function(e){e.checked=!1})),e.setState({musics:a});case 6:case"end":return t.stop()}}),t)}))),e.saveTrack=function(){var t=Object(p.a)(m.a.mark((function t(n){var a,r,c,s,i,o,u,l,d;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.target,r=a.name,c=a.checked,e.setState({loading:!0}),s=e.state,i=s.musics,o=s.favoriteSongs,u=i.findIndex((function(e){return e.trackName===r})),i[u].checked=!i[u].checked,l=i.find((function(e){return e.trackName===r})),!c){t.next=12;break}return t.next=9,q(l);case 9:e.setState((function(e){return{favoriteSongs:[].concat(Object(A.a)(e.favoriteSongs),[l])}})),t.next=16;break;case 12:return t.next=14,K(l);case 14:d=o.filter((function(e){return e.trackId!==l.trackId})),e.setState({favoriteSongs:d});case 16:e.setState({loading:!1});case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.showMusics=function(){var t=e.state,n=t.musics,a=t.loading,r=t.favoriteSongs,c=n[0].artworkUrl100,s=n[0].artistName,i=n[0].collectionName;return a?Object(f.jsx)(v,{}):Object(f.jsxs)("section",{className:"album_selected",children:[Object(f.jsxs)("div",{className:"data-album",children:[Object(f.jsx)("img",{src:c,alt:"Capa do album"}),Object(f.jsx)("h1",{"data-testid":"album-name",children:i}),Object(f.jsx)("h2",{"data-testid":"artist-name",children:s})]}),n.slice(1).map((function(t){var n=t.trackName,a=t.trackId,c=t.previewUrl;return Object(f.jsx)(D,{name:n,preview:c,id:a,onChange:e.saveTrack,checked:r.some((function(e){return e.trackId===a})),favorites:r},a)}))]})},e.state={musics:[],loading:!1,favoriteSongs:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.getMusicsAPI(),this.getFavoriteTracks();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.musics;return Object(f.jsxs)("div",{"data-testid":"page-album",children:[Object(f.jsx)(C,{}),0===e.length?Object(f.jsx)(v,{}):this.showMusics()]})}}]),n}(a.Component),W=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).getFavoriteSongsAPI=Object(p.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_();case 2:n=t.sent,e.setState({loading:!1,musics:n});case 4:case"end":return t.stop()}}),t)}))),e.removeFavorite=function(){var t=Object(p.a)(m.a.mark((function t(n){var a,r,c,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.target.id,e.setState({loading:!0}),r=e.state.musics,c=r.find((function(e){return e.trackId===Number(a)})),t.next=6,K(c);case 6:s=r.filter((function(e){return e.trackId!==Number(a)})),e.setState({loading:!1,musics:s});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={loading:!0,musics:[]},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getFavoriteSongsAPI()}},{key:"render",value:function(){var e=this,t=this.state,n=t.loading,a=t.musics;return Object(f.jsxs)("div",{"data-testid":"page-favorites",children:[Object(f.jsx)(C,{favorites:"favorites"}),n?Object(f.jsx)(v,{}):a.map((function(t){var n=t.trackName,a=t.trackId,r=t.previewUrl,c=t.checked,s=t.artworkUrl100;return Object(f.jsx)(D,{name:n,preview:r,id:a,checked:c,onChange:e.removeFavorite,thumb:s},a)}))]})}}]),n}(a.Component),H=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).getUserAPI=Object(p.a)(m.a.mark((function t(){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:n=t.sent,e.setState({loading:!1,user:n});case 4:case"end":return t.stop()}}),t)}))),e.state={loading:!0,user:{}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getUserAPI()}},{key:"componentWillUnmount",value:function(){this.setState=function(){}}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.user,a=n.name,r=n.email,c=n.image,s=n.description;return Object(f.jsxs)("div",{"data-testid":"page-profile",children:[Object(f.jsx)(C,{profile:"profile-link"}),t?Object(f.jsx)(v,{}):Object(f.jsxs)("section",{className:"profile",children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"image",children:c.length?Object(f.jsx)("img",{"data-testid":"profile-image",src:c,alt:a}):Object(f.jsx)("i",{className:"fas fa-user"})}),Object(f.jsx)(j.b,{to:"/profile/edit",children:"Editar perfil"})]}),Object(f.jsxs)("div",{className:"section",children:[Object(f.jsx)("h3",{children:"Nome"}),Object(f.jsx)("p",{children:a})]}),Object(f.jsxs)("div",{className:"section",children:[Object(f.jsx)("h3",{children:"E-mail"}),Object(f.jsx)("p",{children:r})]}),Object(f.jsxs)("div",{className:"section",children:[Object(f.jsx)("h3",{children:"Descri\xe7\xe3o"}),Object(f.jsx)("p",{children:s})]})]})]})}}]),n}(a.Component),R=n(17),z=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).getUserAPI=Object(p.a)(m.a.mark((function t(){var n,a,r,c,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N();case 2:n=t.sent,a=n.name,r=n.email,c=n.description,s=n.image,e.setState({loading:!1,nameUser:a,email:r,description:c,image:s});case 5:case"end":return t.stop()}}),t)}))),e.validationBtn=function(){var t=e.state,n=t.nameUser,a=t.email,r=t.description,c=t.image,s=[!n.length,!a.length,!r.length,!c.length].every((function(e){return!0!==e}));e.setState({disabledBtn:!s})},e.handleChange=function(t){var n=t.target,a=n.id,r=n.value;e.setState(Object(R.a)({},a,r),(function(){return e.validationBtn()}))},e.saveUser=function(){var t=Object(p.a)(m.a.mark((function t(n){var a,r,c,s,i;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.setState({loading:!0}),a=e.state,r=a.nameUser,c=a.email,s=a.image,i=a.description,t.next=5,S({name:r,email:c,image:s,description:i});case 5:e.props.history.push("/profile");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.createForm=function(){var t=e.state,n=t.nameUser,a=t.email,r=t.description,c=t.image,s=t.disabledBtn;return Object(f.jsxs)("form",{className:"form-edit-profile",children:[Object(f.jsxs)("label",{htmlFor:"image",children:[Object(f.jsx)("div",{className:"image",children:c.length?Object(f.jsx)("img",{"data-testid":"profile-image",src:c,alt:"Imagem de perfil"}):Object(f.jsx)("i",{className:"fas fa-user"})}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{value:c,id:"image",onChange:e.handleChange,"data-testid":"edit-input-image",placeholder:"Insira um link"})]}),Object(f.jsxs)("label",{htmlFor:"name",children:["Nome",Object(f.jsx)("br",{}),Object(f.jsx)("span",{children:"Fique a vontade para usar seu nome social"}),Object(f.jsx)("input",{value:n,id:"nameUser",onChange:e.handleChange,"data-testid":"edit-input-name",placeholder:"Digite seu nome"})]}),Object(f.jsxs)("label",{htmlFor:"email",children:["Email",Object(f.jsx)("br",{}),Object(f.jsx)("span",{children:"Escolha um e-mail que consulte diariamente"}),Object(f.jsx)("input",{type:"email",value:a,id:"email",onChange:e.handleChange,"data-testid":"edit-input-email",placeholder:"usuario@usuario.com.br"})]}),Object(f.jsxs)("label",{htmlFor:"description",children:["Descri\xe7\xe3o",Object(f.jsx)("textarea",{value:r,id:"description",onChange:e.handleChange,"data-testid":"edit-input-description",placeholder:"Sobre mim"})]}),Object(f.jsx)("button",{type:"submit","data-testid":"edit-button-save",disabled:s,onClick:e.saveUser,children:"Editar perfil"})]})},e.state={loading:!0,nameUser:"",email:"",description:"",image:"",disabledBtn:!0},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getUserAPI()}},{key:"componentWillUnmount",value:function(){this.setState=function(){}}},{key:"render",value:function(){var e=this.state.loading;return Object(f.jsxs)("div",{"data-testid":"page-profile-edit",children:[Object(f.jsx)(C,{}),e?Object(f.jsx)(v,{}):this.createForm()]})}}]),n}(a.Component),G=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{"data-testid":"page-not-found",children:"NotFound"})}}]),n}(a.Component),L=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)(j.a,{children:Object(f.jsxs)(h.d,{children:[Object(f.jsx)(h.b,{exact:!0,path:"/",component:y}),Object(f.jsx)(h.b,{exact:!0,path:"/search",component:F}),Object(f.jsx)(h.b,{exact:!0,path:"/album/:id",render:function(e){return Object(f.jsx)(V,Object(i.a)({},e))}}),Object(f.jsx)(h.b,{exact:!0,path:"/favorites",component:W}),Object(f.jsx)(h.b,{exact:!0,path:"/profile",component:H}),Object(f.jsx)(h.b,{exact:!0,path:"/profile/edit",render:function(e){return Object(f.jsx)(z,Object(i.a)({},e))}}),Object(f.jsx)(h.b,{exact:!0,path:"*",component:G})]})})}}]),n}(r.a.Component),Q=L;s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(Q,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.ed7c82c9.chunk.js.map