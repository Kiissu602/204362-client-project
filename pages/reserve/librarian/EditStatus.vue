<template>
  <div>
    <v-row>
      <v-col class="text-center"><h2>แก้ไขสถานะการจัดส่งหนังสือ</h2></v-col>
    </v-row>
    <v-row>
      <v-col md="3" offset-md="3">
        รหัสการยืม: {{ detail.borrowID }} <br />
        รหัสมาชิก: {{ detail.memberID }}<br />
        รายการจอง:<br />
        {{ detail.isbn }} <br />

        สถานที่จัดส่ง: {{ detail.reservePlace }}<br />
        เบอร์ติดต่อ: {{ detail.phoneTemp }}<br />
      </v-col>
    </v-row>
    <v-row>
      <v-col md="3" offset-md="3">
        <v-col>สถานะการจัดส่ง</v-col>
        <v-select
          v-model="sta"
          :items="value"
          label="สถานะ"
          outlined
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col offset="2" align="center">
        <v-btn
          depressed
          color="grey"
          dark
          class="mr-5"
          :to="{ path: '/reserve/librarian/SearchReserve' }"
        >
          ยกเลิก
        </v-btn>
        <v-btn depressed color="purple darken-2" @click="update" dark>
          อัพเดต
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getBookingByID, putStatusBooking } from '@/api/borrow'
export default {
  data: () => ({
    detail: {},

    value: ['Waiting', 'Running', 'Delivery', 'Borrowing', 'Fail'],
    sta: '',
  }),
  mounted() {
    getBookingByID(this.$route.params.id).then(
      (res) => (this.detail = res.data)
    )
  },
  methods: {
    update() {
      const obj = {
        borrowID: this.detail.borrowID,
        status: this.sta,
      }

      putStatusBooking(obj).then((res) =>
        this.$router.push('/reserve/librarian/SearchReserve')
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.page-enter {
}
.page-leave-to {
}
</style>
