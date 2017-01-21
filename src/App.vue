<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
const localStorage = window.localStorage;

export default {
  name: 'app',
  created() {
    const selectedWorkout = localStorage.getItem('workoutSelected');
    if (selectedWorkout) {
      this.$store.dispatch('setWorkout', selectedWorkout);
    }
  },
}
</script>

