(()=>{
  'use strict';
  
  const dynamicIncludeElements = document.querySelectorAll(`[data-dynamic-include]`)
  const dynamicResults = new Map();
  dynamicIncludeElements.forEach((dynamicIncludeElement)=>{
    const dynamicIncludePath = dynamicIncludeElement.getAttribute(`data-dynamic-include`)
    let result = ``
    
    if (dynamicResults.has(dynamicIncludePath)) {
      result = dynamicResults.get(dynamicIncludePath)
    } else {
      result = await fetch(dynamicIncludePath).then((response) => response.text())
      .then((html) => {
        dynamicResults.set(dynamicIncludePath, html)
        return html
      }).catch((err) => console.warn(`Something went wrong...`, err))
    }
    
    dynamicIncludeElement.outerHTML = result
  })
})()
