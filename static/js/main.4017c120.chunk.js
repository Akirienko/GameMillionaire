(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,a,n){e.exports={header:"Burger_header__1rfT8",overlay:"Burger_overlay__1sAdN",overlayOpen:"Burger_overlayOpen__uTPap",overlayHidden:"Burger_overlayHidden__2Ji5f",drawer:"Burger_drawer__2pwlh",hidden:"Burger_hidden__1ag7p",animate:"Burger_animate__2C5e3",left:"Burger_left__3azDa",right:"Burger_right__3dnld"}},,,,function(e){e.exports=JSON.parse('{"questions":[{"question":"How old your elder brother was 10 years before you was born, mate?","answer":"a","answers":[{"name":"Harry Potter","value":"a"},{"name":"Ciri","value":"b"},{"name":"The White Wolf","value":"c"},{"name":"Redux form must die!","value":"d"}],"level":1,"rightAnswer":500,"wrongAnswer":["rightAnswer A, sorry you lose"]},{"question":"Name these fruits in alphabetical order?","answer":"b","level":2,"answers":[{"name":"orange","value":"a"},{"name":"apple","value":"b"},{"name":"banana","value":"c"},{"name":"peach","value":"d"}],"rightAnswer":1000,"wrongAnswer":["rightAnswer A, sorry you lose"]},{"question":"What is the national symbol of Canada?","answer":"b","level":3,"answers":[{"name":"The bald eagle","value":"a"},{"name":"The rose","value":"b"},{"name":"The magnolia tree ","value":"c"},{"name":"Redux form must die!","value":"d"}],"rightAnswer":2000,"wrongAnswer":["rightAnswer A, sorry you lose"]},{"question":"Where can you see pelicans?","answer":"d","level":4,"answers":[{"name":"Hyde park","value":"a"},{"name":"St, James park","value":"b"},{"name":"Central park ","value":"c"},{"name":"Regent\u2019s park","value":"d"}],"rightAnswer":4000,"wrongAnswer":["rightAnswer A, sorry you lose"]},{"question":" Who is the head of England?","answer":"a","level":5,"answers":[{"name":"the Queen","value":"a"},{"name":"the Tsar","value":"b"},{"name":"the Princess","value":"c"},{"name":"the Prince","value":"d"}],"rightAnswer":8000,"wrongAnswer":["rightAnswer A, sorry you lose"]},{"question":"What is the largest city in Australia?","answer":"b","level":6,"answers":[{"name":"Canberra","value":"a"},{"name":"Sydney","value":"b"},{"name":"Melbourne","value":"c"},{"name":"Brisbane","value":"d"}],"rightAnswer":16000,"wrongAnswer":["rightAnswer A, your win 8000$"]},{"question":"Day of Spring and Labour: ","answer":"d","level":7,"answers":[{"name":"12 June","value":"a"},{"name":" 9 May","value":"b"},{"name":" 4 November","value":"c"},{"name":" 1 May","value":"d"}],"rightAnswer":32000,"wrongAnswer":["rightAnswer A, your win 8000$"]},{"question":"Yuri Dolgoruky founds Moscow in: ","answer":"c","level":8,"answers":[{"name":"1917","value":"a"},{"name":"1861","value":"b"},{"name":"1147","value":"c"},{"name":"1991","value":"d"}],"rightAnswer":64000,"wrongAnswer":["rightAnswer A, your win 8000$"]},{"question":"The national currency of the UK is: ","answer":"d","level":9,"answers":[{"name":"the euro","value":"a"},{"name":"the rouble","value":"b"},{"name":"the dollar","value":"c"},{"name":"the pound","value":"d"}],"rightAnswer":125000,"wrongAnswer":["rightAnswer A, your win 8000$"]},{"question":"Napoleon tries to conquer Russia.","answer":"a","level":10,"answers":[{"name":"1812","value":"a"},{"name":"1861","value":"b"},{"name":"1703","value":"c"},{"name":"1917","value":"d"}],"rightAnswer":250000,"wrongAnswer":["rightAnswer A, your win 125000$"]},{"question":"Which is the hottest month of Australia?","answer":"d","level":11,"answers":[{"name":"August","value":"a"},{"name":"September","value":"b"},{"name":"April","value":"c"},{"name":"January","value":"d"}],"rightAnswer":500000,"wrongAnswer":["rightAnswer A, sorry you lose"]},{"question":"Ben Nevis is: ","answer":"c","level":12,"answers":[{"name":"a famous sportsman","value":"a"},{"name":"a sort of whiskey","value":"b"},{"name":"a mountain","value":"c"},{"name":"a lake","value":"d"}],"rightAnswer":1000000,"wrongAnswer":["rightAnswer A, sorry you lose"]}]}')},,,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),r=n(1),s=n.n(r),l=n(6),i=n.n(l),c=(n(13),Object(r.createContext)({})),o=n(4),u=n(2),d=n(7),v="SET_LEVEL_ACTION_TYPE",m="GAME_START",h="GAME_OVER",b={data:d,level:1,total:500,gameOver:!1,gameStart:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case v:return Object(u.a)(Object(u.a)({},e),{},{total:a.payload,level:e.level+1});case m:return Object(u.a)(Object(u.a)({},e),{},{level:1,total:500,gameStart:!0});case h:return Object(u.a)(Object(u.a)({},e),{},{level:1,gameStart:!1,gameOver:!0});default:return e}},g=function(){var e=Object(r.useReducer)(j,b),a=Object(o.a)(e,2),n=a[0],t=a[1],s=Object(r.useCallback)((function(){return t({type:m})}),[t]),l=Object(r.useCallback)((function(){return t({type:h})}),[t]);return{state:n,setLevelAction:Object(r.useCallback)((function(e){return t(function(e){return{type:v,payload:e}}(e))}),[t]),gameStartAction:s,gameStopAction:l}},w=function(e){var a=e.children,n=g();return Object(t.jsx)(c.Provider,{value:n,children:a})},O=function(e){return new Intl.NumberFormat("en-US",{currency:"USD",style:"currency"}).format(e).split(".00")},f=function(e){var a=e.data,n=void 0===a?[]:a,r=e.level;return Object(t.jsx)("div",{className:"coints",children:n.map((function(e){var a=e.rightAnswer,n=e.question,s=e.level;return Object(t.jsx)("div",{className:"coint ".concat(s===r?"coint-active":""),children:Object(t.jsx)("p",{children:O(a)})},n.trim())})).reverse()})},A=Object(r.memo)(f),p=function(){var e=Object(r.useContext)(c),a=e.state,n=e.gameStartAction,t=e.setLevelAction,s=e.gameStopAction;return Object(u.a)({total:null===a||void 0===a?void 0:a.total,level:null===a||void 0===a?void 0:a.level,gameOver:null===a||void 0===a?void 0:a.gameOver,gameStart:null===a||void 0===a?void 0:a.gameStart,data:null===a||void 0===a?void 0:a.data,gameStartAction:n,setLevelAction:t,gameStopAction:s},a)},y=function(e){var a=e.question,n=void 0===a?"":a,s=e.answers,l=void 0===s?[]:s,i=e.answer,c=void 0===i?"":i,o=e.total,u=void 0===o?0:o,d=p(),v=d.setLevelAction,m=d.gameStopAction,h=Object(r.useCallback)((function(e){e===c?"undefined"!==typeof v&&v(u):"undefined"!==typeof m&&m()}),[c,m,v,u]);return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("h1",{className:"gaming__title",children:n}),Object(t.jsx)("div",{className:"answer",children:l.map((function(e){var a=e.name,n=e.value;return Object(t.jsxs)("button",{className:"choise__answer",onClick:function(){return h(n)},children:[Object(t.jsx)("span",{className:"answer-span",children:n.toUpperCase()}),a]},a)}))})]})},x=Object(r.memo)(y),_=(n(14),function(e){var a=window.matchMedia(e).matches,n=Object(r.useState)(a),t=Object(o.a)(n,2),s=t[0],l=t[1];return Object(r.useEffect)((function(){var a=window.matchMedia(e);l(a.matches);var n=function(){return l(a.matches)};return a.addListener(n),function(){return a.removeListener(n)}}),[e]),s}),N=n(3),S=n.n(N),C=function(e,a){switch(e){case"left":return a.left;case"right":return a.right;default:return a.left}},k=function(e){var a=e.open,n=e.anchor,r=e.onClose,s=e.children,l=S.a.drawer,i=S.a.animate,c=S.a.hidden,o=S.a.overlay,u=S.a.overlayOpen,d=S.a.overlayHidden,v=S.a.header;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"".concat(o," ").concat(!a&&d," ").concat(a&&u),onClick:r,"aria-hidden":"true"}),Object(t.jsx)("div",{className:"".concat(l," ").concat(a&&i," ").concat(!a&&c," ").concat(C(n,S.a)),children:Object(t.jsxs)("div",{className:v,children:[Object(t.jsxs)("button",{className:"burger",onClick:r,children:[Object(t.jsx)("div",{className:"line close-line1"}),Object(t.jsx)("div",{className:"line close-line2"}),Object(t.jsx)("div",{className:"line close-line3"})]}),s]})})]})},q=function(e){var a=e.data,n=void 0===a?[]:a,s=e.level,l=n.find((function(e){return e.level===s})),i=_("(max-width: 820px)"),c=Object(r.useState)(!1),u=Object(o.a)(c,2),d=u[0],v=u[1],m=Object(r.useCallback)((function(){return v(!0)}),[]),h=Object(r.useCallback)((function(){return v(!1)}),[]),b=i&&Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("button",{className:"burger",onClick:m,children:[Object(t.jsx)("div",{className:"line line1"}),Object(t.jsx)("div",{className:"line line2"}),Object(t.jsx)("div",{className:"line line3"})]}),Object(t.jsx)(k,{open:d,anchor:"right",onClose:h,children:Object(t.jsx)(A,{data:n,level:s})})]}),j=!i&&Object(t.jsx)(A,{data:n,level:s});return Object(t.jsx)("div",{className:"overlay",children:Object(t.jsxs)("section",{className:"game",children:[Object(t.jsx)("div",{className:"gaming",children:Object(t.jsx)(x,{question:null===l||void 0===l?void 0:l.question,answers:null===l||void 0===l?void 0:l.answers,answer:null===l||void 0===l?void 0:l.answer,total:null===l||void 0===l?void 0:l.rightAnswer})}),j,b]})})},T=function(e){var a=e.children,n=e.type,r=void 0===n?"button":n,s=e.onClick;return console.log(s,"ON_CLICK"),Object(t.jsx)("button",Object(u.a)(Object(u.a)({type:r,onClick:s},e),{},{children:a}))},B=(n(15),n.p+"static/media/hand.7467c776.png"),L=function(e){var a=e.total,n=e.gameStartAction;return Object(t.jsxs)("section",{className:"finish-game",children:[Object(t.jsx)("img",{src:B,alt:"hand",className:"finish-game__img"}),Object(t.jsxs)("div",{className:"finish-game__content",children:[Object(t.jsx)("span",{children:"Total score:"}),Object(t.jsxs)("p",{className:"finish-game__title",children:[O(a)," earned"]}),Object(t.jsx)(T,{type:"button",className:"finish-game__btn",onClick:n,children:"Try again"})]})]})},E=(n(16),n.p+"static/media/hand.7467c776.png"),F=function(e){var a=e.gameStartAction;return console.log(a,"rendered"),Object(t.jsx)(t.Fragment,{children:Object(t.jsxs)("section",{className:"start-game",children:[Object(t.jsx)("img",{src:E,alt:"hand",className:"start-game__img"}),Object(t.jsxs)("div",{className:"start-game__content",children:[Object(t.jsx)("p",{className:"star-game__title",children:"Who wants to be a millionaire?"}),Object(t.jsx)(T,{type:"button",className:"start-game__btn",onClick:a,children:"Start"})]})]})})},M=function(){var e=p(),a=e.data,n=e.total,r=e.gameStart,s=e.gameOver,l=e.level,i=e.gameStartAction;return r?Object(t.jsx)(q,{data:null===a||void 0===a?void 0:a.questions,level:l}):s?Object(t.jsx)(L,{total:n,gameStartAction:i}):Object(t.jsx)(F,{gameStartAction:i})};var P=function(){return Object(t.jsx)(w,{children:Object(t.jsx)(M,{})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(a){var n=a.getCLS,t=a.getFID,r=a.getFCP,s=a.getLCP,l=a.getTTFB;n(e),t(e),r(e),s(e),l(e)}))};i.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(P,{})}),document.getElementById("root")),W()}],[[17,1,2]]]);
//# sourceMappingURL=main.4017c120.chunk.js.map