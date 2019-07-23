import * as Links from './social'

export default {
  name: 'SocialLinks',
  render (h) {
    const content = Object.values(Links).map((component) => {
      return h('div', { staticClass: 'control' }, [h(component)])
    })

    return h('div', { staticClass: 'field has-addons' }, content)
  }
}
