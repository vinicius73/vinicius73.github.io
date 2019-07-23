<template>
  <div class="columns is-vcentered is-1">
    <!-- <div class="sidebar-skills column is-narrow">
      <span class="fas fa-caret-left"></span>
    </div> -->
    <div class="column is-auto">
      <div class="card">
        <header class="cart-header">
          <span class="icon close" @click="$emit('close')">
            <i class="fas fa-times-circle" />
          </span>
          <h4 class="card-header-title">
            <span class="icon">
              <i class="fas fa-user-astronaut" />
            </span>
            Just give me a challenger!
          </h4>
        </header>
        <div class="card-content">
          <div class="conten">
            <div v-for="([ key, value ]) in skils" :key="key" class="columns">
              <div class="column is-2">
                {{ key }}
              </div>
              <div class="column">
                <progress class="progress is-link" :value="value" max="100">
                  {{ value }}%
                </progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const skils = [
  ['Vue.js', 95],
  ['PWA', 75],
  ['Webpack', 80],
  ['Sass', 70],
  ['GraphQL', 90],
  // ['RestFul', 90],
  // ['Apollo', 85],
  ['FP', 80],
  ['Node', 80],
  ['Laravel', 85],
  ['JS', 90],
  ['Golang', 60],
  ['PHP', 85],
  ['Elixir', 45],
  ['Postgres', 70],
  ['MySQL', 60],
  ['Restify', 95]
]

const randomInt = (min = 1, max = 100) => Math.random() * (max - min) + min

export default {
  name: 'Skills',
  data: () => ({
    skils: [...skils]
  }),
  mounted () {
    this.$interval = setInterval(() => {
      this.random()
    }, 2500)
  },
  beforeDestroy () {
    clearInterval(this.$interval)
  },
  methods: {
    random () {
      this.skils = this.skils.map(([ key ]) => {
        return [key, randomInt()]
      })
    }
  }
}
</script>

<style scoped>
progress[value]::-webkit-progress-value {
    transition: width 0.5s;
}

.sidebar-skills {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sidebar-skills:hover {
  background: rgba(255, 255, 255, 0.20);
}

.close {
  cursor: pointer;
  padding: 1em;
  float: right;
}
</style>
