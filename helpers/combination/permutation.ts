export function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  if (nums.length <= 1) {
    return [nums];
  }

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const remaining = [...nums.slice(0, i), ...nums.slice(i + 1)];
    const perms = permute(remaining);

    for (const perm of perms) {
      result.push([current ?? 0, ...perm]);
    }
  }

  return result;
}

export function permuteUnique(nums: number[]): number[][] {
  const result: number[][] = [];
  const used: boolean[] = new Array(nums.length).fill(false);
  const sortedNums = [...nums].sort((a, b) => a - b);

  function backtrack(current: number[]): void {
    if (current.length === sortedNums.length) {
      result.push([...current]);
      return;
    }

    for (let i = 0; i < sortedNums.length; i++) {
      if (
        used[i] ||
        (i > 0 && sortedNums[i] === sortedNums[i - 1] && !used[i - 1])
      ) {
        continue;
      }

      used[i] = true;
      current.push(sortedNums[i] ?? 0);
      backtrack(current);
      current.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return result;
}
