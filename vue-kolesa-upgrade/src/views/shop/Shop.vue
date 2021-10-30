<template>
  <div class="shop">
    <app-point-blocks></app-point-blocks>

    <app-filter
      @showAllBtn="showAllBtn"
      @showClothesBtn="showClothesBtn"
      @showAccessesBtn="showAccessesBtn"
    ></app-filter>

    <app-card
      :selectedTab="selectedTab"
    ></app-card>
  </div>
</template>

<script>
import AppCard from './components/AppCard.vue';
import AppFilter from './components/AppFilter.vue';
import AppPointBlocks from './components/AppPointBlocks.vue';

export default {
  name: 'Shop',
  data() {
    return {
      isShowModal: false,
      selectedTab: 0,
    };
  },
  methods: {
    showAllBtn() {
      this.selectedTab = 0;
    },
    showClothesBtn() {
      this.selectedTab = 1;
    },
    showAccessesBtn() {
      this.selectedTab = 2;
    },
  },
  components: {
    AppPointBlocks,
    AppFilter,
    AppCard,
  },
};
</script>
