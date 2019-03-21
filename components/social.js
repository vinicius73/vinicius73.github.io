import Link from './link'

const buildSocialLink = props => ({
  functional: true,
  render(h, { data, children }) {
    return h(Link, {
      ...data,
      attrs: {
        ...props,
        ...data.attrs
      }
    }, children)
  }
})

const Medium = buildSocialLink({
  href: 'https://medium.com/@luizvinicius73',
  title: 'Read my articles',
  icon: 'fab fa-medium'
})

const Twitter = buildSocialLink({
  href: 'https://twitter.com/luizvinicius73',
  title: 'follow me on Twitter',
  icon: 'fab fa-twitter'
})

const Linkedin = buildSocialLink({
  href: 'https://www.linkedin.com/in/luizvinicius73/',
  title: 'contact me on linkedin',
  icon: 'fab fa-linkedin'
})

const Github = buildSocialLink({
  href: 'https://github.com/vinicius73',
  title: 'see my code on Github',
  icon: 'fab fa-github'
})

const Playstation = buildSocialLink({
  href: 'https://psnprofiles.com/luizvinicius73',
  title: 'Play with on PSN',
  icon: 'fab fa-playstation'
})

export { Medium, Twitter, Linkedin, Github, Playstation }
