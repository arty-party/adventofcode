import { assertEquals } from "@std/assert";
import { readFromInput } from "../../helpers/read_input.ts";
import {
  checkForActuallySafeReports,
  checkForSafeReports,
} from "./solution.ts";

Deno.test("Check for safe reports", async (t) => {
  await t.step("Demo input", () => {
    const input = readFromInput("demo_input", "02");
    assertEquals(checkForSafeReports(input), 2);
  });

  await t.step("Solution input", () => {
    const input = readFromInput("input", "02");
    assertEquals(checkForSafeReports(input), 230);
  });
});

Deno.test("Check for actually safe reports", async (t) => {
  await t.step("Demo input", () => {
    const input = readFromInput("demo_input", "02");
    assertEquals(checkForActuallySafeReports(input), 4);
  });
  await t.step("Solution input", () => {
    const input = readFromInput("input", "02");
    assertEquals(checkForActuallySafeReports(input), 301);
  });
});
