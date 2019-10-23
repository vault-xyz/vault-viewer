<template>
  <div>
    <header class="sticky">
      <router-link :to="{ name: 'home' }" class="logo">LOGO</router-link>
      <router-link :to="{ name: 'home' }" class="button">Home</router-link>
      <router-link :to="{ name: 'search' }" class="button">Search</router-link>
    </header>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
@import '~mini.css/src/flavors/mini-dark.scss';
</style>