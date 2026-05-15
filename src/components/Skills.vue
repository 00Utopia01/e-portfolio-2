<template>
	<section class="skills" aria-labelledby="skills-heading">
		<h2 id="skills-heading" class="sr-only">Skills</h2>

		<div class="charts">
			<div class="chart chart--dev" role="group" :aria-labelledby="`lang-${0}`">
				<span class="chart__title">Languages</span>
				<ul class="chart--horiz">
					<li
						v-for="(s, i) in languageSkills"
						:key="s.name"
						class="chart__bar"
						:style="{ width: s.value + '%', animationDelay: (i * 0.1 + 0.7) + 's' }"
						role="progressbar"
						:aria-valuenow="s.value"
						aria-valuemin="0"
						aria-valuemax="100"
						tabindex="0"
					>
						<span class="chart__label">{{ s.name }}</span>
						<span class="chart__percentage">{{ s.value }}%</span>
					</li>
				</ul>
			</div>

			<div class="chart chart--prod" role="group">
				<span class="chart__title">Frameworks</span>
				<ul class="chart--horiz">
					<li
						v-for="(s, i) in frameworkSkills"
						:key="s.name"
						class="chart__bar"
						:style="{ width: s.value + '%', animationDelay: (i * 0.1 + 0.7) + 's' }"
						role="progressbar"
						:aria-valuenow="s.value"
						aria-valuemin="0"
						aria-valuemax="100"
						tabindex="0"
					>
						<span class="chart__label">{{ s.name }}</span>
						<span class="chart__percentage">{{ s.value }}%</span>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Skills',
	data() {
		return {
			languageSkills: [
				{ name: 'Python', value: 60 },
				{ name: 'Java', value: 30 },
				{ name: 'JavaScript', value: 38 },
				{ name: 'HTML & CSS', value: 43 }
			],
			frameworkSkills: [
				{ name: 'Flask', value: 67 },
				{ name: 'Vue', value: 59 }
			]
		}
	}
}
</script>

<style scoped>
.text {
  color: var(--app-color-text);
}
.skills {
  width: 80%;
  max-width: 960px;
  height: 150px; /* tuned height */
  margin: auto;
  position: relative;
}
.charts {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
}
.chart:not(:first-child) {
  margin-top: 10px;
}
.chart__title {
  display: block;
  margin: 0 0 10px;
  font-weight: bold;
  opacity: 1;
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
  opacity: 1;
  transform: translateX(-200%);
  animation: 0.9s anim-lightspeed-in ease forwards;
}
.chart__label {
  padding-left: 10px;
  line-height: 30px;
  color: white;
}
.chart__percentage {
  float: right;
  padding-right: 10px;
  line-height: 30px;
  color: rgba(255,255,255,0.9);
}
.sr-only {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap;
}
@keyframes anim-lightspeed-in {
  0% {
    transform: translateX(-200%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

</style>