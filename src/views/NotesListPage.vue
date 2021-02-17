<template>
  <v-main>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Notes</v-toolbar-title>
    </v-app-bar>
    <v-container >
      <v-list>
        <v-list-item
          v-for="note in notes"
          :key="note.id"
          :to="{ name: 'NoteDetails' }"
        >
          <v-list-item-content>
            <v-list-item-title>{{ note.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ note.content }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-btn fab color="primary" absolute bottom right>
          <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      notes: [
        {
          id: '123',
          title: 'first',
          content: '### COntent',
        },
      ],
    };
  },
};
</script>
