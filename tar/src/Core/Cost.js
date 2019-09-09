var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
define(["require", "exports", "Core/Errors", "Core/Resource"], function (require, exports, Errors_1, Resource_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function parseCost(game, costString) {
        var cost = new Map();
        costString.split(';').forEach(function (pair) {
            var _a = __read(pair.split(':'), 2), resString = _a[0], numString = _a[1];
            var resource = Resource_1.parseResource(game, resString);
            var number = parseInt(numString);
            if (isNaN(number)) {
                throw new Errors_1.EdgeArgumentError("invalid resource quantity (\"" + numString + "\")");
            }
            else if (number < 1) {
                throw new Errors_1.EdgeArgumentError("invalid resource quantity < 1 (\"" + numString + "\")");
            }
            var currentNum = cost.get(resource) || 0;
            cost.set(resource, currentNum + number);
        });
        if (cost.size == 0) {
            throw new Errors_1.EdgeArgumentError("must specify at least one resource");
        }
        return cost;
    }
    exports.parseCost = parseCost;
});
