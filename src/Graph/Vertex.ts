export class Vertex {
    constructor(public readonly name: string, public readonly edgeNames: Array<string>) {
    }
}

export const vertices = new Map<string, Vertex>([
    [ '_v_accept_trade', new Vertex('_v_accept_trade', ['_e_to_root']) ],
    [ '_v_accept_trade_other', new Vertex('_v_accept_trade_other', ['_e_after_trade_other']) ],
    [ '_v_buy_dc', new Vertex('_v_buy_dc', ['_e_end_game', '_e_to_root']) ],
    [ '_v_collect', new Vertex('_v_collect', ['_e_to_root']) ],
    [ '_v_discard', new Vertex('_v_discard', ['_e_discard_move_robber', '_e_roll_discard']) ],
    [ '_v_discard_other', new Vertex('_v_discard_other', ['_e_after_discard_other', '_e_roll_discard_other']) ],
    [ '_v_end_game', new Vertex('_v_end_game', ['_e_accept_trade_other', '_e_decline_trade', '_e_roll_discard_other', '_e_take_turn']) ],
    [ '_v_fortify', new Vertex('_v_fortify', ['_e_end_game', '_e_to_root']) ],
    [ '_v_init_collect', new Vertex('_v_init_collect', ['_e_init2_build_road']) ],
    [ '_v_move_robber', new Vertex('_v_move_robber', ['_e_no_steal_robber', '_e_steal_robber']) ],
    [ '_v_offer_trade', new Vertex('_v_offer_trade', ['_e_accept_trade', '_e_cancel_trade', '_e_fail_trade']) ],
    [ '_v_pave', new Vertex('_v_pave', ['_e_end_game', '_e_end_init', '_e_to_root']) ],
    [ '_v_play_knight', new Vertex('_v_play_knight', ['_e_end_game']) ],
    [ '_v_play_monopoly', new Vertex('_v_play_monopoly', ['_e_to_root']) ],
    [ '_v_play_rb', new Vertex('_v_play_rb', ['_e_to_root']) ],
    [ '_v_play_vp', new Vertex('_v_play_vp', ['_e_end_game', '_e_to_root']) ],
    [ '_v_play_yop', new Vertex('_v_play_yop', ['_e_to_root']) ],
    [ '_v_roll', new Vertex('_v_roll', ['_e_roll_collect', '_e_roll_discard', '_e_roll_move_robber']) ],
    [ '_v_root', new Vertex('_v_root', ['_e_build_city', '_e_build_road', '_e_build_settlement', '_e_buy_dc', '_e_end_turn', '_e_init_settle', '_e_offer_trade', '_e_play_knight', '_e_play_monopoly', '_e_play_rb', '_e_play_vp', '_e_play_yop', '_e_roll', '_e_roll_exact', '_e_trade_bank']) ],
    [ '_v_settle', new Vertex('_v_settle', ['_e_end_game', '_e_init_build_road', '_e_init_collect', '_e_to_root']) ],
    [ '_v_steal', new Vertex('_v_steal', ['_e_to_root']) ],
    [ '_v_trade_with_bank', new Vertex('_v_trade_with_bank', ['_e_to_root']) ],
]);
