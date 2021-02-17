// import Note from '@/models/note';

export default {
  namespaced: true,
  state: {
    notes: [
        {
            id: '123',
            title: 'first',
            content: '### COntent',
          },{
            id: '124',
            title: 'second',
            content: '### COntent',
          },{
            id: '125',
            title: 'third',
            content: '### COntent',
          },
    ],
  },
  mutations: {
    addNote(state, note) {
      state.notes.push(note);
    },

    updateNote(state, updatedNote) {
      state.notes = state.notes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note
      );
    },

    deleteNote(state, { id }) {
      state.notes = state.notes.filer((note) => note.id != id);
    },
  },
};
