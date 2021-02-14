<template>
  <v-form class="sng2">
    <v-container>
      <v-col cols="12" md="12" class="d-flex align-center justify-center">
        <div class="img">
          <v-img
            :src="imgShow || require('~/assets/imgs/student.svg')"
            :aspect-ratio="3 / 4"
          ></v-img>
          <v-file-input
            v-model="field.image"
            :rules="rule"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="เลือกรูปโปรไฟล์"
            prepend-icon=""
            prepend-inner-icon="mdi-camera"
            outlined
            required
          ></v-file-input>
        </div>
      </v-col>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="field.username"
            label="ชื่อผู้ใช้งาน"
            :rules="userRule"
            outlined
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="field.password"
            type="password"
            label="รหัสผ่าน"
            :rules="passRule"
            outlined
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="cpassword"
            type="password"
            label="ยืนยันรหัสผ่าน"
            :rules="cRule"
            outlined
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="field.email"
            label="อีเมล"
            :rules="emailRules"
            outlined
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="cemail"
            label="ยืนยัน อีเมล"
            :rules="ceRule"
            outlined
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="d-flex justify-end">
        <v-btn outlined color="primary" class="btn mr-3" @click="back"
          >ย้อนกลับ</v-btn
        >
        <v-btn color="primary" class="btn" @click="submit">ยืนยัน</v-btn>
      </div>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    field: {
      image: null,
      username: '',
      password: '',
      email: '',
    },
    imgShow: null,
    cemail: '',
    cpassword: '',
    rule: [(value) => !!value || 'กรุณาเลือกรูปภาพ'],
    userRule: [
      (v) => !!v || 'กรุณากรอกข้อมูล',
      (v) => v.length <= 20 || 'ต้องไม่เกิน 20 ตัวอักษร',
    ],
    passRule: [
      (v) => !!v || 'กรุณากรอกข้อมูล',
      (v) => v.length <= 60 || 'ต้องไม่เกิน 60 ตัวอักษ',
    ],
    emailRules: [
      (v) => !!v || 'E-mail is required',
      (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
  computed: {
    cRule() {
      return [(v) => v === this.field.password || 'รหัสไม่ตรงกัน']
    },
    ceRule() {
      return [(v) => v === this.field.email || 'อีเมลไม่ตรงกัน']
    },
  },
  watch: {
    'field.image'(e) {
      if (e) {
        const reader = new FileReader()
        reader.onload = (re) => {
          this.imgShow = re.target.result
        }
        this.field.image = e
        reader.readAsDataURL(e)
      } else {
        this.imgShow = null
      }
    },
  },
  methods: {
    imgChange(e) {
      if (e.target.files[0]) {
        const reader = new FileReader()
        reader.onload = (re) => {
          this.imgShow = re.target.result
        }
        this.field.image = e.target.files[0]
        reader.readAsDataURL(e.target.files[0])
      } else {
        this.imgShow = null
      }
    },
    back() {
      this.$emit('back')
    },
    submit() {
      this.$emit('submit', this.field)
    },
  },
}
</script>

<style lang="scss" scoped>
.img {
  width: 15%;
}
.sng2 {
  width: 75%;
}
.btn {
  width: 70px;
}
</style>
