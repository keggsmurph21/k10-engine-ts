define(["require", "exports", "Graph/Vertex"], function (require, exports, Vertex_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Scenario = (function () {
        function Scenario(name, dice, topology, portParams, buyables, resources) {
            this.name = name;
            this.dice = dice;
            this.topology = topology;
            this.portParams = portParams;
            this.buyables = buyables;
            this.resources = resources;
            this.initialVertex = Vertex_1.vertices.get('_v_end_turn');
        }
        return Scenario;
    }());
    exports.Scenario = Scenario;
    exports.standard = new Scenario('standard', [
        9, 5, 2, 6, 3, 8, 10, 12, 11, 4, 8, 10, 9, 4, 5, 6, 3, 11,
    ], [
        { coords: { x: 1, y: -1, z: 0 }, isOcean: true },
        { coords: { x: 2, y: -2, z: 0 }, isOcean: true },
        { coords: { x: 3, y: -3, z: 0 }, isOcean: true },
        { coords: { x: 4, y: -4, z: 0 }, isOcean: true },
        { coords: { x: 0, y: -1, z: 1 }, isOcean: true },
        { coords: { x: 1, y: -2, z: 1 }, isOcean: false, resources: '*' },
        { coords: { x: 2, y: -3, z: 1 }, isOcean: false, resources: '*' },
        { coords: { x: 3, y: -4, z: 1 }, isOcean: false, resources: '*' },
        { coords: { x: 4, y: -5, z: 1 }, isOcean: true },
        { coords: { x: -1, y: -1, z: 2 }, isOcean: true },
        { coords: { x: 0, y: -2, z: 2 }, isOcean: false, resources: '*' },
        { coords: { x: 1, y: -3, z: 2 }, isOcean: false, resources: '*' },
        { coords: { x: 2, y: -4, z: 2 }, isOcean: false, resources: '*' },
        { coords: { x: 3, y: -5, z: 2 }, isOcean: false, resources: '*' },
        { coords: { x: 4, y: -6, z: 2 }, isOcean: true },
        { coords: { x: -2, y: -1, z: 3 }, isOcean: true },
        { coords: { x: -1, y: -2, z: 3 }, isOcean: false, resources: '*' },
        { coords: { x: 0, y: -3, z: 3 }, isOcean: false, resources: '*' },
        { coords: { x: 1, y: -4, z: 3 }, isOcean: false, resources: '*' },
        { coords: { x: 2, y: -5, z: 3 }, isOcean: false, resources: '*' },
        { coords: { x: 3, y: -6, z: 3 }, isOcean: false, resources: '*' },
        { coords: { x: 4, y: -7, z: 3 }, isOcean: true },
        { coords: { x: -2, y: -2, z: 4 }, isOcean: true },
        { coords: { x: -1, y: -3, z: 4 }, isOcean: false, resources: '*' },
        { coords: { x: 0, y: -4, z: 4 }, isOcean: false, resources: '*' },
        { coords: { x: 1, y: -5, z: 4 }, isOcean: false, resources: '*' },
        { coords: { x: 2, y: -6, z: 4 }, isOcean: false, resources: '*' },
        { coords: { x: 3, y: -7, z: 4 }, isOcean: true },
        { coords: { x: -2, y: -3, z: 5 }, isOcean: true },
        { coords: { x: -1, y: -4, z: 5 }, isOcean: false, resources: '*' },
        { coords: { x: 0, y: -5, z: 5 }, isOcean: false, resources: '*' },
        { coords: { x: 1, y: -6, z: 5 }, isOcean: false, resources: '*' },
        { coords: { x: 2, y: -7, z: 5 }, isOcean: true },
        { coords: { x: -2, y: -4, z: 6 }, isOcean: true },
        { coords: { x: -1, y: -5, z: 6 }, isOcean: true },
        { coords: { x: 0, y: -6, z: 6 }, isOcean: true },
        { coords: { x: 1, y: -7, z: 6 }, isOcean: true },
    ], [
        { coords: { x: 3, y: -4, z: 1 }, orientation: 1, type: 'wheat' },
        { coords: { x: 3, y: -5, z: 2 }, orientation: 3, type: 'wood' },
        { coords: { x: 2, y: -6, z: 4 }, orientation: 3, type: 'sheep' },
        { coords: { x: 1, y: -6, z: 5 }, orientation: 5, type: 'mystery' },
        { coords: { x: -1, y: -4, z: 5 }, orientation: 5, type: 'mystery' },
        { coords: { x: -1, y: -3, z: 4 }, orientation: 7, type: 'brick' },
        { coords: { x: -1, y: -2, z: 3 }, orientation: 9, type: 'mystery' },
        { coords: { x: 0, y: -2, z: 2 }, orientation: 11, type: 'ore' },
        { coords: { x: 1, y: -2, z: 1 }, orientation: 1, type: 'mystery' },
    ], {
        road: {
            maxNum: 15,
            cost: new Map([
                ['brick', 1],
                ['wood', 1],
            ]),
        },
        settlement: {
            maxNum: 5,
            cost: new Map([
                ['wheat', 1],
                ['sheep', 1],
                ['brick', 1],
                ['wood', 1],
            ]),
        },
        city: {
            maxNum: 4,
            cost: new Map([
                ['ore', 3],
                ['wheat', 2],
            ]),
        },
        devCard: {
            maxNum: 25,
            cost: new Map([
                ['ore', 1],
                ['wheat', 1],
                ['sheep', 1],
            ]),
            counts: {
                vp: 5,
                knight: 14,
                monopoly: 2,
                rb: 2,
                yop: 2,
            }
        }
    }, {
        ore: 3,
        wheat: 4,
        sheep: 4,
        brick: 3,
        wood: 4,
        desert: 1,
        ocean: 18,
    });
    exports.scenarios = new Map();
    exports.scenarios.set('standard', exports.standard);
});
