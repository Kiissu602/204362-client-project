<template>
  <v-form class="data">
    <div class="d-flex align-center justify-center">
      <label>
        <v-card ripple max-height="150">
          <v-icon size="150" v-if="imgShow === null">mdi-plus</v-icon>
          <v-img
            height="150"
            width="150"
            :aspect-ratio="1"
            :src="imgShow"
            v-else
          ></v-img>
        </v-card>
        <input type="file" style="display: none" @change="imgChange" />
      </label>
      <v-row>
        <v-col>
          <v-text-field class="pl-8 pt-4" outlined dense label="รหัส" />
          <v-row class="pt-4 pl-8">
            <v-col><v-text-field outlined dense label="ชื่อ" /> </v-col>
            <v-col><v-text-field outlined dense label="นามสกุล" /> </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-row class="pt-12">
      <v-col>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template #activator="{ on, attrs }">
            <v-text-field
              v-model="bdate"
              label="วันเกิด"
              append-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              outlined
              v-on="on"
              dense
            ></v-text-field>
          </template>
          <v-date-picker
            ref="picker"
            v-model="bdate"
            :max="new Date().toISOString().substr(0, 10)"
            min="1950-01-01"
            outlined
            @change="save"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col
        ><v-select :items="sexs" label="เพศ" dense outlined> </v-select
      ></v-col>
      <v-col
        ><v-text-field v-model="tel" outlined dense label="โทรศัพท์"
      /></v-col>
    </v-row>
    <v-row
      ><v-col>
        <v-autocomplete
          v-model="fac"
          label="สังกัด"
          :items="faculties"
          outlined
          dense
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="dep"
          label="สาขา"
          :items="department"
          outlined
          dense
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-select
          v-model="type"
          :items="jobs"
          label="อาชีพ"
          outlined
          dense
        ></v-select> </v-col
    ></v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="email"
          label="อีเมล"
          outlined
          dense
        ></v-text-field
      ></v-col>
      <v-col
        ><v-text-field
          v-model="password"
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
      <v-btn color="success"><v-icon left> mdi-check </v-icon> ยืนยัน </v-btn>
    </div>
  </v-form>
</template>

<script>
import { getFaculty, getDepart } from '@/api/faculties'
export default {
  data: () => ({
    bdate: '',
    fac: '',
    dep: '',
    tel: '',
    type: '',
    email: '',
    password: '',
    cpassword: '',
    image: null,
    imgShow: null,
    facid: [],
    faculties: [],
    department: [],
    jobs: ['นักศึกษา', 'อาจารย์', 'บุคลากร'],
    sexs: ['ชาย', 'หญิง', 'ไม่ระบุ'],
    menu: false,
    show1: false,
    show3: false,
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },

    fac(next) {
      getDepart(next).then((res) => {
        this.department = res.data.departmentlist.map((d) => ({
          text: d.dname,
          value: d.dnum,
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
      this.faculties = res.data.map((f) => ({ text: f.fname, value: f.fnum }))
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
        this.image = e.target.files[0]
        reader.readAsDataURL(e.target.files[0])
      } else {
        this.imgShow = null
      }
    },
  },
}
</script>

<style></style>
