
import { useRecipeStore } from '../stores/recipes';
import { Recipe } from './models/recipe';

export default class RecipeService {
    constructor() {

        this.store = useRecipeStore();
    }

    static select(name) {
        this.selected = this.store.getRecipes().find(r => r.name == name);
    }

    static getCurrent() {
        return this.selected;
    }

    getAll() {
        return this.store.recipes;
    }
}