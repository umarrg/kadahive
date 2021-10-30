<template>
  <v-data-table :headers="headers" :items="items" class="elevation-1">
    <template v-slot:item.name="{ item }">
      <v-list-item>
        <v-list-item-avatar tile size="80">
          <v-img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.name }}
          </v-list-item-title>
          <v-list-item-subtitle> subtitle </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template></v-data-table
  >
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Video",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Date", value: "date" },
        { text: "Access Type", value: "type" },
        { text: "Views", value: "views" },
        { text: "comment", value: "comment" },
      ],
      items: [
        {
          name: "Attack on titans",
          date: "2/3/2021",
          type: "public",
          views: "400",
          comment: "40",
          iron: "1%",
        },
        {
          name: "silicon valley",
          date: "2/3/2021",
          type: "restricted",
          views: "400",
          comment: "40",
        },
        {
          name: "Promise Neverland",
          date: "2/3/2021",
          type: "restricted",
          views: "400",
          comment: "40",
        },
        {
          name: "Everything",
          date: "2/3/2021",
          views: "400",
          comment: "40",
          type: "restricted",
        },
        {
          name: "Avatar",
          date: "2/3/2021",

          views: "400",
          comment: "40",
          type: "public",

          iron: "16%",
        },
        {
          name: "Titans",
          date: "2/3/2021",
          views: "400",
          comment: "40",
          type: "restricted",

          iron: "0%",
        },
        {
          name: "Justice",
          date: "2/3/2021",
          type: "restricted",
          fat: 0.2,
          views: "400",
          comment: "40",
          iron: "2%",
        },
        {
          name: "Dice",
          date: "2/3/2021",
          views: "400",
          comment: "40",

          type: "public",
        },
        {
          name: "Donut",
          date: "2/3/2021",
          views: "400",
          comment: "40",
          type: "restricted",
        },
        {
          name: "KitKat",
          date: "2/3/2021",
          views: "400",
          comment: "40",
          type: "restricted",
        },
      ],
    };
  },
};
</script>