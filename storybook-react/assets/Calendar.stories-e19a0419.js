import{aj as u,ak as r,al as M,am as s,an as C,ao as j,ap as z,aq as W,ar as T}from"./index-526886d8.js";import{t as V,d as A}from"./util-3f44594b.js";import"./defineProperty-75c483e5.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./jsx-runtime-29545a09.js";import"./clsx.m-1229b3e0.js";import"./extends-98964cd2.js";import"./index-8d47fad6.js";var S={lessThanXSeconds:{one:"minder dan een seconde",other:"minder dan {{count}} seconden"},xSeconds:{one:"1 seconde",other:"{{count}} seconden"},halfAMinute:"een halve minuut",lessThanXMinutes:{one:"minder dan een minuut",other:"minder dan {{count}} minuten"},xMinutes:{one:"een minuut",other:"{{count}} minuten"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} uur"},xHours:{one:"1 uur",other:"{{count}} uur"},xDays:{one:"1 dag",other:"{{count}} dagen"},aboutXWeeks:{one:"ongeveer 1 week",other:"ongeveer {{count}} weken"},xWeeks:{one:"1 week",other:"{{count}} weken"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maanden"},xMonths:{one:"1 maand",other:"{{count}} maanden"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer dan 1 jaar",other:"meer dan {{count}} jaar"},almostXYears:{one:"bijna 1 jaar",other:"bijna {{count}} jaar"}},B=function(t,o,n){var a,i=S[t];return typeof i=="string"?a=i:o===1?a=i.one:a=i.other.replace("{{count}}",String(o)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"over "+a:a+" geleden":a};const I=B;var Y={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd-MM-y"},H={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},N={full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},E={date:u({formats:Y,defaultWidth:"full"}),time:u({formats:H,defaultWidth:"full"}),dateTime:u({formats:N,defaultWidth:"full"})};const F=E;var L={lastWeek:"'afgelopen' eeee 'om' p",yesterday:"'gisteren om' p",today:"'vandaag om' p",tomorrow:"'morgen om' p",nextWeek:"eeee 'om' p",other:"P"},R=function(t,o,n,a){return L[t]};const X=R;var _={narrow:["v.C.","n.C."],abbreviated:["v.Chr.","n.Chr."],wide:["voor Christus","na Christus"]},q={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1e kwartaal","2e kwartaal","3e kwartaal","4e kwartaal"]},K={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mrt.","apr.","mei","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},O={narrow:["Z","M","D","W","D","V","Z"],short:["zo","ma","di","wo","do","vr","za"],abbreviated:["zon","maa","din","woe","don","vri","zat"],wide:["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"]},Z={narrow:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middaguur",morning:"'s ochtends",afternoon:"'s middags",evening:"'s avonds",night:"'s nachts"},abbreviated:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middaguur",morning:"'s ochtends",afternoon:"'s middags",evening:"'s avonds",night:"'s nachts"},wide:{am:"AM",pm:"PM",midnight:"middernacht",noon:"het middaguur",morning:"'s ochtends",afternoon:"'s middags",evening:"'s avonds",night:"'s nachts"}},U=function(t,o){var n=Number(t);return n+"e"},J={ordinalNumber:U,era:r({values:_,defaultWidth:"wide"}),quarter:r({values:q,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:r({values:K,defaultWidth:"wide"}),day:r({values:O,defaultWidth:"wide"}),dayPeriod:r({values:Z,defaultWidth:"wide"})};const Q=J;var G=/^(\d+)e?/i,ee=/\d+/i,te={narrow:/^([vn]\.? ?C\.?)/,abbreviated:/^([vn]\. ?Chr\.?)/,wide:/^((voor|na) Christus)/},ne={any:[/^v/,/^n/]},ae={narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234]e kwartaal/i},re={any:[/1/i,/2/i,/3/i,/4/i]},se={narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i},oe={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^jan/i,/^feb/i,/^m(r|a)/i,/^apr/i,/^mei/i,/^jun/i,/^jul/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i]},ie={narrow:/^[zmdwv]/i,short:/^(zo|ma|di|wo|do|vr|za)/i,abbreviated:/^(zon|maa|din|woe|don|vri|zat)/i,wide:/^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i},le={narrow:[/^z/i,/^m/i,/^d/i,/^w/i,/^d/i,/^v/i,/^z/i],any:[/^zo/i,/^ma/i,/^di/i,/^wo/i,/^do/i,/^vr/i,/^za/i]},de={any:/^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i},ce={any:{am:/^am/i,pm:/^pm/i,midnight:/^middernacht/i,noon:/^het middaguur/i,morning:/ochtend/i,afternoon:/middag/i,evening:/avond/i,night:/nacht/i}},me={ordinalNumber:M({matchPattern:G,parsePattern:ee,valueCallback:function(t){return parseInt(t,10)}}),era:s({matchPatterns:te,defaultMatchWidth:"wide",parsePatterns:ne,defaultParseWidth:"any"}),quarter:s({matchPatterns:ae,defaultMatchWidth:"wide",parsePatterns:re,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:s({matchPatterns:se,defaultMatchWidth:"wide",parsePatterns:oe,defaultParseWidth:"any"}),day:s({matchPatterns:ie,defaultMatchWidth:"wide",parsePatterns:le,defaultParseWidth:"any"}),dayPeriod:s({matchPatterns:de,defaultMatchWidth:"any",parsePatterns:ce,defaultParseWidth:"any"})};const ue=me;var he={code:"nl",formatDistance:I,formatLong:F,formatRelative:X,localize:Q,match:ue,options:{weekStartsOn:1,firstWeekContainsDate:4}};const ye=he,ge={calendar:{width:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},table:{"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"weeks-item":{width:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}},"days-item-day":{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-width":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},hover:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},focus:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},active:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},"out-of-the-month":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}},"is-today":{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},emphasis:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},selected:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"font-weight":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<number>",inherits:!0}}}},disabled:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"border-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}}},navigation:{"background-color":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}},"padding-block-start":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},"padding-block-end":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},label:{"min-inline-size":{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}},color:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<color>",inherits:!0}}}}},icon:{size:{$extensions:{"nl.nldesignsystem.css.property":{syntax:"<length>",inherits:!0}}}}}},pe={utrecht:ge},h=[{date:"2022-09-22T21:59:59.999Z",emphasis:!0,selected:!1,disabled:!1},{date:"2022-09-23T21:59:59.999Z",emphasis:!1,selected:!1,disabled:!1},{date:"2022-09-24T21:59:59.999Z",emphasis:!1,selected:!1,disabled:!0}],ve={title:"React Component/Calendar",id:"react-calendar",component:C,parameters:{tokensPrefix:"utrecht-calendar",tokens:V,tokensDefinition:pe},args:{onCalendarClick:e=>{console.log(e)},currentDate:j(new Date,3),events:h,locale:ye,previousYearButtonTitle:"Vorig jaar",nextYearButtonTitle:"volgend jaar",previousMonthButtonTitle:"Vorige maand",nextMonthButtonTitle:"volgende maand",minDate:new Date,maxDate:z(new Date,1)},argTypes:{onCalendarClick:{name:"onCalendarClick",description:"It's a callback function that returns the selected date, triggered when you click on the day",type:{name:"number",required:!1},table:{category:"API"}},events:{name:"events",description:"An array of event objects that contain some properties that allow you to change the calendar day style base on your value `{date?: Date; emphasis?: boolean; selected?: boolean; disabled?: boolean;}`",table:{category:"API",defaultValue:{summary:void 0}}},currentDate:{name:"currentDate",description:"The default value is `new Date()`, but you can provide a different date",table:{category:"API",defaultValue:{summary:new Date}}},locale:{name:"locale",description:"to change the calendar language by using `date-fns/locale`\n\n `import { nl, enUS } from 'date-fns/locale';`",table:{category:"API",defaultValue:{summary:"enUS"}}},previousYearButtonTitle:{name:"previousYearButtonTitle",table:{category:"API",defaultValue:{summary:"Previous year"}}},nextYearButtonTitle:{name:"nextYearButtonTitle",table:{category:"API",defaultValue:{summary:"Next year"}}},previousMonthButtonTitle:{name:"previousMonthButtonTitle",table:{category:"API",defaultValue:{summary:"Previous month"}}},nextMonthButtonTitle:{name:"nextMonthButtonTitle",table:{category:"API",defaultValue:{summary:"Next month"}}},minDate:{name:"minDate",table:{category:"API",defaultValue:{summary:"Minimum date"}}},maxDate:{name:"maxDate",table:{category:"API",defaultValue:{summary:"Maximum date"}}}}},l={},d={args:{onCalendarClick:e=>{console.log(e)},currentDate:new Date,minDate:new Date,maxDate:W(new Date,2),events:h}},c={args:{onCalendarClick:e=>{console.log(e)},currentDate:new Date,events:h,locale:T}},m=A(ve);var y,g,p;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(p=(g=l.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var v,x,b;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    onCalendarClick: date => {
      console.log(date);
    },
    currentDate: new Date(),
    minDate: new Date(),
    maxDate: addWeeks(new Date(), 2),
    events
  }
}`,...(b=(x=d.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,w,k;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    onCalendarClick: date => {
      console.log(date);
    },
    currentDate: new Date(),
    events,
    locale: enUS
  }
}`,...(k=(w=c.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var D,P,$;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:"designTokenStory(meta)",...($=(P=m.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};const Ce=["Default","LimitedRangeCalendar","EnglishCalendar","DesignTokens"];export{l as Default,m as DesignTokens,c as EnglishCalendar,d as LimitedRangeCalendar,Ce as __namedExportsOrder,ve as default};
//# sourceMappingURL=Calendar.stories-e19a0419.js.map
