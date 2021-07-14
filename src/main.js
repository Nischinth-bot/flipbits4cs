import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
import BaseModal from './components/ui/BaseModal.vue';
import store__ from './store/index.js';
import router from './router.js';

const app = createApp(App);
const store = createStore(store__);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);
app.component('base-modal', BaseModal);

app.use(store);
app.use(router);

app.mixin({
  methods: {
    randomizedKey(description) {
      var res = '';
      for (var i = 0; i < description.length; i++) {
        res += String.fromCharCode(
          Math.floor(
            ((description.charCodeAt(i) + Math.random() * 10) >> 1) + 32
          ) % 127
        );
      }
      return res;
    },
    getImgUrl(imgLink) {
      return require('@/assets/' + imgLink);
    }
  }
});

app.mount('#app');
