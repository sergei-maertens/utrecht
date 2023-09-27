import{a as n,F as r,j as e}from"./jsx-runtime-29545a09.js";import"./chunk-S4VUQJ4A-1235dcff.js";import{D as l,P as s,A as d,b as p,d as m}from"./index-0288c308.js";import{r as u}from"./index-3a754f1b.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./iframe-24fbac97.js";import"../sb-preview/runtime.js";import"./react-18-988a5df2.js";import"./index-d3ea75b5.js";import"./index-d37d4223.js";import"./extends-98964cd2.js";import"./getPrototypeOf-a3ec403f.js";import"./index-afe93f9d.js";import"./index-356e4a49.js";import"./defineProperty-75c483e5.js";import"./clsx.m-1229b3e0.js";const c=`<!-- @license CC0-1.0 -->

# HTML Content

Collection of all semantic HTML styles in the component library
`,I={title:"React Component/HTML Content",id:"react-html-content",component:u,args:{dangerouslySetInnerHTML:{__html:`
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
    </form>`}},parameters:{docs:{page:()=>n(r,{children:[e(l,{children:c}),e(s,{}),e(d,{story:p}),e(m,{})]})}}},t={};var a,o,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const R=["Default"];export{t as Default,R as __namedExportsOrder,I as default};
//# sourceMappingURL=HTMLContent.stories-607b6d03.js.map
