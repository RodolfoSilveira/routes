import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Cursos from "./views/Cursos.vue";
import Curso from "./views/Curso.vue";
import CursoAulas from "./views/CursoAulas.vue";
import CursoDescricao from "./views/CursoDescricao.vue";
import Acoes from "./views/Acoes.vue";
import AcoesDados from './views/AcoesDados.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "app",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/acoes",
      component: Acoes,
      children: [
        {
          path: ":simbolo",
          component: AcoesDados,
          props: true
        }
      ]
    },
    {
      path: "/cursos",
      component: Cursos,
      props: true,
      children: [
        {
          name: "curso",
          path: ":curso",
          component: Curso,
          props: true,
          children: [
            {
              name: "aulas",
              path: "aulas",
              component: CursoAulas
            },
            {
              name: "descricao",
              path: "descricao",
              component: CursoDescricao
            }
          ]
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 200,
    }
  }
});
