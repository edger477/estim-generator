


let app = new Vue({
    el: "#app",
    data: {
        freq: 763,
        amp: 0.5,
        mod: 0,
        modamp: 10,
        freq_mod: 0,
        freq_mod_amp: 0,
        carrier: null,
        amp_modulator: null,
        freq_modulator: null,
        phase_modulator: null,
        p: null,
        p5: null,
        recorder: null
    },
    watch: {
        freq(newfreq, oldFreq) {
            
          var diff = newfreq - oldFreq;
          this.amp = Math.max(0, Math.min(1, parseFloat(this.amp) + (diff/10000.0)));
        }
    },
    methods: {
        render(h) {
            return h(VueP5, { on: this });
        },
        setup(p) {
            this.p = p;
            let self = this;
            p.setup = function () {
                p.createCanvas(700, 410);
            };
            p.draw = function () {
                const freq = parseFloat(self.freq);
                const amp = parseFloat(self.amp);
                const mod = parseFloat(self.mod);
                const modamp = parseFloat(self.modamp / 100);
                const freqmod = parseFloat(self.freq_mod);
                const freqmodamp = parseFloat(self.freq_mod_amp);
                self.carrier.freq(freq);
                self.carrier.amp(amp);
                // console. log(modulator.scale(-1, 1, -10, 10));
                self.amp_modulator.freq(mod);
                self.amp_modulator.amp(modamp);
                self.freq_modulator.freq(freqmod);
                self.freq_modulator.amp(freqmodamp);
                // self.carrier.freq(freq + self.amp_modulator.scale(-1, 1, -10, 10));
                // self.carrier.amp(self.amp_modulator.scale(-1, 1, 0, 1));

            };
            self.carrier = new p5.Oscillator();
            self.carrier.setType("sine");
            self.amp_modulator = new p5.Oscillator('sine');
            self.amp_modulator.disconnect();
            self.amp_modulator.scale(-1, 1, 0, 1);
            self.carrier.amp(self.amp_modulator);

            self.freq_modulator = new p5.Oscillator('sine');
            self.freq_modulator.disconnect();
            self.carrier.freq(self.freq_modulator);

            setTimeout(function () {
                // self.recorder = new p5.SoundRecorder();
                // self.recorder.setInput(self.carrier);
            }, 1000);

            // self.amp_modulator.setType('sine');
        },
        playSound() {
            this.carrier.start();
            // this.carrier.amp(1.0);
            this.amp_modulator.start();
            this.freq_modulator.start();
            // setTimeout(() => {
            //     this.carrier.amp(0.0);
            // }, 1000);
        },
        stopSound() {
            this.carrier.stop();
            this.carrier.amp(0);
            this.amp_modulator.stop();
            this.freq_modulator.stop();
        },
        saveSound() {
            const filename = `sound_${this.freq.toFixed(0)}_${this.amp.toFixed(2)}_${this.mod.toFixed(0)}.mp3`;
            // var r = new this.p.SoundRecorder();
            // var soundFile = new p5.SoundFile();
            // this.recorder.record(soundFile);
            // setTimeout(() => {
            //     this.p5.saveSound(soundFile, filename);

            // }, 5000);
        }
    },
    mounted() {
        this.p5 = new p5(this.setup);
        window.requestAnimationFrame(() => this.p5.draw());
    }
});
