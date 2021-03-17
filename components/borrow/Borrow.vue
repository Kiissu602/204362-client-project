<template>
  <v-container>
    <div class="brw d-flex justify-center align-center pa-20">
      <div class="box">
        <v-row>
          <v-col><v-text-field label="รหัสสมาชิก" outlined dense /></v-col>
        </v-row>
        <v-row>
          <v-col><v-text-field label="รหัสหนังสือ" outlined dense /></v-col>
        </v-row>
        <div class="bt d-flex justify-end align-end ml-12">
          <v-btn color="primary"><v-icon>mdi-plus</v-icon>เพิ่ม</v-btn>
        </div>
        <div>
          <p class="text-center text-subtitle-1">รหัส: {{ PID }}</p>
          <p class="text-center text-subtitle-1">
            ชื่อ: {{ fname }} {{ lname }}
          </p>
        </div>
        <div>
          <table class="br mt-12">
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
    PID: '610510697',
    fname: 'พรนะวัด',
    lname: 'โบราณ',
    head: ['วันที่ยืม', 'กำหนดคืน', 'ชื่อผู้ยืม', 'ชื่อหนังสือ', 'แก้ไข'],
  }),
}
</script>

<style lang="scss" scoped>
.brw {
  height: 100vh;
}
.bt {
  height: 50%;
}
.box {
  width: 70%;
}
.br {
  width: 100%;
  border-bottom: 1px solid;
}
</style>
