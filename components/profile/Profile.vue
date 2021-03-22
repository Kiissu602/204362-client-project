<template>
  <v-card lass="ca d-flex justify-center" min-width="300">
    <div class="profile d-flex justify-center ma-6">
      <v-card class="ml-4" max-height="150"
        ><v-img
          :src="login.imgUrl | img"
          height="150"
          width="150"
          :aspect-ratio="1"
      /></v-card>
      <ProfileDetail :detail="login" />
    </div>
    <div class="d-flex justify-end ma-4">
      <ProfileEditButton />
    </div>
  </v-card>
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

<style lang="scss" scoped>
.profile {
  min-width: 50vw;
}
</style>
