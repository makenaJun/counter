(this.webpackJsonpexamone=this.webpackJsonpexamone||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){e.exports={displayContainer:"Counter_displayContainer__24-Sf",buttonContainer:"Counter_buttonContainer__2rz82"}},20:function(e,t,r){e.exports={button:"Button_button__3-QGf"}},26:function(e,t,r){},33:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(19),s=r.n(o),c=(r(26),r(9)),i=(r(14),r(11)),d=r(2),u=r(20),l=r.n(u),j=r(1),b=a.a.memo((function(e){var t=e.disabled,r=e.onClick,n=e.children;return Object(j.jsx)("button",{className:l.a.button,onClick:r,disabled:t,children:n})})),C=r(8),O=r.n(C),m=function(e){var t=e.error,r=e.editMode,n=e.startValue,a=e.endCounter,o=e.setEditMode,s=e.setStartValue,c=e.setStartCounter,i=e.setEndCounter,d=e.setError;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:O.a.inputContainer,children:[Object(j.jsxs)("div",{children:["Start value:",Object(j.jsx)("input",{type:"number",className:"".concat(O.a.input," ").concat(t?O.a.errorInput:""),value:n,onChange:function(e){var r=+e.currentTarget.value;if(r>=a||r<0)return d(!0);t&&d(!1),o(!0),s(r)}})]}),Object(j.jsxs)("div",{children:["Max value: ",Object(j.jsx)("input",{type:"number",className:"".concat(O.a.input," ").concat(t?O.a.errorInput:""),value:a,onChange:function(e){var r=+e.currentTarget.value;if(r<=n)return d(!0);t&&d(!1),o(!0),i(r)}})]})]}),Object(j.jsx)("div",{className:O.a.buttonContainer,children:Object(j.jsx)(b,{onClick:function(){c(n),o(!1)},disabled:!r||t,children:"set"})})]})},v=r(15),h=r.n(v),x=function(e){var t=e.startCounter,r=e.limitReached,n=e.editMode,a=e.error,o={color:r||a?"red":"#282c34",fontWeight:700,fontSize:r?"3.5rem":"3rem"},s=a?"Invalid value":n?"Set value":t;return Object(j.jsx)("div",{style:o,children:s})},p=function(e){var t=e.variant,r=e.startCounter,n=e.error,a=e.limitReached,o=e.editMode,s=e.startValue,c=e.onIncrementHandler,i=e.onResetHandler,d=e.setEditMode;return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:h.a.displayContainer,children:Object(j.jsx)(x,{startCounter:r,editMode:o,limitReached:a,error:n})}),Object(j.jsxs)("div",{className:h.a.buttonContainer,children:[Object(j.jsx)(b,{disabled:a||o,onClick:c,children:"inc"}),Object(j.jsx)(b,{disabled:r===s||o,onClick:i,children:"reset"}),"TWO"===t&&Object(j.jsx)(b,{onClick:function(){return d(!0)},children:"set"})]})]})},f=function(e){var t=e.startValue,r=e.editMode,n=e.error,a=e.startCounter,o=e.limitReached,s=e.onResetHandler,c=e.onIncrementHandler,i=e.setStartValue,d=e.setStartCounter,u=e.setEditMode,l=e.setError,b=e.endCounter,C=e.setEndCounter;return Object(j.jsxs)("div",{className:"wrapper-counter",children:[Object(j.jsx)("div",{className:"wrapper-block",children:Object(j.jsx)(m,{startValue:t,error:n,setStartValue:i,editMode:r,endCounter:b,setStartCounter:d,setEditMode:u,setEndCounter:C,setError:l})}),Object(j.jsx)("div",{className:"wrapper-block",children:Object(j.jsx)(p,{startCounter:a,editMode:r,error:n,limitReached:o,startValue:t,onIncrementHandler:c,onResetHandler:s,variant:"ONE",setEditMode:u})})]})},E=function(e){var t=e.startValue,r=e.editMode,n=e.error,a=e.startCounter,o=e.limitReached,s=e.onResetHandler,c=e.onIncrementHandler,i=e.setStartValue,d=e.setStartCounter,u=e.setEditMode,l=e.setError,b=e.endCounter,C=e.setEndCounter;return Object(j.jsx)("div",{className:"wrapper-counter",children:Object(j.jsx)("div",{className:"wrapper-block",children:r?Object(j.jsx)(m,{startValue:t,error:n,setStartValue:i,editMode:r,endCounter:b,setStartCounter:d,setEditMode:u,setEndCounter:C,setError:l}):Object(j.jsx)(p,{startCounter:a,editMode:r,error:n,limitReached:o,startValue:t,onIncrementHandler:c,onResetHandler:s,variant:"TWO",setEditMode:u})})})};var S=function(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),r=t[0],a=t[1],o=Object(n.useState)(5),s=Object(c.a)(o,2),u=s[0],l=s[1],b=Object(n.useState)(r),C=Object(c.a)(b,2),O=C[0],m=C[1],v=Object(n.useState)(!1),h=Object(c.a)(v,2),x=h[0],p=h[1],S=Object(n.useState)(!1),V=Object(c.a)(S,2),_=V[0],M=V[1],N=r===u;Object(n.useEffect)((function(){var e=localStorage.getItem("startValue"),t=localStorage.getItem("endCounter");e&&t&&(a(Number(e)),m(Number(e)),l(Number(t)))}),[]),Object(n.useEffect)((function(){localStorage.setItem("startValue",O.toString()),localStorage.setItem("endCounter",u.toString())}),[u,O]);var g=Object(n.useCallback)((function(){a((function(e){return e+1}))}),[]),I=Object(n.useCallback)((function(){a(O)}),[O]);return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"menuNav",children:[Object(j.jsx)(i.b,{exact:!0,to:"/",className:"menuNav__link",children:"Variant One"}),Object(j.jsx)(i.b,{to:"/varianttwo",className:"menuNav__link",children:"Variant Two"})]}),Object(j.jsxs)("div",{className:"App-header",children:[Object(j.jsx)(d.a,{exact:!0,path:"/",render:function(){return Object(j.jsx)(f,{setStartValue:m,editMode:x,error:_,endCounter:u,setStartCounter:a,setEditMode:p,setEndCounter:l,setError:M,startValue:O,onIncrementHandler:g,onResetHandler:I,limitReached:N,startCounter:r})}}),Object(j.jsx)(d.a,{path:"/varianttwo",render:function(){return Object(j.jsx)(E,{setStartValue:m,editMode:x,error:_,endCounter:u,setStartCounter:a,setEditMode:p,setEndCounter:l,setError:M,startValue:O,onIncrementHandler:g,onResetHandler:I,limitReached:N,startCounter:r})}})]})]})})},V=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,34)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),o(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root")),V()},8:function(e,t,r){e.exports={inputContainer:"ValueEditor_inputContainer__JjO0q",buttonContainer:"ValueEditor_buttonContainer__vKX2r",input:"ValueEditor_input__20qGD",errorInput:"ValueEditor_errorInput__Z6kq9"}}},[[33,1,2]]]);
//# sourceMappingURL=main.6a503828.chunk.js.map