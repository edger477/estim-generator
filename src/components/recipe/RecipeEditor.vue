<script setup>
// import * as Tone from 'tone'
</script>

<template>
    <fieldset>
        <legend>{{ name }}</legend>
        <!-- <button @click="playSound()">{{ !isPlaying ? 'Play' : 'Stop' }}</button> -->
        <label v-for="availableType in types">
            <input type="radio" name="type" v-bind:value="availableType" v-model="type" />
            {{ availableType }} &nbsp;
        </label>
    <!-- <select v-model="type">
        <option value="sine">Sine</option>
                <option value="square">Square</option>
                <option value="sawtooth">Sawtooth</option>
                <option value="triangle">Triangle</option>
            </select> -->
        <form>
            <div class="">
                <label for="volume">Volume (db)</label>
                <input v-model="volume" type="range" name="volume" min="-65" max="0" /><br />
                <input v-model="volume" type="number" />
            </div>
            <div class="">
                <label for="freq">Frequency</label>
                <input v-model="frequency" type="range" name="freq" min="300" max="1500" /><br />
                <input v-model="frequency" type="number" />
            </div>
            <div>
                <label for="freq">Balance</label>
                <input v-model="pan" type="range" name="pan" min="-1" max="1" step="0.01" /><br />
                <input v-model="pan" type="number" />
            </div>
        </form>
        
        {{ name }}
        {{ frequency }}
    </fieldset>
</template>
<script>

export default {
    props: {
        name: String
    },
    data(raw) {
        return {
            volume: raw.volume || -12,
            type: raw.type || 'sine',
            frequency: raw.frequency || 673,
            pan: raw.pan || 0.0,
            types: ['sine', 'square', 'sawtooth', 'triangle']
        }
    },
    created() {
        var vm = this;
        // const synth = new Tone.Synth().toDestination();
    },
    methods: {
        // playSound() {
        //     var vm = this
        //     if (!vm.isPlaying) {

        //         vm.panVol = new Tone.PanVol(vm.pan, vm.vol).toDestination();
        //         vm.isPlaying = true;
        //         vm.oscillator = new Tone.Oscillator(vm.frequency, vm.type)
        //             .connect(vm.panVol)
        //             .start();
        //     }
        //     else {
        //         vm.isPlaying = false;
        //         vm.oscillator.stop();
        //     }
        // }
    },
    watch: {
        // frequency(newfreq, oldFreq) {

        //     var diff = newfreq - oldFreq;
        //     //this.amp = Math.max(0, Math.min(1, parseFloat(this.amp) + (diff/10000.0)));
        //     if (this.isPlaying)
        //         this.oscillator.frequency.value = newfreq;
        // },
        // pan(newPan, oldPan) {
        //     if (this.isPlaying)
        //         this.panVol.pan.value = newPan;
        // },
        // vol(newValue, oldValue) {
        //     if (this.isPlaying)
        //         this.panVol.volume.value = newValue;
        // },
        // type(newValue, oldValue){
        //     if (this.isPlaying)
        //         this.oscillator.type = newValue;
        // }
    }
}
</script>
<style>
    fieldset{
        margin: 10px;
    }
</style>