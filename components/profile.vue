<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <img src="~/assets/profile-avatar.jpg" alt="">
      </figure>
    </div>
    <div class="card-content">
      <section class="hero is-small">
        <div class="hero-body">
          <h1 class="title">
            Vinicius Reis
          </h1>
          <h2 class="subtitle">
            Severino Full-Stack Developer 🤓
          </h2>

          <MiniBio />
        </div>

        <div class="hero-buttons">
          <SocialLinks />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import SocialLinks from './social-links'
import MiniBio from './mini-bio'

export default {
  name: 'Profile',
  components: { SocialLinks, MiniBio }
}
</script>

<style>

</style>
