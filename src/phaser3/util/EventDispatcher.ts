namespace dragonBones.phaser.util {
    export class EventDispatcher extends Phaser.Events.EventEmitter implements IEventDispatcher {
        public hasDBEventListener(type: EventStringType): boolean {
            return this.listenerCount(type) > 0;
        }

        public dispatchDBEvent(type: EventStringType, eventObject: EventObject): void {
            this.emit(type, eventObject);
        }

        public addDBEventListener(type: EventStringType, listener: (e: EventObject) => void, thisObject?: any): void {
            this.on(type, listener, thisObject);
        }

        public removeDBEventListener(type: EventStringType, listener: (e: EventObject) => void, thisObject?: any): void {
            this.off(type, listener, thisObject);
        }
    }
}
