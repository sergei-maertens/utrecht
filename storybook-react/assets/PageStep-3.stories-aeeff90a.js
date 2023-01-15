import{a as r,j as e}from"./jsx-runtime-670450c2.js";import{m as h,n as c,L as o,o as p,p as g,B as w,P as d,q as b,r as F,S as u,a as v,b as L,s as l,F as i,C as f,d as a,T as E,t as n,u as H,v as k}from"./index.esm-b64c2cd3.js";import{e as y,f as B,g as I,h as P}from"./index.esm-05ecc551.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx.m-ace26a20.js";import"./getPrototypeOf-5b183829.js";import"./index-96c5f47c.js";import"./index-e61b4b29-a34f7af9.js";import"./preload-helper-41c905a7.js";const j={title:"Template/Multistep form/Step 3",id:"template-form-pages-step-3",component:h},z=m=>r(h,{...m,children:[e(c,{children:e(o,{href:"/",children:e(y,{})})}),r(p,{style:{"--utrecht-space-around":1},children:[e(B,{json:JSON.stringify([{href:"https://example/",title:"Home",current:!1},{href:"https://example/",title:"Online loket",current:!0}]),variant:"arrows"}),r("aside",{children:[e(g,{children:"MIJN LOKET"}),e(I,{children:r(w,{appearance:"primary-action-button",children:["Uitloggen",e(P,{})]})}),e(d,{children:"Mevrouw Cindy"}),e("br",{}),e("br",{})]}),r(b,{children:[e(d,{lead:!0,children:"ONLINE LOKET"}),"Een verhuizing doorgeven"]}),e(F,{children:"Woonsituatie"}),e(u,{}),e("section",{children:r("form",{children:[r(v,{children:[e(L,{children:"MEDEVERHUIZERS"}),r("div",{role:"group","aria-labelledby":"Medeverhuizers-label","data-rating-value":"",children:[e(l,{id:"Medeverhuizers-label",children:"Medeverhuizers"}),r(i,{children:[e(f,{id:"medeverhuizers"}),e(a,{htmlFor:"medeverhuizers",children:"Bruce Verburg"})]})]}),e(u,{}),r(i,{children:[e(a,{htmlFor:"hoeveel-personen",children:"Hoeveel personen - inclusief uzelf - wonen er na uw verhuizing op het nieuwe adres? *"}),e("br",{}),e(E,{id:"hoeveel-personen",required:!0,type:"number"})]}),r("div",{role:"radiogroup","aria-labelledby":"wat-is-uw-nieuwe-woonsituatie-label","data-rating-value":"",children:[e(l,{id:"wat-is-uw-nieuwe-woonsituatie-label",children:"Wat is uw nieuwe woonsituatie? *"}),r(i,{children:[e(n,{id:"1",name:"wat-is-uw-nieuwe-woonsituatie"}),e(a,{htmlFor:"1",children:"Ik ben (mede-)eigenaar van de woning/appartement/studio"})]}),r(i,{children:[e(n,{id:"2",name:"wat-is-uw-nieuwe-woonsituatie"}),e(a,{htmlFor:"2",children:"Ik ben (mede-)huurder van de woning/appartement/studio en heb een huurcontract"})]}),r(i,{children:[e(n,{id:"3",name:"wat-is-uw-nieuwe-woonsituatie"}),e(a,{htmlFor:"3",children:"Ik huur een deel van de woning (kamer/verdieping) en heb een huurcontact"})]}),r(i,{children:[e(n,{id:"4",name:"wat-is-uw-nieuwe-woonsituatie"}),e(a,{htmlFor:"4",children:"Ik ga bij iemand in huis wonen en heb geen huurcontract"})]})]})]}),e(o,{href:"/",children:"VORIGE"}),e(H,{type:"submit",appearance:"primary-action-button",children:"VOLGENDE"})]})})]}),e(k,{})]}),t=z.bind({});var s;t.parameters={...t.parameters,storySource:{source:`args => <Page {...args}>
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
      <Heading2>Woonsituatie</Heading2>
      <Separator />
      <section>
        <form>
          <Fieldset>
            <FieldsetLegend>MEDEVERHUIZERS</FieldsetLegend>

            <div role="group" aria-labelledby="Medeverhuizers-label" data-rating-value="">
              <Heading4 id="Medeverhuizers-label">Medeverhuizers</Heading4>
              <FormField>
                <Checkbox id="medeverhuizers" />
                <FormLabel htmlFor="medeverhuizers">Bruce Verburg</FormLabel>
              </FormField>
            </div>
            <Separator />
            <FormField>
              <FormLabel htmlFor="hoeveel-personen">
                Hoeveel personen - inclusief uzelf - wonen er na uw verhuizing op het nieuwe adres? *
              </FormLabel>
              <br />
              <Textbox id="hoeveel-personen" required type="number" />
            </FormField>
            <div role="radiogroup" aria-labelledby="wat-is-uw-nieuwe-woonsituatie-label" data-rating-value="">
              <Heading4 id="wat-is-uw-nieuwe-woonsituatie-label">Wat is uw nieuwe woonsituatie? *</Heading4>
              <FormField>
                <CustomRadioButton id="1" name="wat-is-uw-nieuwe-woonsituatie" />
                <FormLabel htmlFor="1">Ik ben (mede-)eigenaar van de woning/appartement/studio</FormLabel>
              </FormField>
              <FormField>
                <CustomRadioButton id="2" name="wat-is-uw-nieuwe-woonsituatie" />
                <FormLabel htmlFor="2">
                  Ik ben (mede-)huurder van de woning/appartement/studio en heb een huurcontract
                </FormLabel>
              </FormField>
              <FormField>
                <CustomRadioButton id="3" name="wat-is-uw-nieuwe-woonsituatie" />
                <FormLabel htmlFor="3">
                  Ik huur een deel van de woning (kamer/verdieping) en heb een huurcontact
                </FormLabel>
              </FormField>
              <FormField>
                <CustomRadioButton id="4" name="wat-is-uw-nieuwe-woonsituatie" />
                <FormLabel htmlFor="4">Ik ga bij iemand in huis wonen en heb geen huurcontract</FormLabel>
              </FormField>
            </div>
          </Fieldset>
          <Link href="/">VORIGE</Link>
          <Button type="submit" appearance="primary-action-button">
            VOLGENDE
          </Button>
        </form>
      </section>
    </PageContent>
    <PageFooter />
  </Page>`,...(s=t.parameters)==null?void 0:s.storySource}};const D=["Three"];export{t as Three,D as __namedExportsOrder,j as default};
//# sourceMappingURL=PageStep-3.stories-aeeff90a.js.map
