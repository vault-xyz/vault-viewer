<template>
  <div>
    <ApolloQuery
      :query="gql => gql`
        query search ($query:String!) {
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

        ${$options.fragments.episode}
        ${$options.fragments.show}
        ${$options.fragments.movie}
        ${$options.fragments.videoGame}
        ${$options.fragments.person}
      `"
      :variables="{ query }"
    >
      <template v-slot="{ result: { data } }">
        <div v-if="data">
          <pre>{{data}}</pre>
        </div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'ResultsBox',
  props: {
    query: String
  },
  fragments: {
    episode: gql`
      fragment episode on Episode {
        id
        name
      }
    `,
    person: gql`
      fragment person on Person {
          id
          name
        }
    `,
    videoGame: gql`
      fragment videoGame on VideoGame {
          id
          name
        }
    `,
    show: gql`
      fragment show on Show {
          id
          name
        }
    `,
    movie: gql`
      fragment movie on Movie {
          id
          name
        }
    `
  }
};
</script>

<style>
</style>