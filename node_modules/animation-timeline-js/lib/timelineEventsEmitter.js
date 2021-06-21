"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineEventsEmitter = void 0;
var TimelineEventsEmitter = /** @class */ (function () {
    function TimelineEventsEmitter() {
        this._subscriptions = [];
    }
    // on event.
    TimelineEventsEmitter.prototype.on = function (topic, callback) {
        if (!callback) {
            return;
        }
        this._subscriptions.push({
            topic: topic,
            callback: callback,
        });
    };
    /**
     * Remove an event from the subscriptions list.
     */
    TimelineEventsEmitter.prototype.off = function (topic, callback) {
        this._subscriptions = this._subscriptions.filter(function (event) {
            return event && event.callback != callback && event.topic != topic;
        });
    };
    /**
     * Unsubscribe all
     */
    TimelineEventsEmitter.prototype.offAll = function () {
        this._subscriptions.length = 0;
    };
    // emit event.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    TimelineEventsEmitter.prototype.emit = function (topic, args) {
        this._subscriptions.forEach(function (event) {
            if (event && event.topic == topic && event.callback) {
                event.callback(args);
            }
        });
    };
    return TimelineEventsEmitter;
}());
exports.TimelineEventsEmitter = TimelineEventsEmitter;
//# sourceMappingURL=timelineEventsEmitter.js.map