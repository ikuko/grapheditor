import {
  ActionTransform
}
from 'action-stream'
import {
  actionType, target
}
from '../const'

export default class extends ActionTransform {
  constructor() {
    super()
    this.name = 'UnselectRenderStream'

    this.bindActions(target.VIEW_NODE, [
      [actionType.CANCEL, unselectNode],
      [actionType.SELECT, unselectEdge],
      [actionType.UPDATE, unselectNode]
    ])

    this.bindActions(target.VIEW_EDGE, [
      [actionType.AFTER_CREATE, unselectNode],
      [actionType.CANCEL, unselectEdge],
      [actionType.DETACH, unselectBoth],
      [actionType.SELECT, unselectNode],
      [actionType.UPDATE, unselectEdge]
    ])
  }
}

function unselectNode(action, push) {
  unselect(push, target.VIEW_NODE)
}

function unselectEdge(action, push) {
  unselect(push, target.VIEW_EDGE)
}

function unselectBoth(action, push) {
  unselect(push, target.VIEW_NODE)
  unselect(push, target.VIEW_EDGE)
}

function unselect(push, target) {
  push({
    target: target,
    type: actionType.UNSELECT
  })
}