import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useRecipeStore = defineStore('recipe', {
    state: () => ({ recipes: useStorage('recipes', []) }),
    getters: {
        getRecipes: (state) => state.recipes
    }
})
