<template>
  <div class="card">
    <div class="card-image">
      <figure class="image">
        <a :href="href" target="_blank">
          <img :src="image" :alt="name">
        </a>
      </figure>
    </div>
    <div class="card-content">
      <h2 class="title is-4">
        <a :href="href" target="_blank">
          {{ name }}
        </a>
      </h2>
      <h3 class="subtitle is-6">
        <div class="tags">
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="tag is-dark"
          >
            {{ tag }}
          </span>
        </div>
      </h3>

      <div class="content">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    href: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    tags: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="css" scoped>
</style>
