<template>
<div class="nav main__nav">
  <ul>
    <li
      v-for="(item, index) in routes"
      :key="index">
      <router-link
        class="nav__item"
        :to="item.link"
        :exact="item.isExact"
        active-class="nav__item_active"
        v-html="item.label"
      ></router-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      routes: [
        {
          link: '/',
          label: 'Оргсхема',
          isExact: true,
        },
        {
          link: '/about',
          label: 'Kolesa <strong>Team<strong>',
          isExact: true,
        },
        {
          link: '/shop',
          label: 'Kolesa Shop',
          isExact: false,
        },
      ],
    };
  },
};
</script>

<style>

</style>
