<template>
  <nav class="navbar is-link is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <strong>Vinicius Reis</strong>
      </a>

      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" @click="toggleMenu">
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': showMenu }">
      <div class="navbar-start">
        <!-- <a class="navbar-item">
          Documentation
        </a> -->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <Github type="link" />
            <Twitter type="link" />
            <Medium type="light">
              Blog
            </Medium>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { Medium, Twitter, Github } from './social'

export default {
  name: 'Navbar',
  components: { Medium, Twitter, Github },
  data: () => ({
    showMenu: false
  }),
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
