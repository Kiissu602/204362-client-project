<template>
  <div>
    <v-card>
      <div class="pa-12">
        <div class="d-flex align-center justify-start">
          <div class="px-12">
            <img :src="detail.image | img" width="200" :aspect-ratio="1" />
          </div>
          <div class="px-12">
            <div class="d-flex">
              <div>
                <p class="head text-right text-h6">ชื่อหนังสือ:</p>
              </div>
              <p class="pl-8 text-h6">{{ detail.title }}</p>
            </div>
            <div class="d-flex text-subtitle-1">
              <div>
                <p class="head text-right text-subtitle-1">ผู้แต่ง:</p>
              </div>
              <p class="pl-8 text-subtitle-1">{{ detail.writer }}</p>
            </div>
            <div class="d-flex">
              <div>
                <p class="head text-right text-subtitle-1">สำนักพิมพ์:</p>
              </div>
              <p class="pl-8 text-subtitle-1">{{ detail.publisherName }}</p>
            </div>
            <div class="d-flex">
              <div>
                <p class="head text-right text-subtitle-1">ปีที่พิมพ์:</p>
              </div>
              <p class="pl-8 text-subtitle-1">{{ detail.publicationDate }}</p>
            </div>
            <div class="d-flex">
              <div>
                <p class="head text-right text-subtitle-1">ฉบับที่พิมพ์:</p>
              </div>
              <p class="pl-8 text-subtitle-1">{{ detail.edition }}</p>
            </div>
            <div class="d-flex">
              <div>
                <p class="head text-right text-subtitle-1">จำนวนหน้า:</p>
              </div>
              <p class="pl-8 text-subtitle-1">{{ detail.pagination }}</p>
            </div>
            <div class="d-flex">
              <div>
                <p class="head text-right text-subtitle-1">ราคา:</p>
              </div>
              <p class="pl-8 text-subtitle-1">{{ detail.price }}</p>
            </div>
            <div class="d-flex">
              <div>
                <p class="head text-right text-subtitle-1">ISBN:</p>
              </div>
              <p class="pl-8 text-subtitle-1">{{ detail.isbn }}</p>
            </div>
          </div>
        </div>
        <div>
          <div class="d-flex">
            <div>
              <p class="head text-right text-subtitle-1">เรื่องย่อ:</p>
            </div>
            <p class="plot pl-8 text-subtitle-1">{{ detail.plot }}</p>
          </div>
        </div>
        <div class="d-flex justify-end align-center">
          <v-btn
            v-if="login.job"
            class="mx-4"
            color="accent"
            outlined
            @click="booking"
            >จอง</v-btn
          >
          <v-btn
            v-if="login.job && login.job.jobName === 'Librarian'"
            class="mx-4"
            color="primary"
            link
            :to="{ name: 'book-editbook', params: { id: detail.isbn } }"
            >แก้ไข</v-btn
          >
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { getBookByID } from '@/api/book'
import { postBooking } from '@/api/borrow'
import { mapState } from 'vuex'
export default {
  filters: {
    img(path) {
      return `${process.env.ENDPOINT}/uploads/${path}`
    },
  },

  data: () => ({
    detail: {},
  }),

  computed: {
    ...mapState({
      login: (state) => state.login,
    }),
  },

  mounted() {
    getBookByID(this.$route.params.id).then((res) => {
      this.detail = res.data
      this.detail.writer = this.detail.writer.join(', ')
    })
  },
  methods: {
    booking() {
      const obj = {
        isbn: this.detail.isbn,
        memberID: this.login.memberID,
      }
      postBooking(obj).then((res) => this.$router.push('/'))
    },
  },
}
</script>

<style lang="scss" scoped>
.box {
  max-height: 100vh;
}
.head {
  width: 100px;
}
</style>
