import{r as a,j as c,F as n,b as e,c as m}from"./app-b5400095.js";import{B as u}from"./Breadcrumb-861bfeaa.js";import{h as f,D as d}from"./Dashboard-7e829a24.js";import{T as p}from"./TextSaveEditor-176607b4.js";import"./katex-cb607707.js";import"./Card-fdb03dd0.js";import"./Input-7f1bcea1.js";const x=s=>{const[t,r]=a.useState(s.text),[i,o]=a.useState(!1),l=()=>{r({title:"",description:"",audio:""})};return a.useEffect(()=>{r(s.text)},[]),a.useEffect(()=>{t.title.length>0&&t.description.length>0&&t.text.length>0?o(!0):o(!1)},[t]),c(n,{children:[e(m,{title:"Notifications"}),e(u,{Icon:f,title:"Update Document"}),e("div",{className:"max-w-[920px] w-full mx-auto",children:e(p,{textInfo:t,request:"PUT",isSubmit:i,clearHandler:l})})]})};x.layout=s=>e(d,{children:s});export{x as default};
