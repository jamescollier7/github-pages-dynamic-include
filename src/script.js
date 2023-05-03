(()=>{
  'use strict';
  
  const dynamicIncludeElements = document.querySelectorAll(`[data-dynamic-include]`)
  const resultHistory = new Map()
  
  dynamicIncludeElements.forEach(processEachDynamicInclude)
  
  function processEachDynamicInclude(element) {
    let result = ``
    const path = element.getAttribute(`data-dynamic-include`)
    
    result = resultHistory.has(path) ? resultHistory.get(path) : getResults(path)
    
    resultHistory.set(path, html)
    
    element.outerHTML = result
  }
  
  async function getResults(path) {
    const response = await fetch(dynamicIncludePath)
    const html = await response.text()
    return html
  }
})()
