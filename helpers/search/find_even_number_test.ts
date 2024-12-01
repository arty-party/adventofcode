import { assertEquals } from "@std/assert";
import { findEvenNumberDigits } from "./find_even_number.ts";

Deno.test("findEvenNumberDigits", async (t) => {
  await t.step("returns correct count of numbers with even digits", () => {
    const input = [12, 345, 2, 6, 7896];
    const result = findEvenNumberDigits(input);
    assertEquals(result, 2);
  });

  await t.step("handles array with no even digit numbers", () => {
    const input = [555, 7, 1];
    const result = findEvenNumberDigits(input);
    assertEquals(result, 0);
  });

  await t.step("handles array with all even digit numbers", () => {
    const input = [12, 34, 56, 78];
    const result = findEvenNumberDigits(input);
    assertEquals(result, 4);
  });

  await t.step("handles negative numbers", () => {
    const input = [-12, 345, -7896];
    const result = findEvenNumberDigits(input);
    assertEquals(result, 2);
  });
});
