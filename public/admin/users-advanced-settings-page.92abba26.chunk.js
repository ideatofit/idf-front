"use strict";(self.webpackChunkidf_backend=self.webpackChunkidf_backend||[]).push([[9460],{98352:(Z,R,t)=>{t.r(R),t.d(R,{default:()=>se});var e=t(67294),y=t(23724),m=t(97132),b=t(80831),n=t(68547),T=t(14087),S=t(185),g=t(67838),O=t(49066),P=t(29728),w=t(35961),A=t(7681),s=t(91216),d=t(82562),l=t(72735),p=t(11276),B=t(74571),X=t(85018),K=t(81912),c=t(89031);const k=[{intlLabel:{id:(0,c.OB)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,c.OB)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,c.OB)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,c.OB)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,c.OB)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,c.OB)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,c.OB)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,c.OB)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,c.OB)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,c.OB)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,c.OB)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,c.OB)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}];var L=t(53209);const a=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),i=L.Ry().shape({email_confirmation_redirection:L.nK().when("email_confirmation",{is:!0,then:L.Z_().matches(a).required(),otherwise:L.Z_().nullable()}),email_reset_password:L.Z_(n.translatedErrors.string).matches(a,n.translatedErrors.regex).nullable()});var o=(u,f,v)=>new Promise((U,I)=>{var W=E=>{try{D(v.next(E))}catch(F){I(F)}},N=E=>{try{D(v.throw(E))}catch(F){I(F)}},D=E=>E.done?U(E.value):Promise.resolve(E.value).then(W,N);D((v=v.apply(u,f)).next())});const h=()=>o(void 0,null,function*(){const{data:u}=yield c.be.get((0,c.Gc)("advanced"));return u}),x=u=>c.be.put((0,c.Gc)("advanced"),u);var C=Object.defineProperty,G=Object.defineProperties,Y=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,V=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,q=(u,f,v)=>f in u?C(u,f,{enumerable:!0,configurable:!0,writable:!0,value:v}):u[f]=v,J=(u,f)=>{for(var v in f||(f={}))V.call(f,v)&&q(u,v,f[v]);if($)for(var v of $(f))Q.call(f,v)&&q(u,v,f[v]);return u},ee=(u,f)=>G(u,Y(f)),te=(u,f,v)=>new Promise((U,I)=>{var W=E=>{try{D(v.next(E))}catch(F){I(F)}},N=E=>{try{D(v.throw(E))}catch(F){I(F)}},D=E=>E.done?U(E.value):Promise.resolve(E.value).then(W,N);D((v=v.apply(u,f)).next())});const ie=()=>e.createElement(n.CheckPagePermissions,{permissions:K.Z.readAdvancedSettings},e.createElement(oe,null)),oe=()=>{const{formatMessage:u}=(0,m.useIntl)(),f=(0,n.useNotification)(),{lockApp:v,unlockApp:U}=(0,n.useOverlayBlocker)(),{notifyStatus:I}=(0,T.G)(),W=(0,y.useQueryClient)();(0,n.useFocusWhenNavigate)();const N=(0,e.useMemo)(()=>({update:K.Z.updateAdvancedSettings}),[]),{isLoading:D,allowedActions:{canUpdate:E}}=(0,n.useRBAC)(N),{status:F,data:ae}=(0,y.useQuery)("advanced",()=>h(),{onSuccess(){I(u({id:(0,c.OB)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){f({type:"warning",message:{id:(0,c.OB)("notification.error"),defaultMessage:"An error occured"}})}}),le=D||F!=="success",ne=(0,y.useMutation)(j=>x(j),{onSuccess(){return te(this,null,function*(){yield W.invalidateQueries("advanced"),f({type:"success",message:{id:(0,c.OB)("notification.success.saved"),defaultMessage:"Saved"}}),U()})},onError(){f({type:"warning",message:{id:(0,c.OB)("notification.error"),defaultMessage:"An error occured"}}),U()},refetchActive:!0}),{isLoading:de}=ne,ce=j=>te(void 0,null,function*(){v();const H=j.email_confirmation?j.email_confirmation_redirection:"";yield ne.mutateAsync(ee(J({},j),{email_confirmation_redirection:H}))});return le?e.createElement(S.o,{"aria-busy":"true"},e.createElement(n.SettingsPageTitle,{name:u({id:(0,c.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(g.T,{title:u({id:(0,c.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(O.D,null,e.createElement(n.LoadingIndicatorPage,null))):e.createElement(S.o,{"aria-busy":de},e.createElement(n.SettingsPageTitle,{name:u({id:(0,c.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(b.Formik,{onSubmit:ce,initialValues:ae.settings,validateOnChange:!1,validationSchema:i,enableReinitialize:!0},({errors:j,values:H,handleChange:re,isSubmitting:ue})=>e.createElement(n.Form,null,e.createElement(g.T,{title:u({id:(0,c.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:e.createElement(P.z,{loading:ue,type:"submit",disabled:!E,startIcon:e.createElement(X.Z,null),size:"S"},u({id:"global.save",defaultMessage:"Save"}))}),e.createElement(O.D,null,e.createElement(w.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(A.K,{spacing:4},e.createElement(l.Z,{variant:"delta",as:"h2"},u({id:"global.settings",defaultMessage:"Settings"})),e.createElement(p.r,{gap:6},e.createElement(B.P,{col:6,s:12},e.createElement(s.P,{label:u({id:(0,c.OB)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:H.default_role,hint:u({id:(0,c.OB)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:M=>re({target:{name:"default_role",value:M}})},ae.roles.map(M=>e.createElement(d.W,{key:M.type,value:M.type},M.name)))),k.map(M=>{let _=H[M.name];return _||(_=M.type==="bool"?!1:""),e.createElement(B.P,J({key:M.name},M.size),e.createElement(n.GenericInput,ee(J({},M),{value:_,error:j[M.name],disabled:M.name==="email_confirmation_redirection"&&H.email_confirmation===!1,onChange:re})))}))))))))},se=ie},46979:(Z,R,t)=>{t.d(R,{Z:()=>S});var e=t(78648),y=t(68547),m=t.n(y),b=(g,O,P)=>new Promise((w,A)=>{var s=p=>{try{l(P.next(p))}catch(B){A(B)}},d=p=>{try{l(P.throw(p))}catch(B){A(B)}},l=p=>p.done?w(p.value):Promise.resolve(p.value).then(s,d);l((P=P.apply(g,O)).next())});const n=e.Z.create({baseURL:""});n.interceptors.request.use(g=>b(void 0,null,function*(){return g.headers={Authorization:`Bearer ${y.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},g}),g=>{Promise.reject(g)}),n.interceptors.response.use(g=>g,g=>{var O;throw((O=g.response)==null?void 0:O.status)===401&&(y.auth.clearAppStorage(),window.location.reload()),g});const S=(0,y.wrapAxiosInstance)(n)},89031:(Z,R,t)=>{t.d(R,{be:()=>e.Z,YX:()=>b,Gc:()=>S,OB:()=>g.Z});var e=t(46979),y=t(96486);const b=O=>Object.keys(O).reduce((P,w)=>{const A=O[w].controllers,s=Object.keys(A).reduce((d,l)=>((0,y.isEmpty)(A[l])||(d[l]=A[l]),d),{});return(0,y.isEmpty)(s)||(P[w]={controllers:s}),P},{});var n=t(31498);const S=O=>`/${n.Z}/${O}`;var g=t(84757)},49066:(Z,R,t)=>{t.d(R,{D:()=>b});var e=t(67294),y=t(45697),m=t(35961);const b=({children:n})=>e.createElement(m.x,{paddingLeft:10,paddingRight:10},n);b.propTypes={children:y.node.isRequired}},67838:(Z,R,t)=>{t.d(R,{T:()=>z});var e=t(67294),y=t(71893),m=t(45697),b=t(72735),n=t(35961),T=t(46273);const S=a=>{const r=(0,e.useRef)(null),[i,o]=(0,e.useState)(!0),h=([x])=>{o(x.isIntersecting)};return(0,e.useEffect)(()=>{const x=r.current,C=new IntersectionObserver(h,a);return x&&C.observe(r.current),()=>{x&&C.disconnect()}},[r,a]),[r,i]};var g=t(98402);const O=(a,r)=>{const i=(0,g.useCallbackRef)(r);(0,e.useLayoutEffect)(()=>{const o=new ResizeObserver(i);return Array.isArray(a)?a.forEach(h=>{h.current&&o.observe(h.current)}):a.current&&o.observe(a.current),()=>{o.disconnect()}},[a,i])};var P=Object.defineProperty,w=Object.defineProperties,A=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(a,r,i)=>r in a?P(a,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[r]=i,B=(a,r)=>{for(var i in r||(r={}))d.call(r,i)&&p(a,i,r[i]);if(s)for(var i of s(r))l.call(r,i)&&p(a,i,r[i]);return a},X=(a,r)=>w(a,A(r)),K=(a,r)=>{var i={};for(var o in a)d.call(a,o)&&r.indexOf(o)<0&&(i[o]=a[o]);if(a!=null&&s)for(var o of s(a))r.indexOf(o)<0&&l.call(a,o)&&(i[o]=a[o]);return i};const c=()=>{const a=(0,e.useRef)(null),[r,i]=(0,e.useState)(null),[o,h]=S({root:null,rootMargin:"0px",threshold:0});return O(o,()=>{o.current&&i(o.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{a.current&&i(a.current.getBoundingClientRect())},[a]),{containerRef:o,isVisible:h,baseHeaderLayoutRef:a,headerSize:r}},z=a=>{const{containerRef:r,isVisible:i,baseHeaderLayoutRef:o,headerSize:h}=c();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:h==null?void 0:h.height},ref:r},i&&e.createElement(L,B({ref:o},a))),!i&&e.createElement(L,X(B({},a),{sticky:!0,width:h==null?void 0:h.width})))};z.displayName="HeaderLayout";const k=(0,y.default)(n.x)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${a=>a.width}px;
  z-index: 4;
  box-shadow: ${({theme:a})=>a.shadows.tableShadow};
`,L=e.forwardRef((a,r)=>{var i=a,{navigationAction:o,primaryAction:h,secondaryAction:x,subtitle:C,title:G,sticky:Y,width:$}=i,V=K(i,["navigationAction","primaryAction","secondaryAction","subtitle","title","sticky","width"]);const Q=typeof C=="string";return Y?e.createElement(k,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,background:"neutral0",width:$,"data-strapi-header-sticky":!0},e.createElement(T.k,{justifyContent:"space-between"},e.createElement(T.k,null,o&&e.createElement(n.x,{paddingRight:3},o),e.createElement(n.x,null,e.createElement(b.Z,B({variant:"beta",as:"h1"},V),G),Q?e.createElement(b.Z,{variant:"pi",textColor:"neutral600"},C):C),x?e.createElement(n.x,{paddingLeft:4},x):null),e.createElement(T.k,null,h?e.createElement(n.x,{paddingLeft:2},h):void 0))):e.createElement(n.x,{ref:r,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:o?6:8,background:"neutral100","data-strapi-header":!0},o?e.createElement(n.x,{paddingBottom:2},o):null,e.createElement(T.k,{justifyContent:"space-between"},e.createElement(T.k,null,e.createElement(b.Z,B({as:"h1",variant:"alpha"},V),G),x?e.createElement(n.x,{paddingLeft:4},x):null),h),Q?e.createElement(b.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},C):C)});L.displayName="BaseHeaderLayout",L.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},L.propTypes={navigationAction:m.node,primaryAction:m.node,secondaryAction:m.node,sticky:m.bool,subtitle:m.oneOfType([m.string,m.node]),title:m.string.isRequired,width:m.number},z.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},z.propTypes={navigationAction:m.node,primaryAction:m.node,secondaryAction:m.node,subtitle:m.oneOfType([m.string,m.node]),title:m.string.isRequired}},185:(Z,R,t)=>{t.d(R,{o:()=>A});var e=t(67294),y=t(45697),m=t(71893),b=Object.defineProperty,n=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,g=(s,d,l)=>d in s?b(s,d,{enumerable:!0,configurable:!0,writable:!0,value:l}):s[d]=l,O=(s,d)=>{for(var l in d||(d={}))T.call(d,l)&&g(s,l,d[l]);if(n)for(var l of n(d))S.call(d,l)&&g(s,l,d[l]);return s},P=(s,d)=>{var l={};for(var p in s)T.call(s,p)&&d.indexOf(p)<0&&(l[p]=s[p]);if(s!=null&&n)for(var p of n(s))d.indexOf(p)<0&&S.call(s,p)&&(l[p]=s[p]);return l};const w=m.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,A=s=>{var d=s,{labelledBy:l}=d,p=P(d,["labelledBy"]);const B=l||"main-content-title";return e.createElement(w,O({"aria-labelledby":B,id:"main-content",tabIndex:-1},p))};A.defaultProps={labelledBy:void 0},A.propTypes={labelledBy:y.string}}}]);
