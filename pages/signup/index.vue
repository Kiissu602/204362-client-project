<template>
  <div class="ind d-flex align-center justify-center">
    <Signup1 v-if="pg === 1" @next="next" />
    <Signup2 v-if="pg === 2" @back="back" @submit="submit" />
  </div>
</template>

<script>
import { postUser } from '@/api/user'
export default {
  data: () => ({
    pg: 1,
    data: {},
    data2: {},
  }),
  methods: {
    next(obj) {
      this.data = obj
      this.pg = 2
    },
    back(data) {
      this.pg = 1
    },
    submit(field) {
      this.data2 = field

      const formData = new FormData()

      for (const key in this.data) {
        formData.append(key, this.data[key])
      }

      for (const key in this.data2) {
        formData.append(key, this.data2[key])
      }
      postUser(formData).then((res) => this.$router.push('/'))
    },
  },
}
</script>

<style>
.ind {
  height: 100vh;
}
</style>
