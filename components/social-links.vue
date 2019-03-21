<template>
  <div class="field has-addons">
    <div class="control">
      <Link
        href="https://medium.com/@luizvinicius73"
        title="Read my articles"
        icon="fab fa-medium"
      />
    </div>

    <div class="control">
      <Link
        href="https://twitter.com/luizvinicius73"
        title="follow me on Twitter"
        icon="fab fa-twitter"
      />
    </div>

    <div class="control">
      <Link
        href="https://www.linkedin.com/in/luizvinicius73/"
        title="contact me on linkedin"
        icon="fab fa-linkedin"
      />
    </div>

    <div class="control">
      <Link
        href="https://github.com/vinicius73"
        title="see my code on Github"
        icon="fab fa-github"
      />
    </div>

    <div class="control">
      <Link
        href="https://psnprofiles.com/luizvinicius73"
        title="Play with on PSN"
        icon="fab fa-playstation"
      />
    </div>
  </div>
</template>

<script>
import Link from './link'

export default {
  name: 'SocialLinks',
  components: { Link }
}
</script>
