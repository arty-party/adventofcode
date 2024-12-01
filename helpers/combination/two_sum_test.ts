import { assertEquals } from "@std/assert";
import { findTwoSum } from "./two_sum.ts";

Deno.test("findTwoSum", async (t) => {
  await t.step("finds indices of two numbers that sum to target", () => {
    const numbers = [2, 7, 11, 15];
    const target = 9;
    assertEquals(findTwoSum(numbers, target), [0, 1]);
  });

  await t.step("returns empty array when no solution exists", () => {
    const numbers = [1, 2, 3, 4];
    const target = 10;
    assertEquals(findTwoSum(numbers, target), []);
  });

  await t.step("handles array with duplicate numbers", () => {
    const numbers = [3, 3];
    const target = 6;
    assertEquals(findTwoSum(numbers, target), [0, 1]);
  });

  await t.step("works with negative numbers", () => {
    const numbers = [-1, -2, -3, -4, -5];
    const target = -8;
    assertEquals(findTwoSum(numbers, target), [2, 4]);
  });
});
