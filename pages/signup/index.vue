<template>
  <div class="ind d-flex align-center justify-center">
    <Signup @regist="submit" />
  </div>
</template>

<script>
import { postMember } from '@/api/member'
export default {
  data: () => ({
    data: {},
    field: {},

  }),
  methods: {
    submit(regist) {
      this.data = regist
      const formData = new FormData()
      for (const key in this.data) {
        formData.append(key, this.data[key])
      }
      postMember(formData).then((res) => this.$router.push('/'))
    },
  },
}
</script>

<style lang="scss" scoped>
.ind {
  height: 100%;
  width: 100%;
}
</style>


