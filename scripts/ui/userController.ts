import controlSettingsFile from './controlSettings.json' assert { type: 'json' };

interface UserController {
	_intstance: any; //todo Object
	controlSettings: Object;
}

class UserController {
	constructor() {
		// реализация синглтона, чтобы в игре существовал лишь один экземпляр контроллера
		// if (UserController._instance) {
		// 	return UserController._instance;
		// }
		// UserController._instance = this;
		// todo пофиксить _instance

		this.init();
	}

	init() {
		// this.controlSettings = JSON.parse(controlSettingsFile); todo я хз ругается чето
	}
}
