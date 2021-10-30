<template>
  <div class="howToGetPoints">
   <span class="howToGetPoints__routes">
    <router-link
      class="howToGetPoints__routes__first-text"
      :to="{name: 'Shop'}"
      replace
      >
      Kolesa Shop
    </router-link> /
    <a class="howToGetPoints__routes__second-text">Как получить баллы</a>
   </span>

    <br>

    <p class="howToGetPoints__header-text">
      Как получить баллы
    </p>

    <div
      class="point-options-block howToGetPoints__point-options-block">
      <div class="option point-options-block__option">
        <div class="option__container">
          <img src="../../../../assets/option-icon-1.jpg" alt="">
          <p class="header-text">Выступление на конференциях</p>
          <div class="points-text">
            <p>90 баллов</p>
          </div>
          <p class="description-text">
            Стань спикером на международной конференции по своему направлению
          </p>
        </div>
        <button class="btn">Отправить заявку</button>
      </div>
      <div class="option point-options-block__option">
        <div class="option__container">
          <img src="../../../../assets/option-icon-2.jpg" alt="">
          <p class="header-text">Выступление на meetup</p>
          <div class="points-text">
            <p>60 баллов</p>
          </div>
          <p class="description-text">
            Стань спикером в Колёсах и на meetup других компаний.
            Расскажи о наших продуктах и технологиях которые мы используем
          </p>
        </div>
        <button class="btn">Отправить заявку</button>
      </div>
      <div class="option point-options-block__option">
        <div class="option__container">
          <img src="../../../../assets/option-icon-3.jpg" alt="">
          <p class="header-text">Статья на habr/vc.ru/rusbase</p>
          <div class="points-text">
            <p>60 баллов</p>
          </div>
          <p class="description-text">
            Подготовь качественный контент, напиши и опубликуй статью на профильную тему
          </p>
        </div>
        <button class="btn">Отправить заявку</button>
      </div>
      <div class="option point-options-block__option">
        <div class="option__container">
          <img src="../../../../assets/option-icon-4.jpg" alt="">
          <p class="header-text">Мастер-классы, тренинги, лекции, подкасты, прямые эфиры</p>
          <div class="points-text">
            <p>60 баллов</p>
          </div>
          <p class="description-text">
            Поделись профессиональными знаниями с коллегами. Важно обучить не менее 6 человек
          </p>
        </div>
        <button class="btn">Отправить заявку</button>
      </div>
      <div class="option point-options-block__option">
        <div class="option__container">
          <img src="../../../../assets/option-icon-5.jpg" alt="">
          <p class="header-text">Организация мероприятия</p>
          <div class="points-text">
            <p>60 баллов</p>
          </div>
          <p class="description-text">
            Стань спикером на международной конференции по своему направлению
          </p>
        </div>
        <button class="btn">Отправить заявку</button>
      </div>
      <div class="option point-options-block__option">
        <div class="option__container">
          <img src="../../../../assets/option-icon-6.jpg" alt="">
          <p class="header-text">Стань ментором в проекте «Kolesa Academy»</p>
          <div class="points-text">
            <p>90 баллов ежемесячно</p>
          </div>
          <p class="description-text">Стань ментором академиков,
            поделись своими знаниями и помоги ребятам завершить Kolesa Academy успешно
          </p>
        </div>
        <button class="btn">Отправить заявку</button>
      </div>
      <div class="option point-options-block__option">
        <div class="option__container">
          <img src="../../../../assets/option-icon-7.jpg" alt="">
          <p class="header-text">Помощь HR team</p>
          <div class="points-text">
            <p>50 баллов</p>
          </div>
          <p class="description-text">
            Помоги организовать мероприятие
          </p>
        </div>
        <button class="btn">Отправить заявку</button>
      </div>
      <div class="option point-options-block__option">
        <div class="option__container">
          <img src="../../../../assets/option-icon-8.jpg" alt="">
          <p class="header-text">Выступление на Demoday</p>
          <div class="points-text">
            <p>30 баллов</p>
          </div>
          <p class="description-text">
            Выступи на Demoday внутри своей команды и поделись знаниями
          </p>
        </div>
        <button class="btn">Отправить заявку</button>
      </div>
      <div class="option point-options-block__option">
        <div class="option__container">
          <img src="../../../../assets/option-icon-9.jpg" alt="">
          <p class="header-text">Другое</p>
          <div class="points-text">
            <p>60 баллов</p>
          </div>
          <p class="description-text">
            Получай баллы если уже что-то сделано
          </p>
        </div>
        <button class="btn">Отправить заявку</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowToGetPoints',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
