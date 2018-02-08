<template>
  <div>
    <networks-tab
    :networks="networks"
    :lines="lines"
    :isLoading="isLoading"
    @load="load"
    ></networks-tab>
    <b-loading v-if="isLoading" :active="isLoading" :canCancel="false"></b-loading>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
import NetworksTab from "../components/NetworksTab";
import { NETWORK_TYPES } from "../util/constants";

export default {
  components: { NetworksTab },
  name: "lines",
  data() {
    return {
      networks: NETWORK_TYPES
    };
  },
  computed: {
    ...mapState({
      metroLines: state => state.lines.metro.all,
      busLines: state => state.lines.bus.all,
      tramLines: state => state.lines.tram.all,
      rerLines: state => state.lines.rer.all
    }),
    ...mapGetters({
      isLoading: "isLoadingAll",
      hasError: "hasErrorAll"
    }),
    lines: function() {
      return {
        metro: this.metroLines,
        bus: this.busLines,
        tram: this.tramLines,
        rer: this.rerLines
      };
    }
  },
  methods: {
    ...mapActions({
      loadMetroLines: "getAllMetroLines",
      loadBusLines: "getAllBusLines",
      loadTramLines: "getAllTramLines",
      loadRerLines: "getAllRerLines",
      loadStationsForLine: "getStationsForLine",
      resetErrors: "resetErrors"
    }),
    loadLines: function() {
      let self = this;
      return {
        metro: function() {
          self.loadMetroLines();
        },
        bus: function() {
          self.loadBusLines();
        },
        tram: function() {
          self.loadTramLines();
        },
        rer: function() {
          self.loadRerLines();
        }
      };
    },
    load(id) {
      if (this.loadLines()[id]) {
        this.loadLines()[id]();
      }
    },
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
    hasError: function(newError, oldError) {
      if (newError.error) {
        danger(this.hasError.text);
        this.resetErrors();
      }
    },
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
