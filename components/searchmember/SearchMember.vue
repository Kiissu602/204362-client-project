<template>
  <v-container class="box d-flex justify-center align-start">
    <v-card class="gard">
      <div class="search pa-6">
        <h1 class="text-center text-h6 mb-6">ค้นหาสมาชิก</h1>
        <v-row align="center" justify="center">
          <v-col
            ><v-text-field
              v-model="MemID"
              dense
              label="รหัส"
              outlined
              maxlength="9"
              counter="9"
            ></v-text-field
          ></v-col>
          <v-col
            ><v-text-field
              v-model="firstName"
              outlined
              dense
              label="ชื่อ"
            ></v-text-field
          ></v-col>
          <v-col
            ><v-text-field
              v-model="lastName"
              dense
              outlined
              label="นามสกุล"
            ></v-text-field
          ></v-col>
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
          <v-col class="d-flex justify-space-around mt-n4">
            <v-checkbox v-model="sexm" class="ml-2" label="ชาย"></v-checkbox>
            <v-checkbox v-model="sexfm" class="ml-2" label="หญิง"></v-checkbox>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-end"
            ><v-btn color="primary">ค้นหา</v-btn></v-col
          >
        </v-row>
        <table class="list mt-12">
          <thead>
            <tr>
              <th v-for="item in head" :key="item" class="head text-subtitle-1">
                {{ item }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.type">
              <td class="text-center">{{ item.id }}</td>
              <td class="text-center">{{ item.name }}</td>
              <td class="text-center">{{ item.lastname }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { getFaculty, getDepart } from '@/api/faculties'
export default {
  data: () => ({
    fac: '',
    dep: '',
    facid: [],
    faculties: [],
    department: [],
    sexm: '',
    sexfm: '',
    sexunknow: '',
    head: ['รหัส', 'ชื่อ', 'นามสกุล'],
    items: [{ id: '610510808', name: 'พิชัย', lastname: 'นามวรรณ์' }],
  }),
  watch: {
    fac(next) {
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
  width: 33%;
  border-bottom: 1px solid black;
}
</style>
