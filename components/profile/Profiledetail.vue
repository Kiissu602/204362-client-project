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
      <v-col class="text-left pa-0">{{ detail.facultyName }}</v-col>
    </v-row>
    <v-row>
      <v-col class="text-left pa-0" sm="2">สาขา:</v-col>
      <v-col class="text-left pa-0">{{ detail.departmentName }}</v-col>
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
      memberId: '610777777',
      firstName: 'พรประภา',
      lastName: 'ฮาเอเกด',
      birthDate: '1/2/3456',
      sex: 'ชายงับ',
      faculty: '1',
      department: '2',
      email: 'eee@gmail.com',
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
