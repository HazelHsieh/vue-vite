import { defineStore } from "Pinia";
import productsStore from "./productsStore.js";

export default defineStore("cart", {
  state: () => ({
    // 建立購物車的資料
    cart: [],
  }),
  actions: {
    addToCart(productId, qty = 1) {
      // 解決一樣商品會出現兩次的問題
      // 先取得已經有加入的商品
      // 判斷，如果購物車有該項目則 +1，沒有則新增一筆項目
      const currentCart = this.cart.find(
        (item) => item.productId === productId
      );
      // console.log(currenCart);
      if (currentCart) {
        currentCart.qty += qty;
      } else {
        // console.log(productId, qty);
        this.cart.push({
          id: new Date().getTime(), //當下時間戳記
          productId,
          qty,
        });
      }
      console.log(this.cart);
    },
    setCartQty(id, event) {
      console.log(id, event);
      // 當購物車與傳入的 cartId 一樣就取出來
      const currentCart = this.cart.find((item) => item.id === id);
      console.log(currentCart);
      //                 這邊是字串所以要轉型
      currentCart.qty = event.target.value * 1;
      // console.log(event.target.value, typeof event.target.value);
    },
    removeCartItem(id) {
      // 先取得索引
      const index = this.cart.findIndex((item) => item.id === id);
      this.cart.splice(index, 1);
    },
  },
  getters: {
    // 解構取值 對應上面的 state資料
    cartList: ({ cart }) => {
      // 1. 購物車的品項資訊，需要整合產品資訊
      // 2. 必須計算小計的金額
      // 3. 必須提供總金額

      // 解構取值
      const { products } = productsStore();
      const carts = cart.map((item) => {
        console.log(item);
        // 單一產品取出: 在產品列表中找到相同 ID 的
        const product = products.find(
          (product) => product.id === item.productId
        );
        return {
          ...item,
          product,
          // 2. 計算小計金額
          subtotal: product.price * item.qty,
        };
      });
      // 3. 計算總金額
      const total = carts.reduce((a, b) => a + b.subtotal, 0);

      // 渲染畫面
      return {
        carts, //列表
        total,
      };
    },
  },
});
