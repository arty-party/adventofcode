function splitByEmptyLine(array: string[]): string[][] {
  return array
    .reduce((groups: string[][], line: string) => {
      line === "" ? groups.push([]) : groups[groups.length - 1]?.push(line);
      return groups;
    }, [[]]);
}

export function checkUpdates(input: string[]): number {
  const [rules, updates] = splitByEmptyLine(input);

  return updates!.reduce((sum, update) => {
    const isValid = rules!.every((rule) => {
      const [page1, page2] = rule.split("|");
      const page1Index = update.indexOf(page1!);
      const page2Index = update.indexOf(page2!);

      return !(page1Index > -1 && page2Index > -1 && page1Index > page2Index);
    });

    if (isValid) {
      const numbers = update
        .split(",")
        .map(Number);
      const middleValue = numbers[Math.floor(numbers.length / 2)];
      return sum + middleValue!;
    }

    return sum;
  }, 0);
}

function swapElements(
  firstIndex: number,
  secondIndex: number,
  array: number[],
): void {
  if (firstIndex < array.length && secondIndex < array.length) {
    const temp = array[firstIndex]!;
    array[firstIndex] = array[secondIndex]!;
    array[secondIndex] = temp;
  }
}

export function onlyAddMiddlePageNumber(input: string[]): number {
  const [rules, updates] = splitByEmptyLine(input);

  return updates!
    .reduce((sum, update) => {
      const numbers = update
        .split(",")
        .map(Number);
      let didSwap = false;

      while (
        rules!.some((rule) => {
          const [page1, page2] = rule
            .split("|")
            .map(Number);
          const [i1, i2] = [numbers.indexOf(page1!), numbers.indexOf(page2!)];

          if (i1 > -1 && i2 > -1 && i1 > i2) {
            swapElements(i1, i2, numbers);
            didSwap = true;
            return true;
          }
          return false;
        })
      );

      return didSwap ? sum + numbers[Math.floor(numbers.length / 2)]! : sum;
    }, 0);
}
