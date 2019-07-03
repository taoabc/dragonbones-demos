import { DragonBonesScenePlugin } from './plugin/DragonBonesPlugin';
import { extendSkew } from './util/SkewComponent';
import * as dragonBones from '../dragonBones';
import Phaser from 'phaser';

const util = { extendSkew }

export {
  Phaser,
  DragonBonesScenePlugin,
  util,
  dragonBones,
};
