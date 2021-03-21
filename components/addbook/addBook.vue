<template>
  <v-card>
    <v-form class="addb pa-8">
      <div class="d-flex align-center justify-center">
        <label>
          <v-card ripple height="150">
            <v-icon v-if="imgShow === null" size="150">mdi-plus</v-icon>
            <v-img
              v-else
              height="150"
              width="150"
              :aspect-ratio="1"
              :src="imgShow"
            ></v-img>
          </v-card>
          <input
            type="file"
            style="display: none"
            accept="image/png, image/jpg"
            @change="imgChange"
          />
        </label>
        <v-row>
          <v-col>
            <v-text-field
              class="pl-8 pt-12"
              outlined
              dense
              label="รหัส ISBN"
              maxlength="13"
              counter="13"
            />
            <v-row class="py-4 pl-8">
              <v-col
                ><v-text-field outlined dense label="ชื่อหนังสือ" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <v-row class="pt-6"
        ><v-col
          ><v-select
            :items="bookType"
            label="ประเภทหนังสือ"
            outlined
            dense
          ></v-select
        ></v-col>
        <v-col
          ><v-text-field outlined dense label="ชื่อผู้แต่ง/นามปากกา" /></v-col
        ><v-col><v-text-field outlined dense label="สำนักพิมพ์" /></v-col
      ></v-row>
      <v-row
        ><v-col>
          <v-text-field
            v-model="date"
            label="ปีที่พิมพ์(พ.ศ.)"
            append-icon="mdi-calendar"
            outlined
            maxlength="4"
            dense
          ></v-text-field>
        </v-col>
        <v-col
          ><v-row
            ><v-col
              ><v-text-field
                label="ฉบับที่พิมพ์"
                outlined
                dense
              ></v-text-field></v-col
            ><v-col
              ><v-text-field
                label="จำนวนหน้า"
                outlined
                dense
              ></v-text-field></v-col></v-row></v-col
        ><v-col
          ><v-text-field
            label="ราคา"
            suffix="บาท"
            outlined
            dense
          ></v-text-field></v-col
      ></v-row>

      <v-row
        ><v-col
          ><v-textarea
            auto-grow
            outlined
            label="เรื่องย่อ"
            value=""
          ></v-textarea></v-col
      ></v-row>
      <div class="d-flex justify-end align-center">
        <v-btn class="mr-4" color="secondary" outlined>ยกเลิก</v-btn>
        <v-btn color="success">เพิ่ม</v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    image: null,
    imgShow: null,
    date: '',
    bookType: ['ยังไม่มี'],
  }),
  watch: {
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
