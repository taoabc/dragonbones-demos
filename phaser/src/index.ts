import { DragonBonesScenePlugin, Phaser } from 'dragonbones-phaser';
import HelloDragonBones from './HelloDragonBones';
import AnimationBase from './AnimationBase';
import DragonBonesEvent from './DragonBonesEvent';
import AnimationLayer from './AnimationLayer';
import BoneOffset from './BoneOffset';
import InverseKinematics from './InverseKinematics';
import BoundingBox from './BoundingBox';
import ReplaceSlotDisplay from './ReplaceSlotDisplay';
import ReplaceAnimation from './ReplaceAnimation';
import CoreElementGame from './CoreElement';
import PerformanceTest from './PerformanceTest';

const config = {
  version: '1.0',

  // canvas: document.createElement('CANVAS'),
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
          { key: 'DragonBones', plugin: DragonBonesScenePlugin, mapping: 'dragonbone' }    // setup DB scene plugin
      ]
  },

  scene: HelloDragonBones    // scene to display
  // scene: AnimationBase
  // scene: DragonBonesEvent
  // scene: AnimationLayer
  // scene: BoneOffset
  // scene: InverseKinematics
  // scene: BoundingBox // TODO maby this has issue to run
  // scene: ReplaceSlotDisplay
  // scene: ReplaceAnimation
  // scene: CoreElementGame
  // scene: PerformanceTest
};

new Phaser.Game(config);
