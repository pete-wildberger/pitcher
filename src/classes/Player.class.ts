export interface I_Player {
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
	constructor(name: string) {
		this.name = name;
	}
}
