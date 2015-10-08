import {
  ActionTransform
}
from 'action-stream'
import {
  actionType, target
}
from '../const'
import edgeTableComponent from '../../view/edgeTableComponent'

export default class extends ActionTransform {
  constructor(selector) {
    super()
    let component = edgeTableComponent(selector)

    this.bindActions(target.VIEW_EDGE, [
      [actionType.SNAPSHOT, (action) => component.set(action.edges)]
    ])
  }
}