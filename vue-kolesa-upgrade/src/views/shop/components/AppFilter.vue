<template>
  <div class="good-types body-main-block__good-types" >
    <input
      type="radio"
      name="type"
      id="all-goods"
      value="0"
      v-model="selectedType"
      @click="showAll"
      checked
    >
    <label
      data-key="all-goods"
      class="good-types__all js__good-types"
      for="all-goods"
    >Все товары</label>

    <input
      type="radio"
      name="type"
      id="clothes"
      value="1"
      v-model="selectedType"
      @click="showClothes">
    <label
      data-key="clothes"
      class="good-types__clothes js__good-types"
      for="clothes"
    >Одежда</label>

    <input
      type="radio"
      name="type"
      id="accesses"
      value="2"
      v-model="selectedType"
      @click="showAccesses">
    <label
      data-key="accesses"
      class="good-types__accesses js__good-types"
      for="accesses"
    >Аксессуары</label>
  </div>
</template>

<script>
export default {
  name: 'AppFilter',
  data() {
    return {
      selectedType: 0,
      types: [
        {
          name: 'All goods',
          value: 'all',
        },
        {
          name: 'Clothes',
          value: 'clothes',
        },
        {
          name: 'Accessories',
          value: 'accesses',
        },
      ],
    };
  },
  methods: {
    showAll() {
      this.$emit('showAllBtn');
    },
    showClothes() {
      this.$emit('showClothesBtn');
    },
    showAccesses() {
      this.$emit('showAccessesBtn');
    },
  },
};
</script>
