import Link from './link'

const buildSocialLink = props => ({
  name: 'SocialLink' + (props.name) ? props.name : '',
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
  name: 'Medium',
  href: 'https://medium.com/@luizvinicius73',
  title: 'Read my articles',
  icon: 'fab fa-medium'
})

const Twitter = buildSocialLink({
  name: 'Twitter',
  href: 'https://twitter.com/luizvinicius73',
  title: 'follow me on Twitter',
  icon: 'fab fa-twitter'
})

const Linkedin = buildSocialLink({
  name: 'Linkedin',
  href: 'https://www.linkedin.com/in/luizvinicius73/',
  title: 'contact me on linkedin',
  icon: 'fab fa-linkedin'
})

const Github = buildSocialLink({
  name: 'Github',
  href: 'https://github.com/vinicius73',
  title: 'see my code on Github',
  icon: 'fab fa-github'
})

const Playstation = buildSocialLink({
  name: 'Playstation',
  href: 'https://psnprofiles.com/luizvinicius73',
  title: 'Play with me on PSN',
  icon: 'fab fa-playstation'
})

const SpeakerDeck = buildSocialLink({
  name: 'SpeakerDeck',
  href: 'https://speakerdeck.com/vinicius73',
  title: 'See my slides',
  icon: 'fab fa-speaker-deck'
})

export { Medium, Twitter, Linkedin, Github, SpeakerDeck, Playstation }
