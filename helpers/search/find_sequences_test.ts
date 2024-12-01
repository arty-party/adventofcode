import { assertEquals } from "@std/assert";
import { findSequentialDigits } from "./find_sequences.ts";

Deno.test("findSequentialDigits", async (t) => {
  await t.step("finds sequential digits between min and max", () => {
    const result = findSequentialDigits(100, 300);
    assertEquals(result, [123, 234]);
  });

  await t.step("handles single digit sequences", () => {
    const result = findSequentialDigits(1, 10);
    assertEquals(result, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  await t.step("handles larger ranges", () => {
    const result = findSequentialDigits(1000, 13000);
    assertEquals(result, [1234, 2345, 3456, 4567, 5678, 6789, 12345]);
  });
});
