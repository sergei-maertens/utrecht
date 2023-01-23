import{a as c,j as i}from"./jsx-runtime-670450c2.js";import{s as p,P as k,t as _,C as g,u as s}from"./index-4ba24e52.js";import x from"./FormField.stories-286f5b94.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./extends-98964cd2.js";import"./util-b22bc3f5.js";import"./index-4d501b15.js";const D={...x.argTypes,checked:{description:"Checked",control:"boolean",table:{category:"Story",defaultValue:{summary:!1}}},required:{description:"Required",control:"boolean",table:{category:"Story",defaultValue:{summary:!1}}},id:{description:"ID",type:{name:"text",required:!0},table:{category:"Story",defaultValue:{summary:""}}},name:{description:"Name",control:"text",table:{category:"Story",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"Story",defaultValue:{summary:""}}},label:{name:"label",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},invalidDescription:{name:"invalidDescription",description:"Description for invalid input",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},description:{description:"Description",type:{name:"text",required:!1},table:{category:"Story",defaultValue:{summary:""}}}},w={title:"React Component/Form Field/Checkbox",id:"react-form-field--checkbox",component:p,argTypes:D},q=u=>{const{checked:f,description:t,disabled:n,id:e,invalid:o,invalidDescription:a,label:b,name:y,required:h,value:v,type:F}=u,d=t?`${e}-description`:null,l=a?`${e}-invalid-description`:null;return c(p,{invalid:o,type:F,children:[i(k,{className:"utrecht-form-field__label utrecht-form-field__label--checkbox",children:c(_,{disabled:n,type:"checkbox",htmlFor:e,children:[i(g,{"aria-describedby":[d,l].filter(Boolean).join(" ")||null,className:"utrecht-form-field__input",defaultChecked:f,disabled:n,id:e,invalid:o,required:h,name:y,value:v}),b]})}),t?i(s,{id:d,className:"utrecht-form-field__description",children:t}):void 0,a?i(s,{id:l,invalid:!0,className:"utrecht-form-field__description",children:a}):void 0]})},r=q.bind({});r.args={checked:!1,description:"U kunt ons echt vertrouwen!",disabled:!1,id:"43f471c8-c6f1-4867-bc53-9602c06b8a32",invalid:!0,invalidDescription:"U moet akkoord gaan met de algemene voorwaarden, anders kunt u niet verder.",label:"Ik ga akkoord met de algemene voorwaarden",name:"consent",value:"true",required:!0,type:"checkbox"};var m;r.parameters={...r.parameters,storySource:{source:`args => {
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
}`,...(m=r.parameters)==null?void 0:m.storySource}};const L=["FormFieldCheckbox"];export{r as FormFieldCheckbox,L as __namedExportsOrder,w as default};
//# sourceMappingURL=FormFieldCheckbox.stories-77efcfd4.js.map
