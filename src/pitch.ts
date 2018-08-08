import { BuildPlayer } from './classes/BuildPlayer.class';
import { pitch_roll } from './utils';
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

export function zone_prob(control: number): { x: number; y: number } {
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
	const roll: number = Math.random() * 100;
	console.log(prob_arr);
	x = pitch_roll(prob_arr, roll);
	y = pitch_roll(prob_arr, roll);
	return { x, y };
}

export function test_strike(arr: any[]): { strike: number; ball: number } {
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
