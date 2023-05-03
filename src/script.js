(()=>{
  'use strict';
  
  const dynamicIncludeElements = document.querySelectorAll(`[data-dynamic-include]`)
  dynamicIncludeElements.forEach((dynamicIncludeElement)=>{
    console.log(dynamicIncludeElement)
  })
})()
