<template>
  <form class="search-bar header__search-bar">
    <button @click.prevent>
      <input
        type="text"
        autocomplete="off"
        placeholder="Поиск"
        @input="setSearch"
        :value="search"
      >
    </button>
  </form>

</template>

<script>
export default {
  name: 'AppSearch',
  props: {
    search: String,
  },
  data() {
    return {
      searchProp: '',
    };
  },
  methods: {
    setSearch(event) {
      this.searchProp = event.target.value;
      this.$emit('setFromSearch', event.target.value);
    },
  },
};
</script>

<style>

</style>
