import{b as n,r as i}from"./app-b5400095.js";function p({message:t,className:e=""}){return t?n("p",{className:"text-sm text-red-600 "+e,children:t}):null}function b({type:t="submit",className:e="",processing:r,children:o,onClick:s}){return n("button",{type:t,onClick:s,className:`inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${r&&"opacity-25"} `+e,disabled:r,children:o})}const y=i.forwardRef(function({type:e="text",name:r,id:o,value:s,className:c,autoComplete:d,required:f,isFocused:g,onChange:l},a){const u=a||i.useRef();return i.useEffect(()=>{g&&u.current.focus()},[]),n("div",{className:"flex flex-col items-start",children:n("input",{type:e,name:r,id:o,value:s,className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "+c,ref:u,autoComplete:d,required:f,onChange:x=>l(x)})})});export{p as I,b as P,y as T};
