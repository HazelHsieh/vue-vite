<template>
  <div class="row row-cols-3 my-4 g-4">
    <div class="col" v-for="product in sortProducts" :key="product.id">
      <div class="card">
        <img :src="product.imageUrl" class="card-img-top" alt="" />
        <div class="card-body">
          <h6 class="card-title">
            {{ product.title }}
            <span class="float-end">$ {{ product.price }}</span>
          </h6>
          <a
            href="#"
            class="btn btn-outline-primary w-100"
            @click.prevent="addToCart(product.id)"
            >加入購物車</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// productsStore 06 修改原本的資料
import productsStore from "../stores/productsStore.js";
import cartStore from "../stores/cartStore.js";
//import CardComponent from "./CartComponent.vue";
// 把 Pinia 的方法給取回來"
import { mapState, mapActions } from "Pinia";

export default {
  // 把方法給取出來
  computed: {
    ...mapState(productsStore, ["sortProducts"]),
  },
  methods: {
    ...mapActions(cartStore, ["addToCart"]),
  },
  // components: {
  //   CardComponent,
  // },
};
</script>
