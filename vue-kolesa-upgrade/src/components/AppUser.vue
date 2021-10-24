<template>
  <button class="user header__user">
    <span>
      <span class="user__name">{{ name }}</span>
      <span class="user__points">{{ substractPrice }} баллов</span>
    </span>
  </button>
</template>

<script>
import axios from '../axios';

export default {
  name: 'AppUser',
  props: {
    orderPrice: Number,
  },
  mounted() {
    axios.get('templates/7ZW3y5GAuIge/data')
      .then((response) => {
        this.name = response.data.name;
        this.score = response.data.score;
        this.$emit('getScoreFromUser', this.score);
      });
  },
  data() {
    return {
      name: '',
      score: 0,
    };
  },
  computed: {
    substractPrice() {
      if (this.orderPrice < 0) {
        alert('У вас нехватает баллов!');
        return 0;
      }
      return this.orderPrice;
    },
  },
  methods: {

  },
};
</script>

<style>

</style>
