const makeIcon = (h, icon) => {
  return h('span', { staticClass: 'icon' }, [
    h('i', { staticClass: icon })
  ])
}

export default {
  functional: true,
  props: {
    icon: String,
    navbar: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      default: '_blank'
    },
    type: {
      type: String,
      default: 'link'
    }
  },
  render(h, context) {
    const { children, props, data } = context
    const attrs = { ...data.attrs, target: props.target }

    const content = (children)
      ? [h('span', children)]
      : []

    if (props.icon) {
      content.unshift(makeIcon(h, props.icon))
    }

    return h('a', {
      ...data,
      attrs,
      staticClass: props.navbar ? 'navbar-item' : `button is-${props.type}`
    }, content)
  }
}
