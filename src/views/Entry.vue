<template>
  <div class="background">
    <MovingParagraph/>
    <div class="content">
      <div class="field">
        <form @submit.prevent="changeColors()">
          <input type="text" placeholder="How do you feel today?" v-model="input">
          <button type="submit">Submit</button>
        </form>
        <div class="line"></div>
      </div>
    </div>
    
    <div v-for="(dot, index) in dots" :key="index" class="dot" :style="{ top: dot.top + 'px', left: dot.left + 'px' }"></div>
  </div>
</template>

<script>
import axios from 'axios';
import MovingParagraph from "../components/MovingParagraph.vue"

export default {
  components: {MovingParagraph},
  data() {
    return {
      dots: [],
      input: '',
      response: null,
/*       primary: '',
      secondary:'',
      accent: '',
      text: '',
      background:'' */
    };
  },
  mounted() {
    // Generate initial positions for dots
    this.generateDots();

    // Update dot positions periodically
    setInterval(() => {
      this.updateDotPositions();
    }, 100);
  },
  methods: {
    generateDots() {
      for (let i = 0; i < 20; i++) {
        this.dots.push({
          top: Math.random() * window.innerHeight,
          left: Math.random() * window.innerWidth
        });
      }
    },
    updateDotPositions() {
      this.dots.forEach(dot => {
        dot.top += Math.random() - 0.5; // Change in top position
        dot.left += Math.random() - 0.5; // Change in left position

        // Ensure dots stay within the window bounds
        if (dot.top < 0) dot.top = window.innerHeight;
        if (dot.top > window.innerHeight) dot.top = 0;
        if (dot.left < 0) dot.left = window.innerWidth;
        if (dot.left > window.innerWidth) dot.left = 0;
      });
    },
    async changeColors() {
      try {
        const colors = await this.getColors();
        let primary = colors.primary
        let secondary = colors.secondary
        let accent = colors.accent
        let text = colors.text
        let background = colors.background

        this.updateCSSVariable('--color-primary', primary);
        this.updateCSSVariable('--color-secondary', secondary);
        this.updateCSSVariable('--color-accent', accent);
        this.updateCSSVariable('--color-text', text);
        this.updateCSSVariable('--color-background', background);
        this.$router.push({ name: 'main' });
      } catch (error) {
        console.error('Error getting colors:', error);
      }
    },
    updateCSSVariable(variable, value) {
      document.documentElement.style.setProperty(variable, value);
    },
    getColors() {
      return axios.post('https://e-portfolio-back-end.vercel.app/prompt', {
        input: this.input
      })
      .then(response => response.data)
      .catch(error => {
        this.response = error.data;
        throw error;
      });
    },
    }
  };
</script>
  
  <style>
:root {
  --color-primary: #001F3F;
  --color-secondary: #39CCCC;
  --color-accent: #FF6F61;
  --color-text: #333333;
  --color-background:#993366;
}

  body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
}

.content {
  text-align: center;
}

.dot {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  animation: move 5s linear infinite;
}

@keyframes move {
  0% { transform: translate(0, 0); }
  50% { transform: translate(20px, 20px); }
  100% { transform: translate(0, 0); }
}

body {
      background: #efefef;
      min-height: 100vh;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    input {
      background: 0;
      border: 0;
      outline: none;
      width: 80vw;
      max-width: 400px;
      font-size: 1.5em;
      transition: padding 0.3s 0.2s ease;
      color: #bdc3c7;
    }

    input:focus {
      padding-bottom: 5px;
    }

    /* Sibling magic */
    input:focus + .line:after {
      transform: scaleX(1);
    }

    .field {
      position: relative;
      margin-bottom: 20px;
    }

    .line {
      width: 100%;
      height: 3px;
      position: absolute;
      bottom: -8px;
      background: #bdc3c7;
    }

    .line:after {
      content: " ";
      position: center;
      float: right;
      width: 100%;
      height: 3px;
      transform: scaleX(0);
      transition: transform 0.3s ease;
      background: #0dd7ae;
    }

  </style>
  