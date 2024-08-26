<template>
  <div class="head">
     <pre>
   _____      
  | ____|__ _ 
  |  _| / _` |
  | |__| (_| |
  |_____\__, |
        |___/ 
     </pre>
   </div>
 
 </template>
 
 <script></script>
 <style>
 /* rotating image */
 .head {
   font-family: monospace;
   font-size: 24px;
   color: #fff;
   transform-style: preserve-3d;
   animation: rotateHead 10s infinite linear;
   z-index: 10;
   text-shadow: 
     -1px -1px 0 var(--app-color-secondary),  
      1px -1px 0 var(--app-color-secondary),
     -1px  1px 0 var(--app-color-secondary),
      1px  1px 0 var(--app-color-secondary);
 }
 
 @keyframes rotateHead {
   from {
     transform: rotateY(0);
   }
   to {
     transform: rotateY(360deg);
   }
 }
 
 pre {
   color: var(--app-color-secondary);
 } */
 
 .sticky {
   background-color: #1b1a2ea9 !important;
   transition: all 0.3s ease-out 0s !important;
   box-shadow: 0px 10px 10px 0px rgba(9, 5, 29, 0.171) !important;
   backdrop-filter: blur(15px) !important;
 }


 </style>