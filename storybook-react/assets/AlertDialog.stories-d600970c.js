import{j as e,a as u,F as W}from"./jsx-runtime-670450c2.js";import"./chunk-PCJTTTQV-8a033c10.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{D as F,P as Y,A as z,a as J,S as N}from"./index-d13ef923.js";import{b as T,P as E,B as c,c as C,d as Q}from"./index-f3ec5982.js";import{t as V}from"./tokens-72779522.js";import{t as X,d as Z}from"./util-d8e365e4.js";import{r as d}from"./index-f1f749bf.js";import"./preload-helper-41c905a7.js";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-0e33defa.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-1e419f15.js";import"./chunk-RDJSMFWU-eb6ed6e5.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-195fbef2.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-b3b2312b.js";import"./isSymbol-69229716.js";import"./index-356e4a49.js";import"./clsx.m-b4f9149a.js";import"./index-4d501b15.js";const $=`<!-- @license CC0-1.0 -->

# Alert Dialog

De _alert dialog component_ is er voor berichten waarbij de gebruiker een belangrijke beslissing moet maken, voordat de gebruiker verder gaat.

De design tokens van de _alert component_ en de _backdrop component_ worden gebruikt, de alert dialog component heeft daarom weinig eigen design tokens.

Gebruik bij voorkeur een _paragraph component_ voor de inhoud van het bericht.
`,ee={title:"React Component/Alert dialog",id:"react-alert-dialog",component:T,args:{children:[e(E,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e(c,{children:e(C,{children:"OK"})})]},parameters:{tokensPrefix:"utrecht-alert-dialog",tokens:X,tokensDefinition:V,docs:{page:()=>u(W,{children:[e(F,{children:$}),e(Y,{}),e(z,{story:J}),e(N,{})]})}}},t={},r={args:{open:!0,type:"info"}},o={args:{open:!0,type:"ok"}},n={args:{open:!0,type:"warning"}},a={args:{open:!0,type:"error"}},i={render:({buttonLabel:H,buttonAppearance:j,buttonHint:G,children:R,...K})=>{const p=d.createRef(),[I,U]=d.useState(!1);return u("div",{children:[e(c,{children:e(Q,{onClick:()=>{p.current&&(U(!0),p.current.showModal())},"aria-pressed":I,appearance:j,hint:G,children:H})}),e(T,{...K,ref:p,children:R})]})},args:{buttonLabel:"Stoppen",buttonAppearance:"secondary-action-button",buttonHint:"danger",type:"warning",children:u("form",{method:"dialog",children:[e(E,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e(c,{children:e(C,{type:"submit",children:"OK"})})]})},argTypes:{buttonLabel:{type:"text"},buttonAppearance:{type:"select",options:[void 0,"primary-action-button","secondary-action-button","subtle-button"]},buttonHint:{type:"select",options:[void 0,"warning","danger"]},type:{type:"select",options:["info","ok","warning","error"]}}},s=Z(ee);var l,m,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,h,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    open: true,
    type: 'info'
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,k,D;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    open: true,
    type: 'ok'
  }
}`,...(D=(k=o.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var v,w,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    open: true,
    type: 'warning'
  }
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var x,A,q;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    open: true,
    type: 'error'
  }
}`,...(q=(A=a.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var P,B,M;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: ({
    buttonLabel,
    buttonAppearance,
    buttonHint,
    children,
    ...restProps
  }: PropsWithChildren<ShowModalProps>) => {
    const alertDialog = createRef<HTMLDialogElement>();
    const [open, setOpen] = useState(false);
    const showModal = () => {
      if (alertDialog.current) {
        setOpen(true);
        alertDialog.current.showModal();
      }
    };
    return <div>
        <ButtonGroup>
          <Button onClick={showModal} aria-pressed={open} appearance={buttonAppearance} hint={buttonHint}>
            {buttonLabel}
          </Button>
        </ButtonGroup>
        <AlertDialog {...restProps} ref={alertDialog}>
          {children}
        </AlertDialog>
      </div>;
  },
  args: {
    buttonLabel: 'Stoppen',
    buttonAppearance: 'secondary-action-button',
    buttonHint: 'danger',
    type: 'warning',
    children: <form method="dialog">
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
        <ButtonGroup>
          <PrimaryActionButton type="submit">OK</PrimaryActionButton>
        </ButtonGroup>
      </form>
  },
  argTypes: {
    buttonLabel: {
      type: 'text'
    },
    buttonAppearance: {
      type: 'select',
      options: [undefined, 'primary-action-button', 'secondary-action-button', 'subtle-button']
    },
    buttonHint: {
      type: 'select',
      options: [undefined, 'warning', 'danger']
    },
    type: {
      type: 'select',
      options: ['info', 'ok', 'warning', 'error']
    }
  }
}`,...(M=(B=i.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var _,L,O;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:"designTokenStory(meta)",...(O=(L=s.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const Le=["Default","Info","OK","Warning","Error","ShowModal","DesignTokens"];export{t as Default,s as DesignTokens,a as Error,r as Info,o as OK,i as ShowModal,n as Warning,Le as __namedExportsOrder,ee as default};
//# sourceMappingURL=AlertDialog.stories-d600970c.js.map
