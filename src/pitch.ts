function randomIntFromInterval(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
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
const zone_prob = function(control: number): { x: number; y: number } {
	// let zones:number[] = [];
	let prob_arr: number[] = [];
	let zones_len: number = 4;

	for (let i: number = 0; i < zones_len; i += 1) {
		if (i === 0) {
			prob_arr.push((18 - control / 100) / 2);
		}
		if (i > 0 && i < zones_len) {
			prob_arr.push(prob_arr[i - 1] + (control / 100 + 82) / 3);
		}
	}
	console.log(prob_arr);
	let x: number = pitch_roll(prob_arr);
	let y: number = pitch_roll(prob_arr);
	return { x, y };
};

const main = function() {
	const control: number = 100;
	let test_arr: any[] = [];
	for (let i: number = 0; i < 100; i += 1) {
		test_arr.push(zone_prob(control));
	}
	console.log(test_strike(test_arr));
};

main();
