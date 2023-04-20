<script setup>
import RecipeEditor from './RecipeEditor.vue'
import { useRecipeStore } from '../../stores/recipes';
</script>

<template>
    <main>
        <form>
            Add recipe:
            <input type="text" id="recipe_name" placeholder="name" v-model="newRecipeName">
            <span class="error" v-if="name_not_unique">Name must be unique</span>
            <button @click="addRecipe()">Add recipe</button>
        </form>
        <hr>
        <div v-if="recipes.length > 0">
            Select a recipe to edit:
            <select v-model="selectedRecipe">
                <option v-for="recipe in recipes" :value="recipe.name">{{ recipe.name }}</option>
            </select>
            <hr>
            <RecipeEditor
             v-if="selectedRecipe != null" 
             :name="selectedRecipe" />
        </div>

    </main>
</template>
<script>
export default {
    components: {
        RecipeEditor
    },
    data() {
        return {
            selectedRecipe: null,
            newRecipeName: '',
            recipes: [],
            name_not_unique: false
        }
    },
    methods: {
        load(sounds) {
            var vm = this;

            vm.sounds = sounds;
        },
        addRecipe() {
            this.name_not_unique = this.recipes.filter(r => r.name == this.newRecipeName).length > 0;
            if (this.name_not_unique) return;
            var recipe = RecipeEditor.data({name: this.newRecipeName});
            this.recipes.push(recipe);
        }
    },
    watch: {
    },
    mounted(){
        this.store = useRecipeStore(); 
        this.recipes = this.store.recipes;
    }

}
</script>