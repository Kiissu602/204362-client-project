<template>
  <v-dialog transition="dialog-bottom-transition" max-width="600">
    <template #activator="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" v-on="on">From the bottom</v-btn>
    </template>
    <template #default="dialog">
      <v-card>
        <v-toolbar color="primary" dark>Library System CMU!</v-toolbar>
        <v-card-text>
          <div class="text-h2 pa-12">Hello world!</div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false">ปิด</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {}
</script>

<style></style>
