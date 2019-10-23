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
} from '../components';

export default {
    name: 'Search',
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

<style>

</style>