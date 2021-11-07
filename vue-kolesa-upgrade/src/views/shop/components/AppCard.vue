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
    ></app-modal>
    <!-- <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div> -->
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
      ></app-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AppModal from './AppModal.vue';

export default {
  name: 'AppCard',
  props: {
    selectedTab: Number,
  },
  mounted() {
    this.fetchClothesData();
    this.fetchAccessesData();
  },
  data() {
    return {
      isShowModal: false,
      cardToModal: {},
    };
  },
  computed: {
    ...mapState({
      clothes: 'clothes',
      accesses: 'accesses',
      searchStr: 'searchStr',
    }),
    sortedAllCards() {
      const arr = this.clothes.concat(this.accesses);
      arr.sort((a, b) => b.isNew - a.isNew);
      return arr;
    },
    searchAllCardsFilter() {
      return this.sortedAllCards.filter((card) => card.title.toLowerCase().match(this.searchStr));
    },
    searchClothesFilter() {
      return this.clothes.filter((card) => card.title.toLowerCase().match(this.searchStr));
    },
    searchAccessesFilter() {
      return this.accesses.filter((card) => card.title.toLowerCase().match(this.searchStr));
    },
  },
  methods: {
    fetchClothesData() {
      this.$store.dispatch('fetchClothesData');
    },
    fetchAccessesData() {
      this.$store.dispatch('fetchAccessesData');
    },
    openModal(card) {
      this.cardToModal = card;
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    getFormattedText(sizes) {
      return sizes && sizes.length ? `Размеры ${String(sizes)}` : '';
    },
  },
  components: {
    AppModal,
  },
};
</script>

<style>
.lds-ring {
  display: inline-flex;
  position: absolute;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  transform: translate(50%, 50%);
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #2a81dd;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #2a81dd transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
