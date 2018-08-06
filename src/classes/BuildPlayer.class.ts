import { Player, I_Player } from './Player.class';
import * as random from 'random-name';
import { randomIntFromInterval } from '../utils';
export class BuildPlayer {
	public name: string;
	constructor() {
		this.name = random.first() + ' ' + random.last();
	}
	main = (): Player<I_Player> => {
		return new Player(this.name);
	};
}
