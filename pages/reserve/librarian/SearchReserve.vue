<template>
  <div>
    <v-row>
      <v-col class="text-center"><h1>รายการจองหนังสือ</h1> </v-col>
    </v-row>
    <v-row>
      <v-col class="ml-15">
        วันที่: 12 เมษายน 2563<br />
        เวลา: 12.30 น. <br />
      </v-col>
    </v-row>
    <v-row>
      <v-col offset="2" align="left">
        <v-btn depressed color="black" dark class="mr-5">
          รอบที่ 1: 12.30
        </v-btn>
        <v-btn depressed color="black" dark> รอบที่ 2: 16.30 </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">รหัสมาชิก</th>
                <th class="text-left">สถานที่จัดส่ง</th>
                <th class="text-left">รหัส IBSN</th>
                <th class="text-left">เบอร์ติดต่อ</th>
                <th class="text-left">สถานะ</th>
                <th class="text-left">แก้ไข</th>
                <th class="text-left">ลบ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>610510714</td>
                <td>ป้ายภาควิชาคอมพิวเตอร์</td>
                <td>
                  012121<br />
                  011121<br />
                  124334<br />
                  502444<br />
                  555144
                </td>
                <td>021414545</td>
                <td>รอดำเนินการ</td>
                <td>
                  <v-btn
                    elevation="0"
                    icon
                    :to="{ path: '/reserve/librarian/EditStatus' }"
                    ><v-icon>mdi-pencil</v-icon></v-btn
                  >
                </td>
                <td>
                  <v-btn elevation="0" icon><v-icon>mdi-delete</v-icon></v-btn>
                </td>
              </tr>
              <tr>
                <td>610510714</td>
                <td>ป้ายภาควิชาคอมพิวเตอร์</td>
                <td>
                  012121<br />
                  011121<br />
                  124334<br />
                  502444<br />
                  555144
                </td>
                <td>021414545</td>
                <td>รอดำเนินการ</td>
                <td>
                  <v-btn
                    elevation="0"
                    icon
                    :to="{ path: '/reserve/librarian/EditStatus' }"
                    ><v-icon>mdi-pencil</v-icon></v-btn
                  >
                </td>
                <td>
                  <v-btn elevation="0" icon><v-icon>mdi-delete</v-icon></v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>
