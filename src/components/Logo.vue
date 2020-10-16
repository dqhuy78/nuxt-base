<template>
    <div class="logo uppercase text-h1">
        This is <span class="logo--hightlight">{{ $t('username') }}</span>
    </div>
</template>
<style lang="scss">
    .logo {
        &--hightlight {
            color: theme('colors.primary');
        }
    }
</style>
