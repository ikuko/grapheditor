import {
  ActionTransform
}
from 'action-stream'
import {
  actionType, target
}
from '../../const'
import graphComponent from '../../../view/graphComponent'

export default class extends ActionTransform {
  constructor(selector) {
    super()
    const component = graphComponent(selector)

    this.bindActions(target.VIEW_EDGE, [
      [actionType.AFTER_CREATE, (action) => component.afterCreateEdge(action)],
      [actionType.CREATE, (action) => component.createEdge(action)],
      [actionType.SELECT, (action) => component.selectEdge(action)],
      [actionType.DELETE, (action) => component.deleteEdge(action)],
      [actionType.UNSELECT, () => component.unselectEdge()],
      [actionType.HOVER, (action) => component.hoverEdge(action)],
      [actionType.START_EDIT, (action) => component.startEditEdge(action)],
      [actionType.END_EDIT, (action) => component.endEditEdge(action)],
      [actionType.UNHOVER, () => component.unhoverEdge()],
      [actionType.UPDATE_TEXT, (action) => component.updateEdge(action)]
    ])
  }
}
