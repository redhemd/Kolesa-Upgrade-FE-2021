<template>
  <div class="card-products js__cards" v-if="this.selectedTab === 0">
    <div class="sortedAllCards" v-for="(card, index) in searchAllCardsFilter" :key="index">
        <div :data-id="card.id" class="product card-products__product">
          <img :src="card.mainImage" alt="">
          <span class="product__card-new" v-if="card.isNew">NEW</span>
          <div class="product__card-info">
            <span class="product__card-info__points">{{ card.price }} баллов</span>
            <span class="product__card-info__descr">{{ card.title }}</span>
            <span class="product__card-info__sizes">{{
                getFormattedText(card.sizes)
              }}
            </span>
            <button class="product__card-info__btn" @click="openModal(card)">Заказать</button>
          </div>
        </div>
    </div>
    <app-modal
      :isOpen="isShowModal"
      @close="closeModal"
      :card="cardToModal"
      @orderFromModal="orderInCard"
    ></app-modal>
  </div>

  <div class="card-products js__cards" v-else-if="this.selectedTab === 1">
    <div class="sortedAllCards" v-for="(card, index) in searchClothesFilter" :key="index">
        <div :data-id="card.id" class="product card-products__product">
          <img :src="card.mainImage" alt="">
          <span class="product__card-new" v-if="card.isNew">NEW</span>
          <div class="product__card-info">
            <span class="product__card-info__points">{{ card.price }} баллов</span>
            <span class="product__card-info__descr">{{ card.title }}</span>
            <span class="product__card-info__sizes">{{
                getFormattedText(card.sizes)
              }}</span>
            <button class="product__card-info__btn" @click="openModal(card)">Заказать</button>
          </div>
        </div>
      </div>
      <app-modal
      :isOpen="isShowModal"
      @close="closeModal"
      :card="cardToModal"
      @orderFromModal="orderInCard"
      ></app-modal>
  </div>

  <div class="card-products js__cards" v-else-if="this.selectedTab === 2">
    <div class="sortedAllCards" v-for="(card, index) in searchAccessesFilter" :key="index">
        <div :data-id="card.id" class="product card-products__product">
          <img :src="card.mainImage" alt="">
          <span class="product__card-new" v-if="card.isNew">NEW</span>
          <div class="product__card-info">
            <span class="product__card-info__points">{{ card.price }} баллов</span>
            <span class="product__card-info__descr">{{ card.title }}</span>
            <span class="product__card-info__sizes">{{
                getFormattedText(card.sizes)
              }}</span>
            <button class="product__card-info__btn" @click="openModal(card)">Заказать</button>
          </div>
        </div>
      </div>
      <app-modal
      :isOpen="isShowModal"
      @close="closeModal"
      :card="cardToModal"
      @orderFromModal="orderInCard"
      ></app-modal>
  </div>

  <div v-else>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </div>
</template>

<script>
// import AppLoader from './AppLoader.vue';
import AppModal from './AppModal.vue';

export default {
  name: 'AppCard',
  props: {
    clothes: Array,
    accesses: Array,
    selectedTab: Number,
    search: String,
  },
  // mounted() {
  //   this.init = this.searchAllCardsFilter;
  //   this.$emit('cardInited', this.init);
  // },
  data() {
    return {
      isShowModal: false,
      cardToModal: {},
      testCard: {},
      sizesOfCards: [],
      // init: [],
    };
  },
  computed: {
    sortedAllCards() {
      const arr = this.clothes.concat(this.accesses);
      arr.sort((a, b) => b.isNew - a.isNew);
      return arr;
    },
    searchAllCardsFilter() {
      return this.sortedAllCards.filter((card) => card.title.toLowerCase().match(this.search));
    },
    searchClothesFilter() {
      return this.clothes.filter((card) => card.title.toLowerCase().match(this.search));
    },
    searchAccessesFilter() {
      return this.accesses.filter((card) => card.title.toLowerCase().match(this.search));
    },
  },
  methods: {
    openModal(card) {
      this.cardToModal = card;
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    orderInCard(cost) {
      this.$emit('orderFromCard', cost);
    },
    getFormattedText(sizes) {
      return sizes && sizes.length ? `Размеры ${String(sizes)}` : '';
    },
  },
  components: {
    AppModal,
    // AppLoader,
  },
};
</script>

<style>

</style>
