<template>
<div id="app">
<body>
<div class="container">
<div class="header container__header">
<div class="logo header__logo">
<img src="./assets/kolesa-logo.svg" alt="Kolesa Logo">
</div>

<form class="search-bar header__search-bar">
<button>
<input type="text" autocomplete="off" placeholder="Поиск">
</button>
</form>

<button class="user header__user">
<span>
<span class="user__name">Мортиджан</span>
<span class="user__points">300 баллов</span>
</span>
</button>
</div>

<div class="main container__main">
<div class="nav main__nav">
<ul>
<li>
<a class="nav__item" href="#">Оргсхема</a>
</li>
<li>
<a class="nav__item" href="#">Kolesa Team</a>
</li>
<li>
<a class="nav__item nav__item_active" href="#">
<span >Kolesa Shop</span>
</a>
</li>
<li>
<a class="nav__item" href="#">Картина компании</a>
</li>
<li>
<a class="nav__item" href="#">Новости</a>
</li>
<li>
<a class="nav__item" href="#">Education</a>
</li>
<li>
<a class="nav__item" href="#">Guidelines</a>
</li>
<li>
<a class="nav__item" href="#">Библиотека</a>
</li>
<li>
<a class="nav__item" href="#">FAQ</a>
</li>
</ul>
</div>

<div class="body-main-block">
<div class="point-blocks">
<button class="accept-points">
<span class="accept-points__icon">➕</span>
<span>Получить баллы</span>
</button>

<button class="how-to-accept-points">
<span class="how-to-accept-points__icon">❓</span>
<span>Как получить баллы</span>
</button>

<button class="gave-points">Подарить баллы</button>
</div>

<div class="good-types body-main-block__good-types">
<input type="radio" name="type" id="all-goods"  value="0" v-model="picked" checked>
<label data-key="all-goods" class="good-types__all js__good-types"
for="all-goods" @click="clear">Все товары</label>

<input type="radio" name="type" id="clothes" value="1" v-model="picked">
<label data-key="clothes" class="good-types__clothes js__good-types"
for="clothes" @click="clear">Одежда</label>

<input type="radio" name="type" id="accesses" value="2" v-model="picked">
<label data-key="accesses" class="good-types__accesses js__good-types"
for="accesses" @click="clear">Аксессуары</label>
</div>

<div class="card-products js__cards">
  <div class="sortedAllCards" v-for="(card, index) in sortedAllCards" :key="index">
      <div :data-id="card.id" class="product card-products__product">
        <img :src="card.img" alt="">
        <span class="product__card-new" v-if="card.isNew">NEW</span>
        <div class="product__card-info">
          <span class="product__card-info__points">{{ card.price }} баллов</span>
          <span class="product__card-info__descr">{{ card.title }}</span>
          <span class="product__card-info__sizes">Размеры S/M/L</span>
          <button class="product__card-info__btn" @click="openModal(card)">Заказать</button>
        </div>
      </div>
  </div>
</div>

<div class="card-products" v-if="picked === '0'">
  <div class="sortedAllCards" v-for="(card, index) in sortedAllCards" :key="index">
      <div :data-id="card.id" class="product card-products__product">
        <img :src="card.img" alt="">
        <span class="product__card-new" v-if="card.isNew">NEW</span>
        <div class="product__card-info">
          <span class="product__card-info__points">{{ card.price }} баллов</span>
          <span class="product__card-info__descr">{{ card.title }}</span>
          <span class="product__card-info__sizes">Размеры S/M/L</span>
          <button class="product__card-info__btn" @click="openModal(card)">Заказать</button>
        </div>
      </div>
  </div>
</div>

<div class="card-products" v-if="picked === '1'">
  <div class="sortedAllCards" v-for="(card, index) in clothes" :key="index">
      <div :data-id="card.id" class="product card-products__product">
        <img :src="card.img" alt="">
        <span class="product__card-new" v-if="card.isNew">NEW</span>
        <div class="product__card-info">
          <span class="product__card-info__points">{{ card.price }} баллов</span>
          <span class="product__card-info__descr">{{ card.title }}</span>
          <span class="product__card-info__sizes">Размеры S/M/L</span>
          <button class="product__card-info__btn" @click="openModal(card)">Заказать</button>
        </div>
      </div>
  </div>
</div>

<div class="card-products" v-if="picked === '2'">
  <div class="sortedAllCards" v-for="(card, index) in accesses" :key="index">
      <div :data-id="card.id" class="product card-products__product">
        <img :src="card.img" alt="">
        <span class="product__card-new" v-if="card.isNew">NEW</span>
        <div class="product__card-info">
          <span class="product__card-info__points">{{ card.price }} баллов</span>
          <span class="product__card-info__descr">{{ card.title }}</span>
          <span class="product__card-info__sizes">Размеры S/M/L</span>
          <button class="product__card-info__btn" @click="openModal(card)">Заказать</button>
        </div>
      </div>
  </div>
</div>

<div class="modal-main">
<div class="modal-bg">
<div class="modal modal-bg__modal">
<div class="pictures-info modal__pictures-info">
<div class="pictures-info-primary pictures-info__pictures-info-primary">
<img src='./assets/t-shirt-0.jpg' alt="Main Picture Of Jumper" />
</div>
<div class="pictures-info-secondary pictures-info__pictures-info-secondary">
<div class="pictures-info-secondary__first">
<img src='./assets/t-shirt-0.jpg' alt="Secondary Photo Of Jumper" />
</div>
<div class="pictures-info-secondary__second">
<img src='./assets/t-shirt-0.jpg' alt="Secondary Photo Of Jumper" />
</div >
<div class="pictures-info-secondary__third">
<img src='./assets/t-shirt-0.jpg' alt="Secondary Photo Of Jumper" />
</div>
</div>
</div>

<div class="main-info">
<div class="main-info-header">
<span class="main-info-header-text">Футболка "A Programmer's Life"</span>
<span class="main-info-price-text">150 баллов</span>
<button type="button" class="modal-btn">
<span class="btn-text">Заказать</span>
</button>
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
<span class="footer-block-details-second">
Брендированная толстовка от Qazaq Republic. Материал: Хлопок 80%, Вискоза 20%
</span>
</div>
<div class="footer-block-additional-info">
<span class="footer-block-add-first">Как выбрать размер:</span>
<span class="footer-block-add-second">Написать дяде Рику для уточнения.</span>
</div>
</div>
</div>
</div>

<div class="balance-info">
<div class="balance-text">
<span class="your-balance">Твой баланс:</span>
<p class="your-balance-points">3 945 баллов</p>
</div>
<img class="balance-icon" src='./assets/cart-pic.jpg' alt="Balance Icon Picture"/>
</div>
<input type="image" src="./assets/modal-close-pic.jpg" class="modal-close" @click="closeModal">
</div>
</div>
</div>
</div>
</div>

<div class="footer container__footer">
<div class="footer-info footer__footer-info">

<span>© Kolesa Group</span>
<div class="social-icons footer-info__social-icons">
<img class="icon-inst" src="./assets/social-instagram-icon.svg" alt="Social Instagram">
<img class="icon-youtube" src="./assets/social-youtube-icon.svg" alt="Social Youtube">
<img class="icon-vk" src="./assets/social-vk-icon.svg" alt="Social VK">
</div>

</div>

<div class="suggestions footer__suggestions">
<span class="suggestions__text">Есть идеи что улучшить?</span>
<span>Не знаешь, с кем решить проблему?</span>
</div>

<button class="footer-btn footer__footer-btn">Написать</button>
</div>
</div>
</body>
</div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      picked: 0,
      selectedTab: 0,
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
          price: 250,
          title: 'Футболка "Programmer Evolution"',
          cartImg: require('./assets/cart-pic.jpg'),
          closeImg: require('./assets/modal-close-pic.jpg'),
        },
        {
          id: 4,
          img: require('./assets/t-shirt-4.jpg'),
          isNew: false,
          price: 300,
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
          price: 35,
          title: 'Кружка "Лучший программист"',
          cartImg: require('./assets/cart-pic.jpg'),
          closeImg: require('./assets/modal-close-pic.jpg'),
        },
      ],
      /* eslint-enable global-require */
    };
  },
  computed: {
    sortedAllCards() {
      const arr = this.clothes.concat(this.accesses);
      arr.sort((a, b) => b.isNew - a.isNew);
      return arr;
    },
  },
  methods: {
    closeModal() {
      const modalMain = document.querySelector('.modal-main');
      modalMain.style.display = 'none';
    },
    openModal() {
      const modalMain = document.querySelector('.modal-main');
      modalMain.style.display = 'block';
    },
    clear() {
      document.querySelector('.js__cards').innerHTML = '';
    },
  },
};
</script>

<style lang="scss">
@import './scss/style.scss';
</style>
