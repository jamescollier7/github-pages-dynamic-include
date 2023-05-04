(()=>{
  'use strict';
  
  const includeElements = document.querySelectorAll(`[data-include]`)
  const groupedIncludeMap = groupIncludesIntoMap(includeElements)
  
  groupedIncludeMap.forEach(processGroupOfIncludes)
  
  /*
    Given a set of elements that have paths, group the elements 
    that have the same path
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
  
  /*
    Use the path of a group, fetch the data using that path, 
    and inject the result into each of the elements in the group
  */
  async function processGroupOfIncludes(group) {
    console.log(group)
    const html = await fetchHtml(group.key)
    
    group.values.forEach((includeEle) => {
      includeEle.outerHTML = html
    })
  }
  
  /*
    Fetch the html from a path
  */
  async function fetchHtml(path) {
    const response = await fetch(path)
    const html = await response.text()
    return html
  }
})()
