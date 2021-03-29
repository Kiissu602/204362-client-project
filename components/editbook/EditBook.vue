<template>
  <v-form
    ><div class="mt-16">
      <div class="d-flex align-center justify-space-around">
        <div>
          <label>
            <v-card ripple max-height="150">
              <v-img
                height="150"
                width="150"
                :aspect-ratio="1"
                :src="change ? imgShow : imgShoww(imageUrl)"
              ></v-img>
            </v-card>
            <input type="file" style="display: none" @change="imgChange" />
          </label>
        </div>
        <div>
          <v-text-field
            v-model="book.isbn"
            disabled
            dense
            outlined
            label="ISBN"
          />
          <v-select
            v-model="book.category"
            :items="categories"
            dense
            outlined
            label="หมวดหมู่"
          />
          <v-text-field
            v-model="book.title"
            dense
            outlined
            label="ชื่อหนังสือ"
          />
        </div>
      </div>
      <v-row no-gutters>
        <v-col>
          <v-text-field
            v-model="book.writerName"
            class="px-2"
            dense
            outlined
            label="ผู้แต่ง"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="book.publisherName"
            class="px-2"
            dense
            outlined
            label="สำนักพิมพ์"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="book.publicationDate"
            class="px-2"
            dense
            outlined
            append-icon="mdi-calendar"
            label="ปีที่พิมพ์"
          />
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-text-field
            v-model="book.edition"
            class="px-2"
            dense
            outlined
            label="ฉบับที่พิมพ์"
          />
        </v-col>
        <v-col>
          <v-text-field
            v-model="book.pagination"
            class="px-2"
            dense
            outlined
            label="จำนวนหน้า"
        /></v-col>
        <v-col>
          <v-text-field
            v-model="book.price"
            class="px-2"
            dense
            outlined
            label="ราคา"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          ><v-textarea
            v-model="book.plot"
            auto-grow
            outlined
            label="เรื่องย่อ"
          ></v-textarea
        ></v-col>
      </v-row>
    </div>
    <div class="d-flex align-center justify-end mb-4">
      <v-btn color="success" @click="edit"
        ><v-icon>mdi-content-save</v-icon> บันทึก</v-btn
      >
    </div>
  </v-form>
</template>

<script>
import { getBookToUpDate, getCategory } from '@/api/book'
export default {
  data: () => ({
    book: {
      image: null,
      isbn: '',
      title: '',
      publisherName: '',
      publisherID: '',
      publicationDate: '',
      edition: '',
      pagination: '',
      price: '',
      plot: '',
      catagory: '',
      writerID: '',
      writerName: '',
    },
    imageUrl: '',
    categories: [],
    imgShow: null,
    change: false,
  }),
  watch: {
    'book.image'(e) {
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
    getBookToUpDate(this.$route.params.id).then((res) => {
      this.book = res.data
      this.imageUrl = this.book.image
      this.book.image = null
      this.book.writerName = this.book.writerName.join(', ')
    })
  },
  methods: {
    imgShoww(path) {
      return `${process.env.ENDPOINT}/uploads/${path}`
    },
    imgChange(e) {
      if (e.target.files[0]) {
        const reader = new FileReader()
        reader.onload = (re) => {
          this.imgShow = re.target.result
        }
        this.book.image = e.target.files[0]
        reader.readAsDataURL(e.target.files[0])
        this.change = true
      } else {
        this.imgShow = null
      }
    },
    edit() {
      this.$emit('update', this.book)
    },
  },
}
</script>

<style></style>
