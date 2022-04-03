"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[190],{8685:function(e,t,n){n.d(t,{Z:function(){return a}});n(2791);var r="title_title__Df17l",i=n(184),a=function(e){var t=e.title;return(0,i.jsx)("h2",{className:r,children:t})}},7144:function(e,t,n){n.d(t,{Gc:function(){return l},TP:function(){return s},Wf:function(){return u},jr:function(){return m},Hg:function(){return o}});var r=n(4569),i="b0de889e3f741ea781569353e4581a9b",a=function(e){return e.data.results.map((function(e){return{title:e.title,id:e.id}}))},c=n.n(r)().create({baseURL:"https://api.themoviedb.org/3"}),o=function(){return c.get("/trending/movie/week?api_key=".concat(i,"&limit=20")).then(a)},u=function(e){return c.get("/search/movie?api_key=".concat(i,"&limit=20&query=").concat(e)).then(a)},s=function(e){return c.get("/movie/".concat(e,"?api_key=").concat(i)).then((function(e){return e.data})).then((function(e){return{title:e.title,poster_path:e.poster_path,vote_average:e.vote_average,overview:e.overview,genres:e.genres}}))},l=function(e){return c.get("/movie/".concat(e,"/credits?api_key=").concat(i)).then((function(e){return e.data.cast.map((function(e){return{id:e.id,profile_path:e.profile_path,original_name:e.original_name,character:e.character}}))}))},m=function(e){return c.get("movie/".concat(e,"/reviews?api_key=").concat(i)).then((function(e){return e.data.results.map((function(e){return{id:e.id,author:e.author,content:e.content}}))}))}},5483:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var r=n(8152),i=n(8730),a=n(2791),c=n(6871),o=n(7144),u=n(8685),s="movieDetails_section__8wAXH",l="movieDetails_image__cWvno",m="movieDetails_desc__mlEXE",f="movieDetails_genresList__qR9iQ",h="movieDetails_genresItem__WEnH9",v=n(184),_=function(e){var t=e.movie,n=t.title,r=t.poster_path,i=t.vote_average,a=t.overview,c=t.genres;return(0,v.jsxs)("section",{className:s,children:[(0,v.jsx)("img",{className:l,src:"https://image.tmdb.org/t/p/w500".concat(r),alt:"poster"}),(0,v.jsxs)("div",{className:m,children:[(0,v.jsx)(u.Z,{title:n}),(0,v.jsxs)("p",{children:["User score: ",i]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:a}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("ul",{className:f,children:c.map((function(e){var t=e.id,n=e.name;return(0,v.jsx)("li",{className:h,children:n},t)}))})]})]})},p=n(6207),d=[{path:"cast",name:"Cast",component:(0,a.lazy)((function(){return n.e(661).then(n.bind(n,3804))}))},{path:"reviews",name:"Reviews",component:(0,a.lazy)((function(){return n.e(145).then(n.bind(n,2403))}))}],g=function(){var e=(0,c.UO)().movieId;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p.Z,{routes:d.map((function(t){var n=t.path,r=t.name;return{path:"/movies/".concat(e,"/").concat(n),name:r}}))}),(0,v.jsx)(c.Z5,{children:d.map((function(e){var t=e.path,n=e.component;return(0,v.jsx)(c.AW,{path:t,element:(0,v.jsx)(n,{})},t)}))})]})},j=n(3709),x="goBackButtton_button__juaxl",w=function(){var e=(0,c.s0)(),t=(0,a.useContext)(j.f).query;return(0,v.jsx)("button",{className:x,type:"button",onClick:function(){return e(t?"/movies":"/")},children:"Go back"})},b=function(){var e=(0,c.UO)().movieId,t=(0,a.useState)(null),n=(0,r.Z)(t,2),u=n[0],s=n[1];return(0,a.useEffect)((function(){var t=!1;return(0,o.TP)(e).then((function(e){return!t&&s(e)})).catch((function(){return i.Notify.failure("Something went wrong!")})),function(){t=!0}}),[e]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w,{}),u&&(0,v.jsx)(_,{movie:u}),(0,v.jsx)(g,{movieId:e})]})}}}]);
//# sourceMappingURL=MovieDetailsView.1454bd13.chunk.js.map