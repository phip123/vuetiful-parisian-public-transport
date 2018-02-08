<template>
  <div>
    <h1>HALLO</h1>
    {{lineId}}
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "stations",
  computed: {
    ...mapState({
      stations: state => state.stations.all,
      lineId: state => state.route.params.lineid
    }),
    ...mapGetters({
      isLoadingStations: "isLoadingAllStations",
      hasErrorStations: "hasErrorAllStations"
    })
  },
  methods: {
    ...mapActions({
      loadStationsForLine: "getStationsForLine",
      resetErrors: "resetStationsError"
    }),
    danger(text) {
      const vm = this;
      this.$snackbar.open({
        duration: 2500,
        message: text,
        type: "is-danger",
        position: "is-bottom-left",
        actionText: "Retry loading",
        onAction: () => {
          vm.load(vm.activeTab);
        }
      });
    }
  },
  watch: {
    hasErrorStations: function(newError, oldError) {
      if (newError.error) {
        danger(this.hasErrorStations.text);
        this.resetErrors();
      }
    }
  }
};
</script>

<style scoped>

</style>
