<template>
  <div>

    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col text-white">
            <h1 class="display-3 text-white">{{ $t('news.title') }}</h1>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
//import swiss24Heures from '@/assets/press/swiss_24heures.pdf'

export default {
  name: "news",
  components: {},
  data() {
    return {

    }
  },

};

</script>

<style scoped>

</style>
