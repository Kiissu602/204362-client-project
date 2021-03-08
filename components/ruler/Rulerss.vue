<template>
  <p class="rule">{{ text }}</p>
</template>

<script>
export default {
  props: {
    start: String,
    stop: String,
    first: String,
    second: String,
    day: String,
  },
  computed: {
    text() {
      return `- เวลาในการดำเนินการจองหนังสือภายในเวลา ${this.start} - ${this.stop} นาฬิกา
- กรณีมารับหนังสือที่ห้องสมุดมหาวิทยาลัยเชียงใหม่ด้วยตนเอง 
    ต้องมารับภายใน ${this.day} วัน หลังจากได้ทำการจองหนังสือแล้ว
- รอบของการจัดส่ง 
    รอบที่ 1: เวลา ${this.first} นาฬิกา 
    รอบที่ 2: เวลา ${this.second} นาฬิกา`
    },
  },
}
</script>

<style lang="scss" scoped>
.rule {
  white-space: pre-wrap;
}
</style>
