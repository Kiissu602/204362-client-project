<template>
  <v-container>
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
  </v-container>
</template>

<script>
export default {
  data: () => ({
    search: '',
  }),
}
</script>
