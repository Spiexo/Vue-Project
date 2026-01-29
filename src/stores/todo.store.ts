import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export type Todo = {
  id: number
  text: string
  completed: boolean
}

export const useTodoStore = defineStore('todo', () => {
  // STATE
  const todos = ref<Todo[]>([])

  //  GETTERS
  const completedTodos = computed(() => todos.value.filter((todo) => todo.completed))

  const pendingTodos = computed(() => todos.value.filter((todo) => !todo.completed))

  const todosCount = computed(() => todos.value.length)

  // ACTIONS
  function addTodo(text: string) {
    if (!text.trim()) return

    todos.value.push({
      id: Date.now(),
      text,
      completed: false,
    })
  }

  function toggleTodo(id: number) {
    const todo = todos.value.find((t) => t.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  function removeTodo(id: number) {
    todos.value = todos.value.filter((t) => t.id !== id)
  }

  return {
    // state
    todos,

    // getters
    completedTodos,
    pendingTodos,
    todosCount,

    // actions
    addTodo,
    toggleTodo,
    removeTodo,
  }
})
