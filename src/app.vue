<template>
  <div>
    <header class="sticky">
      <router-link :to="{ name: 'home' }" class="logo"><span class="icon-key inverse"></span></router-link>
      <router-link :to="{ name: 'home' }" class="button">Home</router-link>
      <router-link :to="{ name: 'search' }" class="button">Search</router-link>
      <span class="separator">|</span>
      <router-link :to="{ name: 'admin/create' }" class="button">Create</router-link>
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