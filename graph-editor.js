import global from 'global'
import polyfill from 'babel/polyfill'

import actionStream from './lib/stream/actionStream'
import modelStream from './lib/stream/modelStream'
import renderStream from './lib/stream/renderStream'
import {
  actionType, target
}
from './lib/stream/const'

global.graphEditor = function(lookupUrl) {
  let topStream = actionStream()

  topStream
    .pipe(modelStream(lookupUrl))
    .pipe(renderStream())

  topStream.addNodes = (nodes) => addNodes(topStream, nodes)

  return topStream
}

function addNodes(stream, nodes) {
  nodes.forEach(n => addNode(stream, n))
}

function addNode(stream, node) {
  stream.push(Object.assign({
    source: ['index.js'],
    target: target.MODEL_NODE,
    type: actionType.CREATE,
  }, node))
}