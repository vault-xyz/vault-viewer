<template>
  <div>
    <search-box v-model="query" v-bind="{ placeholder }"/>
    <results-box v-bind="{ query }" />
  </div>
</template>

<script>
import {
  SearchBox,
  ResultsBox
} from './components';

export default {
    name: 'app',
    components: {
      SearchBox,
      ResultsBox
    },
    data() {
      return {
        query: '',
        placeholder: 'Search...'
      };
    }
}
</script>

<style lang="scss">
@import '~mini.css/src/flavors/mini-dark.scss';
</style>