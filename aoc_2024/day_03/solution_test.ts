import { assertEquals } from "@std/assert";
import { readFromInput } from "../../helpers/read_input.ts";
import { searchForSumOfMul, searchForSumOfMulWithDo } from "./solution.ts";

Deno.test("Sum of valid input sequences", async (t) => {
  await t.step("Demo input", () => {
    const input = readFromInput("demo_input", "03");
    assertEquals(searchForSumOfMul(input), 161);
  });
  await t.step("Solution input", () => {
    const input = readFromInput("input", "03");
    assertEquals(searchForSumOfMul(input), 167650499);
  });
});

Deno.test("Sum of valid input sequences with do's", async (t) => {
  await t.step("Demo input", () => {
    const input = readFromInput("demo_input", "03");
    assertEquals(searchForSumOfMulWithDo(input), 48);
  });
  await t.step("Solution input", () => {
    const input = readFromInput("input", "03");
    assertEquals(searchForSumOfMulWithDo(input), 95846796);
  });
});
