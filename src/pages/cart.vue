<template>
  <div class="container">
    <form>
      <table class="table" cellspacing="0">
        <thead>
          <tr>
            <th class="product-remove">&nbsp;</th>
            <th class="product-thumbnail">&nbsp;</th>
            <th class="product-name">Product</th>
            <th class="product-price">Price</th>
            <th class="product-quantity">Quantity</th>
            <th class="product-subtotal">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr class="">
            <td class="product-remove">
              <a
                href="https://demo.mysterythemes.com/easy-store/cart/?remove_item=34173cb38f07f89ddbebc2ac9128303f&amp;_wpnonce=a06eca2aab"
                class="remove"
                aria-label="Remove this item"
                data-product_id="30"
                data-product_sku=""
                >×</a
              >
            </td>

            <td class="product-thumbnail">
              <a
                href="https://demo.mysterythemes.com/easy-store/product/iphone-with-wireleass-earphone/"
                ><img
                  width="100"
                  height="100"
                  src="https://demo.mysterythemes.com/easy-store/wp-content/uploads/sites/26/2018/04/gadget-1-300x300.jpg"
                  class="
                    attachment-woocommerce_thumbnail
                    size-woocommerce_thumbnail
                  "
                  alt=""
                  loading="lazy"
                  srcset="
                    https://demo.mysterythemes.com/easy-store/wp-content/uploads/sites/26/2018/04/gadget-1-300x300.jpg 300w,
                    https://demo.mysterythemes.com/easy-store/wp-content/uploads/sites/26/2018/04/gadget-1-150x150.jpg 150w,
                    https://demo.mysterythemes.com/easy-store/wp-content/uploads/sites/26/2018/04/gadget-1-768x768.jpg 768w,
                    https://demo.mysterythemes.com/easy-store/wp-content/uploads/sites/26/2018/04/gadget-1-500x500.jpg 500w,
                    https://demo.mysterythemes.com/easy-store/wp-content/uploads/sites/26/2018/04/gadget-1-600x600.jpg 600w,
                    https://demo.mysterythemes.com/easy-store/wp-content/uploads/sites/26/2018/04/gadget-1-100x100.jpg 100w,
                    https://demo.mysterythemes.com/easy-store/wp-content/uploads/sites/26/2018/04/gadget-1.jpg         800w
                  "
                  sizes="(max-width: 300px) 100vw, 300px"
              /></a>
            </td>

            <td class="product-name" data-title="Product">
              <a
                href="https://demo.mysterythemes.com/easy-store/product/iphone-with-wireleass-earphone/"
                >Iphone With Wireless Device</a
              >
            </td>

            <td class="product-price" data-title="Price">
              <span class="woocommerce-Price-amount amount"
                ><bdi
                  ><span class="woocommerce-Price-currencySymbol">$</span
                  >1,800.00</bdi
                ></span
              >
            </td>

            <td class="product-quantity" data-title="Quantity">
              <div class="quantity">
                <label class="screen-reader-text" for="quantity_619a0dac07284"
                  >Iphone With Wireless Device quantity</label
                >
                <input
                  type="number"
                  id="quantity_619a0dac07284"
                  class="input-text qty text"
                  step="1"
                  min="0"
                  max=""
                  name="cart[34173cb38f07f89ddbebc2ac9128303f][qty]"
                  value="1"
                  title="Qty"
                  size="4"
                  placeholder=""
                  inputmode="numeric"
                />
              </div>
            </td>

            <td class="product-subtotal" data-title="Subtotal">
              <span class="woocommerce-Price-amount amount"
                ><bdi
                  ><span class="woocommerce-Price-currencySymbol">$</span
                  >1,800.00</bdi
                ></span
              >
            </td>
          </tr>
          <tr>
            <td colspan="6" class="actions">
              <button
                type="submit"
                class="button"
                name="update_cart"
                value="Update cart"
                disabled=""
                aria-disabled="true"
              >
                Перейти к оформлению
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
    <ul>
      <li v-for="cartItem in getAll" :key="cartItem.product.id">
        {{ cartItem.product.dish }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    // cart: Cart,
    // "profuct-list": ProductList,
  },
  computed: {
    ...mapGetters("cart", ["getAll"]),
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.table {
  border-radius: 0;
  /* border: 1px solid #eee; */
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 -1px 24px 0;
  text-align: left;
  width: 100%;
  border-collapse: separate;
  border-radius: 5px;
}
.table th,
.table td {
  padding: 9px 12px;
  line-height: 1.5em;
  border: 1px solid #eee;
}
.product-thumbnail img {
  height: 100px;
}
</style>
