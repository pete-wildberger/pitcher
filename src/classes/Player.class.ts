export interface I_Player {
	[key: string]: any;
	name: string;
	age: number;
	attitude: number;
	experience: number;
	clutch: number;
	endurance: number;
	potential: number;
	contract: {
		salary: number;
		years: number;
	};
	hitting: {
		contact: number;
		power: number;
		discipline: number;
	};
	pitching: {
		control: number;
		power: number;
		stamina: number;
		spin: number;
		composure: number;
		ground: number;
	};
	defense: {
		fielding: number;
		arm: number;
		positions: {
			of: number;
			ci: number;
			mi: number;
			c: number;
			p: number;
		};
		callgame: number;
	};
}

export class Player<I_Player> {
	public name: string;
	public position: string;
	public age: number;
	public attitude: number;
	public experience: number;
	public clutch: number;
	public endurance: number;
	public potential: number;
	public contract: {
		salary: number;
		years: number;
	};
	public hitting: {
		contact: number;
		power: number;
		discipline: number;
	};
	public pitching: {
		control: number;
		power: number;
		stamina: number;
		spin: number;
		composure: number;
		ground: number;
	};
	public defense: {
		fielding: number;
		arm: number;
		positions: {
			of: number;
			ci: number;
			mi: number;
			c: number;
			p: number;
		};
		callgame: number;
	};
	constructor(name: string, position: string, talent: number, defense: any, hitting: any) {
		this.name = name;
		this.position = position;
		this.potential = talent;
		this.defense = defense;
		this.hitting = hitting;
	}
}
