<template>
  <v-container>
    <div class="rt d-flex justify-center align-center pa-20">
      <div class="box">
        <v-row>
          <v-col
            ><v-text-field
              v-model="detail.id"
              label="รหัสสมาชิก"
              maxlength="9"
              :counter="9"
              outlined
              dense
          /></v-col>
        </v-row>

        <div class="bt d-flex justify-center align-end">
          <v-btn color="primary" @click="get"
            ><v-icon>mdi-magnify</v-icon>ค้นหา</v-btn
          >
        </div>
        <div class="pt-10">
          <p class="text-center text-subtitle-1">รหัส: {{ memberID }}</p>
          <p class="text-center text-subtitle-1">
            ชื่อ: {{ firstName }} {{ lastName }}
          </p>
        </div>
        <div>
          <v-simple-table class="rtl mt-12">
            <thead>
              <tr>
                <th
                  v-for="item in head"
                  :key="item"
                  class="text-subtitle-1 text-center"
                >
                  {{ item }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in borrow" :key="item.isbn">
                <td class="text-center">
                  {{ dayjs(item.borrowDate).format('DD/MM/BBBB') }}
                </td>
                <td class="text-center">
                  {{ dayjs(item.dueDate).format('DD/MM/BBBB') }}
                </td>
                <td class="text-center">{{ item.title }}</td>
                <td>
                  <div class="d-flex justify-space-around">
                    <v-btn
                      class="primary"
                      small
                      @click="finesReturn(memberID, item.isbn)"
                      >ส่งคืน</v-btn
                    >
                    <v-btn
                      class="seconday"
                      outlined
                      small
                      @click="finesLost(memberID, item.isbn)"
                      >หาย/ชำรุด</v-btn
                    >
                  </div>
                </td>
                <v-dialog
                  v-model="dialog"
                  :retain-focus="false"
                  transition="dialog-bottom-transition"
                  max-width="450"
                >
                  <v-card>
                    <v-toolbar color="primary" dark>รวมยอดชำระ</v-toolbar>
                    <div class="d-flex justify-center">
                      <table>
                        <tr>
                          <td class="text-right">ISBN:</td>
                          <td class="pl-8">{{ data.isbn }}</td>
                        </tr>
                        <tr>
                          <td class="text-right">ชื่อหนังสือ:</td>
                          <td class="pl-8">{{ data.title }}</td>
                        </tr>
                        <tr>
                          <td class="text-right">ส่งเกินเวลา:</td>
                          <td class="text-center">{{ data.late }}</td>
                          <td>บาท</td>
                        </tr>
                        <tr>
                          <td class="text-right">หนังสือ:</td>
                          <td class="text-center">{{ data.bookprice }}</td>
                          <td>บาท</td>
                        </tr>
                        <tr>
                          <td class="text-right">สูญหาย/ชำรุด:</td>
                          <td class="text-center">{{ data.lost }}</td>
                          <td>บาท</td>
                        </tr>
                        <tr>
                          <td class="text-right">รวม:</td>
                          <td class="text-center">{{ total }}</td>
                          <td>บาท</td>
                        </tr>
                      </table>
                    </div>
                    <v-card-actions class="justify-end">
                      <v-btn text @click="update(data)">ยืนยัน</v-btn>
                      <v-btn text @click=";(dialog = false), (total = 0)"
                        >ปิด</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { getBorrowByMember } from '@/api/member'
import { getFines, putBorrow } from '@/api/borrow'
import dayjs from 'dayjs'
export default {
  data: () => ({
    detail: {
      id: '',
    },
    head: ['วันที่ยืม', 'กำหนดคืน', 'ชื่อหนังสือ', 'ดำเนินการ'],
    borrow: [],
    firstName: '',
    lastName: '',
    memberID: '',
    data: {},
    total: 0,
    dialog: false,
  }),
  methods: {
    get() {
      getBorrowByMember(this.detail).then((res) => {
        this.borrow = res.data
        this.firstName = res.data[0].firstName
        this.lastName = res.data[0].lastName
        this.memberID = res.data[0].memberID
      })
    },
    finesReturn(member, isbn) {
      const obj = {}
      obj.id = member
      obj.isbn = isbn
      obj.lost = null
      getFines(obj).then((res) => {
        this.data = res.data
      })
      this.dialog = true
    },

    finesLost(member, isbn) {
      const obj = {}
      obj.id = member
      obj.isbn = isbn
      obj.lost = '1'
      getFines(obj).then((res) => {
        this.data = res.data
        const sum = res.data.late + res.data.bookprice * 2 + res.data.late
        this.total = sum
      })
      this.dialog = true
    },
    update(d) {
      const obj = {}

      obj.id = d.id
      obj.late = d.late
      obj.lost = d.lost
      putBorrow(obj).then((res) => (this.dialog = false))
      this.borrow = this.borrow.filter(function (el) {
        return el.id !== d.id
      })
      this.data = {}
    },
    dayjs,
  },
}
</script>

<style lang="scss" scoped>
.rt {
  height: 100vh;
}
.rtl {
  width: 100%;
}
.box {
  width: 70%;
}
.head {
  width: 100%;
}
</style>
