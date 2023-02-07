<template>
  <div class="bg-light p-4 my-4">
    <div v-if="!cartList.carts.length">購物車沒有任何品項</div>
    <!-- v-if -->
    <!-- v-else -->
    <table v-else class="table align-middle">
      <tbody>
        <tr v-for="item in cartList.carts" :key="item.id">
          <td>
            <a
              href="#"
              class="text-dark"
              @click.prevent="removeCartItem(item.id)"
              >x</a
            >
          </td>
          <td>
            <img :src="item.product.imageUrl" class="table-image" alt="" />
          </td>
          <td>{{ item.product.title }}</td>
          <td>
            <select
              name=""
              id=""
              class="form-select"
              :value="item.qty"
              @change="(evt) => setCartQty(item.id, evt)"
            >
              <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
            </select>
          </td>
          <td class="text-end">$ {{ item.subtotal }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-end">總金額 NT$ {{ cartList.total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
// 先引入 cartStore
import cartStore from "../stores/cartStore.js";
// 引入 pinia 的方法
import { mapState, mapActions } from "Pinia";

export default {
  // props:['product'],
  // data() {
  //   return {
  //     num: 1,
  //   }
  // }
  // methods: {
  //   ...mapActions(cartStore, ['addToCart'])
  // },
  computed: {
    ...mapState(cartStore, ["cartList"]),
  },
  methods: {
    ...mapActions(cartStore, ["removeCartItem", "setCartQty"]),
  },
};
</script>
