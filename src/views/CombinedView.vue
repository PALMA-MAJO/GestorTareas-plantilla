<template>
    <div class="task-container">
        <h1>Lista de Tareas</h1>
        
        <!-- Formulario para agregar nuevas tareas -->
        <div class="add-task">
            <input type="text" v-model="newTask" placeholder="Escribe una nueva tarea" />
            <button @click="addTask">Agregar Tarea</button>
        </div>

        <!-- Lista de tareas -->
        <div v-if="tasks.length > 0" class="tasks">
            <div v-for="task in tasks" :key="task.id" class="task-item">
                <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.todo }}</h5>
                <span class="status">{{ task.completed ? 'Completada' : 'Pendiente' }}</span>
                <button @click="toggleTask(task)" class="toggle-button">
                    {{ task.completed ? 'Desmarcar' : 'Completar' }}
                </button>
                <button @click="deleteTask(task)" class="delete-button">Eliminar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"CombinedView",
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
                const response = await fetch("https://dummyjson.com/todos");
                const data = await response.json();
                this.tasks = data.todos.slice(0, 10); 
            } catch (error) {
                console.error("Error al cargar las tareas:", error);
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
        deleteTask(task) {
            this.tasks = this.tasks.filter((t)=>t.id !== task.id); // Eliminar la tarea por ID
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
.task-list-container {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
}

.load-button {
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 20px;
}

.tasks {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.task-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f9f9f9;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

.task-item h5 {
    margin: 0;
    font-size: 1rem;
}

.status {
    font-style: italic;
    color: #888;
    margin-right: 10px;
}

.toggle-button, .delete-button {
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.toggle-button {
    background-color: #28a745;
    color: #fff;
    margin-right: 5px;
}

.delete-button {
    background-color: #dc3545;
    color: #fff;
}
</style>

