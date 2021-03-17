<template>
  <v-container>
    <h1 class="text-h5 text-center mt-12">กฏการยืมหนังสือ</h1>
    <span v-if="login.type === 'Admin'" class="d-flex justify-end pt-n3">
      <nuxt-link color="primary" to="/editrule">แก้ไขกฏ</nuxt-link>
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
import { mapState } from 'vuex'
export default {
  data: () => ({}),
  computed: {
    ...mapState({
      login: (state) => state.login,
    }),
  },
}
</script>

<style lang="scss" scoped></style>
