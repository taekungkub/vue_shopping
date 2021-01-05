<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="800">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          <v-badge left color="green">
            <span slot="badge">{{ cartProduct.length }}</span>
            <v-icon>shopping_cart</v-icon> Basket
          </v-badge>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline green lighten-2">
          Your Basket
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false"><v-icon>mdi-close</v-icon></v-btn>
        </v-card-title>

        <v-card-text>
          <div v-if="cartProduct.length != 0">
            <v-list three-line>
              <transition-group name="fade">
                <template v-for="(item, index) in cartProduct">
                  <v-divider :key="'A' + index"></v-divider>
                  <v-list-item :key="'B' + index">
                    <v-img :src="item.src" :max-width="80" class="mr-4"></v-img>
                    <v-list-item-content>
                      <v-list-item-title
                        v-html="item.title"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="item.description"
                      ></v-list-item-subtitle>
                      <v-list-item-subtitle class="green--text my-2">
                        {{ item.price }}$
                      </v-list-item-subtitle>
                      <v-list-item-subtitle> </v-list-item-subtitle>
                      <v-list-item-subtitle>
                        Amount
                        <v-btn icon small @click="incease(item)">+</v-btn>
                        {{ item.qty }}
                        <v-btn
                          :disabled="item.isDecease"
                          icon
                          small
                          @click="decease(item)"
                          >-</v-btn
                        >
                      </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <v-btn icon @click="deleteItem(item)">
                        <v-icon color="darken-3" small> fa-trash </v-icon>
                      </v-btn>

                      <v-list-item-action-text>
                        {{ (item.price * item.qty) | formatCurrency }}$
                      </v-list-item-action-text>
                    </v-list-item-action>
                  </v-list-item>
                </template>
              </transition-group>
            </v-list>
          </div>
          <div>
            <br />
            <transition name="up">
              <h2 v-if="cartProduct.length == 0" class="title pa-6 text-center">
                No Product :(
              </h2>
            </transition>
          </div>
        </v-card-text>

        <v-divider></v-divider>
        <transition name="up">
          <v-card-actions v-show="cartProduct.length != 0">
            <h2 class="title">ToTal : {{ Total() | formatCurrency }}$</h2>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">
              Check out
            </v-btn>
          </v-card-actions>
        </transition>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    Total() {
      let total = 0;
      this.$store.getters.getProductsInCart.forEach((item) => {
        total += item.price * item.qty;
      });
      return total;
    },
    deleteItem(item) {
      this.$store.dispatch("removeProduct", item);
    },
    incease(item) {
      item.qty++;
      if (item.qty != 1) item.isDecease = false;
      this.$store.dispatch("updateProduct", item);
    },
    decease(item) {
      item.qty--;
      if (item.qty == 1) item.isDecease = true;

      this.$store.dispatch("updateProduct", item);
    },
  },
  computed: {
    cartProduct() {
      return this.$store.getters.getProductsInCart;
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter,
.fade-leave-to {
  transform: translateX(-40px);
  opacity: 0;
}

.up-enter-active,
.up-leave-active {
  transition: all 0.5s;
}
.up-enter,
.up-leave-to {
  transform: translateY(40px);
  opacity: 0;
}
</style>