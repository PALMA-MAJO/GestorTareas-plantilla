<template>
  <div class="home">
    <!-- Barra de navegación -->
    <nav class="navbar">
      <img src="../assets/logo.png" alt="Vue logo" class="nav-logo">
      <span class="nav-title">Gestor de Tareas</span>
      <div class="nav-links">
        <router-link to="/addtask" class="nav-link">Añadir Tarea</router-link>
        <router-link to="/tasklist" class="nav-link">Lista de Tareas</router-link>
        <router-link to="/combinedview" class="nav-link">Vista Combinada</router-link>
      </div>
    </nav>

    <!-- Contenido principal -->
    <h1 class="title">Bienvenido a la Aplicación de Tareas con Vue</h1>
    <p class="description">
      Esta aplicación te permite gestionar tus tareas de manera eficiente.
      Puedes añadir nuevas tareas manualmente o extraerlas desde una API.
    </p>

    <!-- Logo central con efecto de sombra -->
    <div class="logo-container">
      <img src="../assets/logo.png" alt="Vue logo" class="center-logo">
    </div>

    <!-- Sección de descripción de las vistas de la aplicación -->
    <h2 class="sections-title">Secciones de la Aplicación</h2>
    <p class="sections-description">
      <strong>Añadir Tarea:</strong> Permite ingresar nuevas tareas manualmente.<br>
      <strong>Lista de Tareas:</strong> Muestra todas las tareas extraídas desde la API, permitiendo marcarlas como completadas o eliminarlas.<br>
      <strong>Vista Combinada:</strong> Combina las funcionalidades de añadir tareas manualmente y ver las tareas de la API al mismo tiempo.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
/* Estilos generales de la página */
.home {
  text-align: center;
  color: #333;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* Barra de navegación */
.navbar {
  background-color: #00d9ff;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: white;
  justify-content: space-between;
}

.nav-logo {
  width: 30px;
  margin-right: 10px;
}

.nav-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 15px;
}

.nav-link {
  color: white;
  font-weight: bold;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
}

/* Título principal */
.title {
  font-size: 2.5rem;
  color: #007bff;
  margin-top: 40px;
}

/* Descripción de bienvenida */
.description {
  font-size: 1.2rem;
  color: #555;
  margin: 20px 0;
}

/* Contenedor para el logo central */
.logo-container {
  margin: 20px 0;
}

.center-logo {
  width: 120px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

/* Título de las secciones */
.sections-title {
  font-size: 1.8rem;
  color: #007bff;
  margin-top: 30px;
}

/* Descripción de las secciones */
.sections-description {
  font-size: 1rem;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  text-align: left;
}
</style>
