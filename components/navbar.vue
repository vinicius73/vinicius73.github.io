<template>
  <nav class="navbar is-link is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link exact to="/" class="navbar-item has-text-primary">
        <span class="icon"><i class="fas fa-fire" /></span>
        <strong>Vinicius Reis</strong>
      </nuxt-link>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" @click="toggleMenu">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': showMenu }">
      <div class="navbar-start">
        <nuxt-link to="/projects" class="navbar-item">
          <span class="icon"><i class="fas fa-code" /></span>
          <span>Projects</span>
        </nuxt-link>
        <SpeakerDeck navbar>
          Speaker Deck
        </SpeakerDeck>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <Github type="link" />
            <Twitter type="link" />
            <Medium type="link" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Medium, Twitter, Github, SpeakerDeck } from './social'

export default {
  name: 'Navbar',
  components: { Medium, Twitter, Github, SpeakerDeck },
  data: () => ({
    showMenu: false
  }),
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
