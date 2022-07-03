import controlSettingsFile from './controlSettings.json' assert { type: 'json' };

class UserController {
	constructor() {
		// реализация синглтона, чтобы в игре существовал лишь один экземпляр контроллера
		if (UserController._instance) {
			return UserController._instance;
		}
		UserController._instance = this;

		this.init();
	}

	init() {
		let controlSettings = JSON.parse(controlSettingsFile);
	}
}
