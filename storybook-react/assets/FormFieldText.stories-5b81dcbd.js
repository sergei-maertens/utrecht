import{a as x,j as e}from"./jsx-runtime-670450c2.js";import{F as u,T as I,e as q,P as s,d as T,c}from"./index.esm-9c76de1c.js";import N from"./FormField.stories-4eb1e64f.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./index-8b643457.js";import"./extends-98964cd2.js";import"./util-cccc7565.js";import"./index-4d501b15.js";const S={...N.argTypes,required:{description:"Required",control:"boolean",table:{category:"Story",defaultValue:{summary:!1}}},id:{description:"ID",type:{name:"text",required:!0},table:{category:"Story",defaultValue:{summary:""}}},name:{description:"Name",control:"text",table:{category:"Story",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"Story",defaultValue:{summary:""}}},label:{name:"label",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},invalidDescription:{name:"invalidDescription",description:"Description for invalid input",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},description:{description:"Description",type:{name:"text",required:!1},table:{category:"Story",defaultValue:{summary:""}}}},C={title:"React Component/Form Field/Textbox",id:"react-form-field",component:u,argTypes:S,tags:["autodocs"]},b=v=>{const{description:n,disabled:d,id:i,Input:f,invalid:l,invalidDescription:t,label:F,name:y,required:h,value:g,type:o}=v,D=n?`${i}-description`:null,_=t?`${i}-invalid-description`:null;return x(u,{invalid:l,type:o,children:[e(s,{className:"utrecht-form-field__label",children:e(T,{disabled:d,htmlFor:i,children:F})}),e(s,{className:"utrecht-form-field__input",children:e(f,{id:i,disabled:d,invalid:l,name:y,type:o,required:h,value:g})}),n?e(c,{id:D,className:"utrecht-form-field__description",children:n}):void 0,t?e(c,{id:_,invalid:!0,className:"utrecht-form-field__description",children:t}):void 0]})},r=b.bind({});r.args={description:"Maximaal 140 karakters",disabled:!1,id:"3a43bbe9-635c-46c2-86cd-b0aa63855598",invalid:!0,invalidDescription:"Fout: het veld is nog leeg. Vul een bericht in.",label:"Tweet",name:"message",value:"",required:!0,type:"text",Input:I};const a=b.bind({});a.args={description:"Maximaal 140 karakters",disabled:!1,id:"3a43bbe9-635c-46c2-86cd-b0aa63855598",invalid:!0,invalidDescription:"Fout: het veld is nog leeg. Vul een bericht in.",label:"Tweet",name:"message",value:"",required:!0,type:"text",Input:q};var p;r.parameters={...r.parameters,storySource:{source:`args => {
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
}`,...(p=r.parameters)==null?void 0:p.storySource}};var m;a.parameters={...a.parameters,storySource:{source:`args => {
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
}`,...(m=a.parameters)==null?void 0:m.storySource}};const E=["FormFieldTextbox","FormFieldTextarea"];export{a as FormFieldTextarea,r as FormFieldTextbox,E as __namedExportsOrder,C as default};
//# sourceMappingURL=FormFieldText.stories-5b81dcbd.js.map
