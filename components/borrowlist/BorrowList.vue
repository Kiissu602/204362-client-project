<template>
  <v-container>
    <div class="d-flex align-center justify-center">
      <h1 class="text-h5 text-center mt-12">ค้นหา รายการยืม</h1>
    </div>
    <div class="type d-flex align-center justify-center">
      <v-radio-group v-model="type" row color="primary" ripple mandatory>
        <v-radio class="mt-6 px-12" label="นักศึกษา" value="Student"></v-radio>
        <v-radio class="mt-6 px-12" label="บุคลากร" value="Staff"></v-radio>
      </v-radio-group>
    </div>
    <div>
      <v-text-field outlined dense append-icon="mdi-magnify" />
    </div>
    <div>
      <p class="text-center text-subtitle-1">รหัส: {{ PID }}</p>
      <p class="text-center text-subtitle-1">ชื่อ: {{ fname }} {{ lname }}</p>
    </div>
    <table class="brl mt-12">
      <thead>
        <tr>
          <th v-for="item in head" :key="item" class="text-subtitle-1">
            {{ item }}
          </th>
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
  </v-container>
</template>

<script>
export default {
  data: () => ({
    type: '',
    PID: '610510692',
    fname: 'พรนะวัด',
    lname: 'โบราณ',
    head: ['วันที่ยืม', 'กำหนดคืน', 'ผู้ยืม', 'หนังสือ', 'ดำเนินการ'],
  }),
}
</script>

<style lang="scss" scoped>
.type {
  width: 100% !important;
}
.brl {
  width: 100%;
  border-bottom: 1px solid;
}
</style>
