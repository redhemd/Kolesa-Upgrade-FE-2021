<template>
  <button
    class="user header__user"
    :style="{
      backgroundImage: `url(${userInfo.avatarUrl})`
    }"
    >
    <span>
      <span class="user__name">{{ userInfo.name }}</span>
      <span class="user__points">{{ score }}</span>
    </span>
  </button>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AppUser',
  mounted() {
    this.fetchUser();
  },
  computed: {
    ...mapState({
      userInfo: 'userInfo',
    }),
    score() {
      return this.userInfo.score ? `${this.userInfo.score} балллов` : '';
    },
  },
  methods: {
    fetchUser() {
      this.$store.dispatch('fetchUserInfo');
    },
  },
};
</script>
