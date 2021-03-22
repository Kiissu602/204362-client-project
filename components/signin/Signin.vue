<template>
  <v-form class="lgn" @submit.prevent="submit">
    <v-card class="pa-4">
      <p class="title font-weight-bold">ลงชื่อเข้าใช้.</p>
      <v-text-field
        v-model="email"
        label="อีเมล"
        outlined
        required
        type="text"
        suffix="@gmail.com"
        dense
      ></v-text-field>
      <v-text-field
        v-model="pwd"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        label="รหัสผ่าน"
        outlined
        required
        dense
        @click:append="show = !show"
      ></v-text-field>
      <v-btn class="sm justify-center" color="primary" type="submit" block>
        ยืนยัน
      </v-btn>
      <div class="text-center mt-4">
        <a color="primary"> ลืมรหัสผ่าน </a>
      </div>
    </v-card>
    <v-card class="pa-4 mt-6"
      ><div class="text-center">
        <span color="primary">
          ยังไม่มีบัญชี ?<nuxt-link color="primary" to="/Signup">
            สมัครสมาชิก
          </nuxt-link>
        </span>
      </div>
    </v-card>
  </v-form>
</template>

<script>
import { login } from '@/api/login'
export default {
  data: () => ({
    try: false,
    errMsg: '',
    cntEnt: false,
    email: '',
    pwd: '',
    show: false,
  }),
  mounted() {
    const storage = localStorage.getItem('mm-login')
    if (storage) {
      const login = JSON.parse(storage)
      if (login.loggedIn !== false) {
        this.$store.commit('LOGIN', login)
        this.$router.push('/')
      }
    }
  },
  methods: {
    cancle() {
      this.$router.push('/')
    },
    submit() {
      this.cntEnt = false
      this.errMsg = ''
      if (this.usn === '' || this.pwd === '') {
        this.cntEnt = true
        return
      }
      this.try = true
      login(this.$store, this.email, this.pwd)
        .then((_) => {
          this.$router.push('/')
        })
        .catch((reason) => {
          this.try = false
          if (reason.response) this.errMsg = reason.response.data.message
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.lgn {
  width: 27%;
}
.btn {
  text-align: center;
}
.title {
  font-size: 60;
}
.sm {
  width: 25%;
}
.cc {
  margin-left: 20%;
  width: 25%;
}
</style>
