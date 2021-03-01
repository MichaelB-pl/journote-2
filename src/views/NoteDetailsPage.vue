<template>
  <v-main>
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      hide-on-scroll
      scroll-target="#scrolling-content"
    >
      <v-btn icon @click="$router.go(-1)">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-app-bar>

    <v-sheet
      id="scrolling-content"
      class="overflow-y-auto pt-10"
      :height="contentHeight"
      max-width="720"
    >
      <v-container class="pa-5">
        <h1>{{ note.title }}</h1>
        <v-divider class="my-3"></v-divider>
        {{ note.content }}
      </v-container>
    </v-sheet>

    <v-btn
      class="mb-10"
      fab
      color="primary"
      absolute
      bottom
      right
      @click="isDialogOpened = true"
    >
      <v-icon>mdi-pencil-outline</v-icon>
    </v-btn>
    <NewNoteDialog :isOpened.sync="isDialogOpened" :noteId="noteId" />
  </v-main>
</template>

<script>
import { mapGetters } from 'vuex';
import { getContentHeight } from '@/helpers/vuetifyHelper';

import NewNoteDialog from '@/components/NewNoteDialog';

export default {
  components: {
    NewNoteDialog,
  },

  props: {
    noteId: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    isDialogOpened: false,
  }),

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
