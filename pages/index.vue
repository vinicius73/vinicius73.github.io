<template>
  <section class="container">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <Profile />
      </div>
    </div>
  </section>
</template>

<script>
import Profile from '~/components/profile.vue'

export default {
  name: 'Index',
  components: { Profile },
  head: {
    title: 'Vinicius Reis',
    titleTemplate: '%s - Severino Full-Stack Developer 🤓'
  }
}
</script>
