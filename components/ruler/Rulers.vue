<template>
  <v-card class="roon pa-4">
    <table class="rt">
      <thead>
        <tr>
          <th class="text-h6 font-weight-medium">ประเภทผู้ใช้</th>
          <th class="text-h6 font-weight-medium">จำนวน (เล่ม)</th>
          <th class="text-h6 font-weight-medium">ระยะเวลายืม (วัน)</th>
          <th class="text-h6 font-weight-medium">ระยะเวลาจอง (วัน)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center">นักศึกษา</td>
          <td class="text-center">{{ student.amount }}</td>
          <td class="text-center">{{ student.limitDayBorrow }}</td>
          <td class="text-center">{{ student.limitDayBooking }}</td>
        </tr>
        <tr>
          <td class="text-center">บุคลากร</td>
          <td class="text-center">{{ staff.amount }}</td>
          <td class="text-center">{{ staff.limitDayBorrow }}</td>
          <td class="text-center">{{ staff.limitDayBooking }}</td>
        </tr>
      </tbody>
    </table>
  </v-card>
</template>

<script>
export default {
  props: {
    student: Object,
    staff: Object,
  },
  data: () => ({}),
}
</script>

<style lang="scss" scoped>
.rt {
  width: 100%;
}
</style>
