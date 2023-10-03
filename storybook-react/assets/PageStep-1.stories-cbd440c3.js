import{a as t,j as e}from"./jsx-runtime-29545a09.js";import{U as b,a as y,b as V,c as w,d as E}from"./index.esm-cbe8f337.js";import{P as D}from"./Page-70a4289f.js";import{P as v}from"./PageHeader-7677cd7b.js";import{L as l}from"./Link-040f8057.js";import{P as H}from"./PageContent-939dc5c9.js";import{H as F}from"./Heading3-5ab17cff.js";import{B as I}from"./ButtonLink-27568c91.js";import{P as o}from"./Paragraph-e67a9fcb.js";import{H as K}from"./Heading1-fe98ef9d.js";import{H as n}from"./Heading2-a31ae1be.js";import{D as m,a,b as r,c as i}from"./DataList-d7663da0.js";import{S as d}from"./Separator-405bfbae.js";import{F as c}from"./FormField-29196f12.js";import{F as u}from"./FormLabel-6d569a5a.js";import{T as h}from"./Textbox-c473e1cb.js";import{B as P}from"./Button-e950cc69.js";import{P as S}from"./PageFooter-7d026905.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./objectWithoutProperties-8df67654.js";import"./typeof-7fd5df1e.js";import"./getPrototypeOf-624f05c9.js";import"./index-d3ea75b5.js";import"./iframe-58ff7407.js";import"../sb-preview/runtime.js";import"./clsx.m-1229b3e0.js";const ie={title:"Template/Multistep form/Step 1",id:"template-form-pages-step-1",component:D},s={render:f=>t(D,{...f,children:[e(v,{children:e(l,{href:"/",children:e(b,{})})}),t(H,{style:{"--utrecht-space-around":1},children:[e(y,{json:JSON.stringify([{href:"https://example/",title:"Home",current:!1},{href:"https://example/",title:"Online loket",current:!0}]),variant:"arrows"}),t("aside",{children:[e(F,{children:"MIJN LOKET"}),e(V,{children:t(I,{appearance:"primary-action-button",children:["Uitloggen",e(w,{})]})}),e(o,{children:"Mevrouw Cindy"}),e("br",{}),e("br",{})]}),t(K,{children:[e(o,{lead:!0,children:"ONLINE LOKET"}),"Een verhuizing doorgeven"]}),t("section",{children:[e(n,{children:"Uw gegevens"}),t(o,{children:["Hieronder ziet u de gegevens die wij van u weten. Kloppen uw gegevens niet? Dan kunt u deze laten aanpassen via",t(l,{href:"https://www.utrecht.nl/persoonsgegevenswijzigen",children:[" ","www.utrecht.nl/persoonsgegevenswijzigen."," "]}),"Uw e-mailadres en telefoonnummer vult u zelf in."]})]}),t("section",{children:[e(n,{children:"PERSOONSGEGEVENS"}),t(m,{appearance:"rows",children:[t(a,{children:[e(r,{children:"Burgerservicenummer"}),e(i,{children:"298272921"})]}),t(a,{children:[e(r,{children:"Aanhef"}),e(i,{children:"Vrouw"})]}),t(a,{children:[e(r,{children:"Voorletter(s)"}),e(i,{notranslate:!0,children:"C."})]}),t(a,{children:[e(r,{children:"Tussenvoegsel(s)"}),e(i,{notranslate:!0})]}),t(a,{children:[e(r,{children:"Achternaam"}),e(i,{notranslate:!0,children:"Verburg"})]})]})]}),e(d,{}),t("section",{children:[e(n,{children:"ADRESGEGEVENS"}),t(m,{appearance:"rows",children:[t(a,{children:[e(r,{children:"Straatnaam"}),e(i,{notranslate:!0,children:"Stadsplateau"})]}),t(a,{children:[e(r,{children:"Huisnummer"}),e(i,{children:"1"})]}),t(a,{children:[e(r,{children:"Huisletter"}),e(i,{notranslate:!0})]}),t(a,{children:[e(r,{children:"Huisnummertoevoeging"}),e(i,{notranslate:!0})]}),t(a,{children:[e(r,{children:"Postcode"}),e(i,{notranslate:!0,children:"3521AZ"})]}),t(a,{children:[e(r,{children:"Woonplaats"}),e(i,{notranslate:!0,children:"Utrecht"})]})]})]}),e(d,{}),t("section",{children:[e(n,{children:"CONTACTGEGEVENS"}),t("form",{children:[t(c,{children:[e(u,{htmlFor:"telefoonnummer",children:"Telefoonnummer"}),e("br",{}),e(h,{id:"telefoonnummer"})]}),t(c,{children:[e(u,{id:"email-label",htmlFor:"email",children:"E-mailadres *"}),e("br",{}),e(h,{required:!0,id:"email","aria-labelledby":"email-label","aria-describedby":"email-desc"}),e(E,{id:"email-desc",children:"Vragen met een * zijn verplicht."})]}),e(P,{appearance:"primary-action-button",type:"submit",children:"VOLGENDE"})]})]})]}),e(S,{})]})};var p,L,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Page {...args}>
      <PageHeader>
        <Link href="/">
          <UtrechtLogo />
        </Link>
      </PageHeader>
      <PageContent style={({
      '--utrecht-space-around': 1
    } as any)}>
        <UtrechtBreadcrumbNav json={JSON.stringify([{
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
        <section>
          <Heading2>Uw gegevens</Heading2>
          <Paragraph>
            Hieronder ziet u de gegevens die wij van u weten. Kloppen uw gegevens niet? Dan kunt u deze laten aanpassen
            via
            <Link href="https://www.utrecht.nl/persoonsgegevenswijzigen">
              {' '}
              www.utrecht.nl/persoonsgegevenswijzigen.{' '}
            </Link>
            Uw e-mailadres en telefoonnummer vult u zelf in.
          </Paragraph>
        </section>
        <section>
          <Heading2>PERSOONSGEGEVENS</Heading2>
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
        </section>
        <Separator />
        <section>
          <Heading2>ADRESGEGEVENS</Heading2>
          <DataList appearance="rows">
            <DataListItem>
              <DataListKey>Straatnaam</DataListKey>
              <DataListValue notranslate>Stadsplateau</DataListValue>
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
        </section>
        <Separator />
        <section>
          <Heading2>CONTACTGEGEVENS</Heading2>
          <form>
            <FormField>
              <FormLabel htmlFor="telefoonnummer">Telefoonnummer</FormLabel>
              <br />
              <Textbox id="telefoonnummer" />
            </FormField>
            <FormField>
              <FormLabel id="email-label" htmlFor="email">
                E-mailadres *
              </FormLabel>
              <br />
              <Textbox required id="email" aria-labelledby="email-label" aria-describedby="email-desc" />
              <UtrechtFormFieldDescription id="email-desc">
                Vragen met een * zijn verplicht.
              </UtrechtFormFieldDescription>
            </FormField>
            <Button appearance="primary-action-button" type="submit">
              VOLGENDE
            </Button>
          </form>
        </section>
      </PageContent>
      <PageFooter />
    </Page>
}`,...(g=(L=s.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};const ne=["One"];export{s as One,ne as __namedExportsOrder,ie as default};
//# sourceMappingURL=PageStep-1.stories-cbd440c3.js.map
