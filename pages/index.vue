<template>
  <v-container class="idx">
    <h1 class="text-h5 text-center mt-12">ค้นหาหนังสือ</h1>
    <div class="search mt-4">
      <v-text-field
        v-model="search"
        outlined
        append-icon="mdi-magnify"
        dense
        placeholder="ตัวอย่าง ภาคินัย, Sofa publishing"
      ></v-text-field>
    </div>
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
