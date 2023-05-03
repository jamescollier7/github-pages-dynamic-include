(()=>{
  'use strict';
  
  const dynamicIncludeElements = document.querySelectorAll(`[data-dynamic-include]`)
  dynamicIncludeElements.forEach((dynamicIncludeElement)=>{
    const dynamicIncludePath = dynamicIncludeElement.getAttribute(`data-dynamic-include`)
    
    fetch(dynamicIncludePath).then((response) => response.text())
    .then((html) => {
      dynamicIncludeElement.outerHTML = html
    }).catch((err) => console.warn('Something went wrong...', err))
  })
})()
