<template>
    <div class="task-list-container">
        <!-- Formulario para agregar una nueva tarea -->
        <div class="add-task-container">
        <h1>Añadir Tarea</h1>
        <div class="input-group">
            <input 
                v-model="newTask" 
                @keyup.enter="addTask" 
                placeholder="Añadir nueva tarea" 
                class="task-input"
            />
            <button @click="addTask" class="add-button">Añadir</button>
        </div>
        </div>

        <!-- Lista de tareas -->
        <div class="card">
            <div class="card-body">
                <div v-if="tasks.length > 0">
            <div v-for="task in tasks" :key="task.id">
                <div>
                    <h5 :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.todo }}</h5>
                    <span>{{ task.completed ? 'Completada' : 'Pendiente' }}</span>
                    <button class="toggle-button" @click="toggleTaskCompletion(task)">
                        {{ task.completed ? 'Desmarcar' : 'Completar' }}
                    </button>
                    <button class="delete-button" @click="deleteTask(task)">Eliminar</button>
                </div>
            </div>
        </div>
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
            if (this.newTask.trim() === "") return;

            const newTask = {
                todo: this.newTask,
                completed: false,
                id: Date.now(), 
            };

            this.tasks.unshift(newTask);
            this.newTask = ""; 
        },

        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },

        
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },
    },
    
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

.add-task-container {
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
}

.input-group {
    display: flex;
    margin-bottom: 10px;
}

.task-input {
    flex-grow: 1;
    padding: 8px;
    margin-right: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.add-button {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

.task-list {
    margin-top: 20px;
}

.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.completed {
    text-decoration: line-through;
    color: gray;
}
</style>


