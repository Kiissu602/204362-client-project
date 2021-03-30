<template>
  <v-container class="box d-flex justify-center align-start">
    <v-card class="gard">
      <div class="search pa-6">
        <h1 class="text-center text-h6 mb-6">ค้นหาสมาชิก</h1>
        <v-row align="center" justify="center">
          <v-col
            ><v-text-field
              v-model="detail.id"
              dense
              label="รหัส"
              outlined
              maxlength="9"
              counter="9"
            ></v-text-field
          ></v-col>
          <v-col
            ><v-text-field
              v-model="detail.firstname"
              outlined
              dense
              label="ชื่อ"
            ></v-text-field
          ></v-col>
          <v-col
            ><v-text-field
              v-model="detail.lastName"
              dense
              outlined
              label="นามสกุล"
            ></v-text-field
          ></v-col>
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
              v-model="detail.department"
              label="สาขา"
              :items="department"
              outlined
              dense
            ></v-autocomplete>
          </v-col>
          <v-col class="d-flex justify-space-around mt-n4">
            <v-checkbox
              v-model="detail.a"
              class="ml-2"
              label="ชาย"
              value="ชาย"
            ></v-checkbox>
            <v-checkbox
              v-model="detail.b"
              class="ml-2"
              label="หญิง"
              value="หญิง"
            ></v-checkbox>
            <v-checkbox
              v-model="detail.c"
              class="ml-2"
              label="ไม่ระบุ"
              value="ไม่ระบุ"
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-end"
            ><v-btn color="primary" @click="search">ค้นหา</v-btn></v-col
          >
        </v-row>
        <v-simple-table fixed-header class="list mt-12">
          <thead>
            <tr>
              <th
                v-for="item in head"
                :key="item"
                class="head text-center text-subtitle-1"
              >
                {{ item }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in members"
              :key="item.type"
              @click="go(item.memberID)"
            >
              <td class="text-center">{{ item.memberID }}</td>
              <td class="text-center">{{ item.name }}</td>
              <td class="text-center">{{ item.facultyName }}</td>
              <td class="text-center">
                {{ item.departmentName }}
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { getFaculty, getDepart } from '@/api/faculties'
import { getMemberByLibrarian } from '@/api/member'
export default {
  data: () => ({
    detail: {
      id: '',
      name: '',
      firstName: '',
      lastName: '',
      faculty: '',
      department: '',
      sex: [],
    },

    facid: [],
    faculties: [],
    department: [],
    sexm: '',
    sexfm: '',
    sexunknow: '',
    head: ['รหัส', 'ชื่อ-นามกสุล', 'สังกัด', 'สาขา'],
    members: [],
  }),
  watch: {
    'detail.faculty'(next) {
      getDepart(next).then((res) => {
        this.department = res.data.departmentlist.map((d) => ({
          text: d.departmentName,
          value: d.departMentNum,
        }))
      })
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
    search() {
      getMemberByLibrarian(this.detail).then((res) => {
        this.members = res.data.map((v) => ({
          ...v,
          name: v.firstName + ' ' + v.lastName,
        }))
      })
    },
    go(next) {
      this.$router.push({
        name: 'searchmember-profiledata',
        params: { id: next },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.box {
  height: 100vh;
  width: 70vw;
}
.gard {
  width: 100%;
}
.list {
  width: 100%;
}
.head {
  width: 25%;
  border-bottom: 1px solid black;
}
</style>
