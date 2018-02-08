<template>
  <div>
    <networks-tab
      :networks="networks"
      :lines="lines"
      :isLoading="isLoading"
      :hasError="hasError"
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
    }
  },
  watch: {
    hasError: function(newError, oldError) {
      if (newError.error) {
        const vm = this;
        setTimeout(function() {
          vm.resetErrors();
        }, 150);
      }
    }
  }
};
</script>

<style scoped>

</style>
