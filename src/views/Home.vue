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
            <h1 class="display-3 text-white">{{ $t('home.title') }}</h1>
            <h3 class="text-white">{{ $t(`home.subtitle`) }}</h3>



            <div id="leaflet-map"></div>

            <h4 class="text-white">{{ $t(`home.countryListTitle`) }}</h4>

              <base-button type="secondary" v-for="country of countries" :key="country.code">
              <img :src="`https://www.countryflags.io/${country.code}/flat/32.png`"
                   :alt="`${country.code} flag`"
                   target="_blank"
                   class="flag ml-1"/>
                   <a :href="country.url" class="country">
                   {{ $t(`app.countries.${country.code}`) }}
                   </a>
              </base-button>

          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  const countries = require('@/assets/sites.json');

 var _map = null;

  export default {
    name: "home",
    components: {},
    data() {
      return {
        mapBaseLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        countries: countries,

        mapCenterLatitude: process.env.VUE_APP_VISU_MAP_CENTER_LATITUDE,
        mapCenterLongitude: process.env.VUE_APP_VISU_MAP_CENTER_LONGITUDE,
        mapCenterZoomLevel: process.env.VUE_APP_VISU_MAP_ZOOM_LEVEL,
      }
    },
    async mounted() {
      try {
        await this.loadLeaflet();
      } catch (error) {
        this.error = error;
      }
    },
    methods:{
      loadLeaflet: async function () {
        console.log(this.mapCenterLatitude);
        console.log(this.mapCenterLongitude);
        console.log(this.mapCenterZoomLevel);
        _map = L.map('leaflet-map', {
          preferCanvas: true,
        }).setView([
          this.mapCenterLatitude,
          this.mapCenterLongitude
        ], this.mapCenterZoomLevel);
        _tileLayers.push(L.tileLayer(this.mapBaseLayerUrl, {
          attribution: `&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
        }).addTo(_map));
      },
    }
  };

</script>

<style scoped>

.flag_column{
  width: 70px;
}

</style>
