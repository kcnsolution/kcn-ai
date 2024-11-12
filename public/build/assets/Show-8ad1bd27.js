import{r as c,j as r,F as h,b as e,c as P,d,e as B,g as j}from"./app-b5400095.js";import{g as I,a as o,T as M}from"./columns-ec26532f.js";import{B as C}from"./Breadcrumb-861bfeaa.js";import{T as F,a as $}from"./TablePagination-3ae721a2.js";import{D as k}from"./Delete-87e803fa.js";import{D as E}from"./Documents-c5185ded.js";import{j as G,D as H}from"./Dashboard-7e829a24.js";import{f as g}from"./index-3f3950c2.js";import{p as b}from"./index-1e8bddeb.js";import"./search-bf68dfd3.js";import"./ArrowDown-69cd16b5.js";import"./debounce-367be966.js";import"./index-4c8a935a.js";const R=n=>{const[s,x]=c.useState(n.documents),f=c.useMemo(()=>s.data,[s]),y=c.useMemo(()=>I,[]),{getTableProps:w,getTableBodyProps:N,headerGroups:v,rows:D,prepareRow:S}=o.useTable({columns:y,data:f},o.useFilters,o.useGlobalFilter,o.useSortBy,o.usePagination),m=t=>{const a=g(b(t),"hh:mm aa");return{date:g(b(t),"dd MMM, yyyy"),time:a}},T=t=>{j.delete(route("template-content-delete",t))};return r(h,{children:[e(P,{title:"Saved Documents"}),e(C,{Icon:G,title:"Saved Documents"}),r(d.Card,{className:"shadow-card",children:[e(F,{title:"All Documents",data:s,globalSearch:!0,setSearchData:x,searchPath:route("template-contents.search"),tablePageSizes:[10,15,20,25]}),e("div",{className:"overflow-x-auto",children:r("table",{...w(),className:"w-full min-w-[1000px]",children:[e("thead",{children:e(M,{headerGroups:v})}),e("tbody",{...N(),children:D.map(t=>(S(t),e("tr",{...t.getRowProps(),className:"border-b border-gray-200 dark:border-neutral-500",children:t.cells.map(a=>{const{row:i,column:l}=a,{id:p,created_at:u}=i.original;return e("td",{...a.getCellProps(),className:`px-7 py-[18px] text-start last:text-end ${l.id!=="document"&&"whitespace-nowrap"}`,children:l.id==="action"?r("div",{className:"flex justify-end items-center",children:[e(B,{href:`/saved-documents/template-contents/${p}`,children:e(d.IconButton,{variant:"text",color:"white",className:"w-7 h-7 rounded-full hover:bg-primary-50 text-gray-500 hover:text-primary-500",children:e(E,{className:"h-4 w-4"})})}),e(d.IconButton,{variant:"text",color:"white",className:"w-7 h-7 rounded-full hover:bg-primary-50 text-gray-500 hover:text-primary-500 ml-3",onClick:()=>T(p),children:e(k,{className:"h-4 w-4"})})]}):l.id==="created"?r(h,{children:[e("small",{className:"font-bold text-gray-700",children:m(u).date}),e("p",{className:"text12 text-gray-400 mt-1",children:m(u).time})]}):e("span",{className:`text-sm text-gray-700 ${l.id==="document"&&"font-bold"}`,children:a.render("Cell")})})})})))})]})}),e($,{paginationInfo:s,className:"p-7"})]})]})};R.layout=n=>e(H,{children:n});export{R as default};
