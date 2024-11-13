<template>
    <div class="task-list-container">
        <h1>Lista de Tareas</h1>
        <button @click="fetchTasks" class="load-button">Cargar Tareas</button>
        
        <div v-if="tasks.length > 0" class="tasks">
            <div v-for="task in tasks" :key="task.id" class="task-item">
                <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.todo }}</h5>
                <span class="status">{{ task.completed ? 'Completada' : 'Pendiente' }}</span>
                <button @click="toggleTaskCompletion(task)" class="toggle-button">
                    {{ task.completed ? 'Desmarcar' : 'Completar' }}
                </button>
                <button @click="deleteTask(task)" class="delete-button">Eliminar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskList",
    data() {
        return {
            tasks: [], 
        };
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

        
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },

        
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },
    },
};
</script>

<style scoped>
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
