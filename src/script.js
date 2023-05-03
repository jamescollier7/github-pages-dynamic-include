(()=>{
  'use strict';
  
  const dynamicIncludeElements = document.querySelectorAll(`[data-dynamic-include]`)
  const resultHistory = new Map()
  
  dynamicIncludeElements.forEach(processEachDynamicInclude)
  
  function processEachDynamicInclude(element) {
    let html = ``
    const path = element.getAttribute(`data-dynamic-include`)
    
    html = resultHistory.has(path) ? resultHistory.get(path) : getResults(path)
    
    resultHistory.set(path, html)
    
    element.outerHTML = html
  }
  
  async function getResults(path) {
    const response = await fetch(dynamicIncludePath)
    const html = await response.text()
    return html
  }
})()
