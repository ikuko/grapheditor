import delegate from 'dom-delegate'
import {
  ActionReadable
}
from 'action-stream'
import editEdgeComponent from '../../view/nodeEditor/editEdgeComponent'
import {
  actionType, target
}
from '../const'
import putValue from './putValue'

export default class extends ActionReadable {
  constructor(selector) {
    super(selector)
    this.name = 'EditEdgeActionStream'
  }
  _bindComponent(selector, push) {
    let component = editEdgeComponent(selector),
      container = delegate(component.component),
      inputHandler = e => putValue(component, target.MODEL_EDGE, actionType.VALIDATE, push)

    container.on('input', '.label', inputHandler)
    container.on('click', '.button', e => putValue(component, target.MODEL_EDGE, actionType.UPDATE, push))
    container.on('click', '.delete-button', e => putValue(component, target.MODEL_EDGE, actionType.DELETE, push))
    container.on('click', '.cancel-button', e => push({
      target: target.VIEW_EDGE,
      type: actionType.CANCEL
    }))
  }
}