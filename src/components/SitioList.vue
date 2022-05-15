<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Sitios Prioritarios Marinos para la Conservación de la Biodiversidad</h4>
	<br/>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(sitio, index) in sitios"
          :key="index"
          @click="setActiveSitio(sitio, index)"
        >
          {{ sitio.id }}{{ " | " }} {{ sitio.sitio_prioritario}}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentSitio">
        <h4>Detalles</h4>
        <div>
          <br><label><strong>Ecoregión:</strong></label> {{ currentSitio.ecorregion}}
          <br><label><strong>Fisiografía:</strong></label> {{ currentSitio.fisiografia}}
          <br><label><strong>Formas Emergentes:</strong></label> {{ currentSitio.formas_emergentes}}
          <br><label><strong>Formas Sumergidas:</strong></label> {{ currentSitio.formas_sumergidas}}
          <br><label><strong>Habitat:</strong></label> {{ currentSitio.habitat}}
          <br><label><strong>Perimetro(km):</strong></label> {{ currentSitio.perimetro}}
          <br><label><strong>Área(ha):</strong></label> {{ currentSitio.area_hectareas}}
          <br><label><strong>Importancia:</strong></label> {{ currentSitio.importancia}}
        </div>
         <div>
            <br><br>
            <p>Comisión Nacional para el Conocimiento y Uso de la Biodiversidad (CONABIO), 
              Comisión Nacional de Áreas Naturales Protegidas (CONANP), The Nature Conservancy - Programa México (TNC), Pronatura. (2007)
         </p>
         </div>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un Sitio.</p>
      </div>
    </div>
  </div>
</template>
<script>

import SitioService from "../services/SitioService";

export default {
  id : "id-list",
   data() {
    return {
      sitios: [],
      currentSitio: null,
      currentIndex: -1,
    };
  }, 
  methods: {
    getAllSitios(){
      SitioService.getAll()
        .then(response => {
          this.sitios= response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveSitio(sitio, index) {
      this.currentSitio= sitio;
      this.currentIndex = sitio? index : -1;
    }
  },
  mounted() {
    this.getAllSitios();
  }
};
</script>
