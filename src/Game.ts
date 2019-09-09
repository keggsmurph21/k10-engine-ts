import { RawGameParamValues, GameParams } from 'Game/Params';
import { Graph } from 'Graph';

export class Game {

    public params: GameParams;
    public graph: Graph;

    constructor(params: RawGameParamValues) {
        this.params = new GameParams(params);
        this.graph = new Graph(this.params.scenario);
    }

    public getScenario

}
