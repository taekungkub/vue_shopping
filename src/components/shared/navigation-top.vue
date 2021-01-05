<template>
  <div>
    <v-app-bar app color="dark" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Shopping cart</v-toolbar-title>

        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>

      <v-spacer></v-spacer>
      <transition name="left">
        <v-autocomplete
          v-if="isSearch"
          v-model="model"
          :items="items"
          :search-input.sync="search"
          clearable
          append-icon
          hide-selected
          item-text="title"
          item-value="id"
          label="Search for a product..."
          hide-details
          filled
          rounded
          dense
          single-line
          class="shrink"
        >
          <template v-slot:no-data>
            <v-list-item>
              <v-list-item-title> Nothing Found </v-list-item-title>
            </v-list-item>
          </template>
          <template v-slot:item="{ item }">
            <v-list dense class="product-card-image">
              <v-list-item>
                <v-list-item-avatar color="dark">
                  <v-img :src="item.src" :max-width="80"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text>
                    {{ item.price }}$
                  </v-list-item-action-text>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </template>
        </v-autocomplete>
      </transition>

      <v-btn icon @click.stop="isSearch = !isSearch">
        <v-icon small>fa-search </v-icon>
      </v-btn>

      <v-btn text :to="{ name: 'v1' }"> v1 </v-btn>
      <v-btn text :to="{ name: 'v2' }"> v2 </v-btn>
      <Cart></Cart>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Cart from "../../views/cart/Cart";

export default {
  components: {
    Cart,
  },
  data() {
    return {
      drawer: false,
      isSearch: false,
      model: null,
      items: [],
      select: null,
      search: null,
    };
  },
  watch: {
    search(val) {
      // Items have already been loaded

      if (this.model) {
        this.$router.push("/product/" + this.model);
      }

      if (this.items.length > 0) return;

      this.items = this.sticker;
    },
  },
  computed: {
    sticker() {
      return this.$store.getters.getSticker;
    },
  },
};
</script>

<style  lang="scss" scoped>
.left-enter-active,
.left-leave-active {
  transition: all 0.5s;
}
.left-enter,
.left-leave-to {
  transform: translateX(40px);
  opacity: 0;
}

.product-card-image {
  transition: 0.4s;
  width: 100%;
  &:hover {
    transform: scale(1.1);
  }
}
</style>