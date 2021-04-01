<template>
  <v-container>
    <div class="d-flex align-center justify-center">
      <h1 class="text-h5 text-center mt-12">ค้นหา รายการยืม</h1>
    </div>
    <v-row class="mt-12">
      <v-col>
        <v-text-field
          v-model="detail.isbn"
          outlined
          dense
          label="ISBN"
          maxlength="13"
          :counter="13"
      /></v-col>
      <v-col>
        <v-text-field
          v-model="detail.id"
          outlined
          dense
          label="รหัสผู้ใช้"
          maxlength="9"
          :counter="9"
      /></v-col>
    </v-row>
    <div class="d-flex justify-end">
      <v-btn color="primary" @click="get">ค้นหา</v-btn>
    </div>
    <!-- <div>
      <p class="text-center text-subtitle-1">รหัส: {{ PID }}</p>
      <p class="text-center text-subtitle-1">ชื่อ: {{ fname }} {{ lname }}</p>
    </div> -->
    <v-simple-table class="brl mt-12">
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
        <tr v-for="item in data" :key="item.type">
          <td class="text-center">
            {{ dayjs(item.borrowDate).format('DD/MM/BBBB') }}
          </td>
          <td class="text-center">
            {{ dayjs(item.dueDate).format('DD/MM/BBBB') }}
          </td>
          <td class="text-center">{{ item.firstName }} {{ item.lastName }}</td>
          <td class="text-center">{{ item.title }}</td>
          <td>
            <div class="d-flex justify-center">
              <v-btn small color="error" @click="del(item.id)"
                ><v-icon>mdi-trash-can-outline</v-icon></v-btn
              >
            </div>
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-container>
</template>

<script>
import { getBorrowByMember, getBorrowMemberBook } from '@/api/member'
import { deleteBorrow } from '@/api/borrow'
import dayjs from 'dayjs'
export default {
  data: () => ({
    detail: {
      id: '',
      isbn: '',
    },
    id: '',
    data: [],
    head: ['วันที่ยืม', 'กำหนดคืน', 'ผู้ยืม', 'หนังสือ', 'ดำเนินการ'],
  }),
  mounted() {
    getBorrowByMember(this.id).then((res) => {
      this.data = res.data
    })
  },
  methods: {
    del(id) {
      deleteBorrow(id)
      this.data = this.data.filter(function (el) {
        return el.id !== id
      })
    },
    get() {
      getBorrowMemberBook(this.detail).then((res) => {
        this.data = res.data
      })
    },
    dayjs,
  },
}
</script>

<style lang="scss" scoped>
.type {
  width: 100% !important;
}
.brl {
  width: 100%;
}
</style>
