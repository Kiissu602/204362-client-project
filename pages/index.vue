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
    <v-container class="contain d-flex justifycenter">
      <v-container>
        <v-card
          v-for="item in books"
          :key="item"
          class="mt-8"
          ripple
          hover
          link
          :to="{ name: 'book', params: { id: item.isbn } }"
        >
          <table class="tab">
            <tr>
              <td class="pic">
                <v-img
                  class="mr-8"
                  :src="item.image | img"
                  width="150"
                  :aspect-ratio="1"
                ></v-img>
              </td>
              <td>
                <tr>
                  <td class="title text-right text-h6">ชื่อหนังสือ:</td>
                  <td class="pl-4 text-h6">
                    {{ item.title }}
                  </td>
                </tr>
                <tr>
                  <td class="title text-right text-subtitle-1">ผู้แต่ง:</td>
                  <td class="pl-4 text-subtitle-1">
                    {{ item.writer }}
                  </td>
                </tr>
                <tr>
                  <td class="title text-right text-subtitle-1">สำนักพิมพ์:</td>
                  <td class="pl-4 text-subtitle-1">
                    {{ item.publisherName }}
                  </td>
                </tr>
                <tr>
                  <td class="title text-right text-subtitle-1">เรื่องย่อ:</td>
                  <td class="plot text-truncate pl-4 text-subtitle-1">
                    {{ item.plot }}
                  </td>
                </tr>
              </td>
            </tr>
          </table>
        </v-card>
      </v-container>
    </v-container>

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
import { getBookByID, getBookByData } from '@/api/book'
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
      isbn: null,
      title: null,
      writer: null,
      publisher: null,
    },
    books: [],
  }),

  methods: {
    search() {
      if (
        this.detail.isbn?.length === 13 &&
        this.detail.publisher === null &&
        this.detail.title === null &&
        this.detail.writer === null
      ) {
        this.books = []
        getBookByID(this.detail.isbn).then((res) => {
          res.data.writer = res.data.writer.join(', ')
          this.books.push(res.data)
        })
      } else {
        getBookByData(this.detail).then((res) => {
          this.books = res.data.map((v) => ({
            ...v,
            writer: v.writer?.join(', '),
          }))
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.page-enter,
.page-leave-to,
.plot {
  flex: 1;
  max-width: 300px;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.contain {
  max-width: 80%;
}
.tab {
  width: 100%;
}
.pic {
  width: 15%;
}
.title {
  width: 15%;
}
.idx {
  height: 100vh;
}
.parent {
  height: 69.5vh;
  display: flex;
  justify-content: center;
  align-content: center;
}
.detail {
  max-height: 100%;
}

.b {
  width: 100%;
  max-width: 500px;
  height: 500px;
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.book1 {
  background-image: url('~assets/kinesis/1.png');
}
.book2 {
  background-image: url('~assets/kinesis/2.png');
}
.book3 {
  background-image: url('~assets/kinesis/3.png');
}
.book4 {
  background-image: url('~assets/kinesis/4.png');
}

.book5 {
  background-image: url('~assets/kinesis/5.png');
}
.book6 {
  background-image: url('~assets/kinesis/6.png');
}
</style>
