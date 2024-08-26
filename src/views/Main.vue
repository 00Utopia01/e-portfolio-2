<template>
<!--     <WaveBackground> -->
    <div class="container top-spacing">
        <div class='row'>
            <div class='col'>
                <h1 class="text">Hi! <br/>
                My name is <strong class="gradient-text">EDOARDO GERMENÀ</strong><br/>
                I'm a</h1>
                <div v-show="!isMobile()"><BlurText/></div>
            </div>
            <div class="col">
                <RotatingImage/>
            </div>
        </div>
    </div>

<div class="container custom-spacing">
        <div class="text-start" id="about">
        <h2>LET ME INTRODUCE <strong class="main-name">MYSELF</strong></h2>
            <p>I'm Edoardo Germenà, <strong class="main-name">a self-taught programmer with a passion for informatics</strong>. 
                <br>
                <br/>I love exploring new technologies and <strong class="main-name">continuously learning to
                improve my skills</strong>.
                <br>
                <br/>My journey in programming has been driven
                by <strong class="main-name">curiosity and dedication</strong> ,<br/> and I enjoy creating 
                innovative solutions through code.
            </p>
        </div>
</div>
<h1>MY SKILLS</h1>
<div class="wt-5"><!-- <Skills/> --></div>


<div class="container custom-spacing">
    <h2>YOU CAN CONTACT <strong class="main-name">ME</strong> HERE</h2>
    <div class="container">
        <div class='row'>
<!--             <ButtonToText/> -->
        </div>
    </div>
</div>
<!-- </WaveBackground> -->
    
</template>

<script setup>
import RotatingImage from '../components/RotatingImage.vue'
import BlurText from '../components/BlurText.vue'
/* import ButtonToText from '../components/ButtonToText.vue'
import Skills from '../components/Skills.vue'
import WaveBackground from '../components/WaveBackground.vue' */
/* import TextMorph from '../components/TextMorph.vue' */
function isMobile() {
   if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
     return true
   } else {
     return false
   }
 }

</script>

<style>

body {
  margin: 0;
  padding-top: 100px;
  display: block;
  justify-content: center;
  align-items: center;
  height: 100vh;
  perspective: 1000px;
  background-color: white;
}

.main-name{
    color: var(--app-color-secondary);
    z-index: 10;
}

.text {
    color: var(--app-color-text)
}

.gradient-text {
  font-size: 40px;
  font-weight: bold;
  background: linear-gradient(90deg, 
            var(--app-color-secondary),
            var(--app-color-primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
/*   text-fill-color: transparent; */
}



.container {
/*     display: flex; */
/*     justify-content: space-between; */
    width: 100%;
}

.box {
    background-color: #e4e4e4;
    padding: 20px;
    margin: 10px;
    flex: 1;
    text-align: center;
}
.custom-spacing {
  margin-top: 17rem;
}
.top-spacing{
    padding-top: 300px;
}

p {
    font-size: 25px;
    font-weight: 500;
}

</style>