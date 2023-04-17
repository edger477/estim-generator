<script setup>
import SoundEditor from '../components/SoundEditor.vue'
</script>

<template>
    <main>
        <SoundEditor></SoundEditor>

    </main>
</template>

<script>
export default {
    components:{
        SoundEditor
    },
    data() {
        return {
            sounds: [{}],
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