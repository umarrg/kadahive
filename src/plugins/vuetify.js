import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
   theme: {
        themes: {
            light: {
                primary: '#211B34',
                secondary: '#403D50',
                accent: '#D1D5DB',
                error: '#b71c1c',
            },
        },
    },

});
