<template>
  <v-container class="con justify-center align-center">
    <div>
      <h1 class="text-h6 text-center mt-12">กำลังจัดส่ง</h1>
      <div class="d-flex justify-center">
        <v-simple-table class="table mt-12">
          <thead>
            <tr>
              <th class="text-center">ISBN</th>
              <th class="text-center">ชื่อหนังสือ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in list" :key="item.isbn">
              <td class="text-center">{{ item.isbn }}</td>
              <td class="text-center">{{ item.title }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </div>
    </div>
  </v-container>
</template>

<script>
import { getDelivery } from '@/api/borrow'
import { mapState } from 'vuex'

export default {
  data: () => ({
    list: [],
  }),
  computed: {
    ...mapState({
      login: (state) => state.login,
    }),
  },
  mounted() {
    const obj = { id: this.login.memberID }
    getDelivery(obj).then((res) => (this.list = res.data))
  },
}
</script>

<style lang="scss" scoped>
.page-enter,
.page-leave-to,
.con {
  height: 100vh;
}
.table {
  width: 70%;
}
</style>
