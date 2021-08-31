import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/all.scss'
import VueCookies from 'vue-cookies'
// 引入 vee-validate 主套件
import {Field, Form, ErrorMessage, defineRule, configure} from 'vee-validate'
// 引入 vee-validate 相關規則
import { required, email, min } from '@vee-validate/rules'
// 引入 vee-validate 多國語系
import { localize, setLocale } from '@vee-validate/i18n'
// 匯入 中文包
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

// 定義驗證規則
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

// 設定 vee-validate 全域規則
configure({
    generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
    validateOnInput: true, // 當輸入任何內容直接進行驗證
});

// 設定預設語系
setLocale('zh_TW');

const app = createApp(App)

// 全域註冊 vee-validate 元件
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);

app.config.globalProperties.$cookies = {
    VueCookies
}

app.use(router)
app.mount('#app')