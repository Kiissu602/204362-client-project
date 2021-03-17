<template>
  <v-container>
    <div class="rt d-flex justify-center align-center pa-20">
      <div class="box">
        <v-row>
          <v-col><v-text-field label="รหัสสมาชิก" outlined dense /></v-col>
        </v-row>

        <div class="bt d-flex justify-center align-end">
          <v-btn color="primary"><v-icon>mdi-magnify</v-icon>ค้นหา</v-btn>
        </div>
        <div class="pt-10">
          <p class="text-center text-subtitle-1">รหัส: {{ pid }}</p>
          <p class="text-center text-subtitle-1">
            ชื่อ: {{ fname }} {{ lname }}
          </p>
        </div>
        <div>
          <table class="rtl mt-12">
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
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    pid: '610510692',
    fname: 'พรนะวัด',
    lname: 'โบราณ',
    head: ['วันที่ยืม', 'กำหนดคืน', 'ชื่อหนังสือ', 'ดำเนินการ'],
  }),
}
</script>

<style lang="scss" scoped>
.rt {
  height: 100vh;
}
.rtl {
  width: 100%;
  border-bottom: 1px solid;
}
.box {
  width: 70%;
}
.head {
  width: 100%;
}
</style>
