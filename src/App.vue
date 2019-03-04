<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Hello</router-link>
      | <router-link to="/toast-demo">Toast</router-link>
      | <router-link to="/laslider-demo">LaSlider</router-link>

    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px 0;
  margin: 0 30px 20px;
  border-bottom: 1px dashed #53ce96;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
