<script>
  export default {
    components: {

    },
    computed: {
      layout() {
        return `${this.$route.meta.layout}`
      }
    },
  }
</script>

<template>
<component :is="layout"></component><router-view></router-view>
</template>

<style>

</style>