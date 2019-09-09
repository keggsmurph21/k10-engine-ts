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
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
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
define(["require", "exports", "Core/Errors", "Scenarios"], function (require, exports, Errors_1, Scenarios_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AbstractGameParam = (function () {
        function AbstractGameParam(name, _default) {
            this.name = name;
            this._default = _default;
        }
        AbstractGameParam.prototype.assertValidType = function (value) {
            var expectedTypeString = typeof this._default;
            var actualTypeString = typeof value;
            if (actualTypeString !== expectedTypeString) {
                var reason = "expected type \"" + expectedTypeString + "\" got \"" + actualTypeString + "\"";
                throw new Errors_1.InvalidGameParamsError(this.name, reason);
            }
        };
        return AbstractGameParam;
    }());
    var BooleanGameParam = (function (_super) {
        __extends(BooleanGameParam, _super);
        function BooleanGameParam() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BooleanGameParam.prototype.validate = function (value) {
            this.assertValidType(value);
            return value;
        };
        return BooleanGameParam;
    }(AbstractGameParam));
    var StringGameParam = (function (_super) {
        __extends(StringGameParam, _super);
        function StringGameParam(name, options) {
            var _this = _super.call(this, name, options[0]) || this;
            _this.name = name;
            _this.options = options;
            return _this;
        }
        StringGameParam.prototype.validate = function (value) {
            this.assertValidType(value);
            if (this.options.indexOf(value) === -1) {
                var reason = "expected on of [\"" + this.options.join('","') + "\"] got \"" + value + "\"";
                throw new Errors_1.InvalidGameParamsError(this.name, reason);
            }
            return value;
        };
        return StringGameParam;
    }(AbstractGameParam));
    var NumberGameParam = (function (_super) {
        __extends(NumberGameParam, _super);
        function NumberGameParam(name, _default, min, max) {
            var _this = _super.call(this, name, _default) || this;
            _this.name = name;
            _this._default = _default;
            _this.min = min;
            _this.max = max;
            return _this;
        }
        NumberGameParam.prototype.validate = function (value) {
            this.assertValidType(value);
            if (value < this.min) {
                throw new Errors_1.InvalidGameParamsError(this.name, value + " less than minimum " + this.min);
            }
            else if (value > this.max) {
                throw new Errors_1.InvalidGameParamsError(this.name, value + " greater than maximum " + this.max);
            }
            return value;
        };
        return NumberGameParam;
    }(AbstractGameParam));
    var PARAMS = new Map([
        ['isPublic', new BooleanGameParam('isPublic', true)],
        ['scenarioName', new StringGameParam('scenario', Array.from(Scenarios_1.scenarios.keys()))],
        ['portStyle', new StringGameParam('portStyle', ['fixed', 'random'])],
        ['tileStyle', new StringGameParam('tileStyle', ['random'])],
        ['numComputers', new NumberGameParam('numComputers', 0, 0, 0)],
        ['numHumans', new NumberGameParam('numHumans', 4, 0, 5)],
        ['vpGoal', new NumberGameParam('vpGoal', 10, 8, 12)],
    ]);
    var GameParams = (function () {
        function GameParams(params) {
            var e_1, _a;
            try {
                for (var PARAMS_1 = __values(PARAMS), PARAMS_1_1 = PARAMS_1.next(); !PARAMS_1_1.done; PARAMS_1_1 = PARAMS_1.next()) {
                    var _b = __read(PARAMS_1_1.value, 2), key = _b[0], value = _b[1];
                    this[key] = value.validate(params[key]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (PARAMS_1_1 && !PARAMS_1_1.done && (_a = PARAMS_1.return)) _a.call(PARAMS_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.scenario = Scenarios_1.scenarios.get(params.scenarioName);
        }
        GameParams.getParamOptions = function () {
            return PARAMS;
        };
        GameParams.getParamDefaults = function () {
            throw new Errors_1.NotImplementedError();
        };
        return GameParams;
    }());
    exports.GameParams = GameParams;
});
