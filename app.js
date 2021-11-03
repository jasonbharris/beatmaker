class Drumkit{
    constructor() {
        this.pads = document.querySelectorAll('.pads');
        this.playBtn = document.querySelector('.play');
        this.kickAudio = document.querySelector('.kick-sound');
        this.snareAudio = document.querySelector('.snare-sound');
        this.hihatAudio = document.querySelector('.hihat-sound');
        this.bpm = 150;
        this.index = 0;
    }
    activePad() {
        this.classList.toggle('active');
        console.log(this);
    }

    repeat() {
        let step = this.index % 8;
        const activeBars = document.querySelectorAll(`.b${step}`);
        console.log(step);
        this.index++;
    }
    start() {
        const interval = (60/this.bpm) * 1000;
        setInterval(() => {
            this.repeat()
        }, interval);
    }
}

const drumkit = new Drumkit();

drumkit.pads.forEach(pad => {
    pad.addEventListener('click', drumkit.activePad);
});

drumkit.playBtn.addEventListener('click', () => {
    drumkit.start();
});