<template>
  <div>
    <v-row>
      <v-col class="text-center mt-12"><h1>รายการจองหนังสือ</h1> </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-simple-table class="mt-12">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">รหัสมาชิก</th>
                <th class="text-left">สถานที่จัดส่ง</th>
                <th class="text-left">รหัส IBSN</th>
                <th class="text-left">เบอร์ติดต่อ</th>
                <th class="text-left">สถานะ</th>
                <th class="text-left">แก้ไข</th>
                <th class="text-left">ลบ</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" :key="item.borrowID">
                <td>{{ item.memberID }}</td>
                <td>{{ item.reservePlace }}</td>
                <td>
                  {{ item.isbn }}
                </td>
                <td>{{ item.phoneTemp }}</td>
                <td>{{ item.status }}</td>
                <td>
                  <v-btn
                    elevation="0"
                    icon
                    :to="{
                      name: 'reserve-librarian-EditStatus',
                      params: { id: item.borrowID },
                    }"
                    ><v-icon>mdi-pencil</v-icon></v-btn
                  >
                </td>
                <td>
                  <v-btn elevation="0" icon><v-icon>mdi-delete</v-icon></v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getBookingLibrarian } from '@/api/borrow'
export default {
  data: () => ({
    list: [],
  }),
  mounted() {
    getBookingLibrarian().then((res) => (this.list = res.data))
  },
}
</script>
<style lang="scss" scoped>
.page-enter {
}
.page-leave-to {
}
</style>
