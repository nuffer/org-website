<template>
  <div>
    <div class="position-relative">
      <section class="section-shaped my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
          <span></span>
          <span></span>
        </div>
        <div class="container shape-container d-flex">
          <div class="col text-white">
            <h1 class="display-3 text-white">{{ $t('press.title') }}</h1>
            <h3 class="text-white">{{ $t(`press.subtitle`) }}</h3>
            <ul>
              <li v-for="item in articles">
                <badge type="primary">{{item.country}}</badge>
                <span class="date">{{item.date.getDate()}}/{{item.date.getMonth()}}/{{item.date.getFullYear()}}</span>
                <span class="document">{{item.title}}</span>
                <a :href="item.link">
                  <base-button type="secondary" size="sm" icon="ni ni-cloud-download-95"></base-button>
                </a>
              </li>
            </ul>
            <h3 class="text-white">{{ $t(`press.pressRelease`) }}</h3>
            <ul>
              <li v-for="item in releases">
                <badge type="primary">{{item.country}}</badge>
                <span class="date">{{item.date.getDate()}}/{{item.date.getMonth()}}/{{item.date.getFullYear()}}</span>
                <span class="document">{{item.title}}</span>
                <a :href="item.link">
                  <base-button type="secondary" size="sm" icon="ni ni-cloud-download-95"></base-button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>

export default {
  name: "press",
  components: {},
  data() {
    return {
      "articles":[
        {
          "link": "pdf/press/swiss_24heures.pdf",
          "title": "Newspaper article (french)",
          "country": "Switzerland",
          "date": new Date(2020,4,2)
        }
      ],
      "releases":[
        {
          "link": "pdf/press/swiss_press_release_2avril.pdf",
          "title": "Press release",
          "country": "Switzerland",
          "date": new Date(2020,4,2)
        }
      ]
    }
  },
};

</script>

<style scoped>
.date{
  margin-left: 1em;
  margin-right: 1em;
}
.document{
  margin-right: 1em;
}

</style>
