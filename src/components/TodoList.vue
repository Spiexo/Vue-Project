<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTodoStore } from '@/stores/todo.store'

const todoStore = useTodoStore()
const newTodo = ref('')

// WATCH : observer les changements
watch(
  () => todoStore.todos,
  (newTodos) => {
    console.log('Todos mis à jour :', newTodos)
  },
  { deep: true }
)

const add = () => {
  todoStore.addTodo(newTodo.value)
  newTodo.value = ''
}
</script>

<template>
  <div class="todo">
    <h2>Todo List</h2>

    <input class="input-box" v-model="newTodo" placeholder="Nouvelle tâche" @keyup.enter="add"/>
    <button @click="add">Ajouter</button>

    <ul>
      <li v-for="todo in todoStore.todos" :key="todo.id">
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="todoStore.toggleTodo(todo.id)"
        />

        <span class="task" :class="{ done: todo.completed }">
          {{ todo.text }}
        </span>

        <button class="btn-delete" @click="todoStore.removeTodo(todo.id)">
          Supprimer
        </button>
      </li>
    </ul>

    <p>Terminées : {{ todoStore.completedTodos.length }}</p>
    <p>En cours : {{ todoStore.pendingTodos.length }}</p>
    <p>Total : {{ todoStore.todosCount }}</p>
  </div>
</template>

<style scoped>
.input-box {
  margin-right: 8px;
  border: 1px solid #000000;
}
.done {
  text-decoration: line-through;
  color: gray;
}

.task {
  margin-left: 8px;
}

.btn-delete {
  margin-left: 12px;
  color: red;
}
</style>
