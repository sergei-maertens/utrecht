import{j as e,a as G}from"./jsx-runtime-670450c2.js";import{b as u,P as K,B as p,c as P,d as F}from"./index-a5237a52.js";import{t as J}from"./tokens-72779522.js";import{t as N,d as Q}from"./util-b52d2a59.js";import{r as g}from"./index-f1f749bf.js";import"./clsx.m-b4f9149a.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const V=`<!-- @license CC0-1.0 -->

# Alert Dialog

De _alert dialog component_ is er voor berichten waarbij de gebruiker een belangrijke beslissing moet maken, voordat de gebruiker verder gaat.

De design tokens van de _alert component_ en de _backdrop component_ worden gebruikt, de alert dialog component heeft daarom weinig eigen design tokens.

Gebruik bij voorkeur een _paragraph component_ voor de inhoud van het bericht.
`,X={title:"React Component/Alert dialog",id:"react-alert-dialog",component:u,tags:["autodocs"],parameters:{tokensPrefix:"utrecht-alert-dialog",tokens:N,tokensDefinition:J,docs:{description:{component:V}}}},i=l=>e(u,{...l}),r=i.bind({});r.args={open:!0,children:[e(K,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e(p,{children:e(P,{children:"OK"})})]};const o=i.bind({});o.args={...r.args,type:"info"};const a=i.bind({});a.args={...r.args,type:"ok"};const t=i.bind({});t.args={...r.args,type:"warning"};const n=i.bind({});n.args={...r.args,type:"error"};const Y=({children:l,icon:H,type:R,buttonLabel:I,buttonAppearance:U,buttonHint:W})=>{const d=g.createRef(),[z,m]=g.useState(!1);return G("div",{children:[e(p,{children:e(F,{onClick:()=>{d.current&&(m(!0),d.current.showModal())},"aria-pressed":z,appearance:U,hint:W,children:I})}),e(u,{ref:d,icon:H,type:R,onClose:()=>{m(!1)},children:l})]})},s=Y.bind({});s.args={buttonAppearance:"secondary-action-button",buttonHint:"danger",buttonLabel:"Stoppen",type:"warning",children:G("form",{method:"dialog",children:[e(K,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e(p,{children:e(P,{type:"submit",children:"OK"})})]})};const c=Q(X);var h,b,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:"args => <AlertDialog {...args} />",...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var D,k,v;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:"args => <AlertDialog {...args} />",...(v=(k=o.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var A,S,w;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:"args => <AlertDialog {...args} />",...(w=(S=a.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var y,x,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:"args => <AlertDialog {...args} />",...(C=(x=t.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var q,_,M;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:"args => <AlertDialog {...args} />",...(M=(_=n.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var O,B,j;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`({
  children,
  icon,
  type,
  buttonLabel,
  buttonAppearance,
  buttonHint
}) => {
  const alertDialog = createRef();
  const [open, setOpen] = useState(false);
  const showModal = () => {
    if (alertDialog.current) {
      setOpen(true);
      alertDialog.current.showModal();
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  return <div>
      <ButtonGroup>
        <Button onClick={showModal} aria-pressed={open} appearance={buttonAppearance} hint={buttonHint}>
          {buttonLabel}
        </Button>
      </ButtonGroup>
      <AlertDialog ref={alertDialog} icon={icon} type={type} onClose={handleClose}>
        {children}
      </AlertDialog>
    </div>;
}`,...(j=(B=s.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var E,T,L;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:"designTokenStory(meta)",...(L=(T=c.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const le=["Default","Info","OK","Warning","Error","ShowModal","DesignTokens"];export{r as Default,c as DesignTokens,n as Error,o as Info,a as OK,s as ShowModal,t as Warning,le as __namedExportsOrder,X as default};
//# sourceMappingURL=AlertDialog.stories-864cf8d9.js.map
