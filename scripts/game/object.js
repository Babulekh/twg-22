class Object {
	constructor(assetSrc = '/resources/sprites/base.png', coordX = 0, coordY = 0) {
		this.assetSrc = assetSrc;
		this.coordX = coordX;
		this.coordY = coordY;

		init();
	}

	init() {
		object = PIXI.Sprite.from(this.assetSrc);
		object.coordX = this.coordX;
		object.coordY = this.coordY;

		// app.stage.addChild(bunny);
	}

	Move(deltaX, deltaY) {
		object.coordX = this.coordX;
		object.coordY = this.coordY;
	}
}
