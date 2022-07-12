import { GameManager } from '../game/managers/gameManager';
import { Settings } from '../interfaces';
import controlSettingsFile from './controlSettings.json';

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

		window.addEventListener('keydown', this.keyHandler);
	}

	keyHandler({ key }: KeyboardEvent) {
		const player = GameManager.Instance.currentScene.player;
		switch (key) {
			case 'w':
				player.y -= 1;
				break;
			case 's':
				player.y += 1;
				break;
			case 'a':
				player.x -= 1;
				break;
			case 'd':
				player.x += 1;
				break;
			default:
				break;
		}
	}
}

export { UserController };
