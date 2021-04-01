<template>
  <div class="ed d-flex align-center justify-center">
    <EditBook @update="submit" />
  </div>
</template>

<script>
import { putBook } from '@/api/book'
export default {
  methods: {
    submit(update) {
      const formData = new FormData()
      formData.append('image', update.image)
      for (const key in update) {
        if (typeof update[key] === typeof []) {
          for (const i in update[key]) {
            if (!isNaN(Number(i))) formData.append('writerID[]', Number(i))
          }
        } else if (update[key] != null) formData.append(key, update[key])
      }
      putBook(update.isbn, formData).then((res) => this.$router.push(`/`))
    },
  },
}
</script>

<style lang="scss" scoped>
.page-enter,
.page-leave-to,
.ed {
  height: 100%;
}
</style>
