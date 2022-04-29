<template>
  <div class="app">
    <content-page />
  </div>
</template>

<script>
import ContentPage from "@/page/ContentPage.vue";
export default {
  components: {
    ContentPage,
  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

}
</style>