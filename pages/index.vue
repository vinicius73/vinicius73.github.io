<template>
  <section class="container">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
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
                  Severivo Full-Stack Developer 🤓
                </h2>

                <MiniBio />
              </div>

              <div class="hero-buttons">
                <SocialLinks />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SocialLinks from '~/components/social-links'
import MiniBio from '~/components/mini-bio'

export default {
  components: { SocialLinks, MiniBio }
}
</script>
