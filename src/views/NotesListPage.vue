<template>
  <v-main>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Notes</v-toolbar-title>
    </v-app-bar>
    <v-container style="position: relative">
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
      <router-view/>

      <v-btn fab color="primary" absolute bottom right>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-container>
  </v-main>
</template>

<script>
import {  mapState } from 'vuex';

export default {
  computed:{
      ...mapState('notes',['notes'])
  }
};
</script>
