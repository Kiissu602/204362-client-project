<template>
  <v-container>
    <h1 class="text-h5 text-center mt-12">ค้นหาสมาชิก</h1>
    <div class="search mt-4">
      <v-text-field
        v-model="search"
        outlined
        append-icon="mdi-magnify"
        dense
        placeholder="ตัวอย่าง 60000111, พรนะวัด, โบราณ"
      ></v-text-field>
    </div>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
