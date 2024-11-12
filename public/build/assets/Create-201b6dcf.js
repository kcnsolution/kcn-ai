import{r as x,W as f,j as t,F as b,b as e,c as v,d as s}from"./app-b5400095.js";import{B as N}from"./Breadcrumb-861bfeaa.js";import{c as y,U as w,D as C}from"./Dashboard-7e829a24.js";import{I as o}from"./Input-7f1bcea1.js";import{T as F}from"./TextArea-91952a6b.js";const L=()=>{const[l,d]=x.useState(null),{data:i,setData:c,post:u,errors:a,clearErrors:h}=f({image:"",name:"",designation:"",rating:"",comment:""}),m=r=>{c(r.target.name,r.target.value)},g=r=>{r.preventDefault(),h(),u(route("testimonial.store"))},p=r=>{const n=r.target.files;n&&n[0]&&(c("image",n[0]),d(URL.createObjectURL(n[0])))};return t(b,{children:[e(v,{title:"Testimonial Create"}),e(N,{Icon:y,title:"Testimonial Create"}),t(s.Card,{className:"max-w-[1000px] w-full mx-auto",children:[e("div",{className:"px-7 pt-7 pb-4 border-b border-b-gray-200",children:e("p",{className:"text18 font-bold text-gray-900",children:"Add New Testimonial"})}),t("form",{onSubmit:g,className:"p-7",children:[t("div",{className:"flex flex-col md:flex-row mb-12",children:[e("p",{className:"max-w-[164px] w-full font-medium text-gray-500 mb-1",children:"Profile Image"}),t("div",{children:[l?e(s.Avatar,{src:l,alt:"item-1",size:"xs",variant:"circular",className:"h-[100px] w-[100px]"}):e(w,{className:"h-[100px] w-[100px] text-blue-gray-500"}),t("div",{className:"mt-1 flex items-center",children:[e("label",{htmlhtmlFor:"formFileSm",className:"text12 font-medium text-gray-900 px-2.5 py-1.5 border border-gray-700 bg-gray-100 whitespace-nowrap",children:"Choose Photo"}),e("input",{hidden:!0,type:"file",id:"formFileSm",onChange:p,required:!0}),e("small",{className:"ml-3 text-gray-500",children:"JPG, JPEG, PNG, SVG File, Maximum 2MB"})]}),a.image&&e("p",{className:"text-sm text-red-500 mt-1",children:a.image})]})]}),e("div",{className:"mb-6",children:e(o,{fullWidth:!0,name:"name",value:i.name,error:a.name,placeholder:"Name of client or customer",onChange:m,label:"Full Name",flexLabel:!0,required:!0})}),e("div",{className:"mb-6",children:e(o,{fullWidth:!0,name:"designation",value:i.designation,error:a.designation,placeholder:"Designation of client or customer",onChange:m,label:"Designation",flexLabel:!0,required:!0})}),e("div",{className:"mb-6",children:e(o,{fullWidth:!0,type:"number",name:"rating",value:i.rating,error:a.rating,placeholder:"Rating of client or customer",onChange:m,label:"Rating",flexLabel:!0,required:!0})}),e("div",{className:"mb-6",children:e(F,{rows:4,fullWidth:!0,name:"comment",value:i.comment,error:a.comment,placeholder:"Review of customer or client",onChange:m,label:"Review",maxLength:180,flexLabel:!0,required:!0})}),e("div",{className:"flex items-center mt-10 md:pl-[164px]",children:e(s.Button,{type:"submit",variant:"text",color:"white",className:"bg-primary-500 hover:bg-primary-500 active:bg-primary-500 font-medium capitalize rounded-md text14",children:"Save Changes"})})]})]})]})};L.layout=l=>e(C,{children:l});export{L as default};
