"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineStyleUtils = void 0;
var timelineKeyframeShape_1 = require("../enums/timelineKeyframeShape");
var TimelineStyleUtils = /** @class */ (function () {
    function TimelineStyleUtils() {
    }
    /**
     * Get keyframe style from a keyframe, than from a row, than from a global settings.
     * @param keyframe keyframe to get style for.
     * @param row keyframe row.
     * @param propertyName property to get.
     * @param defaultValue default value to return
     * @param reverseOrder reverse styling order: global, row, keyframe
     */
    TimelineStyleUtils.getKeyframeStyle = function (keyframeStyle, rowStyle, options, propertyName, defaultValue, reverseOrder) {
        if (reverseOrder === void 0) { reverseOrder = false; }
        // Don't spawn new array for the normal order.
        var styles = null;
        if (keyframeStyle) {
            var style = keyframeStyle;
            if (style[propertyName] !== undefined) {
                var value = style[propertyName];
                if (!reverseOrder) {
                    return value;
                }
                styles = styles || [];
                styles.push(value);
            }
        }
        if (rowStyle && rowStyle.keyframesStyle) {
            var style = rowStyle.keyframesStyle;
            if (style[propertyName] !== undefined) {
                var value = style[propertyName];
                if (!reverseOrder) {
                    return value;
                }
                styles = styles || [];
                styles.push(value);
            }
        }
        var globalRowStyle = options ? options.rowsStyle : null;
        if (globalRowStyle && globalRowStyle.keyframesStyle) {
            var style = globalRowStyle.keyframesStyle;
            if (style[propertyName] !== undefined) {
                var value = style[propertyName];
                if (!reverseOrder) {
                    return value;
                }
                styles = styles || [];
                styles.push(value);
            }
        }
        return reverseOrder && styles && styles.length > 0 ? styles[styles.length - 1] : defaultValue;
    };
    /**
     * Get row style from default settings or overrides by a row settings.
     */
    TimelineStyleUtils.getRowStyle = function (rowStyle, options, propertyName, defaultValue, reverseOrder) {
        if (reverseOrder === void 0) { reverseOrder = false; }
        // Don't spawn new array for the normal order.
        var styles = null;
        if (rowStyle) {
            var style = rowStyle;
            if (style[propertyName] !== undefined) {
                var results = style[propertyName];
                if (!reverseOrder) {
                    return results;
                }
                styles = styles || [];
                styles.push(results);
            }
        }
        var globalRowStyle = options ? options.rowsStyle : null;
        if (globalRowStyle) {
            var style = globalRowStyle;
            if (style[propertyName] !== undefined) {
                var results = style[propertyName];
                if (!reverseOrder) {
                    return results;
                }
                styles = styles || [];
                styles.push(results);
            }
        }
        return reverseOrder && styles && styles.length > 0 ? styles[styles.length - 1] : defaultValue;
    };
    TimelineStyleUtils.keyframeShape = function (keyframe, rowStyle, options) {
        var shape = TimelineStyleUtils.getKeyframeStyle(keyframe, rowStyle, options, 'shape', timelineKeyframeShape_1.TimelineKeyframeShape.Rhomb);
        return shape;
    };
    TimelineStyleUtils.keyframeFillColor = function (keyframe, rowStyle, options) {
        var color = TimelineStyleUtils.getKeyframeStyle(keyframe, rowStyle, options, 'fillColor', 'DarkOrange');
        return color;
    };
    TimelineStyleUtils.keyframeSelectedFillColor = function (keyframe, rowStyle, options) {
        var color = TimelineStyleUtils.getKeyframeStyle(keyframe, rowStyle, options, 'selectedFillColor', 'red');
        return color;
    };
    TimelineStyleUtils.keyframeStrokeThickness = function (keyframe, rowStyle, options) {
        return TimelineStyleUtils.getKeyframeStyle(keyframe, rowStyle, options, 'strokeThickness', 0.2, false);
    };
    TimelineStyleUtils.keyframeStrokeColor = function (keyframe, rowStyle, options) {
        return TimelineStyleUtils.getKeyframeStyle(keyframe, rowStyle, options, 'strokeColor', 'Black', false);
    };
    TimelineStyleUtils.keyframeSelectedStrokeColor = function (keyframe, rowStyle, options) {
        return TimelineStyleUtils.getKeyframeStyle(keyframe, rowStyle, options, 'selectedStrokeColor', 'Black', false);
    };
    /**
     * Get current row height from styling
     */
    TimelineStyleUtils.getRowHeight = function (rowStyle, options) {
        return TimelineStyleUtils.getRowStyle(rowStyle, options, 'height', 24);
    };
    TimelineStyleUtils.rowGroupHeight = function (rowStyle, options) {
        return TimelineStyleUtils.getRowStyle(rowStyle, options, 'groupHeight', 'auto');
    };
    TimelineStyleUtils.groupFillColor = function (rowStyle, options) {
        return TimelineStyleUtils.getRowStyle(rowStyle, options, 'groupFillColor');
    };
    TimelineStyleUtils.getRowMarginBottom = function (rowStyle, options) {
        return TimelineStyleUtils.getRowStyle(rowStyle, options, 'marginBottom', 0);
    };
    TimelineStyleUtils.getRowFillColor = function (rowStyle, options) {
        return TimelineStyleUtils.getRowStyle(rowStyle, options, 'fillColor', '#252526');
    };
    TimelineStyleUtils.headerHeight = function (options) {
        return options ? options.headerHeight : 0 || 30;
    };
    TimelineStyleUtils.keyframeDraggable = function (keyframe, rowStyle, options, defaultValue) {
        if (defaultValue === void 0) { defaultValue = true; }
        return TimelineStyleUtils.getKeyframeStyle(keyframe, rowStyle, options, 'draggable', defaultValue, false);
    };
    TimelineStyleUtils.groupDraggable = function (rowStyle, options, defaultValue) {
        if (defaultValue === void 0) { defaultValue = true; }
        return TimelineStyleUtils.getRowStyle(rowStyle, options, 'groupDraggable', defaultValue, false);
    };
    return TimelineStyleUtils;
}());
exports.TimelineStyleUtils = TimelineStyleUtils;
//# sourceMappingURL=timelineStyleUtils.js.map