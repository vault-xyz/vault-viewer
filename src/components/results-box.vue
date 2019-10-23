<template>
  <div>
    <Query :query="searchQuery" :variables="{ query }" v-slot="{ data, execute }">
      <div v-if="data">
        <pre>{{data}}</pre>
        <button @click="execute()">Re-fetch</button>
      </div>
    </Query>
  </div>
</template>

<script>
import gql from 'graphql-tag';
import { Query } from 'vue-gql';

export default {
  name: 'ResultsBox',
  props: {
    query: String
  },
  components: {
    Query
  },
  data() {
    return {
      searchQuery: gql`
        query($query:String!) {
          search(query:$query) {
            resultsFound
            results {
              __typename
              ...episode
              ...show
              ...movie
              ...videoGame
              ...person
            }
          }
        }

        fragment person on Person {
          id
          name
        }

        fragment episode on Episode {
          id
          name
        }

        fragment videoGame on VideoGame {
          id
          name
        }

        fragment show on Show {
          id
          name
        }

        fragment movie on Movie {
          id
          name
        }
      `
    };
  }
};
</script>

<style>
</style>