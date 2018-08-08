import { Player, I_Player } from './Player.class';
import { BuildPlayer } from './BuildPlayer.class';
import { Team, I_Team } from './Team.class';
import { randomIntFromInterval } from '../utils';

export interface team_by_position {
	[key: string]: number;
	c: number;
	first: number;
	second: number;
	third: number;
	short: number;
	lf: number;
	cf: number;
	rf: number;
	bench: number;
	sp: number;
	rp: number;
	cl: number;
}

export class BuildTeam {
	players: Array<I_Player>;
	team_count: team_by_position;
	constructor() {
		this.team_count = {
			c: 1,
			first: 1,
			second: 1,
			third: 1,
			short: 1,
			lf: 1,
			cf: 1,
			rf: 1,
			bench: 5,
			sp: 5,
			rp: 6,
			cl: 1
		};
	}
	make_team = (): I_Team => {
		let position_keys: string[] = Object.keys(this.team_count);
		let players: Array<I_Player> = [];
		while (position_keys.length > 0) {
			let idx = randomIntFromInterval(0, position_keys.length-1)
			if (this.team_count[position_keys[idx]] > 0 ){
				let builder = new BuildPlayer()
				players.push(builder.make_player(position_keys[idx]));
				this.team_count[position_keys[idx]] -= 1
				if (this.team_count[position_keys[idx]] === 0 ){
					position_keys.splice(idx, 1);
				}
			}
		}
		console.log(players);
		return new Team(players);
	};
}
