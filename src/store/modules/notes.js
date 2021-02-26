export default {
  namespaced: true,
  state: {
    notes: [],
  },
  mutations: {
    initNotesFromStorage(state) {
      const json = localStorage.getItem('notes');
      state.notes = JSON.parse(json) || [];
    },

    addNote(state, note) {
      state.notes.push(note);
      localStorage.setItem('notes', JSON.stringify(state.notes));
    },

    updateNote(state, updatedNote) {
      state.notes = state.notes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note
      );
      localStorage.setItem('notes', JSON.stringify(state.notes));
    },

    deleteNote(state, { id }) {
      state.notes = state.notes.filer((note) => note.id != id);
      localStorage.setItem('notes', JSON.stringify(state.notes));
    },
  },
};
