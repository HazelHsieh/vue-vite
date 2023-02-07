<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">香香麵攤</a>
      <button type="button" class="btn">
        購物車
        <span class="badge rounded-pill bg-danger">{{ cart.length }}</span>
      </button>
    </div>
  </nav>
</template>

<script>
// 原cdn 換const { mapState } = Pinia;
import { mapState } from "Pinia";

//
import cartStore from "../stores/cartStore.js";

// 4
export default {
  template: `<nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">香香麵攤</a>
        <button type="button" class="btn">
          購物車
          <span class="badge rounded-pill bg-danger">{{cart.length}}</span>
        </button>
      </div>
    </nav>`,
  // 3
  computed: {
    ...mapState(cartStore, ["cart"]),
  },
};
</script>
