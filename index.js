const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = 0;
function sumArr(sum, num) {
     return sum + num;
}

totalBatteries = batteryBatches.reduce(sumArr, 0);

