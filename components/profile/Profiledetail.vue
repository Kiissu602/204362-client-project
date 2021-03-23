<template>
  <v-container class="det pl-14">
    <v-row>
      <v-col class="text-left pa-0" sm="2">รหัส:</v-col>
      <v-col class="text-left pa-0">{{ memberId }}</v-col>
    </v-row>
    <v-row>
      <v-col class="text-left pa-0" sm="2">ชื่อ:</v-col>
      <v-col class="text-left pa-0">{{ text }}</v-col>
    </v-row>
    <v-row>
      <v-col class="text-left pa-0" sm="2">วันเกิด:</v-col>
      <v-col class="text-left pa-0">{{
        dayjs(detail.birthDate).format('DD/MM/BBBB')
      }}</v-col>
    </v-row>
    <v-row>
      <v-col class="text-left pa-0" sm="2">เพศ:</v-col>
      <v-col class="text-left pa-0">{{ detail.sex }}</v-col>
    </v-row>
    <v-row>
      <v-col class="text-left pa-0" sm="2">โทรศัพท์:</v-col>
      <v-col class="text-left pa-0">{{ detail.phone }}</v-col>
    </v-row>
    <v-row>
      <v-col class="text-left pa-0" sm="2">คณะ:</v-col>
      <v-col class="text-left pa-0">{{ detail.faculty.facultyName }}</v-col>
    </v-row>
    <v-row>
      <v-col class="text-left pa-0" sm="2">สาขา:</v-col>
      <v-col class="text-left pa-0">{{
        detail.department.departmentName
      }}</v-col>
    </v-row>
    <v-row>
      <v-col class="text-left pa-0" sm="2">อีเมล:</v-col>
      <v-col class="text-left pa-0">{{ detail.email }}@gmail.com</v-col>
    </v-row>
  </v-container>
</template>

<script>
import dayjs from 'dayjs'
import { getMemberByID } from '@/api/member'
export default {
  props: {
    memberId: String,
  },
  data: () => ({
    detail: {
      memberId: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      sex: '',
      faculty: '',
      department: '',
      email: '',
    },
  }),

  computed: {
    text() {
      return `${this.detail.firstName} ${this.detail.lastName}`
    },
  },
  mounted() {
    getMemberByID(this.memberId).then((res) => {
      this.detail = res.data
    })
  },
  methods: {
    dayjs,
  },
}
</script>

<style lang="scss" scoped>
.det {
  white-space: pre-wrap;
}
</style>
