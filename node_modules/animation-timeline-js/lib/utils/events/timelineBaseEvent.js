"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineBaseEvent = void 0;
var TimelineBaseEvent = /** @class */ (function () {
    function TimelineBaseEvent() {
        this._prevented = false;
    }
    /**
     * Prevent default click logic.
     */
    TimelineBaseEvent.prototype.preventDefault = function () {
        this._prevented = true;
    };
    TimelineBaseEvent.prototype.isPrevented = function () {
        return this._prevented;
    };
    return TimelineBaseEvent;
}());
exports.TimelineBaseEvent = TimelineBaseEvent;
//# sourceMappingURL=timelineBaseEvent.js.map