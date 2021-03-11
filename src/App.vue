<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex';

import { bindHelpersWithVuetify } from '@/helpers/vuetifyHelper';

export default {
  name: 'App',

  methods: {
    ...mapMutations('notes', ['initNotesFromStorage']),
  },

  mounted() {
    this.initNotesFromStorage();
    bindHelpersWithVuetify(this.$vuetify);
  },
};
</script>
