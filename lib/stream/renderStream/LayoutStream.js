import {
  ActionTransform
}
from 'action-stream'
import {
  actionType, target
}
from '../const'
import layoutComponent from '../../view/forceDirectedLayoutComponent'

export default class extends ActionTransform {
  constructor() {
    super()
    let component = layoutComponent()

    this.bindActions(target.LAYOUT_NODE, [
      [actionType.CREATE, (action, push) => component.addNode(action.id)],
      [actionType.DELETE, (action, push) => component.delNode(action.id)],
      [actionType.DRAG, (action, push) => component.drag(action.id, action.x, action.y)]
    ])

    this.bindActions(target.LAYOUT_EDGE, [
      [actionType.CREATE, (action, push) => component.addEdge(action.sourceId, action.targetId)],
      [actionType.DELETE, (action, push) => {
        component.delEdge(action.sourceId, action.targetId)
      }]
    ])
  }
}