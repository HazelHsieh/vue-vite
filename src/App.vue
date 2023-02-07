<script>
import NavbarComponent from "./components/NavbarComponent.vue";
import ProductsComponent from "./components/ProductComponent.vue";
import CartComponent from "./components/CartComponent.vue";

export default {
  components: {
    NavbarComponent,
    ProductsComponent,
    CartComponent,
  },
};
</script>

<template>
  <div class="container">
    <NavbarComponent></NavbarComponent>
    <CartComponent></CartComponent>
    <ProductsComponent></ProductsComponent>
  </div>
</template>

<style lang="scss">
@import "./assets/all.scss";
.table-image {
  width: 75px;
  height: 75px;
  object-fit: cover;
}
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
