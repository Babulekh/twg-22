import { Howl, Howler } from "howler";

class AudioManager {
    constructor (volume) {
        this.volume = volume;
    }

    init() {
        Howler.volume(this.volume);
    }

	playSound(src) {
        let sound = new Howl({
				src: src,
		});
        sound.play();
    }
}
