<template>
  <div>
    <h2>Demo Navigation</h2>
    <ul>
      <li>
        <router-link v-bind:to="{name: 'websitem'}" >My Web Sitem</router-link>
      </li>
      <li>
        <router-link v-bind:to="{name: 'damo'}">Learn CSS</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Demo"
}
</script>

<style scoped>

</style>
