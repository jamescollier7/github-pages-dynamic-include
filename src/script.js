(()=>{
  'use strict';
  
  const includeElements = document.querySelectorAll(`[data-include]`)
  const groupedIncludeMap = groupIncludesIntoMap(includeElements)
  
  groupedIncludeMap.forEach(processGroupOfIncludes)
  
  /*
    Reduce a set of elements with paths to a Map of paths with 
    an array of those elements
  */
  function groupIncludesIntoMap(includeElements) {
    const arrayOfIncludeElements = Array.from(includeElements)
    return arrayOfIncludeElements.reduce((accumulatorMap, includeElement) => {
      const path = includeElement.getAttribute(`data-include`))
      let arrayOfElements = accumulatorMap.get(path)

      if (!arrayOfElements) {
        arrayOfElements = []
      }

      arrayOfElements.push(element)

      accumulatorMap.set(path, arrayOfElements)
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
