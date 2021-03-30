<template>
  <div>
    <v-row>
      <v-col class="text-center"><h2>แก้ไขสถานะการจัดส่งหนังสือ</h2></v-col>
    </v-row>
    <v-row>
      <v-col md="3" offset-md="3">
        รหัสการยืม: 123456 <br />
        รหัสมาชิก: 610510714<br />
        รายการจอง:<br />
        1. 0000124 <br />
        2.1244544<br />
        3.1244544<br />
        4.1244544<br />
        สถานที่จัดส่ง: ป้ายภาควิชาคอมพิวเตอร์<br />
        เบอร์ติดต่อ: 098765523<br />
      </v-col>
    </v-row>
    <v-row>
      <v-col md="3" offset-md="3">
        <v-col>สถานะการจัดส่ง</v-col>
        <v-select :items="status" label="สถานะ" outlined></v-select>
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
        <v-btn depressed color="purple darken-2" dark> อัพเดต </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    status: [
      'รอดำเนินการ',
      'กำลังดำเนินการ',
      'กำลังจัดส่ง',
      'ส่งสำเร็จ',
      'ส่งล้มเหลว',
    ],
  }),
}
</script>

<style></style>
