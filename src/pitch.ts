import { BuildPlayer } from './classes/BuildPlayer.class';
/* Randomly(taking 'control' attribute into account) generates coordinates for a
pitch based off of a five x and five y strike zone e.g.

ball | ball | ball | ball | ball
-----|------|------|------|-----
ball |strike|strike|strike| ball
-----|------|------|------|-----
ball |strike|strike|strike| ball
-----|------|------|------|-----
ball |strike|strike|strike| ball
-----|------|------|------|-----
ball | ball | ball | ball | ball

The likelyhood of getting a strike is based off of the best mlb pitching control
which is around a 69 strike to 31 ball ratio.  A player with a control value of
100 will result in around a 70/30 strike to ball ratio.
*/

function pitch_roll(arr: number[]): number {
	const roll: number = Math.random() * 100;
	if (roll > 0 && roll < arr[0]) {
		return 0;
	}
	if (roll > arr[0] && roll < arr[1]) {
		return 1;
	}
	if (roll > arr[1] && roll < arr[2]) {
		return 2;
	}
	if (roll > arr[2] && roll < arr[3]) {
		return 3;
	} else {
		return 4;
	}
}
function zone_prob(control: number): { x: number; y: number } {
	let x: number;
	let y: number;
	let prob_arr: number[] = [];
	let zones_len: number = 4; // technically 5 zone #array starts at zero

	for (let i: number = 0; i < zones_len; i += 1) {
		if (i === 0) {
			prob_arr.push((28 - control * 10) / 2);
		}
		if (i > 0 && i < zones_len) {
			prob_arr.push(prob_arr[i - 1] + (control * 10 + 72) / 3);
		}
	}
	console.log(prob_arr);
	x = pitch_roll(prob_arr);
	y = pitch_roll(prob_arr);
	return { x, y };
}

function test_strike(arr: any[]): { strike: number; ball: number } {
	let result = { strike: 0, ball: 0 };
	arr.forEach(item => {
		if (item.x > 0 && item.x < 4 && (item.y > 0 && item.y < 4)) {
			result.strike += 1;
		} else {
			result.ball += 1;
		}
	});
	return result;
}

const main = function() {
	const control: number = 1.0;
	let test_arr: any[] = [];
	for (let i: number = 0; i < 100; i += 1) {
		test_arr.push(zone_prob(control));
	}
	var player = new BuildPlayer();
	console.log(player);
	console.log(test_strike(test_arr));
};

main();
