<template>
  <v-app class="grey lighten-5">
    <router-view />
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'App',

  data: () => ({
    //
  }),

  methods: {
    ...mapMutations('notes', ['initNotesFromStorage']),
  },

  mounted() {
    this.initNotesFromStorage();
  },
};
</script>
