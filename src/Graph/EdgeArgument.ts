import { parseCost, Cost } from 'Core/Cost';
import { Hex } from 'Board/Hex';
import { Junc } from 'Board/Junc';
import { Player } from 'Player';
import { Resource } from 'Core/Resource';
import { Road } from 'Board/Road';
import { Trade } from 'Core/Trade';
import { NotImplementedError } from 'Core/Errors';

type ArgumentPrimitive =  'cost' | 'diceroll' | 'hex' | 'junc' | 'null' | 'player'
    | 'resource' | 'road' | 'trade';

abstract class AbstractArg<T> {
    abstract validate(string: string): T;
}

class CostArg extends AbstractArg<Cost> {
    public validate(string): Cost {
        throw new NotImplementedError();
    }
}

class DicerollArg extends AbstractArg<number> {
    public validate(string): number {
        throw new NotImplementedError();
    }
}

class HexArg extends AbstractArg<Hex> {
    public validate(string): Hex {
        throw new NotImplementedError();
    }
}

class JuncArg extends AbstractArg<Junc> {
    public validate(string): Junc {
        throw new NotImplementedError();
    }
}

class NullArg extends AbstractArg<null> {
    public validate(string): null {
        throw new NotImplementedError();
    }
}

class PlayerArg extends AbstractArg<Player> {
    public validate(string): Player {
        throw new NotImplementedError();
    }
}

class ResourceArg extends AbstractArg<Resource> {
    public validate(string): Resource {
        throw new NotImplementedError();
    }
}

class RoadArg extends AbstractArg<Road> {
    public validate(string): Road {
        throw new NotImplementedError();
    }
}

class TradeArg extends AbstractArg<Trade> {
    public validate(string): Trade {
        throw new NotImplementedError();
    }
}

type AnyArg = CostArg | DicerollArg | HexArg | JuncArg | NullArg | PlayerArg
    | ResourceArg | RoadArg | TradeArg;

export type EdgeArguments = Array<AnyArg>;

export class ArgumentValidator {
    constructor(argString: string) {

    }

    parse
}
