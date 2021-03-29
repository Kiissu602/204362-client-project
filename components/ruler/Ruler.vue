<template>
  <v-container>
    <h1 class="text-h5 text-center mt-2">กฏการยืมหนังสือ</h1>
    <span
      v-if="login.job && login.job.jobName === 'Librarian'"
      class="d-flex justify-end pt-n3"
    >
      <nuxt-link color="primary" to="/ruler/editrule">แก้ไขกฏ</nuxt-link>
    </span>
    <Rulers class="mt-8" :student="student" :staff="staff" />
    <Rulerss
      class="pa-12"
      start="8:00"
      stop="15:00"
      first="12:00"
      second="16.30"
      :day="student.getBook"
    />
    <Rulersss
      class="pa-2 ml-10"
      :fines="student.returnFines"
      :lost="student.lostFines"
    />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import { getJobs } from '@/api/jobs'
export default {
  data: () => ({
    student: {
      amount: '',
      limitDayBooking: '',
      limitDayBorrow: '',
      lostFines: '',
      returnFines: '',
      getBook: '',
    },
    staff: {
      amount: '',
      limitDayBooking: '',
      limitDayBorrow: '',
      lostFines: '',
      returnFines: '',
      getBook: '',
    },
  }),
  computed: {
    ...mapState({
      login: (state) => state.login,
    }),
  },
  mounted() {
    getJobs().then((res) => {
      this.student = res.data[1]
      this.staff = res.data[2]
    })
  },
}
</script>

<style lang="scss" scoped></style>
