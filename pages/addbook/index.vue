<template>
  <div class="adb d-flex align-center justify-center">
    <AddBook @add="submit" />
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      max-width="450"
    >
      <v-card>
        <v-toolbar color="primary" dark>Library System OOD!</v-toolbar>
        <v-card-text>
          <v-card-title
            :class="
              can
                ? 'text-h6 pt-8 pb-4 success--text'
                : 'text-h6 pt-8 pb-4 error--text'
            "
          >
            {{ messege }}
          </v-card-title>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text to="/addbook" @click="dialog = false">ปิด</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { postBook } from '@/api/book'
import { reason } from '~/reason'
export default {
  data: () => ({
    dialog: false,
    messege: '',
    can: true,
    data: {},
    err: 'Success',
  }),

  methods: {
    async submit(add) {
      const book = new FormData()
      this.data = add
      for (const key in this.data) {
        book.append(key, this.data[key])
      }
      await postBook(book)
        .then((res) => {
          this.dialog = true
          this.messege = reason[this.err]
        })
        .catch((error) => {
          this.err = error.response.data.msg
          this.messege = reason[this.err]
          this.dialog = true
          this.can = false
        })
    },
    go() {
      this.dialog = false
      this.$route('/addbook')
    },
  },
}
</script>

<style lang="scss" scoped>
.page-enter,
.page-leave-to,
.adb {
  height: 100vh;
}
</style>
