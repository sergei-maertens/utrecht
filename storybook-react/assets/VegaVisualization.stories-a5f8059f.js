import{V as x}from"./index-1325f033.js";import{t as A,d as k}from"./util-cf005e6f.js";import"./defineProperty-75c483e5.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-29545a09.js";import"./clsx.m-1229b3e0.js";import"./extends-98964cd2.js";import"./index-8d47fad6.js";const C={"vega-visualization":{"font-family":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"*",inherits:!0}},type:"fontFamilies"},axis:{domain:{color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}},type:"color"}}}}},B={utrecht:C},G={title:"React Component/Vega Visualization",id:"react-vega-visualization",component:x,argTypes:{"aria-label":{description:"Accessible label to describe the visualization on screen readers.",control:{type:"string"}},spec:{description:"The specification of the visualization according to the Vega or Vega-Lite schema.",control:{type:"object"}}},parameters:{tokensPrefix:"utrecht-vega-visualization",tokens:A,tokensDefinition:B}},a={args:{"aria-label":"Grafiek van data",spec:{$schema:"https://vega.github.io/schema/vega-lite/v5.json",description:"A simple bar chart with embedded data.",data:{values:[{a:"A",b:28},{a:"B",b:55},{a:"C",b:43},{a:"D",b:91},{a:"E",b:81},{a:"F",b:53},{a:"G",b:19},{a:"H",b:87},{a:"I",b:52}]},title:"Staafgrafiek",mark:"bar",encoding:{x:{field:"a",type:"nominal",axis:{labelAngle:0},title:"x-Axis"},y:{field:"b",type:"quantitative",title:"y-Axis"}}}}},e={args:{"aria-label":"Grafiek van data",spec:{$schema:"https://vega.github.io/schema/vega-lite/v5.json",data:{values:[{category:"A",group:"x",value:.1},{category:"A",group:"y",value:.6},{category:"A",group:"z",value:.9},{category:"B",group:"x",value:.7},{category:"B",group:"y",value:.2},{category:"B",group:"z",value:1},{category:"C",group:"x",value:.6},{category:"C",group:"y",value:.1},{category:"C",group:"z",value:.2}]},mark:"bar",encoding:{y:{field:"value",type:"quantitative"},x:{field:"category"},xOffset:{field:"group"},color:{field:"group"}}}}},n={args:{"aria-label":"Grafiek van data",spec:{$schema:"https://vega.github.io/schema/vega-lite/v5.json",description:"A simple line chart with embedded data.",data:{values:[{a:"A",b:28},{a:"B",b:55},{a:"C",b:43},{a:"D",b:91},{a:"E",b:81},{a:"F",b:53},{a:"G",b:19},{a:"H",b:87},{a:"I",b:52}]},title:"Lijngrafiek",mark:{type:"line",point:!0},encoding:{x:{field:"a",type:"nominal",axis:{labelAngle:0},title:"x-Axis"},y:{field:"b",type:"quantitative",title:"y-Axis"}}}}},t={args:{"aria-label":"Grafiek van data",spec:{$schema:"https://vega.github.io/schema/vega-lite/v5.json",description:"A simple pie chart with embedded data.",data:{values:[{category:1,value:4},{category:2,value:6},{category:3,value:10},{category:4,value:3},{category:5,value:7},{category:6,value:8}]},mark:"arc",encoding:{theta:{field:"value",type:"quantitative"},color:{field:"category",type:"nominal",legend:{padding:16}}}}}},r=k(G);var i,o,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Grafiek van data',
    spec: {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      description: 'A simple bar chart with embedded data.',
      data: {
        values: [{
          a: 'A',
          b: 28
        }, {
          a: 'B',
          b: 55
        }, {
          a: 'C',
          b: 43
        }, {
          a: 'D',
          b: 91
        }, {
          a: 'E',
          b: 81
        }, {
          a: 'F',
          b: 53
        }, {
          a: 'G',
          b: 19
        }, {
          a: 'H',
          b: 87
        }, {
          a: 'I',
          b: 52
        }]
      },
      title: 'Staafgrafiek',
      mark: 'bar',
      encoding: {
        x: {
          field: 'a',
          type: 'nominal',
          axis: {
            labelAngle: 0
          },
          title: 'x-Axis'
        },
        y: {
          field: 'b',
          type: 'quantitative',
          title: 'y-Axis'
        }
      }
    }
  }
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var l,c,g;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Grafiek van data',
    spec: {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      data: {
        values: [{
          category: 'A',
          group: 'x',
          value: 0.1
        }, {
          category: 'A',
          group: 'y',
          value: 0.6
        }, {
          category: 'A',
          group: 'z',
          value: 0.9
        }, {
          category: 'B',
          group: 'x',
          value: 0.7
        }, {
          category: 'B',
          group: 'y',
          value: 0.2
        }, {
          category: 'B',
          group: 'z',
          value: 1.0
        }, {
          category: 'C',
          group: 'x',
          value: 0.6
        }, {
          category: 'C',
          group: 'y',
          value: 0.1
        }, {
          category: 'C',
          group: 'z',
          value: 0.2
        }]
      },
      mark: 'bar',
      encoding: {
        y: {
          field: 'value',
          type: 'quantitative'
        },
        x: {
          field: 'category'
        },
        xOffset: {
          field: 'group'
        },
        color: {
          field: 'group'
        }
      }
    }
  }
}`,...(g=(c=e.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var p,d,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Grafiek van data',
    spec: {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      description: 'A simple line chart with embedded data.',
      data: {
        values: [{
          a: 'A',
          b: 28
        }, {
          a: 'B',
          b: 55
        }, {
          a: 'C',
          b: 43
        }, {
          a: 'D',
          b: 91
        }, {
          a: 'E',
          b: 81
        }, {
          a: 'F',
          b: 53
        }, {
          a: 'G',
          b: 19
        }, {
          a: 'H',
          b: 87
        }, {
          a: 'I',
          b: 52
        }]
      },
      title: 'Lijngrafiek',
      mark: {
        type: 'line',
        point: true
      },
      encoding: {
        x: {
          field: 'a',
          type: 'nominal',
          axis: {
            labelAngle: 0
          },
          title: 'x-Axis'
        },
        y: {
          field: 'b',
          type: 'quantitative',
          title: 'y-Axis'
        }
      }
    }
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var v,m,y;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    'aria-label': 'Grafiek van data',
    spec: {
      $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
      description: 'A simple pie chart with embedded data.',
      data: {
        values: [{
          category: 1,
          value: 4
        }, {
          category: 2,
          value: 6
        }, {
          category: 3,
          value: 10
        }, {
          category: 4,
          value: 3
        }, {
          category: 5,
          value: 7
        }, {
          category: 6,
          value: 8
        }]
      },
      mark: 'arc',
      encoding: {
        theta: {
          field: 'value',
          type: 'quantitative'
        },
        color: {
          field: 'category',
          type: 'nominal',
          legend: {
            padding: 16
          }
        }
      }
    }
  }
}`,...(y=(m=t.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var b,h,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:"designTokenStory(meta)",...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const E=["BarChart","GroupedBarChart","LineChart","PieChart","DesignTokens"];export{a as BarChart,r as DesignTokens,e as GroupedBarChart,n as LineChart,t as PieChart,E as __namedExportsOrder,G as default};
//# sourceMappingURL=VegaVisualization.stories-a5f8059f.js.map
