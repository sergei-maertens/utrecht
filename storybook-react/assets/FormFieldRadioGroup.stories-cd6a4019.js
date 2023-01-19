import{a as s,j as e}from"./jsx-runtime-670450c2.js";import{F as y,a as x,b as N,H as $,c as r,P as S,d as j,R}from"./index.esm-b64c2cd3.js";import V from"./FormField.stories-54637a28.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./index-c1e58cc6.js";import"./extends-98964cd2.js";import"./util-b22bc3f5.js";import"./index-4d501b15.js";const q={...V.argTypes,headingLevel:{description:"Heading level for the label. Leave empty for a regular label.",control:{type:"select"},options:["","1","2","3","4","5","6"],table:{defaultValue:{summary:!1},category:"Story"}},name:{description:"Name attribute of the <input> elements",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},groupLabel:{description:"Label of the group",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},groupInvalidDescription:{description:"Description for an invalid group",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},groupId:{description:"ID of the group",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},groupDescription:{description:"Description of the group",type:{name:"text",required:!1},table:{category:"Story",defaultValue:{summary:""}}}},J={title:"React Component/Form Field/Radio group",id:"react-form-field--radio-group",component:y,argTypes:q},H=D=>{const{groupDescription:n,groupId:d,groupInvalidDescription:t,groupLabel:p,headingLevel:c,invalid:F,options:h,name:I}=D,u=n?`${d}-description`:void 0,m=t?`${d}-invalid-description`:void 0,g=[u,m].filter(Boolean),_=g.length?g.join(" "):void 0;return s(x,{role:"radiogroup",id:d,"aria-describedby":_,invalid:F,children:[e(N,{children:c?e($,{level:c,children:p}):p}),n?e(r,{id:u,children:n}):void 0,t?e(r,{status:"invalid",id:m,children:t}):void 0,h.map(({id:i,label:L,description:a,invalidDescription:l,value:B})=>{const f=a?`${i}-description`:void 0,v=l?`${i}-invalid-description`:void 0;return s(y,{type:"radio",children:[e(S,{className:"utrecht-form-field__label utrecht-form-field__label--radio",children:s(j,{type:"radio",htmlFor:i,children:[e(R,{className:"utrecht-form-field__input",id:i,value:B,name:I,"aria-describedby":[f,v].filter(Boolean).join(" ")||void 0}),L]})}),a?e(r,{id:f,className:"utrecht-form-field__description",children:a}):void 0,l?e(r,{id:v,status:"invalid",className:"utrecht-form-field__description",children:l}):void 0]},i)})]})},o=H.bind({});o.args={name:"828aa90e-0e99-4db9-a5e5-d39f689cf7b3",groupLabel:"Choose your option",groupId:"df861ef1-844a-42df-8365-b54f59474fb8",options:[{id:"800b7f3f-5048-4dcc-8f23-d04fa6ca4199",value:"1",label:"Option 1"},{id:"fbc03e63-42c2-46e3-9acc-183fa64c6dcd",value:"2",label:"Option 2"},{id:"62824075-bcc1-4563-a97b-78d1eae3544f",value:"3",label:"Option 3"}]};var b;o.parameters={...o.parameters,storySource:{source:`args => {
  const {
    groupDescription,
    groupId,
    groupInvalidDescription,
    groupLabel,
    headingLevel,
    invalid,
    options,
    name
  } = args;
  const groupDescriptionId = groupDescription ? \`\${groupId}-description\` : undefined;
  const groupInvalidDescriptionId = groupInvalidDescription ? \`\${groupId}-invalid-description\` : undefined;
  const groupDescribedByIds = [groupDescriptionId, groupInvalidDescriptionId].filter(Boolean);
  const groupDescribedBy = groupDescribedByIds.length ? groupDescribedByIds.join(' ') : undefined;
  return <Fieldset role="radiogroup" id={groupId} aria-describedby={groupDescribedBy} invalid={invalid}>
      <FieldsetLegend>
        {headingLevel ? <Heading level={headingLevel}>{groupLabel}</Heading> : groupLabel}
      </FieldsetLegend>
      {groupDescription ? <FormFieldDescription id={groupDescriptionId}>{groupDescription}</FormFieldDescription> : undefined}
      {groupInvalidDescription ? <FormFieldDescription status="invalid" id={groupInvalidDescriptionId}>
          {groupInvalidDescription}
        </FormFieldDescription> : undefined}
      {options.map(({
      id,
      label,
      description,
      invalidDescription,
      value
    }) => {
      const descriptionId = description ? \`\${id}-description\` : undefined;
      const invalidDescriptionId = invalidDescription ? \`\${id}-invalid-description\` : undefined;
      return <FormField type="radio" key={id}>
            <Paragraph className="utrecht-form-field__label utrecht-form-field__label--radio">
              <FormLabel type="radio" htmlFor={id}>
                <RadioButton className="utrecht-form-field__input" id={id} value={value} name={name} aria-describedby={[descriptionId, invalidDescriptionId].filter(Boolean).join(' ') || undefined} />
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
}`,...(b=o.parameters)==null?void 0:b.storySource}};const K=["FormFieldRadioGroup"];export{o as FormFieldRadioGroup,K as __namedExportsOrder,J as default};
//# sourceMappingURL=FormFieldRadioGroup.stories-cd6a4019.js.map
