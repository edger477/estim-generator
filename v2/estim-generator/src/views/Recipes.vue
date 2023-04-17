<script setup>
import SoundEditor from '../components/SoundEditor.vue'
</script>

<template>
    <main>
        <SoundEditor name="test"></SoundEditor>
        <!-- <SoundEditor 
        v-for="(sound, index) in sounds"
            :item="sound"
            :index="index"
            :key="item.name" 
            :name="newItemName"/> -->
    </main>
</template>

<script>
export default {
    components:{
        SoundEditor
    },
    data() {
        return {
            // sounds: [new SoundEditor()],
            newItemName:'new sound'
        }
    },
    methods: {
        add() {
            var vm = this;

            vm.sounds.push(new SoundEditor());
        }
    },
    watch: {
    }
}
</script>