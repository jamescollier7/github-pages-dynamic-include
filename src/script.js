(()=>{
  'use strict';
  
  const includeElements = document.querySelectorAll(`[data-include]`)
  const groupedIncludeMap = groupIncludesIntoMap(includeElements)
  
  groupedIncludeMap.forEach(processGroupOfIncludes)
  
  /*
    Given a set of elements that have paths, group the elements that have the same path
  */
  function groupIncludesIntoMap(includeElements) {
    return includeElements.reduce((accumulator, currentValue) => {
      let arrayOfElements = accumulator.get(path)

      if (!arrayOfElements) {
        arrayOfElements = []
      }

      arrayOfElements.push(element)

      accumulator.set(path, arrayOfElements)
    }, new Map())
  }
  
  async function processGroupOfIncludes(group) {
    console.log(group)
    const html = await fetchHtml(group.key)
    
    group.values.forEach((includeEle) => {
      includeEle.outerHTML = html
    })
  }
  
  async function fetchHtml(path) {
    const response = await fetch(path)
    const html = await response.text()
    return html
  }
})()
