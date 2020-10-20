import {capitalize} from '@core/utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMLIsteners() {
    this.listeners.forEach(listener => {
      const method = getMetodName(listener)
      if (!this[method]) {
        const name = this.name || ''
        // eslint-disable-next-line max-len
        throw new Error(`Method ${method} is not implemented in ${name} Component`)
      }
      this[method] = this[method].bind(this)
      // То же самое что addEventListener
      this.$root.on(listener, this[method])
    })
  }

  removeDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMetodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}

// input => onInput
function getMetodName(eventName) {
  return 'on' + capitalize(eventName)
}
