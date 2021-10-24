<template>
<div id="app">
<body>
<div class="container">
<div class="header container__header">
<div class="logo header__logo">
<img src="./assets/kolesa-logo.svg" alt="Kolesa Logo">
</div>

<app-search
  :search="search"
  @setFromSearch="searchInApp"
></app-search>

<app-user
  :orderPrice="orderPrice"
  @getScoreFromUser="getScore"
></app-user>
</div>

<div class="main container__main">
<app-navbar></app-navbar>

<div class="body-main-block">
<app-point-blocks></app-point-blocks>

<app-filter
  @showAllBtn="showAllBtn"
  @showClothesBtn="showClothesBtn"
  @showAccessesBtn="showAccessesBtn"
></app-filter>

<app-loader
  v-if="!this.allCardsForLoader"
  :isLoading="isLoadingSpinner"
></app-loader>

<app-card
  v-else
  :clothes="clothesFromBE"
  :accesses="accessesFromBE"
  :selectedTab="selectedTab"
  @orderFromCard="orderToUser"
  :search="search"
  @cardInited="showLoader"
></app-card>
</div>
</div>

<app-footer></app-footer>
</div>
</body>
</div>
</template>

<script>
import axios from './axios';

import AppLoader from './components/AppLoader.vue';
import AppCard from './components/AppCard.vue';
import AppFilter from './components/AppFilter.vue';
import AppFooter from './components/AppFooter.vue';
import AppNavbar from './components/AppNavbar.vue';
import AppPointBlocks from './components/AppPointBlocks.vue';
import AppSearch from './components/AppSearch.vue';
import AppUser from './components/AppUser.vue';

export default {
  name: 'App',
  mounted() {
    axios.get('templates/-_RLsEGjof6i/data')
      .then((response) => {
        this.clothesFromBE = response.data;
      });
    axios.get('templates/q3OPxRyEcPvP/data')
      .then((response) => {
        this.accessesFromBE = response.data;
      });
  },
  data() {
    return {
      isLoadingSpinner: false,
      allCardsForLoader: [],
      isShowModal: false,
      selectedTab: 0,
      orderPrice: 0,
      search: '',
      clothesFromBE: [],
      accessesFromBE: [],
      userFromBE: {},
      /* eslint-disable global-require */
      clothes: [
        {
          id: 0,
          img: require('./assets/t-shirt-0.jpg'),
          isNew: true,
          price: 100,
          title: 'Футболка "A Programmer\'s Life"',
          cartImg: require('./assets/cart-pic.jpg'),
          closeImg: require('./assets/modal-close-pic.jpg'),
        },
        {
          id: 1,
          img: require('./assets/t-shirt-1.jpg'),
          isNew: true,
          price: 150,
          title: 'Свитшот "Программист"',
          cartImg: require('./assets/cart-pic.jpg'),
          closeImg: require('./assets/modal-close-pic.jpg'),
        },
        {
          id: 2,
          img: require('./assets/t-shirt-2.jpg'),
          isNew: false,
          price: 200,
          title: 'Футболка "Programmer"',
          cartImg: require('./assets/cart-pic.jpg'),
          closeImg: require('./assets/modal-close-pic.jpg'),
        },
        {
          id: 3,
          img: require('./assets/t-shirt-3.jpg'),
          isNew: false,
          price: 350,
          title: 'Футболка "Programmer Evolution"',
          cartImg: require('./assets/cart-pic.jpg'),
          closeImg: require('./assets/modal-close-pic.jpg'),
        },
        {
          id: 4,
          img: require('./assets/t-shirt-4.jpg'),
          isNew: false,
          price: 500,
          title: 'Футболка "Мой код работает!"',
          cartImg: require('./assets/cart-pic.jpg'),
          closeImg: require('./assets/modal-close-pic.jpg'),
        },
      ],
      accesses: [
        {
          id: 5,
          img: require('./assets/access-0.jpg'),
          isNew: true,
          price: 20,
          title: 'Кружка "Programmer Evolution"',
          cartImg: require('./assets/cart-pic.jpg'),
          closeImg: require('./assets/modal-close-pic.jpg'),
        },
        {
          id: 6,
          img: require('./assets/access-1.jpg'),
          isNew: true,
          price: 25,
          title: 'Кружка "Я программист"',
          cartImg: require('./assets/cart-pic.jpg'),
          closeImg: require('./assets/modal-close-pic.jpg'),
        },
        {
          id: 7,
          img: require('./assets/access-2.jpg'),
          isNew: false,
          price: 30,
          title: 'Кружка "HTML+CSS"',
          cartImg: require('./assets/cart-pic.jpg'),
          closeImg: require('./assets/modal-close-pic.jpg'),
        },
        {
          id: 8,
          img: require('./assets/access-3.jpg'),
          isNew: false,
          price: 335,
          title: 'Кружка "Лучший программист"',
          cartImg: require('./assets/cart-pic.jpg'),
          closeImg: require('./assets/modal-close-pic.jpg'),
        },
      ],
      /* eslint-enable global-require */
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
    getScore(scoreFromUserFromBE) {
      this.orderPrice = scoreFromUserFromBE;
    },
    orderToUser(cost) {
      this.orderPrice -= cost;
    },
    searchInApp(searchStr) {
      this.search = searchStr;
    },
    showLoader(allCardsFromBE) {
      this.allCardsForLoader = allCardsFromBE;
    },
  },
  components: {
    AppSearch,
    AppUser,
    AppNavbar,
    AppPointBlocks,
    AppFilter,
    AppCard,
    AppFooter,
    AppLoader,
  },
};
</script>

<style lang="scss">
@import './scss/style.scss';
</style>
