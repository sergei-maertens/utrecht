import{a as r,j as e}from"./jsx-runtime-670450c2.js";import{m as c,n as u,L as n,o as p,p as F,B as g,P as d,q as b,r as L,S as v,F as t,d as a,T as i,a as w,b as f,s as E,R as s,t as H,u as P}from"./index.esm-9c76de1c.js";import{e as U,f as y,g as x,h as B,i as l}from"./index.esm-a6987fa5.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./getPrototypeOf-5b183829.js";import"./index-96c5f47c.js";import"./index-e61b4b29-c9d63045.js";import"./preload-helper-41c905a7.js";const q={title:"Template/Multistep form/Step 2",id:"template-form-pages-step-2",component:c},O=h=>r(c,{...h,children:[e(u,{children:e(n,{href:"/",children:e(U,{})})}),r(p,{style:{"--utrecht-space-around":1},children:[e(y,{json:JSON.stringify([{href:"https://example/",title:"Home",current:!1},{href:"https://example/",title:"Online loket",current:!0}]),variant:"arrows"}),r("aside",{children:[e(F,{children:"MIJN LOKET"}),e(x,{children:r(g,{appearance:"primary-action-button",children:["Uitloggen",e(B,{})]})}),e(d,{children:"Mevrouw Cindy"}),e("br",{}),e("br",{})]}),r(b,{children:[e(d,{lead:!0,children:"ONLINE LOKET"}),"Een verhuizing doorgeven"]}),e(L,{children:"De Verhuizing"}),e(v,{}),e("section",{children:r("form",{children:[r(t,{children:[e(a,{htmlFor:"verhuisdatum",children:"Verhuisdatum*"}),e("br",{}),e(i,{id:"verhuisdatum",type:"date",required:!0})]}),r(w,{children:[e(f,{children:"NIEUWE ADRES"}),r("div",{role:"radiogroup","aria-labelledby":"nieuwe-adres-label","data-rating-value":"",children:[e(E,{id:"nieuwe-adres-label",children:"Hoe wilt u zoeken *"}),r(t,{children:[e(s,{id:"postcode",name:"woonplaats-en-straat"}),e(a,{htmlFor:"postcode",children:"Postcode"})]}),r(t,{children:[e(s,{id:"woonplaats-en-straat",name:"woonplaats-en-straat"}),e(a,{htmlFor:"woonplaats-en-straat",children:"Woonplaats en Straat"})]})]}),r(t,{children:[e(a,{htmlFor:"postcode",children:"Postcode *"}),e("br",{}),e(i,{id:"postcode",required:!0,"aria-invalid":"true","aria-errormessage":"err-postcode"}),e(l,{id:"err-postcode",status:"invalid",children:"U moet de postcode van het nieuwe adres invullen."})]}),r(t,{children:[e(a,{htmlFor:"huisnummer",children:"Huisnummer *"}),e("br",{}),e(i,{id:"huisnummer",required:!0})]}),e(l,{children:"Vragen met een * zijn verplicht."})]}),e(n,{href:"/",children:"VORIGE"}),e(H,{type:"submit",appearance:"primary-action-button",children:"VOLGENDE"})]})})]}),e(P,{})]}),o=O.bind({});var m;o.parameters={...o.parameters,storySource:{source:`args => <Page {...args}>
    <PageHeader>
      <Link href="/">
        <UtrechtLogo />
      </Link>
    </PageHeader>
    <PageContent style={({
    '--utrecht-space-around': 1
  } as any)}>
      <UtrechtBreadcrumb json={JSON.stringify([{
      href: 'https://example/',
      title: 'Home',
      current: false
    }, {
      href: 'https://example/',
      title: 'Online loket',
      current: true
    }])} variant="arrows" />

      <aside>
        <Heading3>MIJN LOKET</Heading3>
        <UtrechtDigidButton>
          <ButtonLink appearance="primary-action-button">
            Uitloggen
            <UtrechtIconArrow />
          </ButtonLink>
        </UtrechtDigidButton>
        <Paragraph>Mevrouw Cindy</Paragraph>
        <br />
        <br />
      </aside>
      <Heading1>
        <Paragraph lead>ONLINE LOKET</Paragraph>
        Een verhuizing doorgeven
      </Heading1>
      <Heading2>De Verhuizing</Heading2>
      <Separator />
      <section>
        <form>
          <FormField>
            <FormLabel htmlFor="verhuisdatum">Verhuisdatum*</FormLabel>
            <br />
            <Textbox id="verhuisdatum" type="date" required />
          </FormField>
          <Fieldset>
            <FieldsetLegend>NIEUWE ADRES</FieldsetLegend>
            <div role="radiogroup" aria-labelledby="nieuwe-adres-label" data-rating-value="">
              <Heading4 id="nieuwe-adres-label">Hoe wilt u zoeken *</Heading4>
              <FormField>
                <RadioButton id="postcode" name="woonplaats-en-straat" />
                <FormLabel htmlFor="postcode">Postcode</FormLabel>
              </FormField>
              <FormField>
                <RadioButton id="woonplaats-en-straat" name="woonplaats-en-straat" />
                <FormLabel htmlFor="woonplaats-en-straat">Woonplaats en Straat</FormLabel>
              </FormField>
            </div>
            <FormField>
              <FormLabel htmlFor="postcode">Postcode *</FormLabel>
              <br />
              <Textbox id="postcode" required aria-invalid="true" aria-errormessage="err-postcode" />
              <UtrechtFormFieldDescription id="err-postcode" status="invalid">
                U moet de postcode van het nieuwe adres invullen.
              </UtrechtFormFieldDescription>
            </FormField>
            <FormField>
              <FormLabel htmlFor="huisnummer">Huisnummer *</FormLabel>
              <br />
              <Textbox id="huisnummer" required />
            </FormField>
            <UtrechtFormFieldDescription>Vragen met een * zijn verplicht.</UtrechtFormFieldDescription>
          </Fieldset>
          <Link href="/">VORIGE</Link>
          <Button type="submit" appearance="primary-action-button">
            VOLGENDE
          </Button>
        </form>
      </section>
    </PageContent>
    <PageFooter />
  </Page>`,...(m=o.parameters)==null?void 0:m.storySource}};const C=["Two"];export{o as Two,C as __namedExportsOrder,q as default};
//# sourceMappingURL=PageStep-2.stories-cc269b0b.js.map
