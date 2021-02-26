<template>
  <v-main>
    <v-app-bar
      app
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-content"
    >
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-app-bar>

    <v-sheet
      id="scrolling-content"
      class="overflow-y-auto"
      :height="contentHeight"
      max-width="720"
    >
      <v-container class="pa-5">
        <h1>{{ note.title }}</h1>
        <v-divider class="my-3"></v-divider>
        {{ note.content }}
      </v-container>
    </v-sheet>
  </v-main>
</template>

<script>
import { mapGetters } from 'vuex';
import { getContentHeight } from '@/helpers/vuetifyHelper';

export default {
  props: {
    noteId: {
      type: String,
      required: true,
    },
  },

  computed: {
    ...mapGetters('notes', ['getNoteById']),

    note() {
      return this.getNoteById(this.noteId);
    },

    contentHeight() {
      return getContentHeight();
    },
  },
};
</script>
