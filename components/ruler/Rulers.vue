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
        <tr v-for="item in rules" :key="item.type">
          <td class="text-center">{{ item.type }}</td>
          <td class="text-center">{{ item.num }}</td>
          <td class="text-center">{{ item.day }}</td>
          <td class="text-center">{{ item.booking }}</td>
        </tr>
      </tbody>
    </table>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    rules: [
      { type: 'นักศึกษา', num: 5, day: 7, booking: 8 },
      { type: 'บุคลากร', num: 7, day: 14, booking: 15 },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.rt {
  width: 100%;
}
</style>
