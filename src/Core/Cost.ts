import { EdgeArgumentError } from 'Core/Errors';
import { parseResource, ProductiveResource } from 'Core/Resource';
import { Game } from 'Game';

export type Cost = Map<ProductiveResource, number>;

export function parseCost(game: Game, costString: string): Cost {

    const cost = new Map<ProductiveResource, number>();
    costString.split(';').forEach(pair => {

        let [resString, numString] = pair.split(':');
        const resource = parseResource(game, resString) as ProductiveResource;
        const number = parseInt(numString);

        if (isNaN(number)) {
            throw new EdgeArgumentError(`invalid resource quantity ("${numString}")`);
        } else if (number < 1) {
            throw new EdgeArgumentError(`invalid resource quantity < 1 ("${numString}")`);
        }

        const currentNum: number = cost.get(resource) || 0;
        cost.set(resource, currentNum + number);

    });

    if (cost.size == 0) {
        throw new EdgeArgumentError(`must specify at least one resource`);
    }

    return cost;
}
