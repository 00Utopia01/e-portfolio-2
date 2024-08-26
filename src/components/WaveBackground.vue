<template>
    <div id="app">
      <Navbar/>
      <div class="content">
        <!-- Your main content here -->
        <slot></slot>
      </div>
      <Footer/>
      <div class="waveWrapper waveAnimation">
        <div class="waveWrapperInner bgTop">
          <div class="wave waveTop" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"></div>        
          </div>
        <div class="waveWrapperInner bgMiddle">
          <div class="wave waveMiddle" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"></div>
        </div>
        <div class="waveWrapperInner bgBottom">
          <div class="wave waveBottom" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from './Navbar.vue';
  import Footer from './Footer.vue';
  
  export default {
    components: {
      Navbar,
      Footer
    }
  };
  </script>
  
  <style scoped>

@keyframes move_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }
  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }
  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
}

.waveWrapper {
  overflow: hidden;
  position: fixed; /* Use fixed positioning to ensure it covers the entire viewport */
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: -1; /* Ensure the background is behind other content */
}

.waveWrapperInner {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
  bottom: -1px;
  background-image: linear-gradient(to top, var(--app-color-accent) 20%, var(--app-color-background) 80%);
}

.bgTop {
  z-index: 15;
  opacity: 0.5;
}

.bgMiddle {
  z-index: 10;
  opacity: 0.75;
}

.bgBottom {
  z-index: 5;
}

.wave {
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
}

.waveTop {
  background-size: 50% 100px;
}

.waveAnimation .waveTop {
  animation: move_wave 3s;
  -webkit-animation: move_wave 3s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

.waveMiddle {
  background-size: 50% 120px;
}

.waveAnimation .waveMiddle {
  animation: move_wave 10s linear infinite;
}

.waveBottom {
  background-size: 50% 100px;
}

.waveAnimation .waveBottom {
  animation: move_wave 15s linear infinite;
}

/* Ensure the main content has a higher z-index to be above the background waves */
#app {
  position: relative;
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
}

nav, footer {
  position: relative;
  z-index: 2;
}
  </style>
  