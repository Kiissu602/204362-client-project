<template>
  <v-container class="det pl-14">
    <v-row>
      <v-col class="text-left pa-0" sm="2">ชื่อ:</v-col>
      <v-col class="text-left pa-0">{{ text }}</v-col>
    </v-row>
    <v-row>
      <v-col class="text-left pa-0" sm="2">วันเกิด:</v-col>
      <v-col class="text-left pa-0">{{
        dayjs(detail.bdate).format('DD-MM-BBBB')
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
      <v-col class="text-left pa-0">{{ detail.faculty.fname }}</v-col>
    </v-row>
    <v-row>
      <v-col class="text-left pa-0" sm="2">สาขา:</v-col>
      <v-col class="text-left pa-0">{{ detail.department.dname }}</v-col>
    </v-row>
    <v-row>
      <v-col class="text-left pa-0" sm="2">อีเมล:</v-col>
      <v-col class="text-left pa-0">{{ detail.email }}</v-col>
    </v-row>
  </v-container>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    detail: Object,
  },
  computed: {
    text() {
      return `${this.detail.fname} ${this.detail.lname}`
    },
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
