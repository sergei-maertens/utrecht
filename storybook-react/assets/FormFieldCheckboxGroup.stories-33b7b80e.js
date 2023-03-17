import{a,j as e}from"./jsx-runtime-670450c2.js";import{F as y,a as $,b as B,H as S,c as n,P as H,d as V,C as q}from"./index.esm-9c76de1c.js";import T from"./FormField.stories-c12733a3.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./index-8b643457.js";import"./extends-98964cd2.js";import"./util-7bd4bfc8.js";import"./index-4d501b15.js";const P={...T.argTypes,headingLevel:{description:"Heading level for the label. Leave empty for a regular label.",control:{type:"select"},options:["","1","2","3","4","5","6"],table:{defaultValue:{summary:!1},category:"Story"}},name:{description:"Name attribute of the <input> elements",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},groupLabel:{description:"Label of the group",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},groupInvalidDescription:{description:"Description for an invalid group",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},groupId:{description:"ID of the group",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},groupDescription:{description:"Description of the group",type:{name:"text",required:!1},table:{category:"Story",defaultValue:{summary:""}}}},U={title:"React Component/Form Field/Checkbox group",id:"react-form-field--checkbox-group",component:y,argTypes:P},w=D=>{const{groupDescription:l,groupId:o,groupInvalidDescription:s,groupLabel:c,groupName:I,headingLevel:p,invalid:_,options:x}=D,d=o&&l?`${o}-description`:void 0,t=s?`${o}-invalid-description`:void 0,L=[d,t].filter(Boolean).join(" ");return a($,{id:o,"aria-describedby":L,invalid:_,children:[e(B,{children:p?e(S,{level:p,children:c}):c}),d?e(n,{id:d,children:l}):void 0,t?e(n,{id:t,status:"invalid",children:s}):void 0,x.map(({description:u,checked:k,id:i,invalid:m,invalidDescription:g,label:N,name:j,value:C})=>{const f=`${i}-description`,b=m?`${i}-invalid-description`:void 0;return a(y,{invalid:m,type:"checkbox",children:[e(H,{className:"utrecht-form-field__label utrecht-form-field__label--checkbox",children:a(V,{type:"checkbox",htmlFor:i,children:[e(q,{className:"utrecht-form-field__input",id:i,value:C,name:j||I,defaultChecked:k,"aria-describedby":[f,b].filter(Boolean).join(" ")||void 0}),N]})}),u?e(n,{id:f,className:"utrecht-form-field__description",children:u}):void 0,g?e(n,{id:b,status:"invalid",className:"utrecht-form-field__description",children:g}):void 0]},i)})]})},r=w.bind({});r.args={groupId:"7adc261b-20ea-41b8-bc5d-8bdcad6feb91",groupLabel:"Hoe wil je dat wij contact opnemen?",options:[{id:"4e054ee1-799e-4608-9055-19d3fc0b88e9",name:"phone",value:"true",label:"Telefoon",checked:!0},{id:"238b2692-2460-4bad-93b5-b6def8c3b820",name:"email",value:"true",label:"E-mail"},{id:"6a1b86d8-f5d2-4852-9f95-b6690ac3d0e2",name:"mail",value:"true",label:"Brief"}]};var v,h,F;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const {
    groupDescription,
    groupId,
    groupInvalidDescription,
    groupLabel,
    groupName,
    headingLevel,
    invalid,
    options
  } = args;
  const groupDescriptionId = groupId && groupDescription ? \`\${groupId}-description\` : undefined;
  const groupInvalidDescriptionId = groupInvalidDescription ? \`\${groupId}-invalid-description\` : undefined;
  const groupDescribedByIds = [groupDescriptionId, groupInvalidDescriptionId].filter(Boolean).join(' ');
  return <Fieldset id={groupId} aria-describedby={groupDescribedByIds} invalid={invalid}>
      <FieldsetLegend>
        {headingLevel ? <Heading level={headingLevel}>{groupLabel}</Heading> : groupLabel}
      </FieldsetLegend>
      {groupDescriptionId ? <FormFieldDescription id={groupDescriptionId}>{groupDescription}</FormFieldDescription> : undefined}
      {groupInvalidDescriptionId ? <FormFieldDescription id={groupInvalidDescriptionId} status="invalid">
          {groupInvalidDescription}
        </FormFieldDescription> : undefined}
      {options.map(({
      description,
      checked,
      id,
      invalid,
      invalidDescription,
      label,
      name,
      value
    }) => {
      const descriptionId = \`\${id}-description\`;
      const invalidDescriptionId = invalid ? \`\${id}-invalid-description\` : undefined;
      return <FormField invalid={invalid} type="checkbox" key={id}>
            <Paragraph className="utrecht-form-field__label utrecht-form-field__label--checkbox">
              <FormLabel type="checkbox" htmlFor={id}>
                <Checkbox className="utrecht-form-field__input" id={id} value={value} name={name || groupName} defaultChecked={checked} aria-describedby={[descriptionId, invalidDescriptionId].filter(Boolean).join(' ') || undefined} />
                {label}
              </FormLabel>
            </Paragraph>
            {description ? <FormFieldDescription id={descriptionId} className="utrecht-form-field__description">
                {description}
              </FormFieldDescription> : undefined}
            {invalidDescription ? <FormFieldDescription id={invalidDescriptionId} status="invalid" className="utrecht-form-field__description">
                {invalidDescription}
              </FormFieldDescription> : undefined}
          </FormField>;
    })}
    </Fieldset>;
}`,...(F=(h=r.parameters)==null?void 0:h.docs)==null?void 0:F.source}}};const W=["FormFieldCheckboxGroup"];export{r as FormFieldCheckboxGroup,W as __namedExportsOrder,U as default};
//# sourceMappingURL=FormFieldCheckboxGroup.stories-33b7b80e.js.map
