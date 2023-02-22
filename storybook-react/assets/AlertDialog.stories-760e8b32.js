import{j as e,a as v}from"./jsx-runtime-670450c2.js";import{a as d,P as A,B as p,b as w,c as B}from"./index-b23ace30.js";import{t as j}from"./tokens-e97a859d.js";import{t as E,d as T}from"./util-f18e0025.js";import{r as g}from"./index-f1f749bf.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./index-4d501b15.js";import"./_commonjsHelpers-042e6b4d.js";const L=`<!-- @license CC0-1.0 -->

# Alert Dialog

De _alert dialog component_ is er voor berichten waarbij de gebruiker een belangrijke beslissing moet maken, voordat de gebruiker verder gaat.

De design tokens van de _alert component_ en de _backdrop component_ worden gebruikt, de alert dialog component heeft daarom weinig eigen design tokens.

Gebruik bij voorkeur een _paragraph component_ voor de inhoud van het bericht.
`,G={title:"React Component/Alert dialog",id:"react-alert-dialog",component:d,tags:["autodocs"],parameters:{tokensPrefix:"utrecht-alert-dialog",tokens:E,tokensDefinition:j,docs:{description:{component:L}}}},t=l=>e(d,{...l}),r=t.bind({});r.args={open:!0,children:[e(A,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e(p,{children:e(w,{children:"OK"})})]};const o=t.bind({});o.args={...r.args,type:"info"};const a=t.bind({});a.args={...r.args,type:"ok"};const n=t.bind({});n.args={...r.args,type:"warning"};const i=t.bind({});i.args={...r.args,type:"error"};const K=({children:l,icon:x,type:C,buttonLabel:q,buttonAppearance:_,buttonHint:M})=>{const c=g.createRef(),[O,m]=g.useState(!1);return v("div",{children:[e(p,{children:e(B,{onClick:()=>{c.current&&(m(!0),c.current.showModal())},"aria-pressed":O,appearance:_,hint:M,children:q})}),e(d,{ref:c,icon:x,type:C,onClose:()=>{m(!1)},children:l})]})},s=K.bind({});s.args={buttonAppearance:"secondary-action-button",buttonHint:"danger",buttonLabel:"Stoppen",type:"warning",children:v("form",{method:"dialog",children:[e(A,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e(p,{children:e(w,{type:"submit",children:"OK"})})]})};const u=T(G);var h;r.parameters={...r.parameters,storySource:{source:"args => <AlertDialog {...args} />",...(h=r.parameters)==null?void 0:h.storySource}};var b;o.parameters={...o.parameters,storySource:{source:"args => <AlertDialog {...args} />",...(b=o.parameters)==null?void 0:b.storySource}};var f;a.parameters={...a.parameters,storySource:{source:"args => <AlertDialog {...args} />",...(f=a.parameters)==null?void 0:f.storySource}};var y;n.parameters={...n.parameters,storySource:{source:"args => <AlertDialog {...args} />",...(y=n.parameters)==null?void 0:y.storySource}};var D;i.parameters={...i.parameters,storySource:{source:"args => <AlertDialog {...args} />",...(D=i.parameters)==null?void 0:D.storySource}};var S;s.parameters={...s.parameters,storySource:{source:`({
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
}`,...(S=s.parameters)==null?void 0:S.storySource}};var k;u.parameters={...u.parameters,storySource:{source:"designTokenStory(meta)",...(k=u.parameters)==null?void 0:k.storySource}};const V=["Default","Info","OK","Warning","Error","ShowModal","DesignTokens"];export{r as Default,u as DesignTokens,i as Error,o as Info,a as OK,s as ShowModal,n as Warning,V as __namedExportsOrder,G as default};
//# sourceMappingURL=AlertDialog.stories-760e8b32.js.map
