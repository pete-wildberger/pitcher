import { Player, I_Player } from './Player.class';
import * as random from 'random-name';
import { randomIntFromInterval, fielders, shuffle } from '../utils';
export class BuildPlayer {
	public name: string;
	public position: string;
	public fielders: string[];
	constructor() {
		this.name = random.first() + ' ' + random.last();
	}
	make_player = (position: string, talent: number): Player<I_Player> => {
		return new Player(this.name, position, talent, this.generate_defense(position, talent), this.generate_hitting(position, talent));
	};
	generate_defense = (position: string, talent: number): any => {
		return {
			fielding: this.skill_level(talent),
			arm: this.skill_level(talent),
			positions: this.positions(position, talent),
			callgame: this.skill_level(talent)
		};
	};

	generate_hitting(position: string, talent: number): any {
		let result: { [key: string]: number } = {
			contact: 0,
			power: 0,
			discipline: 0
		};
		const skills: string[] = shuffle(Object.keys(result));
		if (fielders.indexOf(position) > -1) {
			let min: number = 0;

			if (talent - 30 < 30) {
				min = 30;
			} else {
				min = talent - 30;
			}
			skills.forEach((key: string) => {
				result[key] = randomIntFromInterval(min, talent);
				min - 10;
				talent - 10;
			});
		} else {
			skills.forEach((key: string) => {
				result[key] = randomIntFromInterval(0, 50);
			});
		}
		return result;
	}

	positions = (position: string, talent: number): any => {
		const pos_to_skill: { [key: string]: string } = {
			c: 'c',
			first: 'ci',
			second: 'mi',
			third: 'ci',
			short: 'mi',
			lf: 'of',
			cf: 'of',
			rf: 'of',
			sp: 'p',
			rp: 'p',
			cl: 'p'
		};
		let result: { [key: string]: number } = {
			of: 0,
			ci: 0,
			mi: 0,
			c: 0,
			p: 0
		};
		let top = pos_to_skill[position];
		Object.keys(result).forEach((key: string) => {
			result[key] = randomIntFromInterval(0, 50);
		});
		result[top] = this.skill_level(talent);
		return result;
	};

	skill_level(talent: number): number {
		let min: number = 0;
		if (talent - 30 < 30) {
			min = 30;
		} else {
			min = talent - 30;
		}
		return randomIntFromInterval(min, talent);
	}
}
