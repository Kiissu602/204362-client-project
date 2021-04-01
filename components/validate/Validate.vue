<template>
  <div class="x d-flex justify-center align-center">
    <div class="y">
      <h1 class="text-h6 text-center">ตรวจสอบผู้ใกล้จบ/ลาออก/พ้นสภาพ</h1>
      <v-text-field
        label="รหัสนักศึกษา"
        append-icon="mdi-magnify"
        outlined
        dense
      ></v-text-field>
      <div class="d-flex justify-end mt-12">
        <v-btn color="primary">ค้นหา</v-btn>
      </div>
      <v-simple-table class="mt-12">
        <thead>
          <tr>
            <th class="text-center text-subtitle-1">ชื่อ</th>
            <th class="text-center text-subtitle-1">เบอร์ติดต่อ</th>
            <th class="text-center text-subtitle-1">หนังสือที่ยืม</th>
            <th class="text-center text-subtitle-1">สถานะ</th>
            <th class="text-center text-subtitle-1">รายละเอียด</th>
          </tr>
        </thead>
        <tbody>
          <td class="text-center text-subtitle-1">พัทธิรา ธิศรี</td>
          <td class="text-center text-subtitle-1">0956761220</td>
          <td class="text-center text-subtitle-1">อุ้ว</td>
          <td class="text-center text-subtitle-1">คาดว่า</td>
          <td>
            <div class="d-flex justify-center">
              <v-btn color="accent" small outlined>รายละเอียด</v-btn>
            </div>
          </td>
        </tbody>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.x {
  height: 100%;
}
.y {
  width: 100%;
}
</style>
