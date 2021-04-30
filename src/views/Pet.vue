<template>
  <div class="home">
    <h1>{{ animal.name }} ({{ petSpecies() }})</h1>
    <p>Age: {{ animal.age }} years old</p>
    <p>Breed: {{ animal.breed }}</p>
    {{ logThis() }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  methods: {
    petSpecies () {
      const endIndex = this.$route.params.species.length - 1
      return this.$route.params.species.slice(0, endIndex)
    },
    logThis () {
      console.log(parseInt(this.$route.params.id) - 1)
    }
  },
  mounted () {
    const animal = this[this.$route.params.species][parseInt(this.$route.params.id) - 1]
    this.animal = animal
  }
}

</script>
