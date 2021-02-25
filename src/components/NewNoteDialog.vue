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
          NEW NOTE
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-content-save-outline</v-icon>
        </v-btn>
      </v-toolbar>

      <v-card-text>
        <v-textarea
          class="py-5"
          label="title"
          rows="1"
          outlined
          auto-grow
          no-resize
        >
        </v-textarea>
        <v-textarea
          label="content"
          placeholder="basldlabdab awjdkawjdl jwalkdjaw ljlkj"
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
export default {
  props: {
    isOpened: Boolean,
  },
  computed: {
    dialog: {
      get() {
        return this.isOpened;
      },
      set(newValue) {
        this.$emit('update:isOpened', newValue);
      },
    },
  },
};
</script>
