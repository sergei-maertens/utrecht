import{a as n,F as r,j as e}from"./jsx-runtime-91a467a5.js";import"./chunk-PCJTTTQV-43552223.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{D as l,P as s,A as d,a as p,S as m}from"./index-845ab2f3.js";import{_ as u}from"./index-322fda34.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-422db07f.js";import"../sb-preview/runtime.mjs";import"./react-18-ff2c0a32.js";import"./index-8ce4a492.js";import"./index-d475d2ea.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-9d29e343.js";import"./index-356e4a49.js";import"./defineProperty-a128c648.js";import"./clsx.m-1229b3e0.js";const c=`<!-- @license CC0-1.0 -->

# HTML Content

Collection of all semantic HTML styles in the component library
`,_={title:"React Component/HTML Content",id:"react-html-content",component:u,args:{dangerouslySetInnerHTML:{__html:`
    <article>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <p><strong>Paragraph</strong>: Lorem ipsum dolor sit amet, <em>consectetur adipiscing elit</em>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id <a href="https://example.com" target="_blank" rel="external">est laborum</a>.</p>
    <blockquote>
      <p>
        No man is an island,
        <br/>
        Entire of itself;
        <br/>
        Every man is a piece of the continent,
        <br/>
        A part of the main.
      </p>
      <p>
        If a clod be washed away by the sea,
        <br />
        Europe is the less,
        <br />
        As well as if a promontory were:
        <br />
        As well as if a manor of thy friend's
        <br />
        Or of thine own were.
      </p>
      <p>
        Any man's death diminishes me,
        <br />
        Because I am involved in mankind.
        <br />
        And therefore never send to know for whom the bell tolls;
        <br />
        It tolls for thee.
      </p>
    </blockquote>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <table>
      <caption>Table Caption</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Header Column A</th>
          <th scope="col">Header Column B</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Header Row 1</th>
          <td>Cell A1</td>
          <td>Cell B1</td>
        </tr>
        <tr>
          <th scope="row">Header Row 2</th>
          <td>Cell A2</td>
          <td>Cell B2</td>
        </tr>
      </tbody>
    </table>
    </article>
    <form action="https://example.com/" method="post">
      <p>
        <label for="username">Username</label>
        <input type="text" autocomplete="username" id="username" name="username">
      </p>
      <p>
        <label for="notes">Notes</label>
        <textarea id="notes" name="notes"></textarea>
      </p>
      <fieldset>
        <legend>Disabled inputs</legend>
        <p>
          <label for="disabled-username">Username</label>
          <input type="text" autocomplete="username" id="disabled-username" name="username" disabled>
        </p>
        <p>
          <label for="disabled-notes">Notes</label>
          <textarea id="disabled-notes" name="notes" disabled></textarea>
        </p>
      </fieldset>
      <fieldset>
        <legend>Read-only inputs</legend>
        <p>
          <label for="readonly-username">Username</label>
          <input type="text" autocomplete="username" id="readonly-username" name="username" value="example" readonly>
        </p>
        <p>
          <label for="readonly-notes">Notes</label>
          <textarea id="readonly-notes" name="notes" value="example" readonly></textarea>
        </p>
      </fieldset>
      <fieldset>
        <legend>Inputs with placeholder</legend>
        <p>
          <label for="placeholder-username">Username</label>
          <input type="text" autocomplete="username" id="placeholder-username" name="username" placeholder="Username">
        </p>
        <p>
          <label for="placeholder-notes">Notes</label>
          <textarea id="placeholder-notes" name="notes" placeholder="Write some notes"></textarea>
        </p>
      </fieldset>
      <fieldset>
        <legend>Options</legend>
        <p>
          <input type="radio" id="option-a" name="option" value="A">
          <label for="option-a">Option A</label>
        </p>
        <p>
          <input type="radio" id="option-b" name="option" value="B">
          <label for="option-b">Option B</label>
        </p>
      </fieldset>
      <p>
        <input type="checkbox" id="eula" name="eula">
        <label for="eula">I agree to the terms and conditions</label>
      </p>
      <p>
        <button type="submit">Login</button>
      </p>
    </form>`}},parameters:{docs:{page:()=>n(r,{children:[e(l,{children:c}),e(s,{}),e(d,{story:p}),e(m,{})]})}}},t={};var a,o,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,_ as default};
//# sourceMappingURL=HTMLContent.stories-cadf3306.js.map
