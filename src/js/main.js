import '../scss/style.scss';

const clothes = [
    {
        id:    0,
        img:   './src/assets/t-shirt-0.jpg',
        isNew: true,
        price: 100,
        title: 'Футболка "A Programmer\'s Life"',
    },
    {
        id:    1,
        img:   './src/assets/t-shirt-1.jpg',
        isNew: true,
        price: 150,
        title: 'Свитшот "Программист"',
    },
    {
        id:    2,
        img:   './src/assets/t-shirt-2.jpg',
        isNew: false,
        price: 200,
        title: 'Футболка "Programmer"',
    },
    {
        id:    3,
        img:   './src/assets/t-shirt-3.jpg',
        isNew: false,
        price: 250,
        title: 'Футболка "Programmer Evolution"',
    },
    {
        id:    4,
        img:   './src/assets/t-shirt-4.jpg',
        isNew: false,
        price: 300,
        title: 'Футболка "Мой код работает!"',
    },
];

const accesses = [
    {
        id:    5,
        img:   './src/assets/access-0.jpg',
        isNew: true,
        price: 20,
        title: 'Кружка "Programmer Evolution"',
    },
    {
        id:    6,
        img:   './src/assets/access-1.jpg',
        isNew: true,
        price: 25,
        title: 'Кружка "Я программист"',
    },
    {
        id:    7,
        img:   './src/assets/access-2.jpg',
        isNew: false,
        price: 30,
        title: 'Кружка "HTML+CSS"',
    },
    {
        id:    8,
        img:   './src/assets/access-3.jpg',
        isNew: false,
        price: 35,
        title: 'Кружка "Лучший программист"',
    },
];

const makeProductCard = (img, isNew, price, title, id) => `
        <div data-id=${id} class="product card-products__product">
            <img src=${img} alt="">
            ${isNew ? '<span class="product__card-new">NEW</span>' : ''}
            <div class="product__card-info">
                <span class="product__card-info__points">${price} баллов</span>
                <span class="product__card-info__descr">${title}</span>
                <span class="product__card-info__sizes">Размеры S/M/L</span>
                <button class="product__card-info__btn">Заказать</button>
            </div>
        </div>
`;

// const makeModal = (img, title, price) =>
// `
// <div class="modal-bg">
// <div class="modal modal-bg__modal">
//     <div class="pictures-info modal__pictures-info">
//         <div class="pictures-info-primary pictures-info__pictures-info-primary">
//             <img
//                 src=${img}
//                 alt="Main Picture Of Jumper"
//             />
//         </div>

//         <div class="pictures-info-secondary pictures-info__pictures-info-secondary">
//             <div class="pictures-info-secondary__first">
//             <img
//                 src="./src/assets/secondary-pic-01.jpg"
//                 alt="Secondary Photo Of Jumper"
//             />
//         </div>
//             <div class="pictures-info-secondary__second">
//                     <img
//                         src="./src/assets/secondary-pic-01.jpg"
//                         alt="Secondary Photo Of Jumper"
//                     />
//                 </div >
//                 <div class="pictures-info-secondary__third">
//                     <img
//                         src="./src/assets/secondary-pic-01.jpg"
//                         alt="Secondary Photo Of Jumper"
//                     />
//                 </div>
//             </div>
//         </div>

//         <div class="main-info">
//             <div class="main-info-header">
//                 <span class="main-info-header-text">
//                     ${title}
//                 </span>

//                 <span class="main-info-price-text">${price} баллов</span>

//                 <button type="button" class="modal-btn">
//                     <span class="btn-text">Заказать</span>
//                 </button>
//             </div>

//             <div class="main-info-body">
//                 <div class="colors-block">
//                     <p class="colors-block-text">Цвета:</p>

//                     <div class="colors-toggle">
//                         <input class="blue-tog" type="radio" name="color" id="blue" checked>
//                         <label class="color colors-toggle-text blue-toggle-text colors-toggle__blue" for="blue">Синий</label>

//                         <input class="beige-tog" type="radio" name="color" id="beige">
//                         <label class="color colors-toggle-text blue-toggle-text colors-toggle__beige" for="beige">Бежевый</label>

//                         <input class="grey-tog" type="radio" name="color" id="grey">
//                         <label class="color colors-toggle-text blue-toggle-text colors-toggle__grey" for="grey">Серый</label>
//                         </div>
//                     </div>

//                     <div class="sizes-block">
//                         <p class="sizes-block-text">Размер:</p>

//                         <div class="sizes-toggle">
//                             <input type="radio" name="size" id="s" checked>
//                             <label class="size size-toggle-text blue-toggle-text sizes-toggle__S" for="s">S</label>

//                             <input type="radio" name="size" id="m" >
//                             <label class="size size-toggle-text blue-toggle-text sizes-toggle__M" for="m">M</label>

//                             <input type="radio" name="size" id="l" >
//                             <label class="size size-toggle-text blue-toggle-text sizes-toggle__L" for="l">L</label>
//                         </div>
//                     </div>

//                     <div class="footer-block">
//                         <div class="footer-block-details">
//                             <span class="footer-block-details-first">Детали:</span>
//                             <span class="footer-block-details-second">
//                                 Брендированная толстовка от Qazaq Republic.
//                                 Материал: Хлопок 80%, Вискоза 20%
//                             </span>
//                         </div>

//                         <div class="footer-block-additional-info">
//                             <span class="footer-block-add-first">
//                                 Как выбрать размер:
//                             </span>
//                             <span class="footer-block-add-second">Написать дяде Рику для уточнения.</span>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//             <div class="balance-info">
//                 <div class="balance-text">
//                     <span class="your-balance">Твой баланс:</span>
//                     <p class="your-balance-points">3 945 баллов</p>
//                 </div>
//                 <img
//                     class="balance-icon"
//                     src="./src/assets/cart-pic.jpg"
//                     alt="Balance Icon Picture"
//                 />
//             </div>

//             <input type="image" src="./src/assets/modal-close-pic.jpg" class="modal-close">
//         </div>
//     </div>
// `;

const makeModal = (img, title, price) => `
<div class="modal-bg">
    <div class="modal modal-bg__modal">
        <div class="pictures-info modal__pictures-info">
            <div class="pictures-info-primary pictures-info__pictures-info-primary">
                <img src=${img} alt="Main Picture Of Jumper" />
            </div>
            <div class="pictures-info-secondary pictures-info__pictures-info-secondary">
                <div class="pictures-info-secondary__first">
                    <img src="./src/assets/secondary-pic-01.jpg" alt="Secondary Photo Of Jumper" />
                </div>
                <div class="pictures-info-secondary__second">
                    <img src="./src/assets/secondary-pic-01.jpg" alt="Secondary Photo Of Jumper" />
                </div >
                <div class="pictures-info-secondary__third">
                    <img src="./src/assets/secondary-pic-01.jpg" alt="Secondary Photo Of Jumper" />
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
            <img class="balance-icon" src="./src/assets/cart-pic.jpg" alt="Balance Icon Picture"/>
        </div>
        <input type="image" src="./src/assets/modal-close-pic.jpg" class="modal-close">
    </div>
</div>
`;

const closeModal = () => {
    document.querySelector('.modal-close').addEventListener('click', () => {
        document.querySelector('.modal-bg').remove();
    });
};

const openModal = () => {
    document.querySelectorAll('.product').forEach((product) => {
        const arr = clothes.concat(accesses);

        product.addEventListener('click', (event) => {
            const productId = parseInt(product.dataset.id, 10);
            let cardToggle = event.target;

            cardToggle = productId;
            const modalMain = document.querySelector('.modal-main');

            arr.find(({
                id, img, title, price,
            }) => {
                if (id === cardToggle) {
                    modalMain.innerHTML += makeModal(img, title, price);

                    return null;
                }

                return null;
            });
            // arr.find((card)=>{
            // if (card.id === cardToggle) {
            //     const {img, title, price} = card
            //     const modal = makeModal(img, title, price)
            //     return document.querySelector('.modal-main').innerHTML += modal
            // }
            // const {img, title, price} = card
            // const modal = makeModal(img, title, price)
            // card.id === cardToggle
            // const result = card.find
            // })
            closeModal();
        });
    });
};

window.addEventListener('load', () => {
    const arr = clothes.concat(accesses);

    arr.sort((a, b) => b.isNew - a.isNew);
    arr.forEach((card) => {
        const {
            img, isNew, price, title, id,
        } = card;
        const cardHTML = makeProductCard(img, isNew, price, title, id);

        document.querySelector('.js__cards').innerHTML += cardHTML;
    });
    openModal();
});

document.querySelectorAll('.js__good-types').forEach((goodTypes) => {
    goodTypes.addEventListener('click', (event) => {
        const toggle = event.target;

        if (toggle.dataset.key === 'clothes') {
            document.querySelector('.js__cards').innerHTML = '';

            clothes.forEach((card) => {
                const {
                    img, isNew, price, title, id,
                } = card;
                const cardHTML = makeProductCard(img, isNew, price, title, id);

                document.querySelector('.js__cards').innerHTML += cardHTML;
            });
            openModal();
        }

        if (toggle.dataset.key === 'accesses') {
            document.querySelector('.js__cards').innerHTML = '';

            accesses.forEach((card) => {
                const {
                    img, isNew, price, title, id,
                } = card;
                const cardHTML = makeProductCard(img, isNew, price, title, id);

                document.querySelector('.js__cards').innerHTML += cardHTML;
            });
            openModal();
        }

        if (toggle.dataset.key === 'all-goods') {
            document.querySelector('.js__cards').innerHTML = '';

            const arr = clothes.concat(accesses);

            arr.sort((a, b) => b.isNew - a.isNew);
            arr.forEach((card) => {
                const {
                    img, isNew, price, title, id,
                } = card;
                const cardHTML = makeProductCard(img, isNew, price, title, id);

                document.querySelector('.js__cards').innerHTML += cardHTML;
            });
            openModal();
        }
    });
});
