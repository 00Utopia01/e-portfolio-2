<template>
    <div class="center">
      <div class="blurtext">
        <span v-for="(word, index) in words" :key="index" :class="getClass(index)">
          {{ word }}
        </span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const words = ['Full-stack developer', 'Student', 'Backend developer'];
  const activeIndex = ref(0);
  
  const getClass = (index) => {
    if (index === activeIndex.value) return 'active';
    if (index < activeIndex.value) return 'past';
    return '';
  };
  
  const updateActiveIndex = () => {
    activeIndex.value = (activeIndex.value + 1) % words.length;
  };
  
  onMounted(() => {
    setInterval(updateActiveIndex, 3000);
  });
  </script>
  
  <style scoped>
  .blurtext {
    position: relative;
    width: 100vw;
    text-align: center;
    font-size: 30px;
    height: 24px;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
    color: var(--app-color-secondary);
  }
  .blurtext span {
    position: absolute;
    display: block;
    width: 100%;
    text-align: center;
    opacity: 0;
    transform: perspective(100px) translateZ(10px);
    filter: blur(10px);
    letter-spacing: 0.1em;
  }
  .blurtext span.active {
    opacity: 1;
    transform: perspective(100px) translateZ(0px);
    filter: blur(0px);
    letter-spacing: 0.15em;
    transition: opacity 1000ms linear, transform 1000ms linear, filter 400ms linear, letter-spacing 1000ms linear;
  }
  .blurtext span.past {
    opacity: 0;
    transform: perspective(100px) translateZ(-10px);
    filter: blur(10px);
    letter-spacing: 0.2em;
    transition: opacity 1000ms linear, transform 1000ms linear, filter 400ms linear, letter-spacing 1000ms linear;
  }
  .center {
    position: absolute;
    transform: translate3d(-32.5%, 0, 0);
  }
 .sig {
	 position: fixed;
	 bottom: 5px;
	 right: 5px;
	 text-decoration: none;
	 font-size: 12px;
	 font-weight: 80;
	 font-family: sans-serif;
	 color: rgba(0, 0, 0, 0.4);
}
</style>