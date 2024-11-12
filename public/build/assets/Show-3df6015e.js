import{b as e,r as c,j as i,F as d,c as n,d as a,g as m}from"./app-b5400095.js";import{I as p,D as h}from"./Dashboard-7e829a24.js";import{D as g}from"./Delete-87e803fa.js";import{B as u}from"./Breadcrumb-861bfeaa.js";import{D as C}from"./Download-4e6125d2.js";import{T as f,a as v}from"./TablePagination-3ae721a2.js";import"./search-bf68dfd3.js";import"./ArrowDown-69cd16b5.js";import"./debounce-367be966.js";const y=({className:t})=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:t,children:e("path",{d:"M7.63512 14.1678C7.35442 14.1678 7.08521 14.0563 6.88673 13.8578C6.68825 13.6593 6.57674 13.3901 6.57674 13.1094C6.57674 12.8287 6.68825 12.5595 6.88673 12.361C7.08521 12.1625 7.35442 12.051 7.63512 12.051C7.91581 12.051 8.18502 12.1625 8.3835 12.361C8.58198 12.5595 8.69349 12.8287 8.69349 13.1094C8.69349 13.3901 8.58198 13.6593 8.3835 13.8578C8.18502 14.0563 7.91581 14.1678 7.63512 14.1678ZM7.63512 9.05839C7.35442 9.05839 7.08521 8.94688 6.88673 8.7484C6.68825 8.54991 6.57674 8.28071 6.57674 8.00001C6.57674 7.71931 6.68825 7.45011 6.88673 7.25163C7.08521 7.05314 7.35442 6.94163 7.63512 6.94163C7.91581 6.94163 8.18502 7.05314 8.3835 7.25163C8.58198 7.45011 8.69349 7.71931 8.69349 8.00001C8.69349 8.28071 8.58198 8.54991 8.3835 8.7484C8.18502 8.94688 7.91581 9.05839 7.63512 9.05839ZM6.57674 2.89061C6.57674 2.60991 6.68825 2.34071 6.88673 2.14222C7.08521 1.94374 7.35442 1.83223 7.63512 1.83223C7.91581 1.83223 8.18502 1.94374 8.3835 2.14222C8.58198 2.34071 8.69349 2.60991 8.69349 2.89061C8.69349 3.17131 8.58198 3.44051 8.3835 3.63899C8.18502 3.83748 7.91581 3.94898 7.63512 3.94898C7.35442 3.94898 7.08521 3.83748 6.88673 3.63899C6.68825 3.44051 6.57674 3.17131 6.57674 2.89061Z",fill:"currentColor",stroke:"currentColor",strokeWidth:"0.948889"})}),b=t=>{const[l,s]=c.useState(t.images);for(let r=1;r<=l.last_page;r++);const o=r=>{m.delete(route("generated-images-delete",r))};return i(d,{children:[e(n,{title:"Generated Images"}),e(u,{Icon:p,title:"Generated Images"}),i(a.Card,{className:"shadow-card",children:[e(f,{data:l,title:"All Images",globalSearch:!0,setSearchData:s,searchPath:route("generated-images.search"),tablePageSizes:[20,25,30,35]}),e("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 p-7",children:l.data.map(r=>i("div",{className:"relative",children:[e("img",{src:`/${r.img_url}`,className:"w-full h-full rounded-lg",alt:r.title}),e("div",{className:"absolute top-0 left-0 w-full h-full p-3 group hover:bg-[#181717] hover:bg-opacity-40 rounded-lg",children:e("div",{className:"relative",children:e("div",{className:"absolute top-0 right-0",children:i(a.SpeedDial,{placement:"left",className:"",children:[e(a.SpeedDialHandler,{children:e(a.IconButton,{size:"lg",className:"p-0 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-full bg-primary-100 hover:bg-primary-100 active:bg-primary-50 text-gray-900 hover:text-primary-500",children:e(y,{className:"w-4 h-4"})})}),i(a.SpeedDialContent,{className:"flex-row",children:[e("div",{onClick:()=>o(r.id),children:e(a.SpeedDialAction,{className:"p-0 min-h-[32px] min-w-[32px] flex items-center justify-center bg-primary-50 hover:bg-primary-50 active:bg-primary-25 text-red-500 hover:text-red-500",children:e(g,{className:"w-4 h-4"})})}),e("a",{href:`/${r.img_url}`,download:`/${r.img_url}`,children:e(a.SpeedDialAction,{className:"relative z-10 p-0 min-h-[32px] min-w-[32px] flex items-center justify-center bg-primary-50 hover:bg-primary-50 active:bg-primary-25 text-primary-500 hover:text-primary-500",children:e(C,{className:"w-4 h-4"})})})]})]})})})})]},r.id))}),e(v,{paginationInfo:l,className:"p-7"})]})]})};b.layout=t=>e(h,{children:t});export{b as default};
