<template>
  <v-container>
    <div class="search">
      <v-text-field
        v-model="search"
        outlined
        prepend-inner-icon="mdi-magnify"
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
