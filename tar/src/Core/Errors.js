var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CatonlineError = (function (_super) {
        __extends(CatonlineError, _super);
        function CatonlineError(message) {
            var _this = _super.call(this, message) || this;
            _this.name = 'CatonlineError';
            return _this;
        }
        return CatonlineError;
    }(Error));
    exports.CatonlineError = CatonlineError;
    var AssertionError = (function (_super) {
        __extends(AssertionError, _super);
        function AssertionError(message) {
            var _this = _super.call(this, message) || this;
            _this.name = 'AssertionError';
            return _this;
        }
        return AssertionError;
    }(CatonlineError));
    exports.AssertionError = AssertionError;
    var NotImplementedError = (function (_super) {
        __extends(NotImplementedError, _super);
        function NotImplementedError() {
            var _this = _super.call(this, 'not implemented') || this;
            _this.name = 'NotImplementedError';
            return _this;
        }
        return NotImplementedError;
    }(CatonlineError));
    exports.NotImplementedError = NotImplementedError;
    var InvalidGameParamsError = (function (_super) {
        __extends(InvalidGameParamsError, _super);
        function InvalidGameParamsError(paramName, reason) {
            var _this = _super.call(this, "Invalid game parameter value for \"" + paramName + "\": " + reason) || this;
            _this.paramName = paramName;
            _this.reason = reason;
            _this.name = 'InvalidGameParamsError';
            return _this;
        }
        return InvalidGameParamsError;
    }(CatonlineError));
    exports.InvalidGameParamsError = InvalidGameParamsError;
    var EdgeArgumentError = (function (_super) {
        __extends(EdgeArgumentError, _super);
        function EdgeArgumentError(message) {
            var _this = _super.call(this, message) || this;
            _this.name = 'EdgeArgumentError';
            return _this;
        }
        return EdgeArgumentError;
    }(CatonlineError));
    exports.EdgeArgumentError = EdgeArgumentError;
});
