<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <a class="navbar-brand" href="/">Eg</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#footer">Contact</a>
      </li>
    </ul>
  </div>
</nav>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nabla:wght@200&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Workbench&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap");

body {
  margin: 0;
  font-family: "Kanit", serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  text-align: center;
  color: #2c3e50;
  font-family: Kanit, serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;
  opacity: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Kanit", serif !important;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.navbar-brand {
  font-family: 'Nabla', sans-serif; /* Replace with your desired font */
  font-size: 50px; /* Adjust the font size if needed */
  font-palette: --myPalette;
}

@font-palette-values --myPalette {
  font-family: "Nabla";
  base-palette: 4;
  override-colors: 1, var(--app-color-primary);
}

.sticky {
  background-color: #1b1a2ea9 !important;
  transition: all 0.3s ease-out 0s !important;
  box-shadow: 0px 10px 10px 0px rgba(9, 5, 29, 0.171) !important;
  backdrop-filter: blur(15px) !important;
}

.navbar {
  position: fixed !important;
  transition: all 0.3s ease-out 0s !important;
  padding: 0.3rem 2rem !important;
  font-size: 1.2rem !important;
}

.navbar-toggler {
  position: relative !important;
  background-color: transparent !important;
  border-color: transparent !important;
}

.navbar-toggler span {
  display: block !important;
  background-color: var(--app-color-primary) !important;
  height: 4px !important;
  width: 27px !important;
  margin-top: 5px !important;
  margin-bottom: 5px !important;
  transform: rotate(0deg) !important;
  left: 0 !important;
  opacity: 1 !important;
}

.navbar-toggler:focus,
.navbar-toggler:active {
  outline: 0 !important;
}

.navbar-toggler span:nth-child(1),
.navbar-toggler span:nth-child(3) {
  transition: transform 0.35s ease-in-out !important;
  transition: transform 0.35s ease-in-out !important;
}

.navbar-toggler:not(.collapsed) span:nth-child(1) {
  position: absolute !important;
  left: 12px !important;
  top: 10px !important;
  transform: rotate(135deg) !important;
  opacity: 0.9 !important;
}

.navbar-toggler:not(.collapsed) span:nth-child(2) {
  height: 12px !important;
  visibility: hidden !important;
  background-color: transparent !important;
}

.navbar-toggler:not(.collapsed) span:nth-child(3) {
  position: absolute !important;
  left: 12px !important;
  top: 10px !important;
  transform: rotate(-135deg) !important;
  opacity: 0.9 !important;
}

@media (max-width: 767px) {
  .navbar {
    padding: 1rem 2rem !important;
    font-size: 1.4rem !important;
    background-color: #181a27 !important;
  }
  .navbar-nav .nav-item a::after {
    display: none !important;
  }
}
.navbar-brand {
  color: rgb(250, 250, 250) !important;
}

.logo {
  height: 1.4em !important;
  width: 2.5em !important;
}

.navbar-nav .nav-link {
  color: white !important;
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}

.nav-link {
  padding: 0.8rem 1rem !important;
}

@media (max-width: 767px) {
  .nav-link {
    padding: 0.7rem 1rem !important;
  }
}

.navbar-nav .nav-item {
  position: relative;
  margin-left: 20px;
}

.navbar-nav .nav-item a {
  font-weight: 400;
  font-size: 25px;
  transition: all 0.3s ease-out 0s;
  position: relative;
  z-index: 1;
}

.navbar-nav .nav-item a::after {
  content: "";
  position: relative;
  display: block;
  height: 5px;
  width: 0;
  border-radius: 16px;
  background: var(--app-color-primary);
  bottom: 1px;
  left: 0;
  z-index: -1;
  transition: all 0.3s ease-out 0s;
}

.navbar-nav .nav-item a:hover::after {
  width: 100%;
}
</style>