<template>
<div>
</div>
</template>


<script>
import SitioService from "../services/SitioService";
export default {

  data() {
    return {
      currentSitio: null,
      message: 'Bienvenido'
    }
  },

  methods: {
    getSitio(id) {
      SitioService.get(id)
        .then(response => {
          this.currentSite= response.data;
        })
        .catch(e => {
          console.log(e);
        })
      }
    },
  mounted() {
    this.message = '';
    this.getSitio(this.$route.params.id);
  }
};

</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>

