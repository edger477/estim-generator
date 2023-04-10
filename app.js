


let app = new Vue({
    el: "#app",
    data: {
        freq: 440,
        amp: 0.5,
        mod: 0,
        modamp: 10,
        carrier: null,
        modulator: null,
        p: null,
        p5: null
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
                const modamp = parseFloat(self.modamp/100);
                self.carrier.freq(freq);
                self.carrier.amp(amp);
                // console. log(modulator.scale(-1, 1, -10, 10));
                self.modulator.freq(mod);
                self.modulator.amp(modamp);
                // self.modulator.scale(-1, 1, -1, 1);
                // self.carrier.freq(freq + self.modulator.scale(-1, 1, -10, 10));
                // self.carrier.amp(self.modulator.scale(-1, 1, 0, 1));
            };
            self.carrier = new p5.Oscillator();
            self.carrier.setType("sine");
            self.modulator = new p5.Oscillator('sine');
            self.modulator.disconnect();
            self.carrier.amp(self.modulator.scale(-1, 1, -1, 1));
            // self.modulator.setType('sine');
        },
        playSound() {
            this.carrier.start();
            this.carrier.amp(1.0);
            this.modulator.start();
            // setTimeout(() => {
            //     this.carrier.amp(0.0);
            // }, 1000);
        },
        stopSound() {
            this.carrier.stop();
            this.carrier.amp(0);
            this.modulator.stop();
        },
        saveSound() {
            const filename = `sound_${this.freq.toFixed(0)}_${this.amp.toFixed(2)}_${this.mod.toFixed(0)}.mp3`;
            // var r = new this.p.SoundRecorder();
            this.p5.saveSound(this.osc, filename);
        }
    },
    mounted() {
        this.p5 = new p5(this.setup);
        window.requestAnimationFrame(() => this.p5.draw());
    }
});
