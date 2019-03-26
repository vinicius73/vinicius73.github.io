<template>
  <section class="container">
    <div class="columns">
      <div class="column is-half">
        <Profile />
      </div>
      <div class="column is-half">
        <Skills />
      </div>
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
  components: { Profile, Skills }
}
</script>
