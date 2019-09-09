define(["require", "exports", "Core/Errors"], function (require, exports, Errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Resource = (function () {
        function Resource() {
        }
        return Resource;
    }());
    exports.Resource = Resource;
    function parseResource(game, resString) {
        throw new Errors_1.NotImplementedError();
    }
    exports.parseResource = parseResource;
});
