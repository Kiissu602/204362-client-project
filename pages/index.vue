<template>
  <v-container class="idx">
    <v-card class="mt-4">
      <h1 class="text-h5 text-center pt-4">ค้นหาหนังสือ</h1>
      <div class="pt-8 px-12 pb-8">
        <v-row>
          <v-col>
            <v-text-field
              v-model="isbn"
              outlined
              dense
              label="ISBN"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="title"
              outlined
              dense
              label="ชื่อหนังสือ"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="writer"
              outlined
              dense
              label="ผู้แต่ง"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="title"
              outlined
              dense
              label="สำนักพิมพ์"
            ></v-text-field>
          </v-col>
        </v-row>
        <div class="d-flex justify-center">
          <v-btn color="primary">ค้นหา</v-btn>
        </div>
      </div>
    </v-card>
    <kinesis-container class="parent">
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
export default {
  components: {
    KinesisContainer,
    KinesisElement,
  },
  data: () => ({
    search: '',
  }),
}
</script>

<style lang="scss">
.idx {
  height: 100vh;
}
.parent {
  height: 69.5vh;
  display: flex;
  justify-content: center;
  align-content: center;
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
