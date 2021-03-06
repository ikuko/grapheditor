import {
  ActionReadable
}
from 'action-stream'
import graphComponent from '../../view/graphComponent'
import {
  actionType, target
}
from '../const'

// jsPlumb suppress exceptions.
export default class extends ActionReadable {
  constructor(selector) {
    super(selector)
    this.name = 'GraphActionStream'
  }
  _bindComponent(selector, push) {
    const component = graphComponent(selector)

    component.container.addEventListener('click', (e) => {
      if (e.currentTarget !== e.target) {
        return
      }

      push({
        target: target.MODEL,
        type: actionType.UNSELECT
      })
    })
  }
}
