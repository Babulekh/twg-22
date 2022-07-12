import { GameManager } from '../game/managers/gameManager';
import { Settings } from '../interfaces';
import controlSettingsFile from '../game/settings/controlSettings.json';

interface UserController {
	controlSettings: Settings;
}

class UserController {
	private static _instance: UserController = new UserController();

	public static get Instance(): UserController {
		return UserController._instance;
	}

	constructor() {
		if (UserController._instance) throw new Error('Error: Instantiation failed: Use UserController.getInstance() instead of new.');
		UserController._instance = this;
		this.controlSettings = controlSettingsFile;

		window.addEventListener('keydown', this.keyHandler.bind(this));
	}

	keyHandler({ code }: KeyboardEvent) {
		const player = GameManager.Instance.currentScene.player;
		switch (code) {
			case 'KeyW':
				player.move({ y: -1 });
				break;
			case 'KeyS':
				player.move({ y: 1 });
				break;
			case 'KeyA':
				player.move({ x: -1 });
				break;
			case 'KeyD':
				player.move({ x: 1 });
				break;
			default:
				break;
		}

		// console.log(this.controlSettings.keybindings[code], code);
	}
}

export { UserController };
