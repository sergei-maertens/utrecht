import{a as N,j as e}from"./jsx-runtime-670450c2.js";import{F,T as P,e as V,P as s,d as S,c}from"./index.esm-bd53766f.js";import $ from"./FormField.stories-1a081b28.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-b4f9149a.js";import"./index-bca5d173.js";import"./extends-98964cd2.js";import"./util-d8e365e4.js";import"./index-4d501b15.js";const L={...$.argTypes,required:{description:"Required",control:"boolean",table:{category:"Story",defaultValue:{summary:!1}}},id:{description:"ID",type:{name:"text",required:!0},table:{category:"Story",defaultValue:{summary:""}}},name:{description:"Name",control:"text",table:{category:"Story",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"Story",defaultValue:{summary:""}}},label:{name:"label",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},invalidDescription:{name:"invalidDescription",description:"Description for invalid input",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},description:{description:"Description",type:{name:"text",required:!1},table:{category:"Story",defaultValue:{summary:""}}}},B={title:"React Component/Form Field/Textbox",id:"react-form-field",component:F,argTypes:L,tags:["autodocs"]},y=g=>{const{description:n,disabled:d,id:a,Input:h,invalid:l,invalidDescription:t,label:D,name:_,required:x,value:I,type:o}=g,q=n?`${a}-description`:null,T=t?`${a}-invalid-description`:null;return N(F,{invalid:l,type:o,children:[e(s,{className:"utrecht-form-field__label",children:e(S,{disabled:d,htmlFor:a,children:D})}),e(s,{className:"utrecht-form-field__input",children:e(h,{id:a,disabled:d,invalid:l,name:_,type:o,required:x,value:I})}),n?e(c,{id:q,className:"utrecht-form-field__description",children:n}):void 0,t?e(c,{id:T,invalid:!0,className:"utrecht-form-field__description",children:t}):void 0]})},i=y.bind({});i.args={description:"Maximaal 140 karakters",disabled:!1,id:"3a43bbe9-635c-46c2-86cd-b0aa63855598",invalid:!0,invalidDescription:"Fout: het veld is nog leeg. Vul een bericht in.",label:"Tweet",name:"message",value:"",required:!0,type:"text",Input:P};const r=y.bind({});r.args={description:"Maximaal 140 karakters",disabled:!1,id:"3a43bbe9-635c-46c2-86cd-b0aa63855598",invalid:!0,invalidDescription:"Fout: het veld is nog leeg. Vul een bericht in.",label:"Tweet",name:"message",value:"",required:!0,type:"text",Input:V};var p,m,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const {
    description,
    disabled,
    id,
    Input,
    invalid,
    invalidDescription,
    label,
    name,
    required,
    value,
    type
  } = args;
  const descriptionId = description ? \`\${id}-description\` : null;
  const invalidDescriptionId = invalidDescription ? \`\${id}-invalid-description\` : null;
  return <FormField invalid={invalid} type={type}>
      <Paragraph className="utrecht-form-field__label">
        <FormLabel disabled={disabled} htmlFor={id}>
          {label}
        </FormLabel>
      </Paragraph>
      <Paragraph className="utrecht-form-field__input">
        <Input id={id} disabled={disabled} invalid={invalid} name={name} type={type} required={required} value={value} />
      </Paragraph>
      {description ? <FormFieldDescription id={descriptionId} className="utrecht-form-field__description">
          {description}
        </FormFieldDescription> : undefined}
      {invalidDescription ? <FormFieldDescription id={invalidDescriptionId} invalid className="utrecht-form-field__description">
          {invalidDescription}
        </FormFieldDescription> : undefined}
    </FormField>;
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,v,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const {
    description,
    disabled,
    id,
    Input,
    invalid,
    invalidDescription,
    label,
    name,
    required,
    value,
    type
  } = args;
  const descriptionId = description ? \`\${id}-description\` : null;
  const invalidDescriptionId = invalidDescription ? \`\${id}-invalid-description\` : null;
  return <FormField invalid={invalid} type={type}>
      <Paragraph className="utrecht-form-field__label">
        <FormLabel disabled={disabled} htmlFor={id}>
          {label}
        </FormLabel>
      </Paragraph>
      <Paragraph className="utrecht-form-field__input">
        <Input id={id} disabled={disabled} invalid={invalid} name={name} type={type} required={required} value={value} />
      </Paragraph>
      {description ? <FormFieldDescription id={descriptionId} className="utrecht-form-field__description">
          {description}
        </FormFieldDescription> : undefined}
      {invalidDescription ? <FormFieldDescription id={invalidDescriptionId} invalid className="utrecht-form-field__description">
          {invalidDescription}
        </FormFieldDescription> : undefined}
    </FormField>;
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};const G=["FormFieldTextbox","FormFieldTextarea"];export{r as FormFieldTextarea,i as FormFieldTextbox,G as __namedExportsOrder,B as default};
//# sourceMappingURL=FormFieldText.stories-2183277b.js.map
