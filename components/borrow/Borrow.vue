<template>
  <v-container>
    <v-form lazy-validation ref="form">
      <div class="brw d-flex justify-center align-center pa-20">
        <div class="box">
          <v-row>
            <v-col
              ><v-text-field
                v-model="detail.memberID"
                label="รหัสสมาชิก"
                maxlength="9"
                :counter="9"
                outlined
                dense
                :rules="rules.memberIDRule"
            /></v-col>
          </v-row>
          <v-row>
            <v-col
              ><v-text-field
                v-model="detail.ISBN"
                label="รหัสหนังสือ"
                outlined
                dense
                maxlength="13"
                :counter="13"
                :rules="rules.ISBNRule"
            /></v-col>
          </v-row>
          <div class="bt d-flex justify-end align-end ml-12">
            <v-btn color="primary" @click="add"
              ><v-icon>mdi-plus</v-icon>เพิ่ม</v-btn
            >
          </div>
          <p v-if="err === true" class="error--text text-center">
            {{ errmsg }}
          </p>
          <div>
            <p class="text-center text-subtitle-1">
              รหัส: {{ member.memberID }}
            </p>
            <p class="text-center text-subtitle-1">
              ชื่อ: {{ member.firstName }} {{ member.lastName }}
            </p>
            <p v-if="limited === true" class="error--text">
              จำนวนหนังสือถึงขีดจำกัด!
            </p>
          </div>
          <div>
            <v-simple-table class="br mt-12">
              <thead>
                <tr>
                  <th
                    v-for="item in head"
                    :key="item"
                    class="text-center text-subtitle-1"
                  >
                    {{ item }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in list" :key="item.isbn">
                  <td class="text-center">
                    {{ dayjs(item.borrowDate).format('DD/MM/BBBB') }}
                  </td>
                  <td class="text-center">
                    {{ dayjs(item.dueDate).format('DD/MM/BBBB') }}
                  </td>
                  <td class="text-center">
                    {{ item.firstName }} {{ item.lastName }}
                  </td>
                  <td class="text-center">{{ item.title }}</td>
                  <td>
                    <div class="d-flex justify-space-around align-center">
                      <v-btn color="error" small
                        ><v-icon small @click="remove(item.ISBN)"
                          >mdi-trash-can-outline</v-icon
                        ></v-btn
                      >
                    </div>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
            <div class="d-flex justify-end mt-16">
              <v-btn class="mr-4" color="error" @click="cancel">ยกเลิก</v-btn>
              <v-btn class="ml-4" color="success" @click="brr">ยืนยัน</v-btn>
            </div>
            <v-snackbar v-model="snackbar" :timeout="timeout"
              >เพิ่มข้อมูลเข้าสู่ระบบ<template #action="{ attrs }">
                <v-btn
                  color="blue"
                  text
                  v-bind="attrs"
                  @click="snackbar = false"
                >
                  ปิด
                </v-btn>
              </template>
            </v-snackbar>
          </div>
        </div>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import { getMemberRuleBorrow } from '@/api/member'
import { postBorrow } from '@/api/borrow'
import { getBookByID } from '@/api/book'
import dayjs from 'dayjs'
import * as rules from '@/api/validateRules'
import { reason } from '~/reason'
export default {
  data: () => ({
    rules: {
      ...rules,
    },
    snackbar: false,
    detail: {
      memberID: '',
      ISBN: '',
    },
    err: false,
    errmsg: '',
    timeout: 2000,
    limited: false,
    mem: {},
    book: {},
    member: [],
    list: [],
    memberID: '',
    head: ['วันที่ยืม', 'กำหนดคืน', 'ชื่อผู้ยืม', 'ชื่อหนังสือ', 'แก้ไข'],
  }),
  methods: {
    add() {
      this.err = false
      if (this.$refs.form.validate()) {
        getMemberRuleBorrow(this.detail.memberID).then((res) => {
          this.member = res.data
          getBookByID(this.detail.ISBN).then((ress) => {
            this.book = ress.data
            if (this.list.length === this.member.amount) {
              this.limited = true
              return
            }
            const d = new Date()
            const dd = new Date()
            const rule = {}
            rule.ISBN = ress.data.isbn
            rule.memberID = this.member.memberID
            rule.date = d.setDate(d.getDate())
            rule.dueDate = dd.setDate(dd.getDate() + this.member.dueDate)
            rule.title = this.book.title
            rule.firstName = this.member.firstName
            rule.lastName = this.member.lastName
            if (rule.memberID == null) {
              this.err = true
              const msg = 'MaimeeKon'
              this.errmsg = reason[msg]
              return
            }
            if (ress.data.isbn == null) {
              this.err = true
              const msg = 'MaimeeBook'
              this.errmsg = reason[msg]
              return
            }

            this.list.push(rule)
          })
        })
      }
    },
    brr() {
      for (const key in this.list) {
        const Post = {}
        Post.isbn = this.list[key].ISBN
        Post.memberID = this.list[key].memberID
        postBorrow(Post)
      }
      this.snackbar = true
      this.list = []
    },

    remove(id) {
      this.list = this.list.filter(function (el) {
        return el.ISBN !== id
      })
    },
    cancel() {
      this.list = []
    },
    dayjs,
  },
}
</script>

<style lang="scss" scoped>
.brw {
  height: 100vh;
}
.bt {
  height: 50%;
}
.box {
  width: 70%;
}
.br {
  width: 100%;
}
</style>
