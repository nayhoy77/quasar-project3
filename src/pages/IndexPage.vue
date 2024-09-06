<template>
  <div class="htmlClass">
    <h1>{{ studentCode }}</h1>
    <h2>{{ firstName }}</h2>
    <h3>{{ surName }}</h3>
    <h4>{{ nicName }}</h4>
    <form>
      <!-- <input type="text" id="firstName" v-model="firstName" />
      <input type="text" id="secondName" v-model="secondName" /> -->


  </form>
  </div>
</template>

<script>
export default {
  name: 'InputPage',
  data() {
    return {
      studentCode: '6604101375',
      firstName: 'รัตนโชติ',
      surName: 'ทองคต',
      nicName: 'โชติ',
    }
  },
}
</script>

<style scoped></style>
