<template>
    <div class="task-container">
        <h1>Lista de Tareas</h1>
        
        <!-- Formulario para agregar nuevas tareas -->
        <div class="add-task">
            <input type="text" v-model="newTask" placeholder="Escribe una nueva tarea" />
            <button @click="addTask">Agregar Tarea</button>
        </div>

        <!-- Lista de tareas -->
        <ul class="task-list">
            <li v-for="task in tasks" :key="task.id" :class="{ completed: task.completed }">
                <span @click="toggleTask(task)">{{ task.title }}</span>
                <button @click="deleteTask(task.id)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTask: '',  // Para la nueva tarea que se agregará
            tasks: []     // Lista de tareas desde la API
        };
    },
    created() {
        this.fetchTasks(); // Cargar tareas al crear el componente
    },
    methods: {
        async fetchTasks() {
            try {
                // Simulación de una llamada a la API para obtener las tareas
                const response = await fetch('https://jsonplaceholder.typicode.com/todos'); // Ejemplo de URL
                const data = await response.json();
                this.tasks = data.slice(0, 10); // Cargar solo las primeras 10 tareas
            } catch (error) {
                console.error('Error al cargar las tareas:', error);
            }
        },
        addTask() {
            if (this.newTask.trim() === '') return;
            this.tasks.push({ id: Date.now(), title: this.newTask, completed: false });
            this.newTask = ''; // Limpiar el campo de entrada
        },
        toggleTask(task) {
            task.completed = !task.completed; // Marcar como completada o incompleta
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(task => task.id !== id); // Eliminar la tarea por ID
        }
    }
};
</script>

<style scoped>
.task-container {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
}

.add-task {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}

.add-task input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 5px;
}

.add-task button {
    padding: 8px 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.task-list {
    list-style-type: none;
    padding: 0;
}

.task-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.task-list li.completed span {
    text-decoration: line-through;
    color: gray;
}
</style>
