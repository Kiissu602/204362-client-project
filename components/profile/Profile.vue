<template>
  <v-card lass="ca d-flex align-center justify-center" min-width="300">
    <div class="profile d-flex align-center justify-center ma-6">
      <v-card class="ml-4" max-height="150"
        ><v-img
          :src="detail.image | img"
          height="150"
          width="150"
          :aspect-ratio="1"
      /></v-card>
      <v-container class="det pl-14">
        <table>
          <tr>
            <td class="text-right pr-4">รหัส:</td>
            <td class="text-left pa-0">{{ detail.memberID }}</td>
          </tr>
          <tr>
            <td class="text-right pr-4">ชื่อ:</td>
            <td class="text-left pa-0">{{ text }}</td>
          </tr>
          <tr>
            <td class="text-right pr-4">วันเกิด:</td>
            <td class="text-left pa-0">
              {{ dayjs(detail.birthDate).format('DD/MM/BBBB') }}
            </td>
          </tr>
          <tr>
            <td class="text-right pr-4">เพศ:</td>
            <td class="text-left pa-0">{{ detail.sex }}</td>
          </tr>
          <tr>
            <td class="text-right pr-4">โทรศัพท์:</td>
            <td class="text-left pa-0">{{ detail.phone }}</td>
          </tr>
          <tr>
            <td class="text-right pr-4">คณะ:</td>
            <td class="text-left pa-0">{{ detail.facultyName }}</td>
          </tr>
          <tr>
            <td class="text-right pr-4">สาขา:</td>
            <td class="text-left pa-0">{{ detail.departmentName }}</td>
          </tr>
          <tr>
            <td class="text-right pr-4">อีเมล:</td>
            <td class="text-left pa-0">{{ detail.email }}@gmail.com</td>
          </tr>
        </table>
      </v-container>
    </div>
    <div class="d-flex justify-end ma-4">
      <ProfileEditButton />
    </div>
  </v-card>
</template>

<script>
import dayjs from 'dayjs'
import { mapState } from 'vuex'
import { getMemberByID } from '@/api/member'
export default {
  filters: {
    img(path) {
      return `${process.env.ENDPOINT}/uploads/${path}`
    },
  },
  data: () => ({
    detail: {},
  }),
  computed: {
    ...mapState({
      login: (state) => state.login,

      text() {
        return `${this.detail.firstName} ${this.detail.lastName}`
      },
    }),
  },

  mounted() {
    getMemberByID(this.login.memberID).then((res) => {
      this.detail = res.data
    })
  },
  methods: {
    dayjs,
  },
}
</script>

<style lang="scss" scoped>
.profile {
  min-width: 50vw;
}
</style>
