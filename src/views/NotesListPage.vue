<template>
  <v-main class="grey lighten-3">
    <v-app-bar fixed color="primary" dark>
      <v-toolbar-title>{{ $t('notes.notesList.title') }}</v-toolbar-title>
    </v-app-bar>

    <v-btn
      style="mb-10"
      fab
      color="primary"
      bottom
      right
      fixed
      @click="isDialogOpened = true"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-container style="max-height: 100vh" class="overflow-y-auto pa-0">
      <v-sheet :style="contentTopMargin">
        <v-list>
          <template v-for="(note, index) in notes">
            <v-divider v-if="index" :key="`divider_${index}`"></v-divider>
            <v-list-item
              :key="note.id"
              :to="{ name: 'NoteDetails', params: { noteId: note.id } }"
            >
              <v-list-item-content>
                <v-list-item-title>{{ note.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ note.content }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-sheet>
    </v-container>

    <NewNoteDialog :isOpened.sync="isDialogOpened" />
  </v-main>
</template>

<script>
import { mapState } from 'vuex';
import { getContentHeight, getToolbarHeight } from '@/helpers/vuetifyHelper';

import NewNoteDialog from '@/components/NewNoteDialog';

export default {
  components: {
    NewNoteDialog,
  },

  data: () => ({
    isDialogOpened: false,
  }),

  computed: {
    ...mapState('notes', ['notes']),

    contentHeight() {
      return getContentHeight();
    },

    contentTopMargin() {
      return 'margin-top: ' + getToolbarHeight() + 'px';
    },
  },
};
</script>
