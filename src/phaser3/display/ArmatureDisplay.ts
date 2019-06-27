namespace dragonBones.phaser.display {
    export class ArmatureDisplay extends DisplayContainer implements IArmatureProxy {
        public debugDraw = false;
        private _armature: Armature;

        constructor(scene: Phaser.Scene) {
            super(scene);
        }

        public dbInit(armature: Armature): void {
            this._armature = armature;
        }

        public dbClear(): void {
            this.removeAllListeners();
            if (this._armature) {
                this._armature.dispose();
            }
            this._armature = null;
        }

        public dbUpdate(): void {
            // TODO: draw debug graphics
            if (this.debugDraw) {
            }
        }

        public dispose(disposeProxy: boolean): void {
            this.dbClear();
            if (disposeProxy === true) {
                super.destroy();
            }
        }

        public destroy(): void {
            this.dispose(true);
        }

        public dispatchDBEvent(type: EventStringType, eventObject: EventObject): void {
            this.emit(type, eventObject);
        }

        public hasDBEventListener(type: EventStringType): boolean {
            return this.listenerCount(type) > 0;
        }

        public addDBEventListener(type: EventStringType, listener: (event: EventObject) => void, scope?: any): void {
            this.on(type, listener, scope);
        }

        public removeDBEventListener(type: EventStringType, listener: (event: EventObject) => void, scope?: any): void {
            this.off(type, listener, scope);
        }

        get armature(): Armature {
            return this._armature;
        }

        get animation(): Animation {
            return this._armature.animation;
        }
    }
}
