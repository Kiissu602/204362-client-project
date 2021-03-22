<template>
  <div class="ed d-flex align-center justify-center">
    <EditProfile @field="save" />
  </div>
</template>

<script>
import { putMember } from '@/api/member.js'
export default {
  data: () => ({
    data: {},
  }),
  methods: {
    save(field) {
      this.data = field
      const formData = new FormData()
      for (const key in this.data) {
        formData.append(key, this.data[key])
      }
      putMember(formData).then((res) => this.$router.push('/profile'))
    },
  },
}
</script>

<style lang="scss" scoped>
.ed {
  height: 100vh;
}
</style>
