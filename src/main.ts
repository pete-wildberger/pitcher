import { BuildPlayer } from './classes/BuildPlayer.class';
import { BuildTeam } from './classes/BuildTeam.class';
import * as pitch from './pitch';

(function main() {
	// const control: number = 1.0;
	// let test_arr: any[] = [];
	// for (let i: number = 0; i < 100; i += 1) {
	// 	test_arr.push(pitch.zone_prob(control));
	// }
	// var player = new BuildPlayer();
	// console.log(player);
	// console.log(pitch.test_strike(test_arr));
	const builder = new BuildTeam();
	const team = builder.make_team();
	team.team.bench.forEach(player => {
		console.log(player);
	});
})();
