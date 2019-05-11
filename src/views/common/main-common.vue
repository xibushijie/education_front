<template>
  <section class="main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"/>
    </transition>
  </section>
</template>

<script>
    export default {
      name: "main-common",
      computed: {
        key () {
          return this.$route.fullPath
        }
      }
    }
</script>

<style scoped>

</style>
