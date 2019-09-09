import { Game } from 'Game';
import { NotImplementedError } from 'Core/Errors';

export type ProductiveResource = 'ore' | 'wood' | 'brick' | 'sheep' | 'wheat';
export type PortResource = 'mystery' | ProductiveResource;
export type LandResource = 'desert' | ProductiveResource;
export type SeaResource = 'ocean';
export type AnyResource = LandResource | SeaResource;

export class Resource {

}

export function parseResource(game: Game, resString: string): Resource {
    throw new NotImplementedError();
}
