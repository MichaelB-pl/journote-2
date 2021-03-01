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
      <v-spacer></v-spacer>
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="moveNoteToTrash">
            <v-list-item-title>
              {{ $t('basics.delete') }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
        <MardonPreview :text="note.content" />
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
import { mapGetters, mapMutations } from 'vuex';
import { getContentHeight } from '@/helpers/vuetifyHelper';

import NewNoteDialog from '@/components/NewNoteDialog';
import MardonPreview from '@/components/MardonPreview';

export default {
  components: {
    NewNoteDialog,
    MardonPreview,
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
      return this.getNoteById(this.noteId) || {};
    },

    contentHeight() {
      return getContentHeight();
    },
  },

  methods: {
    ...mapMutations('notes', ['deleteNote']),

    moveNoteToTrash() {
      this.$router.go(-1);
      this.deleteNote(this.note);
    },
  },
};
</script>
