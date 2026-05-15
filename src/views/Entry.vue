<template>
  <div class="background">
    <MovingParagraph/>
    <div class="content">
      <div class="field">
        <form @submit.prevent="changeColors()">
          <input type="text" placeholder="How do you feel today?" v-model="input">
          <button
            type="submit"
            class="submit-btn"
            :disabled="loading || !input.trim()"
            :aria-busy="loading"
            :aria-disabled="!input.trim()"
            :aria-label="loading ? 'Loading' : 'Submit'">
            <span v-if="!loading">Submit</span>
            <span v-else class="spinner" aria-hidden="true"></span>
          </button>
        </form>
        <p class="error" v-if="errorMessage">{{ errorMessage }}</p>
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
      errorMessage: '',
      loading: false,
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
      if (!this.input || !this.input.trim()) return;
      this.errorMessage = '';
      this.loading = true;
      try {
        const colors = await this.getColors();
        let primary = colors.primary
        let secondary = colors.secondary
        let accent = colors.accent
        let text = colors.text
        let background = colors.background

        if (!primary || !secondary || !accent || !text || !background) {
          throw new Error('Invalid color response from server.\n Please insers a valid word');
        }

        this.updateCSSVariable('--color-primary', primary);
        this.updateCSSVariable('--color-secondary', secondary);
        this.updateCSSVariable('--color-accent', accent);
        this.updateCSSVariable('--color-text', text);
        this.updateCSSVariable('--color-background', background);
        this.$router.push({ name: 'main' });
      } catch (error) {
        console.error('Error getting colors:', error);
        this.errorMessage = error.message || 'An error occurred while requesting colors.';
        this.resetCSSVariables();
      } finally {
        this.loading = false;
      }
    },
    updateCSSVariable(variable, value) {
      document.documentElement.style.setProperty(variable, value);
    },
    resetCSSVariables() {
      const variables = ['--color-primary', '--color-secondary', '--color-accent', '--color-text', '--color-background'];
      variables.forEach(v => document.documentElement.style.removeProperty(v));
    },
    getColors() {
      return axios.post('http://127.0.0.1:5000/prompt', {
        input: this.input
      })
      .then(response => response.data)
      .catch(error => {
        const msg = (error.response && (error.response.data && (error.response.data.message || error.response.data))) || error.message || 'Request failed';
        throw new Error(msg);
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

    .submit-btn[disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .submit-btn {
      margin-left: 8px;
      padding: 8px 14px;
      background: #ffffff;
      color: var(--color-text);
      border: none;
      border-radius: 4px;
      font-size: 1em;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .spinner {
      display: inline-block;
      width: 18px;
      height: 18px;
      border: 3px solid rgba(0,0,0,0.12);
      border-top-color: var(--color-primary);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
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

    .error {
      color: #ff6b6b;
      margin-top: 8px;
      font-size: 0.95em;
    }

  </style>
  