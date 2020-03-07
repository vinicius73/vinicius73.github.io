<template>
  <div class="container is-fluid">
    <div class="columns is-multiline">
      <div v-for="(project, index) in $options.projects" :key="index" class="column is-3-desktop is-6-tablet">
        <ProjectCard v-bind="project" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '~/components/project-card'

const projects = [{
  name: 'Pokémon Memory Game',
  image: '/images/projects/pokemon-memory-game.png',
  description: 'A memory game where you are challenged to capture pokémon. It works offline, perfect play on your mobile devices.',
  href: 'https://vue-pokemon-memory-game.vinicius73.dev/',
  tags: ['Vue.js', 'Vuex', 'Bulma.css', 'PWA', 'Mobile']
}, {
  name: 'JsonLogic Playground',
  image: '/images/projects/jsonlogic-playground.png',
  description: 'A simple JsonLogic tester.',
  href: 'https://github.com/vinicius73/jsonlogic-playground',
  tags: ['Vue.js', 'PWA', 'Bulma CSS']
}, {
  name: 'Avatar URL Generator',
  image: '/images/projects/avatar-url-generator.png',
  description: 'An avatar URL generator that provides multiple options and online avatar providers: Gravatar, RoboHash, Adorable and DiceBear',
  href: 'https://vinicius73.github.io/gravatar-url-generator/',
  tags: ['Vue.js', 'Vue Router', 'PWA', 'Tailwind CSS']
}, {
  name: '@blocker/steem-api',
  image: '/images/projects/steem-js-api.png',
  description: 'Modern and lightweight JavaScript library to consume the Steem API.',
  href: 'https://github.com/blocker-solutions/steem-js/tree/master/packages/api',
  tags: ['JavaScript', 'Ava.js', 'Blockchain', 'Steemit', 'NPM', 'JS Package']
}, {
  name: 'Codecasts',
  image: '/images/projects/codecasts.jpg',
  description: 'Screencasts and files on JavaScript, PHP, Vue.js and more.',
  href: 'https://www.youtube.com/codecasts',
  tags: ['YouTube', 'Screencasts']
}, {
  name: '@vinicius73/dotfiles',
  image: '/images/projects/dotfiles.png',
  description: 'My provisioning scripts and preferences for arch linux.',
  href: 'https://github.com/vinicius73/dotfiles',
  tags: ['shell', 'arch linux', 'linux', 'fish shell']
}, {
  name: 'SEOTools',
  image: '/images/projects/artesaos-seotools.png',
  description: 'SEOTools is a package for Laravel 5+ and Lumen that provides helpers for some common SEO techniques.',
  href: 'https://github.com/artesaos/seotools',
  tags: ['Laravel', 'Composer', 'SEO']
}, {
  name: 'Defender',
  image: '/images/projects/artesaos-defender.png',
  description: 'Defender is an Access Control List (ACL) Solution for Laravel 5+. With security and usability in mind, this project aims to provide you a safe way to control your application access without losing the fun of coding.',
  href: 'https://github.com/artesaos/defender',
  tags: ['Laravel', 'Composer', 'ACL', 'RBAC']
}, {
  name: 'Awesome BR',
  image: '/images/projects/awesome-br.png',
  description: 'A collection of useful links in portuguese for various projects and technologies.',
  href: 'http://awesome-br.com/',
  tags: ['Angular.js']
}]

export default {
  name: 'Projects',
  projects,
  components: { ProjectCard },
  head () {
    return {
      title: 'Projects',
      meta: [
        { hid: 'description', name: 'description', content: 'Projects created by me, maintained by me, or with my participation. 🧟' },
        { hid: 'og:description', name: 'og:description', content: 'Projects created by me, maintained by me, or with my participation. 🧟' }
      ]
    }
  }
}
</script>
