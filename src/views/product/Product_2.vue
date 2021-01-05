<template>
  <v-container>
    <h2 class="display-1 text-center my-6">NEW PRODUCT</h2>

    <v-layout row wrap>
      <template v-for="(product, index) in sticker">
        <v-flex xs12 sm6 md4 lg3 pa-2 :key="index">
          <v-hover>
            <v-card
              slot-scope="{ hover }"
              class="mx-auto product-card"
              color="gray lighten-4"
            >
              <v-img class="product-card-image" :src="product.src"> </v-img>

              <v-card-text class="pt-4 product-card-detail">
                <div class="font-weight-bold dark--text title mb-2 text-center">
                  {{ product.title }}
                </div>
                <h3
                  class="display-1 font-weight-light green--text mb-2 text-center"
                >
                  ${{ product.price }}
                </h3>

                <v-expand-transition>
                  <div v-if="hover" class="transition-fast-in-fast-out">
                    <div class="product-details-bottom">
                      <v-btn
                        color="#6f9ded"
                        dark
                        @click="viewProduct(product.id)"
                        >View</v-btn
                      >
                      <v-btn color="#3ecf8e" dark @click="addToCart(product)">
                        <v-icon>mdi-cart</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </v-expand-transition>
              </v-card-text>
            </v-card>
          </v-hover>
        </v-flex>
      </template>
    </v-layout>
    <br />
    <br />
  </v-container>
</template>

<script>
export default {
  computed: {
    sticker() {
      return this.$store.getters.getSticker;
    },
  },
  methods: {
    viewProduct(id) {
      this.$router.push("/product/" + id);
    },
    // Add Items to cart
    addToCart(itemToAdd) {
      let found = false;

      // Add the item or increase qty
      let itemInCart = this.$store.getters.getProductsInCart.filter(
        (item) => item.id === itemToAdd.id
      );
      let isItemInCart = itemInCart.length > 0;

      if (isItemInCart === false) {
        itemToAdd.qty = 1;
        this.$store.dispatch("addProduct", itemToAdd);
      } else {
        itemInCart[0].qty++;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}
.v-card h3.display-1 {
  font-size: 24px !important;
}

.product-card {
  height: 390px;
  overflow: hidden;
  margin: 5px;
  .product-card-image {
    transition: 0.4s;
    width: 100%;
    &:hover {
      transform: scale(1.1);
    }
  }
}

.product-card-detail {
  position: absolute;
  text-align: center;
  background-color: white;
  width: 100%;
  transition-duration: 300ms;
  padding-bottom: 0.5rem;
  bottom: -1%;
}

.product-details-bottom {
  display: flex;
  align-items: center;
  padding: 10px;
  * {
    margin: 2px;
    flex-grow: 4;
  }
}
</style>