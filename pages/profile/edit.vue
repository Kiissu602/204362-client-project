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
        if (this.data[key] != null) {
          formData.append(key, this.data[key])
        }
      }
      putMember(formData).then((res) => this.$router.push('/profile'))
    },
  },
}
</script>

<style lang="scss" scoped>
.page-enter,
.page-leave-to,
.ed {
  height: 100vh;
}
</style>
