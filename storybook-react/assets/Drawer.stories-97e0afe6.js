import{j as e,a as f}from"./jsx-runtime-29545a09.js";import{t as U,d as j}from"./util-5e11045c.js";import{r as o}from"./index-76fb7be0.js";import{c as K}from"./clsx.m-1229b3e0.js";import{B as b}from"./ButtonGroup-1a525338.js";import{P as V,B as x}from"./Button-e950cc69.js";import{P as N}from"./Paragraph-e67a9fcb.js";import"./index-8d47fad6.js";import"./_commonjsHelpers-de833af9.js";const s=o.forwardRef(({align:n,children:g,className:h,modal:y,...i},a)=>{let t=o.useRef(null);return o.useImperativeHandle(a,()=>t.current),o.useEffect(()=>{y&&i.open&&(t!=null&&t.current)&&(t.current.close(),t.current.showModal())}),e("dialog",{...i,ref:t,className:K("utrecht-drawer",{"utrecht-drawer--block-end":n==="block-end","utrecht-drawer--block-start":n==="block-start","utrecht-drawer--inline-end":n==="inline-end","utrecht-drawer--inline-start":n==="inline-start"||!n},h),children:g})});s.displayName="Drawer";try{s.displayName="Drawer",s.__docgenInfo={description:"",displayName:"Drawer",props:{align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"string"}},modal:{defaultValue:null,description:"",name:"modal",required:!1,type:{name:"boolean"}}}}}catch{}const W=`<!-- @license CC0-1.0 -->

# Drawer component
`,F={drawer:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-radius":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"max-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-block-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"max-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-inline-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"z-index":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}},backdrop:{"min-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},J={utrecht:F},Q={title:"React Component/Drawer",id:"react-drawer",component:s,decorators:[n=>e("div",{style:{minHeight:"256px",position:"relative"},children:n()})],args:{children:"",hidden:!1,open:!1,modal:!1},argTypes:{align:{control:{type:"select"},options:["","block-end","block-start","inline-end","inline-start"]},children:{description:"Content of the drawer"},hidden:{control:{type:"boolean"}},open:{control:{type:"boolean"}},modal:{control:{type:"boolean"}}},parameters:{tokensPrefix:"utrecht-drawer",tokens:U,tokensDefinition:J,docs:{description:{component:W}}}},r={args:{children:[e(N,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),e(b,{children:e(V,{children:"OK"})})],open:!0}},l={args:{...r.args,align:"inline-start"},name:"inline-start alignment"},c={args:{...r.args,align:"inline-end"},name:"inline-end alignment"},u={args:{...r.args,align:"block-start"},name:"block-start alignment"},d={args:{...r.args,align:"block-end"},name:"block-end alignment"},p={render:({buttonLabel:n,buttonAppearance:g,buttonHint:h,children:y,...i})=>{const a=o.createRef(),[t,R]=o.useState(!1);return f("div",{children:[e(b,{children:e(x,{onClick:()=>{a.current&&(R(!0),a.current.showModal())},"aria-pressed":t,appearance:g,hint:h,children:n})}),e(s,{...i,ref:a,children:y})]})},args:{buttonLabel:"Open menu",buttonAppearance:"subtle-button",children:f("form",{method:"dialog",children:[e(b,{children:e(x,{apperance:"subtle-button",type:"submit",children:"Sluiten"})}),e(N,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})},argTypes:{buttonLabel:{type:"text"},buttonAppearance:{type:"select",options:[void 0,"primary-action-button","secondary-action-button","subtle-button"]},buttonHint:{type:"select",options:[void 0,"warning","danger"]},type:{type:"select",options:["info","ok","warning","error"]}}},m=j(Q);var w,k,q;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: [<Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Paragraph>, <ButtonGroup>
        <PrimaryActionButton>OK</PrimaryActionButton>
      </ButtonGroup>],
    open: true
  }
}`,...(q=(k=r.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var D,B,v;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'inline-start'
  },
  name: 'inline-start alignment'
}`,...(v=(B=l.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var S,$,P;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'inline-end'
  },
  name: 'inline-end alignment'
}`,...(P=($=c.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var E,L,M;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'block-start'
  },
  name: 'block-start alignment'
}`,...(M=(L=u.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var _,A,O;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    align: 'block-end'
  },
  name: 'block-end alignment'
}`,...(O=(A=d.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var T,C,G;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: ({
    buttonLabel,
    buttonAppearance,
    buttonHint,
    children,
    ...restProps
  }: PropsWithChildren<ShowModalProps>) => {
    const drawer = createRef<HTMLDialogElement>();
    const [open, setOpen] = useState(false);
    const showModal = () => {
      if (drawer.current) {
        setOpen(true);
        drawer.current.showModal();
      }
    };
    return <div>
        <ButtonGroup>
          <Button onClick={showModal} aria-pressed={open} appearance={buttonAppearance} hint={buttonHint}>
            {buttonLabel}
          </Button>
        </ButtonGroup>
        <Drawer {...restProps} ref={drawer}>
          {children}
        </Drawer>
      </div>;
  },
  args: {
    buttonLabel: 'Open menu',
    buttonAppearance: 'subtle-button',
    children: <form method="dialog">
        <ButtonGroup>
          <Button apperance="subtle-button" type="submit">
            Sluiten
          </Button>
        </ButtonGroup>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Paragraph>
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
}`,...(G=(C=p.parameters)==null?void 0:C.docs)==null?void 0:G.source}}};var H,z,I;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:"designTokenStory(meta)",...(I=(z=m.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};const ie=["Default","InlineStart","InlineEnd","BlockStart","BlockEnd","ShowModal","DesignTokens"];export{d as BlockEnd,u as BlockStart,r as Default,m as DesignTokens,c as InlineEnd,l as InlineStart,p as ShowModal,ie as __namedExportsOrder,Q as default};
//# sourceMappingURL=Drawer.stories-97e0afe6.js.map
