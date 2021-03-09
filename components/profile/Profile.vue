<template>
  <v-card>
    <div class="profile d-flex justify-center ma-6">
      <v-avatar class="ml-4" size="150" rounded="0"
        ><v-img :src="login.imgUrl | img" aspect-ratio="4/3"
      /></v-avatar>
      <Profiledetail :detail="login" />
    </div>
    <div class="d-flex justify-end ma-4">
      <Profileedit />
    </div>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import Profileedit from './Profileedit.vue'
export default {
  components: { Profileedit },
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
  mounted() {
    console.log(this.login)
  },
}
</script>

<style lang="scss" scoped>
.profile {
  min-width: 50vw;
}
</style>
