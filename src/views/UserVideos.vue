<template>
  <v-app class="custom_bg">
    <v-container>
      <v-row class="mt-8">
        <v-col cols="12" md="6">
          <v-text-field
            solo
            placeholder="search videos here"
            id="id"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-carousel hide-delimiters show-arrows-on-hover circle>
            <template v-for="(item, index) in slider">
              <v-carousel-item
                v-if="(index + 1) % columns === 1 || columns === 1"
                :key="index"
              >
                <v-row class="flex-nowrap" style="height: 100%">
                  <template v-for="(n, i) in columns">
                    <template v-if="+index + i < slider.length">
                      <v-col :key="i">
                        <v-sheet
                          v-if="+index + i < slider.length"
                          :color="slider[+index + i]"
                          height="100%"
                        >
                          <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                          >
                            <div class="display-3">{{ +index + i + 1 }}</div>
                          </v-row>
                        </v-sheet>
                      </v-col>
                    </template>
                  </template>
                </v-row>
              </v-carousel-item>
            </template>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      slider: [
        "red",
        "green",
        "orange",
        "blue",
        "pink",
        "purple",
        "indigo",
        "cyan",
        "deep-purple",
        "light-green",
        "deep-orange",
        "blue-grey",
      ],
    };
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xl) {
        return 4;
      }

      if (this.$vuetify.breakpoint.lg) {
        return 3;
      }

      if (this.$vuetify.breakpoint.md) {
        return 2;
      }

      return 1;
    },
  },
};
</script>

<style scoped>
.custom_bg {
  background-color: #2b273f;
}
</style>