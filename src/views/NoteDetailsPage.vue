<template>
  <v-main>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Note '{{ noteId }}' Details</v-toolbar-title>
    </v-app-bar>
    <v-container style="position: relative">
      <v-card>
        <v-card-title>Note Title</v-card-title>
        <v-card-text>Note Content</v-card-text>
      </v-card>
    </v-container>
  </v-main>
</template>

<script>
export default {
  props: {
    noteId: {
      type: String,
      required: true,
    },
  },
};
</script>
