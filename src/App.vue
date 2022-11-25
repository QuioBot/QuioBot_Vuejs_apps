<template>
    <div>
        <router-view />
        <BackToTop />
    </div>    
</template>

<script>

import BackToTop from './chatbot/components/Header/BackToTop.vue'

export default {
    name: 'App',
    components: {
        BackToTop,
    },
}
</script>