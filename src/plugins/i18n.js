import Vue from 'vue';
import VueI18n from 'vue-i18n';
import _get from 'lodash/get';

Vue.use(VueI18n);

/* eslint-disable */
export default ({ app, store }) => {
    app.i18n = new VueI18n({
        locale: _get(store, 'state.i18n.locale', 'vi'),
        fallbackLocale: 'vi',
        messages: {
            en: require('@/locales/en.json'),
            vi: require('@/locales/vi.json'),
            jp: require('@/locales/jp.json'),
        },
        silentTranslationWarn: true,
    });
};
/* eslint-enable */
