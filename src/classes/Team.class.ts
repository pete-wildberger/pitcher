import { Player, I_Player } from './Player.class';

export interface I_Team {
	mascot: string;
	city: string;
	wins: number;
	loses: number;
	budget: number;
	lineup: Array<I_Player>;
	bench: Array<I_Player>;
	starters: Array<I_Player>;
	relievers: Array<I_Player>;
}
export class Team<I_Team> {
	mascot: string;
	city: string;
	wins: number;
	loses: number;
	budget: number;
	lineup: Array<I_Player>;
	bench: Array<I_Player>;
	starters: Array<I_Player>;
	relievers: Array<I_Player>;
	constructor(players: Array<I_Player>) {
		this.bench = players;
	}
}
