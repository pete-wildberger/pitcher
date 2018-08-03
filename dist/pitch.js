function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function pitch_roll(arr) {
    var roll = Math.random() * 100;
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
    }
    else {
        return 4;
    }
}
function test_strike(arr) {
    var result = { strike: 0, ball: 0 };
    arr.forEach(function (item) {
        if (item.x > 0 && item.x < 4 && (item.y > 0 && item.y < 4)) {
            result.strike += 1;
        }
        else {
            result.ball += 1;
        }
    });
    return result;
}
var zone_prob = function (control) {
    // let zones:number[] = [];
    var prob_arr = [];
    var zones_len = 4;
    for (var i = 0; i < zones_len; i += 1) {
        if (i === 0) {
            prob_arr.push((18 - control / 100) / 2);
        }
        if (i > 0 && i < zones_len) {
            prob_arr.push(prob_arr[i - 1] + (control / 100 + 82) / 3);
        }
    }
    console.log(prob_arr);
    var x = pitch_roll(prob_arr);
    var y = pitch_roll(prob_arr);
    return { x: x, y: y };
};
var main = function () {
    var control = 100;
    var test_arr = [];
    for (var i = 0; i < 100; i += 1) {
        test_arr.push(zone_prob(control));
    }
    console.log(test_strike(test_arr));
};
main();
