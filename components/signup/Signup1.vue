<template>
  <v-form class="sng1">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="obj.fname"
            :rules="nameRules"
            label="ชื่อ"
            :counter="20"
            outlined
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            v-model="obj.lname"
            :rules="nameRules"
            label="นามสกุล"
            :counter="20"
            outlined
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-select
            v-model="obj.type"
            :items="items"
            label="อาชีพ"
            :rules="jobRules"
            outlined
            required
          ></v-select>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="obj.PID"
            label="รหัส"
            outlined
            required
          ></v-text-field>
        </v-col> </v-row
      ><v-row>
        <v-col cols="12" md="6">
          <v-autocomplete
            v-model="obj.fac"
            label="สังกัด"
            :items="faculties"
            :rules="facRules"
            outlined
            required
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" md="6">
          <v-autocomplete
            v-model="obj.dep"
            label="สาขา"
            :items="department"
            outlined
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col col="12" md="6">
          <v-menu
            ref="menu"
            v-model="obj.menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="obj.bdate"
                label="วันเกิด"
                prepend-inner-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                outlined
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              ref="picker"
              v-model="obj.bdate"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
              outlined
              @change="save"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field
            type="number"
            :value="obj.age"
            label="อายุ"
            outlined
            readonly
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" md="3">
          <v-text-field v-model="obj.sex" label="เพศ" outlined> </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="obj.phone"
            type="tel"
            :rules="phoneRules"
            label="เบอร์โทรศัพท์"
            :counter="10"
            outlined
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <div class="d-flex justify-end">
        <v-btn color="primary" @click="next">ต่อไป</v-btn>
      </div>
    </v-container>
  </v-form>
</template>

<script>
import { getFaculty, getDepart } from '@/api/faculties'

export default {
  data: () => ({
    obj: {
      fname: '',
      lname: '',
      type: '',
      PID: '',
      fac: '',
      dep: '',
      bdate: '',
      sex: '',
      age: '',
      phone: '',
    },
    facid: [],
    faculties: [],
    department: [],
    menu: false,
    nameRules: [
      (v) => !!v || 'กรุณากรอกข้อมูล',
      (v) => v.length <= 20 || 'ต้องไม่เกิน 20 ตัวอักษร',
    ],
    items: [
      { text: 'นักศึกษา', value: 303 },
      { text: 'อาจารย์', value: 202 },
      { text: 'บุคคลากร', value: 404 },
    ],
    jobRules: [
      (v) => !!v || 'กรุณาเลือก',
      (v) => v.length <= 10 || 'กรุณาเลือก',
    ],
    facRules: [(v) => !!v || 'กรุณากรอกข้อมูล'],
    phoneRules: [
      (v) => !!v || 'กรุณากรอกข้อมูล',
      (v) => v.length <= 10 || 'ต้องไม่เกิน 10 ตัวอักษร',
      (v) => !isNaN(v) || 'ต้องเป็นตัวเลข',
    ],
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
    'obj.bdate'(next) {
      const age = new Date() - new Date(next)
      this.obj.age = new Date(age).getFullYear() - 1970
    },
    'obj.fac'(next) {
      getDepart(next).then((res) => {
        this.department = res.data.departmentlist.map((d) => ({
          text: d.dname,
          value: d.dnum,
        }))
      })
    },
  },
  mounted() {
    getFaculty().then((res) => {
      this.faculties = res.data.map((f) => ({ text: f.fname, value: f.fnum }))
      this.facid = res.data
    })
  },
  methods: {
    save(bdate) {
      this.$refs.menu.save(this.obj.bdate)
    },
    next() {
      this.$emit('next', this.obj)
    },
  },
}
</script>

<style lang="scss" scoped>
.sng1 {
  width: 75%;
}
</style>
