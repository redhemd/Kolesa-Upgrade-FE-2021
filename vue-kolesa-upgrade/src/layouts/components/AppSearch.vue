<template>
  <form class="search-bar header__search-bar">
    <button @click.prevent>
      <input
        type="text"
        autocomplete="off"
        placeholder="Поиск"
        @input="setSearch"
      >
    </button>
  </form>

</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AppSearch',
  mounted() {
    this.fetchSearchStr();
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      searchStr: 'searchStr',
    }),
  },
  methods: {
    setSearch(event) {
      this.$store.commit('setSearchStr', event.target.value);
    },
    fetchSearchStr() {
      this.$store.dispatch('fetchSearch');
    },
  },
};
</script>

<style>
</style>
