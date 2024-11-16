import { assertEquals } from "@std/assert";
import { permute, permuteUnique } from "./permutation.ts";

Deno.test("permute - single number", () => {
  const input = [1];
  const expected = [[1]];
  assertEquals(permute(input), expected);
});

Deno.test("permute - two numbers", () => {
  const input = [1, 2];
  const expected = [[1, 2], [2, 1]];
  assertEquals(permute(input), expected);
});

Deno.test("permute - three numbers", () => {
  const input = [1, 2, 3];
  const expected = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ];
  assertEquals(permute(input), expected);
});

Deno.test("permuteUnique - no duplicates", () => {
  const input = [1, 2, 3];
  const expected = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ];
  assertEquals(permuteUnique(input), expected);
});

Deno.test("permuteUnique - with duplicates", () => {
  const input = [1, 1, 2];
  const expected = [
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
  ];
  assertEquals(permuteUnique(input), expected);
});

Deno.test("permuteUnique - all duplicates", () => {
  const input = [1, 1, 1];
  const expected = [[1, 1, 1]];
  assertEquals(permuteUnique(input), expected);
});
