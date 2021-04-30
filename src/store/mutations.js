export default {
  appendPet: (state, { species, pet }) => {
    console.log(species)
    state[species].push(pet)
  }
}
