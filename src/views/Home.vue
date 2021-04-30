<template>
  <div class="home">
    <h1>Adopt a New Best Friend.</h1><br/>
    <button
      class="btn btn-primary"
      @click="toggleShowPetForm"
    >
      Add New Pet
    </button><br/><br/>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="formData.name"
          type="text"
          placeholder="Enter pet's name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Breed:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.breed"
          type="text"
          placeholder="Enter pet's breed"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cat', 'dog', 'prefer not to say']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label="Gender:" label-for="input-4">
        <b-form-select
          id="input-4"
          v-model="formData.gender"
          :options="['male', 'female', 'prefer not to say']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-5" label="Pet's Age:" label-for="input-5">
        <b-form-input
          id="input-5"
          v-model="formData.age"
          type="number"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-6" label="Pet's Color:" label-for="input-6">
        <b-form-input
          id="input-6"
          v-model="formData.color"
          type="text"
          placeholder="Enter pet's color"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-7" label="Pet's Weight:" label-for="input-7">
        <b-form-input
          id="input-7"
          v-model="formData.weight"
          type="number"
          required
        ></b-form-input>
      </b-form-group><br/>

      <b-form-group id="input-group-8" label="Pet's Location:" label-for="input-8">
        <b-form-input
          id="input-8"
          v-model="formData.location"
          type="text"
          placeholder="Enter pet's location"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-9" label="Notes About Pet:" label-for="input-9">
        <b-form-textarea
          id="input-9"
          v-model="formData.notes"
          type="text-area"
          placeholder="Additional notes about pet"
          required
        ></b-form-textarea>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      showPetForm: false,
      formData: {
        name: '',
        breed: '',
        species: null,
        gender: null,
        color: '',
        weight: 0,
        location: '',
        notes: '',
        age: 0
      }
    }
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    toggleShowPetForm () {
      this.showPetForm = !this.showPetForm
    },
    handleSubmit () {
      const { name, breed, species, gender, age, color, weight, location, notes } = this.formData
      console.log(species)
      const pluralizedSpecies = species + 's'
      console.log(pluralizedSpecies)
      const payload = {
        species: pluralizedSpecies,
        pet: {
          name,
          breed,
          species,
          gender,
          age,
          color,
          weight,
          location,
          notes
        }
      }
      this.addPet(payload)
    }
  }
}
</script>
