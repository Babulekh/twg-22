import controlSettingsFile from './controlSettings.json' assert { type: 'json' };

interface UserController {
	_intstance: any; //todo Object
	controlSettings: Object;
}

class UserController {
	private static _instance: UserController = new UserController();

	constructor() {
		if (UserController._instance) throw new Error('Error: Instantiation failed: Use UserController.getInstance() instead of new.');
		UserController._instance = this;
		UserController._instance.init();
	}

	public static getInstance(): UserController {
		return UserController._instance;
	}

	init() {
		// this.controlSettings = JSON.parse(controlSettingsFile); todo я хз ругается чето
	}
}
