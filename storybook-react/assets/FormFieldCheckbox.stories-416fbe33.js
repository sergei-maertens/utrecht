import{a as c,j as r}from"./jsx-runtime-670450c2.js";import{u as f,P as _,v as x,C as D,w as s}from"./index-3790cfb7.js";import q from"./FormField.stories-0b46196c.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-b4f9149a.js";import"./extends-98964cd2.js";import"./util-b8ce874c.js";import"./index-4d501b15.js";const C={...q.argTypes,checked:{description:"Checked",control:"boolean",table:{category:"Story",defaultValue:{summary:!1}}},required:{description:"Required",control:"boolean",table:{category:"Story",defaultValue:{summary:!1}}},id:{description:"ID",type:{name:"text",required:!0},table:{category:"Story",defaultValue:{summary:""}}},name:{description:"Name",control:"text",table:{category:"Story",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"Story",defaultValue:{summary:""}}},label:{name:"label",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},invalidDescription:{name:"invalidDescription",description:"Description for invalid input",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},description:{description:"Description",type:{name:"text",required:!1},table:{category:"Story",defaultValue:{summary:""}}}},B={title:"React Component/Form Field/Checkbox",id:"react-form-field--checkbox",component:f,argTypes:C},I=b=>{const{checked:y,description:a,disabled:n,id:i,invalid:o,invalidDescription:t,label:h,name:v,required:F,value:k,type:g}=b,d=a?`${i}-description`:null,l=t?`${i}-invalid-description`:null;return c(f,{invalid:o,type:g,children:[r(_,{className:"utrecht-form-field__label utrecht-form-field__label--checkbox",children:c(x,{disabled:n,type:"checkbox",htmlFor:i,children:[r(D,{"aria-describedby":[d,l].filter(Boolean).join(" ")||null,className:"utrecht-form-field__input",defaultChecked:y,disabled:n,id:i,invalid:o,required:F,name:v,value:k}),h]})}),a?r(s,{id:d,className:"utrecht-form-field__description",children:a}):void 0,t?r(s,{id:l,invalid:!0,className:"utrecht-form-field__description",children:t}):void 0]})},e=I.bind({});e.args={checked:!1,description:"U kunt ons echt vertrouwen!",disabled:!1,id:"43f471c8-c6f1-4867-bc53-9602c06b8a32",invalid:!0,invalidDescription:"U moet akkoord gaan met de algemene voorwaarden, anders kunt u niet verder.",label:"Ik ga akkoord met de algemene voorwaarden",name:"consent",value:"true",required:!0,type:"checkbox"};var m,p,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const {
    checked,
    description,
    disabled,
    id,
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
      <Paragraph className="utrecht-form-field__label utrecht-form-field__label--checkbox">
        <FormLabel disabled={disabled} type="checkbox" htmlFor={id}>
          <Checkbox aria-describedby={[descriptionId, invalidDescriptionId].filter(Boolean).join(' ') || null} className="utrecht-form-field__input" defaultChecked={checked} disabled={disabled} id={id} invalid={invalid} required={required} name={name} value={value} />
          {label}
        </FormLabel>
      </Paragraph>
      {description ? <FormFieldDescription id={descriptionId} className="utrecht-form-field__description">
          {description}
        </FormFieldDescription> : undefined}
      {invalidDescription ? <FormFieldDescription id={invalidDescriptionId} invalid className="utrecht-form-field__description">
          {invalidDescription}
        </FormFieldDescription> : undefined}
    </FormField>;
}`,...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const R=["FormFieldCheckbox"];export{e as FormFieldCheckbox,R as __namedExportsOrder,B as default};
//# sourceMappingURL=FormFieldCheckbox.stories-416fbe33.js.map
