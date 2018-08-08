import { Player, I_Player } from './Player.class';

export interface I_Team {
	[key: string]: any;
	mascot: string;
	city: string;
	wins: number;
	loses: number;
	budget: number;
	current_payroll: number;
	team: player_team;
}
export interface player_team {
	[key: string]: Array<I_Player>;
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
	current_payroll: number;
	team: player_team;

	constructor(players: Array<I_Player>) {
		this.team = {
			bench: players,
			lineup: [],
			starters: [],
			relievers: []
		}
		// this.current_payroll = this.calcPayroll(this.team);
	}
	calcPayroll(team: player_team): number {
		let payroll: number = 0;
		const keys: string[] = Object.keys(team);
		keys.forEach((key: string) => {
			const role = team[key];
			role.forEach((p: I_Player) => {
				payroll += p.contract.salary;
			});
		});
		return payroll;
	}
}
