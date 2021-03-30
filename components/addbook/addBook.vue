<template>
  <v-card>
    <v-form class="addb pa-8" lazy-validation ref="form">
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
            accept="image/png, image/jpeg"
            @change="imgChange"
          />
        </label>
        <v-row>
          <v-col>
            <v-text-field
              v-model="book.ISBN"
              class="pl-8 pt-12"
              outlined
              dense
              label="รหัส ISBN"
              maxlength="13"
              counter="13"
              :rules="rules.ISBNRule"
            />
            <v-row class="py-4 pl-8">
              <v-col
                ><v-text-field
                  v-model="book.title"
                  outlined
                  dense
                  label="ชื่อหนังสือ"
                  :rules="rules.nameRule"

                />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <v-row class="pt-6"
        ><v-col
          ><v-select
            v-model="book.categoryID"
            :items="categories"
            label="ประเภทหนังสือ"
            outlined
            dense
            :rules="rules.dropDownRule"
          ></v-select
        ></v-col>
        <v-col
          ><v-text-field
            v-model="book.writerName"
            outlined
            :rules="rules.nameRule"
            dense
            label="ชื่อผู้แต่ง/นามปากกา"
            /></v-col
        ><v-col
          ><v-text-field
            v-model="book.publisherName"
            outlined
            dense
            :rules="rules.nameRule"
            label="สำนักพิมพ์" /></v-col
      ></v-row>
      <v-row
        ><v-col>
          <v-text-field
            v-model="book.publicationDate"
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
                v-model="book.edition"
                label="ฉบับที่พิมพ์"
                outlined
                dense
                :rules="rules.publisherRule"
               
              ></v-text-field></v-col
            ><v-col
              ><v-text-field
                v-model="book.pagination"
                label="จำนวนหน้า"
                outlined
                dense
                :rules="rules.pageAndPriceBookRule"
              ></v-text-field></v-col></v-row></v-col
        ><v-col
          ><v-text-field
            v-model="book.price"
            label="ราคา"
            suffix="บาท"
            outlined
            dense
            :rules="rules.pageAndPriceBookRule"
          ></v-text-field></v-col
      ></v-row>

      <v-row
        ><v-col
          ><v-textarea
            v-model="book.plot"
            auto-grow
            outlined
            label="เรื่องย่อ"
            value=""
          ></v-textarea></v-col
      ></v-row>
      <div class="d-flex justify-end align-center">
        <v-btn color="success" @click="add">เพิ่ม</v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
import { getCategory } from '@/api/book'
import * as rules from '@/api/validateRules'
export default {
  data: () => ({
    rules: {...rules,},
    book: {
      image: null,
      ISBN: null,
      title: null,
      publisherName: null,
      publicationDate: null,
      edition: null,
      pagination: null,
      price: null,
      plot: null,
      categoryID: null,
      writerName: null,
    },
    imgShow: null,
    categories: [],
  }),
  watch: {
    image(e) {
      if (e) {
        const reader = new FileReader()
        reader.onload = (re) => {
          this.imgShow = re.target.result
        }
        this.book.image = e
        reader.readAsDataURL(e)
      } else {
        this.imgShow = null
      }
    },
  },
  mounted() {
    getCategory().then((res) => {
      this.categories = res.data.map((c) => ({
        text: c.categoryName,
        value: c.categoryID,
      }))
    })
  },
  methods: {
    imgChange(e) {
      if (e.target.files[0]) {
        const reader = new FileReader()
        reader.onload = (re) => {
          this.imgShow = re.target.result
        }
        this.book.image = e.target.files[0]
        reader.readAsDataURL(e.target.files[0])
      } else {
        this.imgShow = null
      }
    },
    add() {
      this.$emit('add', this.book)
    },
  },
}
</script>

<style></style>
