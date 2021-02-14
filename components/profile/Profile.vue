<template>
  <div>
    <v-avatar size="250"><img :src="login.imgUrl | img" /></v-avatar>
    <p>
      {{ login.department.dname }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  filters: {
    img(path) {
      return `${process.env.ENDPOINT}/uploads/${path}`
    },
  },
  computed: {
    ...mapState({
      login: (state) => state.login,
    }),
  },
}
</script>

<style></style>
