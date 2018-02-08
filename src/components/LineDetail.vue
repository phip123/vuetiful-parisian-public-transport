<template>
  <b-collapse :open.sync="open" class="card">
    <div slot="trigger" slot-scope="props"  class="card-header">
      <div class="card-header-title">
        <div class="media-left">
          <figure class="image is-24x24">
            <img :src="imageUrl">
          </figure>
        </div>
        <div>
          <p class="title is-5">{{line.shortName}}</p>
        </div>
      </div>
      <a class="card-header-icon">
        <b-icon
          :icon="props.open ? 'menu-up' : 'menu-down'">
        </b-icon>
      </a>
    </div>
    <div class="card-content">


      <div class="content">
        <p>Begin: {{begin}}</p>
        <p>End: {{end}}</p>
      </div>
    </div>
  </b-collapse>
</template>

<script>
import { IMAGE_URL } from "../util/constants";

export default {
  name: "line-detail",
  props: {
    line: {
      type: Object,
      default: function() {
        return {
          id: -1,
          image: "",
          name: "unknown",
          shortName: "unknown"
        };
      }
    }
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    imageUrl() {
      return IMAGE_URL + "/" + this.line.image;
    },
    begin() {
      return this.line.name.split("/")[0];
    },
    end() {
      return this.line.name.split("/")[1];
    }
  }
};
</script>

<style scoped>

</style>
