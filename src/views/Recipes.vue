<script setup>
import Recipe from '../components/recipe/Recipe.vue'
import SoundEditor from '../components/SoundEditor.vue'
import RecipeService from '../api/recipeService';
</script>

<template>
    <main>


        
        <div v-if="recipes.length > 0">
            Select a recipe to edit:
            <select v-model="selectedRecipe">
                <option v-for="recipe in recipes" :value="recipe.name">{{ recipe.name }}</option>
            </select>
            <hr>
        </div>


        <hr/>
        <Recipe></Recipe>
        <!-- <SoundEditor></SoundEditor> -->

    </main>
</template>


<script>
export default {
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
        }
    },
    watch: {
    },
    mounted(){
        this.service = new RecipeService();
        this.recipes = this.service.getAll();
    }

}
</script>