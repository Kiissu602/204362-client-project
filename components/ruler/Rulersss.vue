<template>
  <div>
    <p class="fines">อัตราค่าปรับ</p>
    <p class="rule pa-4">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    fines: String,
    lost: String,
  },
  computed: {
    text() {
      return `- กรณีคืนหนังสือเกินกำหนดส่ง ปรับวันละ ${this.fines} บาท ต่อ 1 เล่ม
- กรณีหนังสือหาย หรือชำรุด ผู้ยืมต้องชดใช้เงินเป็น 2 เท่า ของราคาหนังสือ       
  รวมทั้งชำระค่าดำเนินการหนังสือสูญหาย ${this.lost} บาท ต่อรายการ และชำระค่าส่งเกินเวลา  
  (จ่ายจริงตามวันเกินกำหนดส่งถึงวันที่แจ้งหนังสือสูญหาย)
`
    },
  },
}
</script>

<style lang="scss" scoped>
.fines {
  text-decoration-line: underline;
}
.rule {
  white-space: pre-wrap;
}
</style>
