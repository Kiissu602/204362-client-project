<template>
  <v-container class="idx">
    <v-card class="mt-4">
      <h1 class="text-h5 text-center pt-4">ค้นหาหนังสือ</h1>
      <div class="pt-8 px-12 pb-8">
        <v-row>
          <v-col>
            <v-text-field
              v-model="detail.isbn"
              outlined
              dense
              label="ISBN"
              maxlength="13"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="detail.title"
              outlined
              dense
              label="ชื่อหนังสือ"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="detail.writer"
              outlined
              dense
              label="ผู้แต่ง"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="detail.publisher"
              outlined
              dense
              label="สำนักพิมพ์"
            ></v-text-field>
          </v-col>
        </v-row>
        <div class="d-flex justify-center">
          <v-btn color="primary" @click="search">ค้นหา</v-btn>
        </div>
      </div>
    </v-card>
    <v-row v-for="item in books" :key="item" class="pa-12">
      <v-col class="d-flex justify-center" width="700">
        <v-card
          ripple
          hover
          link
          :to="{ name: 'book', params: { id: item.isbn } }"
          ><div class="d-flex align-center">
            <div>
              <v-img
                :src="item.image | img"
                width="200"
                :aspect-ratio="1"
              ></v-img>
            </div>
            <v-col>
              <v-row dense>
                <v-col class="col-3 text-h6"> ชื่อหนังสือ:</v-col>
                <v-col class="text-h6">
                  {{ item.title }}
                </v-col>
              </v-row>
              <v-row>
                <v-col class="col-3 text-subtitle-2"> ผู้แต่ง:</v-col>
                <v-col class="text-subtitle-2">
                  {{ item.writer }}
                </v-col>
              </v-row>
              <v-row>
                <v-col class="col-3 text-subtitle-2"> สำนักพิมพ์:</v-col>
                <v-col class="text-subtitle-2">
                  {{ item.publisherName }}
                </v-col>
              </v-row>
              <v-row>
                <v-col class="col-3 text-subtitle-2"> เรื่องย่อ:</v-col>
                <v-col class="plot text-subtitle-2 text-truncate">
                  {{ item.plot }}
                </v-col>
              </v-row>
            </v-col>
          </div>
        </v-card>
      </v-col>
    </v-row>

    <kinesis-container v-if="!books.length" class="parent">
      <kinesis-element class="b book1" type="depth" :strength="10" />
      <kinesis-element class="b book2" type="depth" :strength="10" />
      <kinesis-element class="b book3" type="depth" :strength="20" />
      <kinesis-element class="b book4" type="depth" :strength="25" />
      <kinesis-element class="b book5" type="depth" :strength="20" />
      <kinesis-element class="b book6" type="depth" :strength="20" />
      <kinesis-element
        class="book6"
        src="/assets/kinesis/6.png"
        type="depth"
        :strength="30"
      />
    </kinesis-container>
  </v-container>
</template>
<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import { getBookByID } from '@/api/book'
export default {
  filters: {
    img(path) {
      return `${process.env.ENDPOINT}/uploads/${path}`
    },
    truncate(string, value) {
      return (string || '').substring(0, value) + '…'
    },
  },
  components: {
    KinesisContainer,
    KinesisElement,
  },
  data: () => ({
    detail: {
      isbn: '',
      title: '',
      writer: '',
      publisher: '',
    },
    books: [],
  }),

  methods: {
    search() {
      if (this.detail.isbn.length === 13) {
        this.books = []
        getBookByID(this.detail.isbn).then((res) => {
          res.data.writer = res.data.writer.join(', ')
          this.books.push(res.data)
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>