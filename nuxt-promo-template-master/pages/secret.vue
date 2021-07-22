<!-- every authenticated user will access to  this page -->

<template>
  <div>
    <h1>secret page</h1>
  </div>
</template>

<script>
export default {
  middleware: "auth"
};
</script>

<style lang="scss" scoped>
</style>