<template>
  <div>
    <v-row>
      <v-col class="text-center"><h1>รายการจองหนังสือ</h1></v-col>
    </v-row>
    <v-row>
      <v-col class="ml-15">
        รหัส:610510714 <br/>
        ชื่อ: หฤทัย แสงยอด <br/>
        วันที่: 12/2/2564
      </v-col>
    </v-row>
    <v-row>
      <v-col>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    ลำดับ
                  </th>
                  <th class="text-left">
                    รูป
                  </th>
                  <th class="text-left">
                    รายละเอียด
                  </th>
                  <th class="text-left">
                    การกระทำ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <v-img max-height="97" max-width="88" 
                    src="https://images-na.ssl-images-amazon.com/images/I/51ql73FZvwL._SY445_.jpg"
                    alt=""></v-img>
                  </td>
                  <td>
                    ชื่อเรื่อง: A Little Princess <br/>
                    รหัสหนังสือ: 00111<br/>
                    ผู้แต่ง: Burnett, Frances Hodgson
                  </td>
                  <td><v-btn elevation="0" icon><v-icon>mdi-delete</v-icon></v-btn></td> 
                </tr> 
                <tr>
                  <td>2</td>
                  <td>
                    <v-img max-height="97" max-width="88" 
                    src="https://upload.wikimedia.org/wikipedia/en/0/05/Littleprince.JPG"
                    alt=""></v-img>
                  </td>
                  <td>
                    ชื่อเรื่อง:  Little Prince <br/>
                    รหัสหนังสือ: 000112<br/>
                    ผู้แต่ง:  Antoine de Saint-Exupery
                  </td>
                  <td><v-btn elevation="0" icon><v-icon>mdi-delete</v-icon></v-btn></td> 
                </tr>
              </tbody>
            </template>
          </v-simple-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" class="text-right" >
        ที่อยู่การจัดส่ง
      </v-col>
      <v-col cols="2">
        <v-select
          :items="place"
          label="Outlined style"
          outlined
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="2" class="text-right">
        เบอร์ติดต่อ
      </v-col>
      <v-col cols="2">
          <v-text-field
            label="Solo"
            placeholder="Placeholder"
            solo
          ></v-text-field>
        </v-col>
    </v-row>
    <v-row>
      <v-col offset="2" >
        <v-btn
          depressed
          color="grey"
          dark
          class="mr-5"
        >
          ยกเลิก
        </v-btn>
        <v-btn
          depressed
          color="green darken-1"
          dark
          :to="{path:'/reserve/member/Status'}"
        >
          ยืนยัน
        </v-btn>
      </v-col>
    </v-row>
    
  </div>
</template>


<script>
export default {

  data: () =>({
    place: [1,2,3,4,5,6]
  })

}
</script>

<style>

</style>