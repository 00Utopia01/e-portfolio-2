<template>
    <div id="container" ref="container">
      <div id="innerContainer" ref="innerContainer">
        <p class="paragraph">Based on your feelings the website assumes different colors.</p>
        <p class="small_paragraph">Every color is AI generated.</p>
      </div>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovingBox',
    mounted() {
      const innerContainer = this.$refs.innerContainer;
      const container = this.$refs.container;
  
      let posX = (container.clientWidth - innerContainer.clientWidth) / 2;
      let posY = container.clientHeight - innerContainer.clientHeight;
      let velX = (Math.random() - 0.5) * 0.5;
      let velY = (Math.random() - 0.5) * 0.5;
  
      const moveInnerContainer = () => {
        posX += velX;
        posY += velY;
  
        if (posX + innerContainer.clientWidth > container.clientWidth || posX < 0) {
          velX = -velX;
        }
  
        if (posY + innerContainer.clientHeight > container.clientHeight || posY < 0) {
          velY = -velY;
        }
  
        innerContainer.style.left = posX + 'px';
        innerContainer.style.top = posY + 'px';
  
        requestAnimationFrame(moveInnerContainer);
      };
  
      innerContainer.style.left = '1px';
      innerContainer.style.top = '1px';
  
      moveInnerContainer();
    },
  };
  </script>
  
  <style scoped>
  body, html {
    margin: 0;
    padding: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  
  #container {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
  }
  
  #innerContainer {
    position: relative;
    width: 300px;
    height: 140px; /* Updated height */
    background-color: rgba(0, 0, 0, 0.1); /* Transparent background with slight opacity */
    border: 2px solid white;
    border-radius: 15px; 
    align-items: center;
    justify-content: center;
    color: white;
    padding: 10px;
    box-sizing: border-box;
    text-align: center; /* Center align text */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow for a cooler look */
    backdrop-filter: blur(10px); /* Glassmorphism effect */
    font-size: 5px;
  }
  .paragraph {
    font-size: 19px;
  }
  .small_paragraph {
    font-size: 12px;
  }
  </style>
  