module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
        standardFontWeights: true
    },
    purge: {
        enabled: process.env.ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
        ],
    },
    theme: {
        fontFamily: {
            display: ['Lato', 'sans-serif'],
            body: ['Lato', 'sans-serif'],
        },
        fontSize: {
            h1: '40px',
            h2: '36px',
            h3: '28px',
            h4: '22px',
            h5: '18px',
            h6: '16px',
            base: '14px',
            sm: '12px',
        },
        spacing: {},
        colors: {
            primary: '#409EFF',
            success: '#67C23A',
            danger: '#F56C6C',
            warning: '#E6A23C',
            info: '#409EFF',
            black: '#000000',
            white: '#FFFFFF',
            'primary-text': '#303133',
            'regular-text': '#606266',
            'secondary-text': '#909399',
            'border-base': '#DCDFE6',
            'border-light': '#E4E7ED'
        },
        borderColor: (theme) => ({
            default: theme('colors.border-base'),
        }),
    },
    variants: {
        textColor: ['responsive', 'hover', 'focus'],
    },
    plugins: [],
};
