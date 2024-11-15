export function containsDuplicate(nums: number[]): boolean {
  const uniqueSet = new Set(nums);
  return uniqueSet.size !== nums.length;
}
