define(["require", "exports", "Core/Errors"], function (require, exports, Errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Edge = (function () {
        function Edge(name, targetNames, isPriority, args) {
            this.name = name;
            this.targetNames = targetNames;
            this.isPriority = isPriority;
            this.args = args;
        }
        Edge.prototype.check = function () {
            throw new Errors_1.NotImplementedError();
        };
        Edge.prototype.execute = function () {
            throw new Errors_1.NotImplementedError();
        };
        return Edge;
    }());
    exports.Edge = Edge;
});
