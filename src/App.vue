<template>
  <router-view/>
  </template>
  
  <script>
  import Entry from "./views/Entry.vue"
  export default {
    name: 'App',
    components: {
      Entry
    }
  }
  </script>
  
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Nabla:EDPT,EHLT@0..200,0..24&display=swap");
  @import url('https://fonts.googleapis.com/css2?family=Workbench&display=swap');
  @import url("https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
  :root {
    --app-color-primary:var(--color-primary);
    --app-color-secondary:var(--color-secondary);
    --app-color-accent:var(--color-accent);
    --app-color-background:var(--color-background);
    --app-color-text:var(--color-text);
  }
  
  .wave {
    animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
    animation-duration: 2.1s; /* Change to speed up or slow down */
    animation-iteration-count: infinite; /* Never stop waving :) */
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;
  }
  
  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
  #tsparticles {
    position: fixed !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    width: 100%;
    height: 100%;
  }
  
  .home-header {
    padding-top: 80px !important;
  }
  
  .home-section {
    position: relative;
    z-index: -1;
    background-position: top center;
    background-repeat: no-repeat;
    padding-bottom: 30px !important;
    padding-top: 30px !important;
  }
  
  .home-content {
    padding: 9rem 0 2rem !important;
    color: whitesmoke;
    text-align: left;
  }
  
  .heading {
    font-size: 2.4em !important;
    padding-left: 50px !important;
  }
  
  .heading-name {
    font-size: 2.5em !important;
    padding-left: 45px !important;
  }
  
  .main-name {
    color: var(--app-color-primary);
  }
  
  .Typewriter__wrapper {
    font-size: 2.2em !important;
    color: var(--app-color-secondary) !important;
    font-weight: 600 !important;
  }
  .Typewriter__cursor {
    font-size: 2.4em !important;
    color: var(--app-color-primary) !important;
  }
  
  @media (max-width: 767px) {
    .Typewriter__wrapper {
      font-size: 1.4em !important;
      font-weight: 500 !important;
      position: absolute !important;
    }
    .Typewriter__cursor {
      display: none !important;
    }
  }
  
  .myAvtar {
    justify-content: center !important;
    padding-top: 9em !important;
  }
  
  @media (max-width: 767px) {
    .myAvtar {
      padding-top: 2em !important;
      padding-bottom: 2em !important;
    }
  }
  
  .home-about-section {
    position: relative;
    padding-bottom: 70px !important;
    padding-top: 70px !important;
  }
  
  .home-about-description {
    color: white !important;
    padding-top: 100px !important;
    padding-bottom: 20px !important;
    text-align: center;
  }
  
  .home-about-body {
    padding-top: 50px;
    font-size: 1.2em !important;
    text-align: left;
  }
  
  .home-about-social {
    text-align: center !important;
    padding-top: 25px;
    color: white !important;
  }
  
  .home-about-social-links {
    justify-content: center !important;
    padding-top: 15px !important;
    display: inline-block !important;
    position: relative !important;
    padding-inline-start: 0 !important;
  }
  
  .home-social-icons {
    position: relative !important;
    display: inline-block !important;
    width: 40px !important;
    height: 40px !important;
    text-align: center !important;
    font-size: 1.2em !important;
    line-height: 2em !important;
    background: rgba(255, 255, 255, 0.972) !important;
    border-radius: 50% !important;
    transition: 0.5s !important;
  }
  
  .home-social-icons::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--app-color-background);
    transition: 0.5s;
    transform: scale(0.9);
    z-index: -1;
  }
  
  .home-social-icons:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px var(--app-color-primary);
  }
  
  .home-social-icons:hover {
    color: var(--app-color-background);
    box-shadow: 0 0 5px var(--app-color-background);
    text-shadow: 0 0 2px var(--app-color-primary);
  }
  
  .social-icons {
    display: inline-block !important;
    padding-right: 15px;
    padding-left: 15px;
  }
  
  .icon-colour {
    color: var(--app-color-background) !important;
  }
  </style>
  