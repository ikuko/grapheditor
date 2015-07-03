import delegate from 'dom-delegate'
import {
  ActionReadable
}
from 'action-stream'
import editNodeComponent from '../../view/nodeEditor/editNodeComponent'
import {
  actionType, target
}
from '../const'
import putValue from './putValue'

export default class extends ActionReadable {
  constructor(selector) {
    super(selector)
    this.name = 'EditNodeActionStream'
  }
  _bindComponent(selector, push) {
    let component = editNodeComponent(selector),
      container = delegate(component.component),
      inputHandler = e => putValue(component, target.MODEL_NODE, actionType.VALIDATE, push)

    container.on('input', '.label', inputHandler)
    container.on('click', '.button', e => putValue(component, target.MODEL_NODE, actionType.UPDATE, push))
    container.on('click', '.delete-button', e => putValue(component, target.MODEL_NODE, actionType.DELETE, push))
    container.on('click', '.cancel-button', e => push({
      target: target.VIEW_NODE,
      type: actionType.CANCEL
    }))
  }
}