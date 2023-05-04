(()=>{
  'use strict';
  
  const dynamicIncludeElements = document.querySelectorAll(`[data-dynamic-include]`)
  const resultHistory = new Map()
  
  dynamicIncludeElements.forEach(processEachDynamicInclude)
  
  async function processEachDynamicInclude(element) {
    let html = ``
    const path = element.getAttribute(`data-dynamic-include`)
    
    html = await resultHistory.has(path) ? resultHistory.get(path) : fetchHtml(path)
    
    resultHistory.set(path, html)
    
    element.outerHTML = html
  }
  
  async function fetchHtml(path) {
    const response = await fetch(path)
    const html = await response.text()
    return html
  }
})()
