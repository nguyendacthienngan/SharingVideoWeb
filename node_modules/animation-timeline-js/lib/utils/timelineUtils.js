"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineUtils = void 0;
var denominators = [1, 2, 5, 10];
var TimelineUtils = /** @class */ (function () {
    function TimelineUtils() {
    }
    TimelineUtils.drawLine = function (ctx, x1, y1, x2, y2) {
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
    };
    /**
     * Check is valid number.
     */
    TimelineUtils.isNumber = function (val) {
        if (typeof val === 'number' && !isNaN(val) && Number.isFinite(val)) {
            return true;
        }
        return false;
    };
    TimelineUtils.deleteElement = function (array, element) {
        var index = array.indexOf(element);
        if (index !== -1) {
            return array.splice(index, 1);
        }
        return array;
    };
    /**
     * Check rectangle overlap.
     */
    TimelineUtils.isOverlap = function (x, y, rectangle) {
        if (!rectangle) {
            return false;
        }
        if (rectangle.x <= x && rectangle.x + rectangle.width >= x && rectangle.y <= y && rectangle.y + rectangle.height >= y) {
            return true;
        }
        return false;
    };
    /**
     * Find beautiful step for the header line gauge.
     */
    TimelineUtils.findGoodStep = function (originalStep, divisionCheck) {
        if (divisionCheck === void 0) { divisionCheck = 0; }
        if (originalStep <= 0 || isNaN(originalStep) || !Number.isFinite(originalStep)) {
            return originalStep;
        }
        var step = originalStep;
        var lastDistance = null;
        var pow = TimelineUtils.getPowArgument(originalStep);
        for (var i = 0; i < denominators.length; i++) {
            var denominator = denominators[i];
            var calculatedStep = denominator * Math.pow(10, pow);
            if (divisionCheck && divisionCheck % calculatedStep != 0) {
                continue;
            }
            var distance = TimelineUtils.getDistance(originalStep, calculatedStep);
            if (distance == 0 || (distance <= 0.1 && pow > 0)) {
                lastDistance = distance;
                step = calculatedStep;
                break;
            }
            else if (!lastDistance || lastDistance > distance) {
                lastDistance = distance;
                step = calculatedStep;
            }
        }
        return step;
    };
    /**
     * Keep value in min, max bounds.
     */
    TimelineUtils.keepInBounds = function (value, min, max) {
        if (min === void 0) { min = null; }
        if (max === void 0) { max = null; }
        if (TimelineUtils.isNumber(value)) {
            if (TimelineUtils.isNumber(min)) {
                value = Math.max(value, min);
            }
            if (TimelineUtils.isNumber(max)) {
                value = Math.min(value, max);
            }
        }
        return value;
    };
    TimelineUtils.setMinMax = function (to, from, shrink) {
        if (shrink === void 0) { shrink = false; }
        if (!from || !to) {
            return to;
        }
        var fromMin = Math.min(from.getMin ? from.getMin() : from.min, from.min);
        var toMin = Math.min(to.getMin ? to.getMin() : to.min, to.min);
        var isFromMinNumber = TimelineUtils.isNumber(fromMin);
        var isToMinNumber = TimelineUtils.isNumber(toMin);
        // get absolute min and max bounds:
        if (isFromMinNumber && isToMinNumber) {
            to.min = shrink ? Math.min(fromMin, toMin) : Math.max(fromMin, toMin);
        }
        else if (isFromMinNumber) {
            to.min = fromMin;
        }
        var fromMax = Math.min(from.getMax && from.getMax ? from.getMax() : from.max, from.max);
        var toMax = Math.min(to.getMax ? to.getMax() : to.max, to.max);
        var isFromMaxNumber = TimelineUtils.isNumber(fromMax);
        var isToMaxNumber = TimelineUtils.isNumber(toMax);
        if (isFromMaxNumber && isToMaxNumber) {
            to.max = shrink ? Math.max(fromMax, toMax) : Math.min(fromMax, toMax);
        }
        else if (isFromMaxNumber) {
            to.max = fromMax;
        }
        return to;
    };
    TimelineUtils.isRectOverlap = function (rect, rect2) {
        if (!rect || !rect2) {
            console.log('Rectangles cannot be empty');
            return false;
        }
        // If one rectangle is on left side of other
        if (rect.x > rect2.x + rect2.width || rect2.x > rect.x + rect.width) {
            return true;
        }
        // If one rectangle is above other
        if (rect.y < rect2.y + rect2.height || rect2.y < rect.y + rect.height) {
            return true;
        }
        return false;
    };
    TimelineUtils.getDistance = function (x1, y1, x2, y2) {
        if (x2 != undefined && y2 != undefined) {
            return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        }
        else {
            return Math.abs(x1 - y1);
        }
    };
    TimelineUtils.sign = function (p) {
        return p >= 0 ? 1 : -1;
    };
    TimelineUtils.clearBrowserSelection = function () {
        if (!window) {
            return;
        }
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var doc = window.document;
            if (doc.selection) {
                doc.selection.empty();
            }
        }
    };
    TimelineUtils.getPowArgument = function (toCheck) {
        if (!toCheck || toCheck === 0 || !isFinite(toCheck)) {
            return 1;
        }
        // some optimization for numbers:
        if (toCheck >= 10 && toCheck < 100) {
            return 1;
        }
        else if (toCheck >= 100 && toCheck < 1000) {
            return 2;
        }
        else if (toCheck >= 1000 && toCheck < 10000) {
            return 3;
        }
        toCheck = Math.abs(toCheck);
        var category = 0;
        var s = this.sign(toCheck);
        if (toCheck > 1) {
            while (toCheck >= 1) {
                toCheck = Math.floor(toCheck / 10.0);
                category++;
            }
            return s * category - 1;
        }
        else if (toCheck > 0.0) {
            // Get number of zeros before the number.
            var zerosCount = Math.floor(Math.log(toCheck) / Math.log(10) + 1) - 1;
            return zerosCount;
        }
        else {
            return 1;
        }
    };
    return TimelineUtils;
}());
exports.TimelineUtils = TimelineUtils;
//# sourceMappingURL=timelineUtils.js.map