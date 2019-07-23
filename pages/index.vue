<template>
  <section class="container">
    <div class="columns">
      <div class="column is-half" :class="{ 'is-offset-one-quarter': !showSkills }">
        <Profile />
      </div>
      <transition name="fade">
        <div v-if="showSkills" class="column is-half">
          <Skills @close="showSkills = false" />
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import Profile from '~/components/profile.vue'
import Skills from '~/components/skills.vue'

export default {
  name: 'Index',
  head: {
    title: 'Vinicius Reis',
    titleTemplate: '%s - Severino Full-Stack Developer 🤓'
  },
  components: { Profile, Skills },
  data: () => ({
    showSkills: false
  }),
  mounted () {
    setTimeout(() => {
      this.showSkills = true
    }, 3000)
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
