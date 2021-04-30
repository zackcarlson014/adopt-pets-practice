<template>
  <div class="home">
    <h1>Dogs for Adoption</h1><br/>
    <b-table striped hover :items="dogs">
      <template #cell(name)="data">
        <router-link :to="`/pets/dogs/${data.index + 1}`">
          {{ data.value }}
        </router-link>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>
