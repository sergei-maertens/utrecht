import{a as r,F as n,j as e}from"./jsx-runtime-670450c2.js";import"./chunk-PCJTTTQV-8a033c10.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{D as l,P as s,A as p,a as d,S as m}from"./index-d13ef923.js";import{X as u}from"./index-a14f4abd.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./preload-helper-41c905a7.js";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./chunk-GWAJ4KRU-d69fdc61.js";import"./index-0e33defa.js";import"./index-d475d2ea.js";import"./memoizerific-a8c4a000.js";import"./index-1e419f15.js";import"./chunk-RDJSMFWU-eb6ed6e5.js";import"./chunk-FD4M6EBV-8d27da22.js";import"./chunk-NNAAFZ4U-67fa674f.js";import"./chunk-Y5O7ZP4P-195fbef2.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-5b183829.js";import"./index-b3b2312b.js";import"./isSymbol-69229716.js";import"./index-356e4a49.js";import"./clsx.m-b4f9149a.js";const c=`<!-- @license CC0-1.0 -->

# HTML Content

Collection of all semantic HTML styles in the component library
`,P={title:"React Component/HTML Content",id:"react-html-content",component:u,args:{dangerouslySetInnerHTML:{__html:`
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
    </form>`}},parameters:{docs:{page:()=>r(n,{children:[e(l,{children:c}),e(s,{}),e(p,{story:d}),e(m,{})]})}}},t={};var a,o,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const j=["Default"];export{t as Default,j as __namedExportsOrder,P as default};
//# sourceMappingURL=HTMLContent.stories-c8ae372d.js.map
