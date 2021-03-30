<template>
  <v-container>
    <div class="rt d-flex justify-center align-center pa-20">
      <div class="box">
        <v-row>
          <v-col
            ><v-text-field
              v-model="detail.memberID"
              label="รหัสสมาชิก"
              maxlength="9"
              :counter="9"
              outlined
              dense
          /></v-col>
        </v-row>

        <div class="bt d-flex justify-center align-end">
          <v-btn color="primary" @click="getmem"
            ><v-icon>mdi-magnify</v-icon>ค้นหา</v-btn
          >
        </div>
        <div class="pt-10">
          <p class="text-center text-subtitle-1">รหัส: {{ list.memberID }}</p>
          <p class="text-center text-subtitle-1">
            ชื่อ: {{ list.firstName }} {{ list.lastNAme }}
          </p>
        </div>
        <div>
          <v-simple-table class="rtl mt-12">
            <thead>
              <tr>
                <th v-for="item in head" :key="item" class="text-subtitle-1">
                  {{ item }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.isbn">
                <td class="text-center">{{ item.borrowDate }}</td>
                <td class="text-center">{{ item.dueDate }}</td>
                <td class="text-center">{{ item.title }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { getBorrowByMember } from '@/api/borrow'
export default {
  data: () => ({
    detail: {
      memberID: null,
    },

    head: ['วันที่ยืม', 'กำหนดคืน', 'ชื่อหนังสือ', 'ดำเนินการ'],
    list: [],
  }),
  methods: {
    getmem() {
      getBorrowByMember(this.detail.memberID).then((res) =>
        console.log(res.data)
      )
    },
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
