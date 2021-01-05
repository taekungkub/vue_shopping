<template>
  <div>
    <v-container>
      <v-breadcrumbs :items="pages" large> </v-breadcrumbs>
      <v-divider></v-divider>

      <v-card class="mt-6" elevation="0">
        <v-layout row wrap no-gutters>
          <v-flex md4 sm4 xs12>
            <v-img :src="items.src" :max-width="550"></v-img>
          </v-flex>
          <v-flex md8 sm8 xs12>
            <div class="mx-4 mt-4">
              <h2>{{ items.title }}</h2>
              <h3 class="subtitle green--text py-2">{{ items.price }}$</h3>
              <v-divider></v-divider>
              <br />
              <h3 class="title">{{ items.description }}</h3>
              <br />
              <v-btn block color="green" dark>Add to cart</v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
      <br />
      <br />
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: this.$store.getters.getSticker.find(
        (item) => item.id == this.$route.params.id
      ),
      pages: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Sticker",
          to: "/v2",
        },
        {
          text: "Product",
          disabled: true,
          to: "/product/" + this.$route.params.id,
        },
      ],
    };
  },

  watch: {
    "$route.params.id": function (id) {
      let item = this.$store.getters.getSticker.find(
        (item) => item.id == this.$route.params.id
      );
      this.items = item;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>