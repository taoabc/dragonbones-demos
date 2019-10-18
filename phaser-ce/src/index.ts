import { PhaserFactory } from 'dragonbones-phaser-ce';
import HelloDragonBones from './HelloDragonBones';
// import AnimationBase from './AnimationBase';
// import DragonBonesEvent from './DragonBonesEvent';
// import AnimationLayer from './AnimationLayer';
// import BoneOffset from './BoneOffset';
// import InverseKinematics from './InverseKinematics';
// import BoundingBox from './BoundingBox';
// import ReplaceSlotDisplay from './ReplaceSlotDisplay';
// import ReplaceAnimation from './ReplaceAnimation';
// import CoreElementGame from './CoreElement';
// import PerformanceTest from './PerformanceTest';

new Phaser.Game(1920, 1080, Phaser.AUTO, null, {
  create: function () {
    PhaserFactory.init(this.game); // Static factory init.
    //
    this.world.add(new HelloDragonBones(this.game));
    // this.world.add(new AnimationBase(this.game));
    // this.world.add(new DragonBonesEvent(this.game));
    // this.world.add(new AnimationLayer(this.game));
    // this.world.add(new BoneOffset(this.game));
    // this.world.add(new InverseKinematics(this.game));
    // this.world.add(new BoundingBox(this.game));
    // this.world.add(new ReplaceSlotDisplay(this.game));
    // this.world.add(new ReplaceSkin(this.game)); TODO
    // this.world.add(new ReplaceAnimation(this.game));
    // this.world.add(new coreElement.Game(this.game));
    // this.world.add(new PerformanceTest(this.game));
  },
  render: function () {
    PhaserFactory.factory.dragonBones.advanceTime(-1.0); // update.
  }
});
