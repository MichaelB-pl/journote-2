<template>
  <v-dialog
    v-model="dialog"
    width="500"
    fullscreen
    transition="dialog-bottom-transition"
    persistent
  >
    <v-card>
      <v-toolbar flat dark color="primary darken-1">
        <v-btn icon="" @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>
          {{ toolbarTitle }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="saveNote">
          <v-icon>mdi-content-save-outline</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text>
        <v-textarea
          v-model="title"
          class="py-5"
          :label="$t('notes.newNoteDialog.title')"
          rows="1"
          outlined
          auto-grow
          no-resize
        >
        </v-textarea>
        <v-textarea
          v-model="content"
          :label="$t('notes.newNoteDialog.content')"
          :placeholder="$t('notes.newNoteDialog.contentPlaceholder')"
          outlined
          rows="10"
          auto-grow
          no-resize
        >
        </v-textarea>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  props: {
    isOpened: Boolean,
    noteId: String,
  },

  data: () => ({
    title: '',
    content: '',
  }),

  computed: {
    ...mapGetters('notes', ['getNoteById']),

    dialog: {
      get() {
        return this.isOpened;
      },
      set(newValue) {
        this.$emit('update:isOpened', newValue);
      },
    },

    toolbarTitle() {
      return this.$t(
        `notes.newNoteDialog.${this.noteId ? 'editNote' : 'newNote'}`
      );
    },
  },

  watch: {
    dialog(isVisible) {
      if (!isVisible) {
        this.clearInputs();
      } else {
        this.tryFillInputsWithNoteData();
      }
    },
  },

  methods: {
    ...mapMutations('notes', ['addNote', 'updateNote']),

    saveNote() {
      const { title, content, noteId } = this;
      if (!title && !content) return;

      const id = noteId || 'id_' + Date.now();
      const note = {
        id,
        title,
        content,
      };

      if (noteId) {
        this.updateNote(note);
      } else {
        this.addNote(note);
      }

      this.dialog = false;
    },

    tryFillInputsWithNoteData() {
      const { noteId } = this;
      if (!noteId) return;

      const { title, content } = this.getNoteById(noteId);
      this.title = title;
      this.content = content;
    },

    clearInputs() {
      this.title = '';
      this.content = '';
    },
  },
};
</script>
