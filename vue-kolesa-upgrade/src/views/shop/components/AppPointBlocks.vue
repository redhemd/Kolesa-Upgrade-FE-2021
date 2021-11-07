<template>
  <div class="point-blocks body-main-block__point-blocks">
    <button class="accept-points">
    <span class="accept-points__icon">➕</span>
    <span>Получить баллы</span>
    </button>

    <button class="how-to-accept-points" @click="$router.push('/shop/how-to-get-points')">
    <span class="how-to-accept-points__icon">❓</span>
    <span>Как получить баллы</span>
    </button>

    <button class="gave-points">Подарить баллы</button>
  </div>
</template>

<script>
export default {
  name: 'AppPointBlocks',
};
</script>

<style>

</style>
