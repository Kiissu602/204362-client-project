<template>
  <v-card>
    <v-form class="data pa-12">
      <div class="d-flex align-center justify-center">
        <label>
          <v-card ripple height="150">
            <v-icon v-if="imgShow === null" size="150">mdi-plus</v-icon
            ><img
              v-else
              height="150"
              width="150"
              :aspect-ratio="1"
              :src="imgShow"
            />
          </v-card>

          <input
            type="file"
            style="display: none"
            accept="image/png, image/jpeg"
            @change="imgChange"
          />
        </label>
        <v-row>
          <v-col>
            <v-text-field
              v-model="detail.memberID"
              class="pl-8 pt-4"
              outlined
              dense
              label="รหัส"
              maxlength="9"
              counter="9"
            />
            <v-row class="py-4 pl-8">
              <v-col
                ><v-text-field
                  v-model="detail.firstName"
                  outlined
                  dense
                  label="ชื่อ"
                />
              </v-col>
              <v-col
                ><v-text-field
                  v-model="detail.lastName"
                  outlined
                  dense
                  label="นามสกุล"
                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <v-divider />
      <v-row class="pt-6">
        <v-col
          ><v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="detail.birthDate"
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
              v-model="detail.birthDate"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col
          ><v-select
            v-model="detail.sex"
            :items="sexs"
            label="เพศ"
            dense
            outlined
          >
          </v-select
        ></v-col>
        <v-col
          ><v-text-field v-model="detail.phone" outlined dense label="โทรศัพท์"
        /></v-col>
      </v-row>
      <v-row
        ><v-col>
          <v-autocomplete
            v-model="detail.faculty"
            label="สังกัด"
            :items="faculties"
            outlined
            dense
          ></v-autocomplete>
        </v-col>
        <v-col>
          <v-autocomplete
            v-if="!departments.length"
            label="สาขา"
            disabled
            outlined
            dense
          ></v-autocomplete>
          <v-autocomplete
            v-else
            v-model="detail.department"
            label="สาขา"
            :items="departments"
            outlined
            dense
          ></v-autocomplete>
        </v-col>
        <v-col>
          <v-select
            v-model="detail.job"
            :items="jobs"
            label="อาชีพ"
            outlined
            dense
          ></v-select> </v-col
      ></v-row>
      <v-row>
        <v-col>
          <v-text-field
            v-model="detail.email"
            label="อีเมล"
            outlined
            :suffix="suff"
            dense
          ></v-text-field
        ></v-col>
        <v-col
          ><v-text-field
            v-model="detail.password"
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
            v-model="cpassword"
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
        <v-btn color="success" @click="regist"
          ><v-icon left> mdi-check </v-icon> ยืนยัน
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
import { getFaculty, getDepart } from '@/api/faculties'
import dayjs from 'dayjs'
export default {
  data: () => ({
    detail: {
      image: null,
      memberID: '',
      firstName: '',
      lastName: '',
      birthDate: null,
      sex: '',
      phone: '',
      faculty: '',
      department: '',
      job: '',
      email: '',
      password: '',
    },
    cpassword: '',
    suff: '@gmail.com',
    imgShow: null,
    facid: [],
    faculties: [],
    departments: [],
    sexs: ['ชาย', 'หญิง'],
    jobs: [
      { text: 'นักศึกษา', value: 2 },
      { text: 'บุคลากร', value: 3 },
    ],
    menu: false,
    show1: false,
    show3: false,
  }),
  compute: {},
  watch: {
    'detail.faculty'(next) {
      getDepart(next).then((res) => {
        this.departments = res.data.departmentlist.map((d) => ({
          text: d.departmentName,
          value: d.departmentID,
        }))
      })
    },
    'detail.image'(e) {
      if (e) {
        const reader = new FileReader()
        reader.onload = (re) => {
          this.imgShow = re.target.result
        }
        this.detail.image = e
        reader.readAsDataURL(e)
      } else {
        this.imgShow = null
      }
    },
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
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
  },
  methods: {
    imgChange(e) {
      if (e.target.files[0]) {
        const reader = new FileReader()
        reader.onload = (re) => {
          this.imgShow = re.target.result
        }
        this.detail.image = e.target.files[0]
        reader.readAsDataURL(e.target.files[0])
      } else {
        this.imgShow = null
      }
    },
    dayjs,
    save(bdate) {
      this.$refs.menu.save(bdate)
    },
    regist() {
      this.$emit('regist', this.detail)
    },
  },
}
</script>

<style lang="scss" scoped>
.data {
  width: 70vw;
}
.plus {
  height: 150;
  width: 150;
}
</style>
