<template>

<div class="skills">  
  <div class="charts">
    <div class="chart chart--dev">
      <span class="chart__title">Languages</span>
      <ul class="chart--horiz">
        <li class="chart__bar" style="width: 60%;">
          <span class="chart__label">
            Python
          </span>
        </li>
        <li class="chart__bar" style="width: 30%;">
          <span class="chart__label">
            Java
          </span>
        </li>
        <li class="chart__bar" style="width: 38%;">
          <span class="chart__label">
            JavaScript
          </span>
        </li>
        <li class="chart__bar" style="width: 43%;">
          <span class="chart__label">
            Html & CSS
          </span>
        </li>
        
      </ul>
    </div>
    
    <div class="chart chart--prod">
      <span class="chart__title">Frameworks</span>
      <ul class="chart--horiz">
      <li class="chart__bar" style="width: 67%;">
        <span class="chart__label">
          Flask
        </span>
      </li>
      <li class="chart__bar" style="width: 59%;">
        <span class="chart__label">
          Vue
        </span>
      </li>
    </ul>
    </div>
    
    
  </div>
</div>

</template>

<style scoped>
.text {
    color: var(--app-color-text)
}
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
 body {
	 margin: 20px 0 40px;
	 font-family: "Open Sans", sans-serif;
	 color: #282828;
}
 .skills {
	 width: 80%;
	 max-width: 960px;
	 height: 780px;
	 height: 150px;
	 margin: auto;
	 position: relative;
}
 .lines {
	 height: 100%;
	 position: relative;
}
 .line {
	 height: inherit;
	 width: 2px;
	 position: absolute;
	 background: rgba(238, 238, 238, 0.6);
}
 .line.l--0 {
	 left: 0;
}
 .line.l--25 {
	 left: 25%;
}
 .line.l--50 {
	 left: 50%;
}
 .line.l--75 {
	 left: 75%;
}
 .line.l--100 {
	 left: calc(100% - 1px);
}
 .line__label {
	 display: block;
	 width: 100px;
	 text-align: center;
	 position: absolute;
	 bottom: -20px;
	 right: -50px;
}
 .line__label.title {
	 text-transform: uppercase;
	 font-weight: bold;
}
 .charts {
	 width: 100%;
	 height: 100%;
	 position: absolute;
	 top: 0;
	 left: 0;
	 z-index: 10;
}
 .chart:not(:first-child) {
	 margin-top: 10px;
}
 .chart__title {
	 display: block;
	 margin: 0 0 10px;
	 font-weight: bold;
	 opacity: 0;
	 animation: 1s anim-lightspeed-in ease forwards;
}
 .chart--prod .chart__title {
	 animation-delay: 3.3s;
}
 .chart--design .chart__title {
	 animation-delay: 4.5s;
}
 .chart--horiz {
	 overflow: hidden;
}
 .chart__bar {
	 height: 30px;
	 margin-bottom: 10px;
	 background: linear-gradient(to left, var(--app-color-secondary), var(--app-color-primary));
	 border-top-right-radius: 4px;
	 border-bottom-right-radius: 4px;
	 opacity: 0;
	 animation: 1s anim-lightspeed-in ease forwards;
}
 .chart--dev .chart__bar:nth-of-type(11) {
	 animation-delay: 2.7s;
}
 .chart--dev .chart__bar:nth-of-type(10) {
	 animation-delay: 2.5s;
}
 .chart--dev .chart__bar:nth-of-type(9) {
	 animation-delay: 2.3s;
}
 .chart--dev .chart__bar:nth-of-type(8) {
	 animation-delay: 2.1s;
}
 .chart--dev .chart__bar:nth-of-type(7) {
	 animation-delay: 1.9s;
}
 .chart--dev .chart__bar:nth-of-type(6) {
	 animation-delay: 1.7s;
}
 .chart--dev .chart__bar:nth-of-type(5) {
	 animation-delay: 1.5s;
}
 .chart--dev .chart__bar:nth-of-type(4) {
	 animation-delay: 1.3s;
}
 .chart--dev .chart__bar:nth-of-type(3) {
	 animation-delay: 1.1s;
}
 .chart--dev .chart__bar:nth-of-type(2) {
	 animation-delay: 0.9s;
}
 .chart--dev .chart__bar:nth-of-type(1) {
	 animation-delay: 0.7s;
}
 .chart--prod .chart__bar:nth-of-type(2) {
	 animation-delay: 4.2s;
}
 .chart--prod .chart__bar:nth-of-type(1) {
	 animation-delay: 4s;
}
 .chart--design .chart__bar:nth-of-type(4) {
	 animation-delay: 5.8s;
}
 .chart--design .chart__bar:nth-of-type(3) {
	 animation-delay: 5.6s;
}
 .chart--design .chart__bar:nth-of-type(2) {
	 animation-delay: 5.4s;
}
 .chart--design .chart__bar:nth-of-type(1) {
	 animation-delay: 5.2s;
}
 .chart__label {
	 padding-left: 10px;
	 line-height: 30px;
	 color: white;
}
 @keyframes anim-lightspeed-in {
	 0% {
		 transform: translateX(-200%);
		 opacity: 1;
	}
	 100% {
		 transform: translateX(0);
		 opacity: 1;
	}
}
 
</style>