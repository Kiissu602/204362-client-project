<template>
  <p>อิ้</p>
</template>

<script>
import { getCategory } from '@/api/book'
export default {
  data: () => ({
    book: {},
    categories: [],
  }),
  mounted() {
    getCategory().then((res) => {
      this.categories = res.data.map((c) => ({
        text: c.categoryName,
        value: c.categoryID,
      }))
    })
  },
}
</script>

<style></style>
