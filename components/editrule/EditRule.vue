<template>
  <v-container class="rule d-flex justify-center align-center">
    <div>
      <table>
        <tr>
          <td>นักศึกษา</td>
          <td class="d-flex align-center">
            <v-text-field
              v-model="student.amount"
              class="px-4"
              label="จำนวน"
              suffix="เล่ม"
              dense
              outlined
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="student.limitDayBorrow"
              class="px-4"
              label="ระยะเวลายืม"
              dense
              suffix="วัน"
              outlined
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="student.limitDayBooking"
              class="px-4"
              label="ระยะเวลาจอง"
              suffix="วัน"
              dense
              outlined
            ></v-text-field>
          </td>
        </tr>
        <tr>
          <td>บุคลลากร</td>
          <td>
            <v-text-field
              v-model="staff.amount"
              class="px-4"
              label="จำนวน"
              dense
              suffix="เล่ม"
              outlined
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="staff.limitDayBorrow"
              class="px-4"
              label="ระยะเวลายืม"
              suffix="วัน"
              dense
              outlined
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="staff.limitDayBooking"
              class="px-4"
              label="ระยะเวลาจอง"
              suffix="วัน"
              dense
              outlined
            ></v-text-field>
          </td>
        </tr>
        <tr>
          <td>มารับหนังสือภายใน</td>
          <td>
            <v-text-field
              v-model="student.getBook"
              class="px-4"
              suffix="วัน"
              dense
              outlined
            ></v-text-field>
          </td>
        </tr>
        <tr>
          <td>ค่าปรับคืนเกินกำหนด(วันละ)</td>
          <td>
            <v-text-field
              v-model="student.returnFines"
              class="px-4"
              suffix="บาท/เล่ม"
              dense
              outlined
            ></v-text-field>
          </td>
        </tr>
        <tr>
          <td>ค่าปรับคืน ชำรุด/สูญหาย</td>
          <td>
            <v-text-field
              v-model="student.lostFines"
              class="px-4"
              suffix="บาท/เล่ม"
              dense
              outlined
            ></v-text-field>
          </td>
        </tr>
      </table>
      <div class="d-flex justify-end">
        <v-btn color="primary" @click="submit">ยืนยัน</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import { getJobs } from '@/api/jobs'
import { putRule } from '@/api/rule'
export default {
  data: () => ({
    student: {},
    staff: {},
  }),
  mounted() {
    getJobs().then((res) => {
      this.student = res.data[1]
      this.staff = res.data[2]
    })
  },
  methods: {
    submit() {
      const obj = {
        ruleID: this.student.ruleID,
        jobID: this.student.jobID,
        amount: this.student.amount,
        limitDayBorrow: this.student.limitDayBorrow,
        limitDayBooking: this.student.limitDayBooking,
        returnFines: this.student.returnFines,
        lostFines: this.student.lostFines,
        getBook: this.student.getBook,
      }
      const objs = {
        ruleID: this.staff.ruleID,
        jobID: this.staff.jobID,
        amount: this.staff.amount,
        limitDayBorrow: this.staff.limitDayBorrow,
        limitDayBooking: this.staff.limitDayBooking,
        returnFines: this.student.returnFines,
        lostFines: this.student.lostFines,
        getBook: this.student.getBook,
      }
      putRule(obj)
      putRule(objs)
    },
  },
}
</script>

<style lang="scss" scoped>
.rule {
  height: 100vh;
}
</style>
