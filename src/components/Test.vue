<template>
  <div class="ui list">
    <div class="item">
      <i class="folder icon"></i>
      <div class="content">
        <div class="header">{{mess}}</div>
      </div>
      <div class="list">
        <div class="item">
          <div class="ui checkbox">
            <input type="checkbox" name id />
            <label>file</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mess: "mojiretu"
    };
  }
};
</script>

<style scoped>
</style>