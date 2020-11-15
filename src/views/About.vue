<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/2">Go to page 2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// import WSButton from '@/components/WSButton.vue'
export default {
  name: 'About',
  components: {
    // WSButton
  }
};
</script>
