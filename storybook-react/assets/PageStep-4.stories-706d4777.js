import{a,j as e}from"./jsx-runtime-91a467a5.js";import{f as p,g as V,L as u,h as y,i as n,B as I,P as d,j as K,k as c,D as s,o as t,p as r,q as i,S as l,U as w,a as H,b as v,F as f,C as E,d as k,m as S,n as b}from"./index.esm-db0847b4.js";import{e as P,f as F,g as U,h as L}from"./index.esm-e9323ca6.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./defineProperty-a128c648.js";import"./clsx.m-1229b3e0.js";import"./getPrototypeOf-5b183829.js";import"./index-8ce4a492.js";import"./iframe-bff0c62d.js";import"../sb-preview/runtime.mjs";const J={title:"Template/Multistep form/Step 4",id:"template-form-pages-step-4",component:p},o={render:g=>a(p,{...g,children:[e(V,{children:e(u,{href:"/",children:e(P,{})})}),a(y,{style:{"--utrecht-space-around":1},children:[e(F,{json:JSON.stringify([{href:"https://example/",title:"Home",current:!1},{href:"https://example/",title:"Online loket",current:!0}]),variant:"arrows"}),a("aside",{children:[e(n,{children:"MIJN LOKET"}),e(U,{children:a(I,{appearance:"primary-action-button",children:["Uitloggen",e(L,{})]})}),e(d,{children:"Mevrouw Cindy"}),e("br",{}),e("br",{})]}),a(K,{children:[e(d,{lead:!0,children:"ONLINE LOKET"}),"Een verhuizing doorgeven"]}),e(c,{children:"Controleren en versturen"}),e(d,{children:"Bijna klaar! Controleer hieronder of alle gegevens kloppen. Als alles is zoals het moet, zet dan onderaan een vinkje en verstuur het formulier."}),a("section",{children:[e(c,{children:"Uw gegevens"}),e(n,{children:"PERSOONSGEGEVENS"}),a(s,{appearance:"rows",children:[a(t,{children:[e(r,{children:"Burgerservicenummer"}),e(i,{children:"298272921"})]}),a(t,{children:[e(r,{children:"Aanhef"}),e(i,{children:"Vrouw"})]}),a(t,{children:[e(r,{children:"Voorletter(s)"}),e(i,{notranslate:!0,children:"C."})]}),a(t,{children:[e(r,{children:"Tussenvoegsel(s)"}),e(i,{notranslate:!0})]}),a(t,{children:[e(r,{children:"Achternaam"}),e(i,{notranslate:!0,children:"Verburg"})]})]}),e(l,{}),e(n,{children:"ADRESGEGEVENS"}),a(s,{appearance:"rows",children:[a(t,{children:[e(r,{children:"Straatnaam"}),e(i,{notranslate:!0,children:"Stadskantoor"})]}),a(t,{children:[e(r,{children:"Huisnummer"}),e(i,{children:"1"})]}),a(t,{children:[e(r,{children:"Huisletter"}),e(i,{notranslate:!0})]}),a(t,{children:[e(r,{children:"Huisnummertoevoeging"}),e(i,{notranslate:!0})]}),a(t,{children:[e(r,{children:"Postcode"}),e(i,{notranslate:!0,children:"3521AZ"})]}),a(t,{children:[e(r,{children:"Woonplaats"}),e(i,{notranslate:!0,children:"Utrecht"})]})]}),e(l,{}),e(n,{children:"Contactgegevens"}),a(s,{appearance:"rows",children:[a(t,{children:[e(r,{children:"Telefoonnummmer"}),e(i,{children:"0612345678"})]}),a(t,{children:[e(r,{children:"E-mailadres"}),e(i,{notranslate:!0,children:e(w,{children:"example@example.com"})})]})]}),e(l,{}),e(n,{children:"De verhuizing"}),e(s,{appearance:"rows",children:a(t,{children:[e(r,{children:"Verhuisdatum"}),e(i,{children:"11-08-2022"})]})}),e(l,{}),e(n,{children:"Nieuwe Adres"}),a(s,{appearance:"rows",children:[a(t,{children:[e(r,{children:"Postcode"}),e(i,{notranslate:!0,children:"3521AZ"})]}),a(t,{children:[e(r,{children:"Huisnummer"}),e(i,{children:"1"})]}),a(t,{children:[e(r,{children:"Selecteer uw nieuwe adres"}),e(i,{notranslate:!0,children:"Stadsplateau 1"})]})]}),e(l,{}),e(n,{children:"Woonsituatie"}),a(s,{appearance:"rows",children:[a(t,{children:[e(r,{children:"Hoeveel personen - inclusief uzelf - wonen er na uw verhuizing op het nieuwe adres?"}),e(i,{children:"3"})]}),a(t,{children:[e(r,{children:"Wat is uw nieuwe woonsituatie?"}),e(i,{children:"Ik ben (mede-)eigenaar van de woning/appartement/studio"})]})]})]}),e(l,{}),a(H,{children:[e(v,{children:"AKKOORD EN VERSTUREN"}),a("form",{children:[a(f,{children:[e(E,{id:"akkoord"}),e(k,{htmlFor:"akkoord",children:"Ja, ik heb alles juist ingevuld."})]}),a(S,{appearance:"primary-action-button",disabled:!0,type:"submit",children:["Versturen",e(L,{})]})]})]}),e(u,{href:"/",children:"VORIGE"})]}),e(b,{})]})};var h,D,m;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <Page {...args}>
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
        <Heading2>Controleren en versturen</Heading2>
        <Paragraph>
          Bijna klaar! Controleer hieronder of alle gegevens kloppen. Als alles is zoals het moet, zet dan onderaan een
          vinkje en verstuur het formulier.
        </Paragraph>
        <section>
          <Heading2>Uw gegevens</Heading2>
          <Heading3>PERSOONSGEGEVENS</Heading3>
          <DataList appearance="rows">
            <DataListItem>
              <DataListKey>Burgerservicenummer</DataListKey>
              <DataListValue>298272921</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>Aanhef</DataListKey>
              <DataListValue>Vrouw</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>Voorletter(s)</DataListKey>
              <DataListValue notranslate>C.</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>Tussenvoegsel(s)</DataListKey>
              <DataListValue notranslate></DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>Achternaam</DataListKey>
              <DataListValue notranslate>Verburg</DataListValue>
            </DataListItem>
          </DataList>
          <Separator />
          <Heading3>ADRESGEGEVENS</Heading3>
          <DataList appearance="rows">
            <DataListItem>
              <DataListKey>Straatnaam</DataListKey>
              <DataListValue notranslate>Stadskantoor</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>Huisnummer</DataListKey>
              <DataListValue>1</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>Huisletter</DataListKey>
              <DataListValue notranslate></DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>Huisnummertoevoeging</DataListKey>
              <DataListValue notranslate></DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>Postcode</DataListKey>
              <DataListValue notranslate>3521AZ</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>Woonplaats</DataListKey>
              <DataListValue notranslate>Utrecht</DataListValue>
            </DataListItem>
          </DataList>
          <Separator />
          <Heading3>Contactgegevens</Heading3>
          <DataList appearance="rows">
            <DataListItem>
              <DataListKey>Telefoonnummmer</DataListKey>
              <DataListValue>0612345678</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>E-mailadres</DataListKey>
              <DataListValue notranslate>
                <URLValue>example@example.com</URLValue>
              </DataListValue>
            </DataListItem>
          </DataList>
          <Separator />
          <Heading3>De verhuizing</Heading3>
          <DataList appearance="rows">
            <DataListItem>
              <DataListKey>Verhuisdatum</DataListKey>
              <DataListValue>11-08-2022</DataListValue>
            </DataListItem>
          </DataList>
          <Separator />
          <Heading3>Nieuwe Adres</Heading3>
          <DataList appearance="rows">
            <DataListItem>
              <DataListKey>Postcode</DataListKey>
              <DataListValue notranslate>3521AZ</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>Huisnummer</DataListKey>
              <DataListValue>1</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>Selecteer uw nieuwe adres</DataListKey>
              <DataListValue notranslate>Stadsplateau 1</DataListValue>
            </DataListItem>
          </DataList>
          <Separator />
          <Heading3>Woonsituatie</Heading3>
          <DataList appearance="rows">
            <DataListItem>
              <DataListKey>
                Hoeveel personen - inclusief uzelf - wonen er na uw verhuizing op het nieuwe adres?
              </DataListKey>
              <DataListValue>3</DataListValue>
            </DataListItem>
            <DataListItem>
              <DataListKey>Wat is uw nieuwe woonsituatie?</DataListKey>
              <DataListValue>Ik ben (mede-)eigenaar van de woning/appartement/studio</DataListValue>
            </DataListItem>
          </DataList>
        </section>
        <Separator />
        <Fieldset>
          <FieldsetLegend>AKKOORD EN VERSTUREN</FieldsetLegend>
          <form>
            <FormField>
              <Checkbox id="akkoord" />
              <FormLabel htmlFor="akkoord">Ja, ik heb alles juist ingevuld.</FormLabel>
            </FormField>
            <Button appearance="primary-action-button" disabled type="submit">
              Versturen
              <UtrechtIconArrow />
            </Button>
          </form>
        </Fieldset>
        <Link href="/">VORIGE</Link>
      </PageContent>
      <PageFooter />
    </Page>
}`,...(m=(D=o.parameters)==null?void 0:D.docs)==null?void 0:m.source}}};const W=["Four"];export{o as Four,W as __namedExportsOrder,J as default};
//# sourceMappingURL=PageStep-4.stories-706d4777.js.map
