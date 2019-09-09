import { Cost } from 'Core/Cost';
import { Player } from 'Player';

export type Trade = {
    readonly from: {
        readonly player: Player,
        readonly cards: Cost,
    },
    readonly with: {
        readonly player: Player,
        readonly cards: Cost,
    },
};
