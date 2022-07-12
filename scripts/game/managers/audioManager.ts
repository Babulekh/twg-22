import { Howl, Howler } from 'howler';
import audioSettingsFile from '../settings/audio.json';

interface AudioManager {
	volume: number;
}

enum SoundType {
	Environment = 'environment',
	Music = 'music',
	Default = 'default',
}

class AudioManager {
	constructor(volume: number, type: SoundType) {
		this.volume = volume * audioSettingsFile.volume.general;
		switch (type) {
			case SoundType.Environment:
				this.volume *= audioSettingsFile.volume.environment;
				break;
			case SoundType.Music:
				this.volume *= audioSettingsFile.volume.music;
				break;
			default:
				this.volume *= audioSettingsFile.volume.general;
				break;
		}
	}

	init() {
		Howler.volume(this.volume);
	}

	playSound(src: string) {
		let sound = new Howl({
			src: src,
			volume: this.volume,
		});
		sound.play();
	}
}

export { AudioManager, SoundType };
