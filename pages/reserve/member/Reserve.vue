<template>
  <div>
    <v-form v-model="valid" lazy-validation ref="form">
      <v-row>
        <v-col class="text-center"><h1>รายการจองหนังสือ</h1></v-col>
      </v-row>
      <v-row>
        <v-col class="ml-15">
          รหัส: {{ login.memberID }} <br />
          ชื่อ: {{ login.firstName }} {{ login.lastName }} <br />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">รูป</th>
                  <th class="text-center">รายละเอียด</th>
                  <th class="text-center">ดำเนินการ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in booklist" :key="item.id">
                  <td>
                    <div class="d-flex justify-center">
                      <v-img
                        max-height="97"
                        max-width="88"
                        :src="item.img | img"
                      ></v-img>
                    </div>
                  </td>
                  <td class="text-center">
                    ชื่อเรื่อง: {{ item.title }} <br />
                    รหัสหนังสือ: {{ item.isbn }}<br />
                    ผู้แต่ง: {{ item.writer }}
                  </td>
                  <td>
                    <div class="d-flex justify-center">
                      <v-btn elevation="0" icon @click="del(item.borrowID)"
                        ><v-icon>mdi-delete</v-icon></v-btn
                      >
                    </div>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="text-right"> ที่อยู่การจัดส่ง </v-col>
        <v-col cols="4" lg="2">
          <v-select
            v-model="place"
            :items="places"
            label="สถานที่"
            outlined
            :rules="placeRule"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2" class="text-right"> เบอร์ติดต่อ </v-col>
        <v-col cols="4" lg="2">
          <v-text-field
            v-model="phone"
            placeholder=""
            solo
            :error-messages="errors"
            required
            :rules="telPhoneRule"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col offset="2">
          <v-btn depressed color="grey" dark class="mr-5"> ยกเลิก </v-btn>
          <v-btn
            depressed
            color="green darken-1"
            dark
            type="button"
            :disabled="!valid"
            @click="validate"
          >
            ยืนยัน
          </v-btn>
        </v-col>
      </v-row>
      <v-snackbar v-model="snackbar" :timeout="timeout"
        >เปลี่ยนแล้วจย้า<template #action="{ attrs }">
          <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
            ปิด
          </v-btn>
        </template>
      </v-snackbar>
    </v-form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getBooking, deleteBorrow, putPlaceBooking } from '@/api/borrow'
export default {
  filters: {
    img(path) {
      return `${process.env.ENDPOINT}/uploads/${path}`
    },
  },
  data: () => ({
    place: '',
    timeout: 2000,
    snackbar: false,
    booklist: [],
    places: ['หอหญิง 1', 'หอชาย 3', 'ภาควิชาวิทยาการคอมพิวเตอร์'],
    valid: true,
    telPhoneRule: [
      (v) => !!v || 'กรอกเบอร์โทรด้วยจ๊ะ',
      (v) => (v && v.length === 10) || 'เบอร์โทร 10 ตัวจ๊ะ',
      (v) => /^0([0-9]){9}$/.test(v) || 'รูปแบบเบอร์ผิดนะจ๊ะ 0XXXXXXXXX',
    ],
    placeRule: [(v) => !!v || 'เลือกสถานที่ด้วยจ๊ะ'],
    phone: '',
  }),
  computed: {
    ...mapState({
      login: (state) => state.login,
    }),
  },
  mounted() {
    this.phone = this.login.phone
    const id = this.login.memberID
    getBooking(id).then((res) => {
      this.booklist = res.data.map((v) => ({
        ...v,
        writer: v.writer?.join(', '),
      }))
    })
  },
  methods: {
    validate() {
      this.valid = this.$refs.form.validate()
      if (this.valid) {
        this.booklist.forEach((el) => {
          const obj = {
            borrowID: el.borrowID,
            place: this.place,
            phoneTemporary: this.phone,
          }
          putPlaceBooking(obj)
        })
        this.snackbar = true
      }
    },
    del(id) {
      deleteBorrow(id)
      this.booklist = this.booklist.filter(function (el) {
        return el.borrowID !== id
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.page-enter {
}
.page-leave-to {
}
</style>
