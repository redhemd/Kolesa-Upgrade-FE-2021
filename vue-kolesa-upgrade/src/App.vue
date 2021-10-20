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
<input type="radio" name="type" id="all-goods" checked>
<label data-key="all-goods" class="good-types__all js__good-types"
for="all-goods" @click="showAllGoods">Все товары</label>

<input type="radio" name="type" id="clothes">
<label data-key="clothes" class="good-types__clothes js__good-types"
for="clothes" @click="showClothes">Одежда</label>

<input type="radio" name="type" id="accesses">
<label data-key="accesses" class="good-types__accesses js__good-types"
for="accesses" @click="showAccesses">Аксессуары</label>
</div>

<div class="card-products js__cards"></div>

<div class="modal-main"></div>
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
  mounted() {
    const arr = this.clothes.concat(this.accesses);
    arr.sort((a, b) => b.isNew - a.isNew);
    arr.forEach((card) => {
      const {
        img, isNew, price, title, id,
      } = card;
      const cardHTML = this.makeProductCard(img, isNew, price, title, id);
      document.querySelector('.js__cards').innerHTML += cardHTML;
    });
    this.openModal();
  },
  methods: {
    makeProductCard(img, isNew, price, title, id) {
      return `<div data-id=${id} class="product card-products__product">
                <img src=${img} alt="">
                ${isNew ? '<span class="product__card-new">NEW</span>' : ''}
                <div class="product__card-info">
                    <span class="product__card-info__points">${price} баллов</span>
                    <span class="product__card-info__descr">${title}</span>
                    <span class="product__card-info__sizes">Размеры S/M/L</span>
                    <button class="product__card-info__btn">Заказать</button>
                </div>
              </div>`;
    },
    makeModal(img, title, price, cartImg, closeImg) {
      return `<div class="modal-bg">
                <div class="modal modal-bg__modal">
                    <div class="pictures-info modal__pictures-info">
                    <div class="pictures-info-primary pictures-info__pictures-info-primary">
                    <img src=${img} alt="Main Picture Of Jumper" />
                    </div>
                    <div class="pictures-info-secondary pictures-info__pictures-info-secondary">
                    <div class="pictures-info-secondary__first">
                    <img src="${img}" alt="Secondary Photo Of Jumper" />
                    </div>
                    <div class="pictures-info-secondary__second">
                    <img src="${img}" alt="Secondary Photo Of Jumper" />
                    </div >
                    <div class="pictures-info-secondary__third">
                    <img src="${img}" alt="Secondary Photo Of Jumper" />
                    </div>
                    </div>
                    </div>

                    <div class="main-info">
                    <div class="main-info-header">
                    <span class="main-info-header-text">${title}</span>
                    <span class="main-info-price-text">${price} баллов</span>
                    <button type="button" class="modal-btn">
                    <span class="btn-text">Заказать</span>
                    </button>
                    </div>

                    <div class="main-info-body">
                    <div class="colors-block">
                    <p class="colors-block-text">Цвета:</p>
                    <div class="colors-toggle">
                    <input class="blue-tog" type="radio" name="color" id="blue" checked>
                    <label class="color colors-toggle-text blue-toggle-text colors-toggle__blue" for="blue">Синий</label>
                    <input class="beige-tog" type="radio" name="color" id="beige">
                    <label class="color colors-toggle-text blue-toggle-text colors-toggle__beige" for="beige">Бежевый</label>
                    <input class="grey-tog" type="radio" name="color" id="grey">
                    <label class="color colors-toggle-text blue-toggle-text colors-toggle__grey" for="grey">Серый</label>
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
                    <img class="balance-icon" src="${cartImg}" alt="Balance Icon Picture"/>
                    </div>
                    <input type="image" src="${closeImg}" class="modal-close">
                </div>
            </div>
            `;
    },
    closeModal() {
      document.querySelector('.modal-close').addEventListener('click', () => {
        document.querySelector('.modal-bg').remove();
      });
    },
    openModal() {
      document.querySelectorAll('.product').forEach((product) => {
        const arr = this.clothes.concat(this.accesses);

        product.addEventListener('click', (event) => {
          const productId = parseInt(product.dataset.id, 10);
          let cardToggle = event.target;

          cardToggle = productId;
          const modalMain = document.querySelector('.modal-main');

          arr.find(({
            id, img, title, price, cartImg, closeImg,
          }) => {
            if (id === cardToggle) {
              modalMain.innerHTML += this.makeModal(img, title, price, cartImg, closeImg);
              return null;
            }
            return null;
          });
          this.closeModal();
        });
      });
    },
    showAllGoods() {
      document.querySelector('.js__cards').innerHTML = '';
      const arr = this.clothes.concat(this.accesses);
      arr.sort((a, b) => b.isNew - a.isNew);

      arr.forEach((card) => {
        const {
          img, isNew, price, title, id,
        } = card;
        const cardHTML = this.makeProductCard(img, isNew, price, title, id);

        document.querySelector('.js__cards').innerHTML += cardHTML;
      });
      this.openModal();
    },
    showClothes() {
      document.querySelector('.js__cards').innerHTML = '';
      this.clothes.forEach((card) => {
        const {
          img, isNew, price, title, id,
        } = card;
        const cardHTML = this.makeProductCard(img, isNew, price, title, id);

        document.querySelector('.js__cards').innerHTML += cardHTML;
      });
      this.openModal();
    },
    showAccesses() {
      document.querySelector('.js__cards').innerHTML = '';
      this.accesses.forEach((card) => {
        const {
          img, isNew, price, title, id,
        } = card;
        const cardHTML = this.makeProductCard(img, isNew, price, title, id);

        document.querySelector('.js__cards').innerHTML += cardHTML;
      });
      this.openModal();
    },
  },
};
</script>

<style lang="scss">
@import './scss/style.scss';
</style>
