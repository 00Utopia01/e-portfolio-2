<template>
  <div>
    <button v-if="!isText" @click="transformToText">{{ buttonText }}</button>
    <span v-else>germenaedoardo@gmail.com</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isText: false,
      buttonText: 'Via Email'
    };
  },
  methods: {
    transformToText() {
      this.isText = true;
    }
  }
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
span {
  font-size: 16px;
}
</style>

  