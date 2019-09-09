define(["require", "exports", "Game/Params", "Graph"], function (require, exports, Params_1, Graph_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = (function () {
        function Game(params) {
            this.params = new Params_1.GameParams(params);
            this.graph = new Graph_1.Graph(this.params.scenario);
        }
        return Game;
    }());
    exports.Game = Game;
});
