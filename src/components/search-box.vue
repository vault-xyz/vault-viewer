<template>
  <input v-model="localInput" v-bind="{ placeholder }" />
</template>

<script>
export default {
    name: 'SearchBox',
    model: {
        prop: 'input',
        event: 'change'
    },
    data() {
        return {
            localInput: this.$props.input
        };
    },
    props: {
        placeholder: String
    },
    watch: {
        localInput(value) {
            this.$emit('change', value);
        }
    }
};
</script>

<style>
</style>