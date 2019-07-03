import * as dragonBonesPhaser from '../../src/dragonbones-phaser';
import { HelloDragonBones } from './HelloDragonBones';
import { AnimationBase } from './AnimationBase';

const config = {
  version: "1.0",

  // canvas: document.createElement("CANVAS"),
  width: 1000,
  height: 640,
  backgroundColor: 0x0,

  render: {
      pixelArt: false,
      clearBeforeRender: false
  },

  disableContextMenu: true,

  plugins: {
      scene: [
          { key: "DragonBones", plugin: dragonBonesPhaser.DragonBonesScenePlugin, mapping: "dragonbone" }    // setup DB scene plugin
      ]
  },

  // scene: HelloDragonBones    // scene to display
  scene: AnimationBase
  // scene: DragonBonesEvent
  // scene: AnimationLayer
  // scene: BoneOffset
  // scene: InverseKinematics
  // scene: BoundingBox // TODO maby this has issue to run
  // scene: ReplaceSlotDisplay
  // scene: ReplaceAnimation
  // scene: coreElement.Game
  // scene: PerformanceTest
};

new Phaser.Game(config); // TODO Why can access Phaser without error?
