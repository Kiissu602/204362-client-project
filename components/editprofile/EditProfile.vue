<template>
  <v-form class="data">
    <div class="d-flex align-center justify-center">
      <label>
        <v-card ripple max-height="150">
          <v-img
            height="150"
            width="150"
            :aspect-ratio="1"
            :src="change ? imgShow : imgShoww(login.imgUrl)"
          ></v-img>
        </v-card>
        <input type="file" style="display: none" @change="imgChange" />
      </label>
      <v-row>
        <v-col>
          <v-text-field
            v-model="field.memberID"
            class="pl-8 pt-4"
            disabled
            outlined
            dense
            label="รหัส"
          />
          <v-row class="py-4 pl-8">
            <v-col
              ><v-text-field
                v-model="field.firstName"
                outlined
                dense
                label="ชื่อ"
              />
            </v-col>
            <v-col
              ><v-text-field
                v-model="field.lastName"
                outlined
                dense
                label="นามสกุล"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-divider light> </v-divider>
    <v-row class="pt-6">
      <v-col>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template #activator="{ on, attrs }">
            <v-text-field
              v-model="field.birthDate"
              label="วันเกิด"
              append-icon="mdi-calendar"
              outlined
              dense
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            ref="picker"
            v-model="field.birthDate"
            :max="new Date().toISOString().substr(0, 10)"
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col
        ><v-select v-model="field.sex" :items="sexs" label="เพศ" dense outlined>
        </v-select
      ></v-col>
      <v-col
        ><v-text-field v-model="field.phone" outlined dense label="โทรศัพท์"
      /></v-col>
    </v-row>
    <v-row
      ><v-col>
        <v-autocomplete
          v-model="field.faculty"
          label="สังกัด"
          :items="faculties"
          outlined
          dense
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="field.department"
          label="สาขา"
          :items="department"
          outlined
          dense
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-select
          v-model="field.jobs"
          :items="jobs"
          label="อาชีพ"
          outlined
          dense
        ></v-select> </v-col
    ></v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="field.email"
          label="อีเมล"
          suffix="@gmail.com"
          outlined
          dense
        ></v-text-field
      ></v-col>
      <v-col
        ><v-text-field
          v-model="field.password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          label="รหัสผ่าน"
          outlined
          dense
          @click:append="show1 = !show1"
        ></v-text-field
      ></v-col>
      <v-col
        ><v-text-field
          :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show3 ? 'text' : 'password'"
          label="ยืนยันรหัสผ่าน"
          outlined
          dense
          @click:append="show3 = !show3"
        ></v-text-field
      ></v-col>
    </v-row>
    <div class="d-flex justify-end">
      <v-btn color="success" @click="edit"
        ><v-icon left> mdi-content-save-outline </v-icon> บันทึก
      </v-btn>
    </div>
  </v-form>
</template>

<script>
import dayjs from 'dayjs'
import { mapState } from 'vuex'
import { getFaculty, getDepart } from '@/api/faculties'

export default {
  data: () => ({
    field: {
      image: null,
      memberID: '',
      firstName: '',
      lastName: '',
      birthDate: '',
      sex: '',
      phone: '',
      faculty: '',
      department: '',
      job: '',
      email: '',
      password: null,
    },
    member: {},
    change: false,
    image: null,
    imgShow: null,
    facid: [],
    faculties: [],
    department: [],
    jobs: [
      { text: 'นักศึกษา', value: 2 },
      { text: 'บุคลากร', value: 3 },
    ],
    sexs: ['ชาย', 'หญิง'],
    menu: false,
    show1: false,
    show3: false,
  }),

  computed: {
    ...mapState({
      login: (state) => state.login,
    }),
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },

    'field.faculty'(next) {
      getDepart(next).then((res) => {
        this.department = res.data.departmentlist.map((d) => ({
          text: d.departmentName,
          value: d.departmentID,
        }))
      })
    },
    image(e) {
      if (e) {
        const reader = new FileReader()
        reader.onload = (re) => {
          this.imgShow = re.target.result
        }
        this.image = e
        reader.readAsDataURL(e)
      } else {
        this.imgShow = null
      }
    },
  },

  mounted() {
    getFaculty().then((res) => {
      this.faculties = res.data.map((f) => ({
        text: f.facultyName,
        value: f.facultyID,
      }))
      this.facid = res.data
    })
    this.field.memberID = this.login.memberID
    this.field.firstName = this.login.firstName
    this.field.lastName = this.login.lastName
    this.field.sex = this.login.sex
    this.field.phone = this.login.phone
    this.field.email = this.login.email
    this.field.password = this.login.password
    this.field.faculty = this.login.faculty.facultyID
    this.field.department = this.login.department.departmentID
    this.field.job = this.login.job.jobID
    this.field.birthDate = this.login.birthDate.substr(0, 10)
  },
  methods: {
    imgChange(e) {
      if (e.target.files[0]) {
        const reader = new FileReader()
        reader.onload = (re) => {
          this.imgShow = re.target.result
        }
        this.image = e.target.files[0]
        reader.readAsDataURL(e.target.files[0])
        this.change = true
      } else {
        this.imgShow = null
      }
    },
    save(bdate) {
      this.$refs.menu.save(this.field.bdate)
    },
    imgShoww(path) {
      return `${process.env.ENDPOINT}/uploads/${path}`
    },
    dayjs,
    edit() {
      this.$emit('field', this.field)
    },
  },
}
</script>

<style lang="scss" scoped>
.data {
  width: 70vw;
}
</style>
