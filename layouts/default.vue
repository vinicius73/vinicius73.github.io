<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '~/components/navbar'

export default {
  name: 'TemplateDefault',
  components: { Navbar }
}
</script>
