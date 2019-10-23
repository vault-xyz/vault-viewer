<template>
  <div class="container">
   <form>
     <fieldset>
       <legend class="doc">New thing</legend>

       <!-- Type -->
        <div class="row responsive-label">
          <div class="col-sm-12 col-md-3"><label for="sf1-type" class="doc">Type</label></div>
          <div class="col-sm-12 col-md">
            <select v-model="type" id="sf1-type" style="width:85%;" class="doc">
              <option disabled value="">Choose a type</option>
              <option v-for="type in types" :key="type.name" class="doc">{{ type }}</option>
            </select>
          </div>
        </div>

      <template v-if="type">
       <!-- Name -->
        <div class="row responsive-label">
          <div class="col-sm-12 col-md-3"><label for="sf1-name" class="doc">Name</label></div>
          <div class="col-sm-12 col-md">
            <input type="text" placeholder="Name.." id="sf1-name" style="width:85%;" class="doc">
          </div>
        </div>

        <ApolloQuery
          :query="gql => gql`
            query fields ($type: String!) {
              __type(name:$type) {
                ...FullType
              }
            }

            fragment FullType on __Type {
              kind
              name
              description
              fields(includeDeprecated: true) {
                name
                description
                args {
                  ...InputValue
                }
                type {
                  ...TypeRef
                }
                isDeprecated
                deprecationReason
              }
              inputFields {
                ...InputValue
              }
              interfaces {
                ...TypeRef
              }
              enumValues(includeDeprecated: true) {
                name
                description
                isDeprecated
                deprecationReason
              }
              possibleTypes {
                ...TypeRef
              }
            }

            fragment InputValue on __InputValue {
              name
              description
              type { ...TypeRef }
              defaultValue
            }

            fragment TypeRef on __Type {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
                    kind
                    name
                    ofType {
                      kind
                      name
                      ofType {
                        kind
                        name
                        ofType {
                          kind
                          name
                          ofType {
                            kind
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          
          `"
          :variables="{ type }"
        >
          <template v-slot="{ result: { data } }">
            <template v-if="data">
              <div v-for="field in allowedFields(data.__type.fields)" :key="field.name" class="row responsive-label">
                <div class="col-sm-12 col-md-3">
                  <label :for="`sf1-${field.name}`" class="doc">{{ field.name }}</label>
                </div>
                <div class="col-sm-12 col-md">
                  <!-- Boolean -->
                  <template v-if="field.type.kind === 'SCALAR' && field.type.name === 'Boolean'">
                    <input type="checkbox" autocomplete="off" :id="`sf1-${field.name}`" class="doc">
                  </template>

                  <!-- String -->
                  <template v-else-if="field.type.kind === 'SCALAR' && field.type.name === 'String'">
                    <input type="text" :placeholder="field.description" :id="`sf1-${field.name}`" style="width:85%;" class="doc">
                  </template>

                  <!-- Int -->
                  <template v-else-if="field.type.kind === 'SCALAR' && field.type.name === 'Int'">
                    <input type="number" :placeholder="field.description" :id="`sf1-${field.name}`" style="width:85%;" class="doc">
                  </template>

                  <!-- Text -->
                  <template v-else-if="field.type.kind === 'OBJECT' && field.type.name === 'Text'">
                    <input type="text" :placeholder="field.description" :id="`sf1-${field.name}`" style="width:85%;" class="doc">
                  </template>

                  <!-- ID mapping -->
                  <template v-else-if="field.type.kind === 'OBJECT' && field.type.name === 'Thing'">
                    <input type="text" :placeholder="field.description" :id="`sf1-${field.name}`" style="width:85%;" class="doc">
                  </template>

                  <template v-else>
                    <pre>{{field}}</pre>
                  </template>

                  <!-- <input type="text" :id="`sf1-${field.name}`" style="width:85%;" class="doc"> -->
                </div>
              </div>
            </template>
          </template>
        </ApolloQuery>
      </template>

      </fieldset>
    </form>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'admin-create',
  data() {
    return {
      type: 'AudioBook',
      types: []
    };
  },
  apollo: {
    types: {
      query: gql`
        query {
          __type(name:"SearchResultType") {
            possibleTypes {
              name
            }
          }
        }
      `,
      update: data => data.__type.possibleTypes.map(type => type.name).sort()
    }
  },
  methods: {
    allowedFields(fields) {
      return fields.filter(field => field.name !== 'id');
    }
  }
}
</script>

<style>

</style>