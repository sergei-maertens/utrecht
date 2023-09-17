import{j as e,a as p,F as W}from"./jsx-runtime-29545a09.js";import"./chunk-S4VUQJ4A-1f9eb598.js";import{D as F,P as Y,A as z,b as J,d as N}from"./index-adbc13a6.js";import{A as T,P as E,t as c,u as C,o as Q}from"./index-db302ede.js";import{t as V}from"./tokens-72779522.js";import{t as X,d as Z}from"./util-7fc75af6.js";import{r as d}from"./index-76fb7be0.js";import"./iframe-47c60e65.js";import"../sb-preview/runtime.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./defineProperty-75c483e5.js";import"./clsx.m-1229b3e0.js";import"./index-8d47fad6.js";const $=`<!-- @license CC0-1.0 -->

# Alert Dialog

De _alert dialog component_ is er voor berichten waarbij de gebruiker een belangrijke beslissing moet maken, voordat de gebruiker verder gaat.

De design tokens van de _alert component_ en de _backdrop component_ worden gebruikt, de alert dialog component heeft daarom weinig eigen design tokens.

Gebruik bij voorkeur een _paragraph component_ voor de inhoud van het bericht.
`,ee={title:"React Component/Alert dialog",id:"react-alert-dialog",component:T,args:{children:[e(E,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e(c,{children:e(C,{children:"OK"})})]},parameters:{tokensPrefix:"utrecht-alert-dialog",tokens:X,tokensDefinition:V,docs:{page:()=>p(W,{children:[e(F,{children:$}),e(Y,{}),e(z,{story:J}),e(N,{})]})}}},t={},r={args:{open:!0,type:"info"}},o={args:{open:!0,type:"ok"}},n={args:{open:!0,type:"warning"}},a={args:{open:!0,type:"error"}},i={render:({buttonLabel:H,buttonAppearance:j,buttonHint:G,children:R,...K})=>{const u=d.createRef(),[I,U]=d.useState(!1);return p("div",{children:[e(c,{children:e(Q,{onClick:()=>{u.current&&(U(!0),u.current.showModal())},"aria-pressed":I,appearance:j,hint:G,children:H})}),e(T,{...K,ref:u,children:R})]})},args:{buttonLabel:"Stoppen",buttonAppearance:"secondary-action-button",buttonHint:"danger",type:"warning",children:p("form",{method:"dialog",children:[e(E,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e(c,{children:e(C,{type:"submit",children:"OK"})})]})},argTypes:{buttonLabel:{type:"text"},buttonAppearance:{type:"select",options:[void 0,"primary-action-button","secondary-action-button","subtle-button"]},buttonHint:{type:"select",options:[void 0,"warning","danger"]},type:{type:"select",options:["info","ok","warning","error"]}}},s=Z(ee);var l,m,g;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var b,h,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    open: true,
    type: 'info'
  }
}`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var y,k,D;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    open: true,
    type: 'ok'
  }
}`,...(D=(k=o.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var v,w,A;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    open: true,
    type: 'warning'
  }
}`,...(A=(w=n.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var S,x,q;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    open: true,
    type: 'error'
  }
}`,...(q=(x=a.parameters)==null?void 0:x.docs)==null?void 0:q.source}}};var P,B,M;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(M=(B=i.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var _,L,O;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:"designTokenStory(meta)",...(O=(L=s.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};const we=["Default","Info","OK","Warning","Error","ShowModal","DesignTokens"];export{t as Default,s as DesignTokens,a as Error,r as Info,o as OK,i as ShowModal,n as Warning,we as __namedExportsOrder,ee as default};
//# sourceMappingURL=AlertDialog.stories-fdd9bf76.js.map
