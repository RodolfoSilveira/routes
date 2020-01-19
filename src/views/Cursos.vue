<template>
    <div>
        <h1>Essa é a pagina Cursos {{curso}}</h1>
        <router-link :to="{name: 'curso', params: { curso: 'javascript' }}">Javascript</router-link>
        <router-link to="/cursos/html">Html</router-link>
        <router-link to="/cursos/css">CSS</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  props: ["curso"],
  beforeRouteUpdate(to, from, next) {
    next();
  }
};
</script>

<style>
</style>
