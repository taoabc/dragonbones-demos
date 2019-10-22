import BaseDemo from './BaseDemo';
import { PhaserFactory } from 'dragonbones-phaser-ce';
/**
 * How to use
 * 1. Load data.
 *
 * 2. Parse data.
 *    factory.parseDragonBonesData();
 *    factory.parseTextureAtlasData();
 *
 * 3. Build armature.
 *    armatureDisplay = factory.buildArmatureDisplay("armatureName");
 *
 * 4. Play animation.
 *    armatureDisplay.animation.play("animationName");
 *
 * 5. Add armature to stage.
 *    addChild(armatureDisplay);
 */
export default class HelloDragonBones extends BaseDemo {
  static BONE_NAME = 'right_abcd';
  static ANI_NAME = 'right_a';
  static SKE = `resource/${HelloDragonBones.BONE_NAME}/${HelloDragonBones.BONE_NAME}_ske.json`;
  static TEX_ATLAS = `resource/${HelloDragonBones.BONE_NAME}/${HelloDragonBones.BONE_NAME}_tex.json`;
  static TEX_IMAGE = `resource/${HelloDragonBones.BONE_NAME}/${HelloDragonBones.BONE_NAME}_tex.png`;
  public constructor(game: Phaser.Game) {
    super(game);

    this._resources.push(HelloDragonBones.SKE, HelloDragonBones.TEX_ATLAS, HelloDragonBones.TEX_IMAGE);
  }

  protected _onStart(): void {
    const factory = PhaserFactory.factory;
    // factory.parseDragonBonesData(this.game.cache.getItem("resource/mecha_1002_101d_show/mecha_1002_101d_show_ske.json", Phaser.Cache.JSON).data);
    factory.parseDragonBonesData(this.game.cache.getJSON(HelloDragonBones.SKE));
    factory.parseTextureAtlasData(
      this.game.cache.getJSON(HelloDragonBones.TEX_ATLAS),
      (this.game.cache.getImage(HelloDragonBones.TEX_IMAGE, true) as any).base
    );

    const armatureDisplay = factory.buildArmatureDisplay(HelloDragonBones.BONE_NAME, HelloDragonBones.BONE_NAME);
    armatureDisplay.animation.play(HelloDragonBones.ANI_NAME, 0);
    // armatureDisplay.scale.set(0.5);

    armatureDisplay.x = -1920 / 2;
    armatureDisplay.y = -1080 / 2;
    this.addChild(armatureDisplay);
  }
}
