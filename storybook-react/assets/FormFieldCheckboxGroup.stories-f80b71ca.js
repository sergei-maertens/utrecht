import{a,j as e}from"./jsx-runtime-670450c2.js";import{F as h,a as j,b as C,H as $,c as o,P as B,d as S,C as H}from"./index.esm-b64c2cd3.js";import V from"./FormField.stories-fe91c782.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./index-4c4c2035.js";import"./extends-98964cd2.js";import"./util-88302b45.js";import"./index-4d501b15.js";const q={...V.argTypes,headingLevel:{description:"Heading level for the label. Leave empty for a regular label.",control:{type:"select"},options:["","1","2","3","4","5","6"],table:{defaultValue:{summary:!1},category:"Story"}},name:{description:"Name attribute of the <input> elements",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},groupLabel:{description:"Label of the group",type:{name:"text",required:!0},table:{defaultValue:{summary:!1},category:"Story"}},groupInvalidDescription:{description:"Description for an invalid group",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},groupId:{description:"ID of the group",type:{name:"text",required:!1},table:{defaultValue:{summary:!1},category:"Story"}},groupDescription:{description:"Description of the group",type:{name:"text",required:!1},table:{category:"Story",defaultValue:{summary:""}}}},M={title:"React Component/Form Field/Checkbox group",id:"react-form-field--checkbox-group",component:h,argTypes:q},T=y=>{const{groupDescription:l,groupId:r,groupInvalidDescription:s,groupLabel:c,groupName:F,headingLevel:p,invalid:D,options:I}=y,d=r&&l?`${r}-description`:void 0,t=s?`${r}-invalid-description`:void 0,_=[d,t].filter(Boolean).join(" ");return a(j,{id:r,"aria-describedby":_,invalid:D,children:[e(C,{children:p?e($,{level:p,children:c}):c}),d?e(o,{id:d,children:l}):void 0,t?e(o,{id:t,status:"invalid",children:s}):void 0,I.map(({description:u,checked:x,id:i,invalid:m,invalidDescription:g,label:L,name:k,value:N})=>{const f=`${i}-description`,b=m?`${i}-invalid-description`:void 0;return a(h,{invalid:m,type:"checkbox",children:[e(B,{className:"utrecht-form-field__label utrecht-form-field__label--checkbox",children:a(S,{type:"checkbox",htmlFor:i,children:[e(H,{className:"utrecht-form-field__input",id:i,value:N,name:k||F,defaultChecked:x,"aria-describedby":[f,b].filter(Boolean).join(" ")||void 0}),L]})}),u?e(o,{id:f,className:"utrecht-form-field__description",children:u}):void 0,g?e(o,{id:b,status:"invalid",className:"utrecht-form-field__description",children:g}):void 0]},i)})]})},n=T.bind({});n.args={groupId:"7adc261b-20ea-41b8-bc5d-8bdcad6feb91",groupLabel:"Hoe wil je dat wij contact opnemen?",options:[{id:"4e054ee1-799e-4608-9055-19d3fc0b88e9",name:"phone",value:"true",label:"Telefoon",checked:!0},{id:"238b2692-2460-4bad-93b5-b6def8c3b820",name:"email",value:"true",label:"E-mail"},{id:"6a1b86d8-f5d2-4852-9f95-b6690ac3d0e2",name:"mail",value:"true",label:"Brief"}]};var v;n.parameters={...n.parameters,storySource:{source:`args => {
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
}`,...(v=n.parameters)==null?void 0:v.storySource}};const Q=["FormFieldCheckboxGroup"];export{n as FormFieldCheckboxGroup,Q as __namedExportsOrder,M as default};
//# sourceMappingURL=FormFieldCheckboxGroup.stories-f80b71ca.js.map
