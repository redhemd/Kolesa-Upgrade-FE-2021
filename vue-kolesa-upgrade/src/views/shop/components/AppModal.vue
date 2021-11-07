<template>
  <div v-if="isOpen">
      <div class="modal-main">
        <div class="modal-bg">
        <div class="modal modal-bg__modal">
          <div class="modal-wrap">
            <div class="pictures-info modal-wrap__pictures-info">
            <div class="pictures-info-primary pictures-info__pictures-info-primary">
            <img :src='this.card.mainImage' alt="" />
            </div>
            <div class="pictures-info-secondary pictures-info__pictures-info-secondary">
            <div class="pictures-info-secondary__first">
            <img
              :src='getFormattedFirstImage(this.card.images, this.card.mainImage)'
              alt="Secondary Photo"
            />
            </div>
            <div class="pictures-info-secondary__second">
            <img
              :src='getFormattedSecondImage(this.card.images, this.card.mainImage)'
              alt="Secondary Photo"
            />
            </div >
            <div class="pictures-info-secondary__third">
            <img
              :src='getFormattedThirdImage(this.card.images, this.card.mainImage)'
              alt="Secondary Photo"
            />
            </div>
            </div>
            </div>

            <div class="main-info modal-wrap__main-info">
            <div class="main-info-header">

            <span class="main-info-header-text">{{ this.card.title }}</span>
            <span class="main-info-price-text">{{ this.card.price }} баллов</span>
            <div class="main-info-header__wrap">
            <button type="button" class="modal-btn">
            <span class="btn-text" @click="orderInModal">Заказать</span>
            </button>
            <div class="balance-info modal-wrap__balance-info">
            <div class="balance-text">
            <span class="your-balance">Твой баланс:</span>
            <p class="your-balance-points">{{userInfo.score}} баллов</p>
            </div>
            <img
            class="balance-icon"
            src="../../../assets/cart-pic.jpg"
            alt="Balance Icon Picture"/>
            </div>
            </div>
            </div>

          <div class="main-info-body">
          <div class="colors-block">
          <p class="colors-block-text">Цвета:</p>
          <div class="colors-toggle">
          <input class="blue-tog" type="radio" name="color" id="blue" checked>
          <label class="color colors-toggle-text blue-toggle-text colors-toggle__blue" for="blue">
          Синий
          </label>
          <input class="beige-tog" type="radio" name="color" id="beige">
          <label class="color colors-toggle-text blue-toggle-text colors-toggle__beige" for="beige">
          Бежевый
          </label>
          <input class="grey-tog" type="radio" name="color" id="grey">
          <label class="color colors-toggle-text blue-toggle-text colors-toggle__grey" for="grey">
          Серый
          </label>
          </div>
          </div>

          <div class="sizes-block">
          <p class="sizes-block-text">Размер:</p>
          <div class="sizes-toggle">
          <input type="radio" name="size" id="s" checked>
          <label class="size size-toggle-text blue-toggle-text sizes-toggle__S" for="s">S</label>
          <input type="radio" name="size" id="m" >
          <label class="size size-toggle-text blue-toggle-text sizes-toggle__M" for="m">M</label>
          <input type="radio" name="size" id="l" >
          <label class="size size-toggle-text blue-toggle-text sizes-toggle__L" for="l">L</label>
          </div>
          </div>

          <div class="footer-block">
          <div class="footer-block-details">
          <span class="footer-block-details-first">Детали:</span>
          <span class="footer-block-details-second">{{card.description}}
          </span>
          </div>
          <div class="footer-block-additional-info">
          <span class="footer-block-add-first">Как выбрать размер:</span>
          <span class="footer-block-add-second">Написать дяде Рику для уточнения.</span>
          </div>
          </div>
          </div>
          </div>

          <button class="modal-close modal-wrap__modal-close" type="image" @click="closeModal"
          ></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'AppModal',
  props: {
    card: Object,
    isOpen: Boolean,
  },
  mounted() {
    this.fetchUser();
  },
  data() {
    return {
      isShowModal: false,
    };
  },
  computed: {
    ...mapState({
      userInfo: 'userInfo',
    }),
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    orderInModal() {
      if (this.userInfo.score - this.card.price <= 0) {
        alert('Недостаточно баллов!');
        return;
      }

      this.$store.commit('setNewScore', this.card.price);
    },
    getFormattedFirstImage(mainImg, defaultImg) {
      return mainImg && mainImg.length
        ? `${mainImg[0]}`
        : `${defaultImg}`;
    },
    getFormattedSecondImage(mainImg, defaultImg) {
      return mainImg && mainImg.length
        ? `${mainImg[1]}`
        : `${defaultImg}`;
    },
    getFormattedThirdImage(mainImg, defaultImg) {
      return mainImg && mainImg.length
        ? `${mainImg[2]}`
        : `${defaultImg}`;
    },
    fetchUser() {
      this.$store.dispatch('fetchUserInfo');
    },
  },
};
</script>
