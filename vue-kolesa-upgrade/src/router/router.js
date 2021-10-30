import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop.vue'),
  },
  {
    path: '/shop/how-to-get-points',
    name: 'HowToGetPoints',
    component: () => import(/* webpackChunkName: "how-to-get-points" */ '../views/shop/components/howToGetPoints/HowToGetPoints.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const loader = document.querySelector('.lds-ring');
  if (loader) {
    loader.style.display = 'flex';
  }
  next();
});

router.afterEach(() => {
  const loader = document.querySelector('.lds-ring');
  if (loader) {
    loader.style.display = 'none';
  }
});

export default router;
