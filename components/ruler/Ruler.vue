<template>
  <v-container>
    <h1 class="text-h5 text-center mt-12">กฏการยืมหนังสือ</h1>
    <span class="d-flex justify-end pt-n3">
      <nuxt-link color="primary" to="/Signup">แก้ไขกฏ</nuxt-link>
    </span>
    <Rulers class="mt-8" />
    <Rulerss
      class="pa-12"
      start="8:00"
      stop="15:00"
      first="12:00"
      second="16.30"
      day="2"
    />
    <Rulersss class="pa-2 ml-10" fines="5" lost="100" />
  </v-container>
</template>

<script>
import Rulers from './Rulers.vue'
export default {
  components: { Rulers },
  data: () => ({}),
}
</script>

<style></style>
