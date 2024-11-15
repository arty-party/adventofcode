export function findEvenNumberDigits(nums: number[]): number {
  return nums.filter((num) => {
    const digitCount = Math.abs(num).toString().length;
    return digitCount % 2 === 0;
  }).length;
}
