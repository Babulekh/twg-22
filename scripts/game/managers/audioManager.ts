import { Howl, Howler } from 'howler';

interface AudioManager {
	volume: number;
}

class AudioManager {
	constructor(volume: number) {
		this.volume = volume;
	}

	init() {
		Howler.volume(this.volume);
	}

	playSound(src: string) {
		let sound = new Howl({
			src: src,
		});
		sound.play();
	}
}

export { AudioManager };
