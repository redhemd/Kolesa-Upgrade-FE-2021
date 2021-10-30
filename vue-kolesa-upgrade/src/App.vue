<template>
<div id="app">
<body>
<div class="container">
<div class="header container__header">
<div class="logo header__logo">
<img src="./assets/kolesa-logo.svg" alt="Kolesa Logo">
</div>
<app-search></app-search>

<app-user></app-user>
</div>

<div class="main container__main">
<app-navbar></app-navbar>

<div class="body-main-block">
<router-view></router-view>
</div>
</div>

<app-footer></app-footer>
</div>
</body>
</div>
</template>

<script>
import AppFooter from './layouts/components/AppFooter.vue';
import AppNavbar from './layouts/components/AppNavbar.vue';
import AppSearch from './layouts/components/AppSearch.vue';
import AppUser from './layouts/components/AppUser.vue';

export default {
  name: 'App',
  data() {
    return {
      selectedTab: 0,
      search: '',
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
    showLoader(allCardsFromBE) {
      this.allCardsForLoader = allCardsFromBE;
    },
  },
  components: {
    AppSearch,
    AppUser,
    AppNavbar,
    AppFooter,
  },
};
</script>

<style lang="scss">
@import './scss/style.scss';
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
