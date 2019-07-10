import { DragonBonesScenePlugin } from './plugin/DragonBonesPlugin';
import { extendSkew } from './util/SkewComponent';
import * as dragonBones from 'libdragonbones';
import Phaser from 'phaser';

console.log(dragonBones.BlendMode.HardLight);

const util = { extendSkew }

export {
  Phaser,
  DragonBonesScenePlugin,
  util,
  dragonBones,
};

export default {
  Phaser,
  DragonBonesScenePlugin,
  util,
  dragonBones,
};
