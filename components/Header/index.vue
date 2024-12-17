<template>
    <header id="header" class="sticky top-0 bg-white z-10 border-b border-yd-line-divider">
        <div class="inner max-w-7xl mx-auto px-11 py-5 flex items-center justify-between">
            <div class="wrapper flex items-center gap-8">
                <div class="logo">
                    <NuxtLink to="/">
                        <NuxtImg src="/Logo.3eb91388.png" width="88" height="42" alt="logo" />
                    </NuxtLink>
                </div>
                <nav class="nav">
                    <LinkNavHeader :data="dataOptionMenu" />
                </nav>
            </div>
            <div class="search flex items-center gap-3">
                <InputSearch v-model="keySearch" />
                <Icon name="uil:cart" style="font-size: 24px; color: #1C2430;" />
            </div>
        </div>
    </header>
</template>
<script lang="ts" setup>
import {dataOptionMenu} from '~/constants/home/index'

const keySearch = ref<string>('');
watchEffect(() => {
    if(process.client) {
        console.log(keySearch.value);
    }
    
})
</script>
<style lang="css">
    
</style>