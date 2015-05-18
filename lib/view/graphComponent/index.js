import createNode from './createNode'
import jsPlumbOption from './jsPlumbOption'

const instance = jsPlumb.getInstance(jsPlumbOption)

export default function(selector) {
  let container = document.querySelector(selector)

  instance.setContainer(container)

  return {
    instance: instance,
    container: container,
    createNode: (id, name, url) => createNode(container, instance, id, name, url),
    updateNode: (id, name, url) => updateNode(container, id, name, url),
    selectNode: (id) => selectNode(container, id)
  }
}

function updateNode(container, id, name, url) {
  let node = container.querySelector(`#${id}`)
  node.firstChild.nodeValue = name
  node.title = url
}

function selectNode(container, id) {
  Array.from(container.querySelectorAll('.node')).forEach(el => el.classList.remove('selected'))
  container.querySelector(`#${id}`).classList.add('selected')
}