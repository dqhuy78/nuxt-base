import path from 'path';

import head from './config/head';
import {
    APP_ENV,
    APP_NAME,
    APP_URL,
    HOST,
    PORT,
    SENTRY_DSN,
    BROWSER_API_URL,
} from './config/env';

export default {

    ssr: true,

    srcDir: path.resolve(__dirname, 'src'),

    env: {
        APP_ENV,
        APP_NAME,
        APP_URL,
        BROWSER_API_URL,
    },

    server: {
        host: HOST,
        port: PORT,
    },

    render: {
        http2: {
            push: true,
        },
    },

    head,

    loading: { color: '#409EFF' },

    css: [
        '@/assets/css/tailwind.css',
        'element-ui/lib/theme-chalk/index.css'
    ],

    plugins: [
        '@/plugins/element-ui',
        '@/plugins/i18n',
    ],

    modules: [
        '@nuxtjs/sentry',
    ],

    axios: {
        browserBaseURL: BROWSER_API_URL,
    },

    sentry: {
        dsn: SENTRY_DSN,
    },

    build: {
        transpile: [/^element-ui/],

        postcss: {
            plugins: {
                tailwindcss: path.resolve(__dirname, 'tailwind.config.js'),
            },
        },
    }
}
