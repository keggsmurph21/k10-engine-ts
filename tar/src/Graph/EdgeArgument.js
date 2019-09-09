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
define(["require", "exports", "Core/Errors"], function (require, exports, Errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AbstractArg = (function () {
        function AbstractArg() {
        }
        return AbstractArg;
    }());
    var CostArg = (function (_super) {
        __extends(CostArg, _super);
        function CostArg() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CostArg.prototype.validate = function (string) {
            throw new Errors_1.NotImplementedError();
        };
        return CostArg;
    }(AbstractArg));
    var DicerollArg = (function (_super) {
        __extends(DicerollArg, _super);
        function DicerollArg() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DicerollArg.prototype.validate = function (string) {
            throw new Errors_1.NotImplementedError();
        };
        return DicerollArg;
    }(AbstractArg));
    var HexArg = (function (_super) {
        __extends(HexArg, _super);
        function HexArg() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HexArg.prototype.validate = function (string) {
            throw new Errors_1.NotImplementedError();
        };
        return HexArg;
    }(AbstractArg));
    var JuncArg = (function (_super) {
        __extends(JuncArg, _super);
        function JuncArg() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JuncArg.prototype.validate = function (string) {
            throw new Errors_1.NotImplementedError();
        };
        return JuncArg;
    }(AbstractArg));
    var NullArg = (function (_super) {
        __extends(NullArg, _super);
        function NullArg() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        NullArg.prototype.validate = function (string) {
            throw new Errors_1.NotImplementedError();
        };
        return NullArg;
    }(AbstractArg));
    var PlayerArg = (function (_super) {
        __extends(PlayerArg, _super);
        function PlayerArg() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PlayerArg.prototype.validate = function (string) {
            throw new Errors_1.NotImplementedError();
        };
        return PlayerArg;
    }(AbstractArg));
    var ResourceArg = (function (_super) {
        __extends(ResourceArg, _super);
        function ResourceArg() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ResourceArg.prototype.validate = function (string) {
            throw new Errors_1.NotImplementedError();
        };
        return ResourceArg;
    }(AbstractArg));
    var RoadArg = (function (_super) {
        __extends(RoadArg, _super);
        function RoadArg() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RoadArg.prototype.validate = function (string) {
            throw new Errors_1.NotImplementedError();
        };
        return RoadArg;
    }(AbstractArg));
    var TradeArg = (function (_super) {
        __extends(TradeArg, _super);
        function TradeArg() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TradeArg.prototype.validate = function (string) {
            throw new Errors_1.NotImplementedError();
        };
        return TradeArg;
    }(AbstractArg));
    var ArgumentValidator = (function () {
        function ArgumentValidator(argString) {
        }
        return ArgumentValidator;
    }());
    exports.ArgumentValidator = ArgumentValidator;
});
