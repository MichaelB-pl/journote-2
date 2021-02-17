import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/notes',
    name: 'NotesList',
    component: () =>
      import(
        /* webpackChunkName: "notesListPage" */ '@/views/NotesListPage.vue'
      ),
  },
  {
    path: '/*',
    redirect: { name: 'NotesList' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
