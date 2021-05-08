import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
import KProgress from 'k-progress';
import obj from './store/index.js';

const app = createApp(App)
const store = createStore(obj);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);
app.component('k-progress', KProgress);

app.use(store);

app.mount('#app');
