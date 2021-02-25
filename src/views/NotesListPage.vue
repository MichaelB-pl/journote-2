<template>
  <v-main class="grey lighten-5" style="max-height: 100%">
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Notes</v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-list>
        <v-list-item
          v-for="note in notes"
          :key="note.id"
          :to="{ name: 'NoteDetails', params: { noteId: note.id } }"
        >
          <v-list-item-content>
            <v-list-item-title>{{ note.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ note.content }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>

    <v-btn
      class="mb-10"
      fab
      color="primary"
      absolute
      bottom
      right
      @click="isDialogOpened = true"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <NewNoteDialog :isOpened.sync="isDialogOpened"/>
  </v-main>
</template>

<script>
import { mapState } from 'vuex';

import NewNoteDialog from '@/components/NewNoteDialog';

export default {
  components: {
    NewNoteDialog,
  },
  data() {
    return {
      isDialogOpened: false,
    };
  },
  computed: {
    ...mapState('notes', ['notes']),
  },
};
</script>
