import { InvalidGameParamsError, NotImplementedError } from 'Core/Errors';
import { Scenario, scenarios } from 'Scenarios';

abstract class AbstractGameParam<T> {
    public constructor(public readonly name: string, public readonly _default: T) {
    }
    public assertValidType(value) {
        const expectedTypeString = typeof this._default;
        const actualTypeString = typeof value;
        if (actualTypeString !== expectedTypeString) {
            const reason = `expected type "${expectedTypeString}" got "${actualTypeString}"`;
            throw new InvalidGameParamsError(this.name, reason);
        }
    }
    abstract validate(value: RawGameParamValue): T;
}
class BooleanGameParam extends AbstractGameParam<boolean> {
    public validate(value: RawGameParamValue): boolean {
        this.assertValidType(value);
        return value as boolean;
    }
}
class StringGameParam extends AbstractGameParam<string> {
    public constructor(
        public readonly name: string,
        public readonly options: Array<string>,
    ) {
        super(name, options[0]);
    }
    public validate(value: RawGameParamValue): string {
        this.assertValidType(value);
        if (this.options.indexOf(value as string) === -1) {
            const reason = `expected on of ["${this.options.join('","')}"] got "${value}"`;
            throw new InvalidGameParamsError(this.name, reason);
        }
        return value as string;
    }
}
class NumberGameParam extends AbstractGameParam<number> {
    public constructor(
        public readonly name: string,
        public readonly _default: number,
        public readonly min: number,
        public readonly max: number,
    ) {
        super(name, _default);
    }
    public validate(value: RawGameParamValue): number {
        this.assertValidType(value);
        if (value < this.min) {
            throw new InvalidGameParamsError(this.name, `${value} less than minimum ${this.min}`);
        } else if (value > this.max) {
            throw new InvalidGameParamsError(this.name, `${value} greater than maximum ${this.max}`);
        }
        return value as number;
    }
}
type AnyGameParam = BooleanGameParam | StringGameParam | NumberGameParam;
type RawGameParamValue = boolean | string | number;
export type RawGameParamValues = { [p: string]: RawGameParamValue };

const PARAMS = new Map<string, AnyGameParam>([
    [ 'isPublic', new BooleanGameParam('isPublic', true) ],
    [ 'scenarioName', new StringGameParam('scenario', Array.from(scenarios.keys())) ],
    [ 'portStyle', new StringGameParam('portStyle', ['fixed', 'random']) ],
    [ 'tileStyle', new StringGameParam('tileStyle', [/*'fixed', */'random']) ],
    [ 'numComputers', new NumberGameParam('numComputers', 0, 0, 0) ],
    [ 'numHumans', new NumberGameParam('numHumans', 4, 0, 5) ],
    [ 'vpGoal', new NumberGameParam('vpGoal', 10, 8, 12) ],
]);

export class GameParams {

    public readonly isPublic: boolean;
    public readonly scenario: Scenario;
    public readonly scenarioName: string;
    public readonly portStyle: string;
    public readonly tileStyle: string;
    public readonly numComputers: number;
    public readonly numHumans: number;
    public readonly vpGoal: number;

    public constructor(params: RawGameParamValues) {
        for (let [key, value] of PARAMS) {
            this[key] = value.validate(params[key]);
        }
        this.scenario = scenarios.get(params.scenarioName as string);
    }

    public static getParamOptions(): any {
        return PARAMS;
    }

    public static getParamDefaults(): any {
        throw new NotImplementedError();
    }
}
