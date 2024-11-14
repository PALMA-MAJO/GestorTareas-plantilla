<template>
  <div id="app">
    <nav class="navbar">
      <img src="@/assets/logo.png" alt="Vue logo" class="nav-logo">
      
      <div class="nav-links">
        <router-link to="/" class="nav-link">Inicio</router-link>
        <router-link to="/addtask" class="nav-link">Añadir Tarea</router-link>
        <router-link to="/tasklist" class="nav-link">Lista de Tareas</router-link>
        <router-link to="/combinedview" class="nav-link">Vista Combinada</router-link>
      </div>
    </nav>
  
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
  background-color: #00d9ff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  width: 30px;
  margin-right: 10px;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
    padding: 10px 0;
  }

  .nav-logo {
    width: 40px;
    margin-bottom: 10px;
  }
}
</style>
