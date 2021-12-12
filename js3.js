function climbingStairs(stairCost) {
    stairCost.push(0)
    lenCost = stairCost.length
    cost = 0;
    for (var i = lenCost - 3; i >= -1; i--) {
        stairCost[i] += Math.min(stairCost[i + 1], stairCost[i + 2])
    }
    return Math.min(stairCost[0], stairCost[1])
}

console.log(climbingStairs([0, 2, 2, 1]))
console.log(climbingStairs([10, 15, 20]))