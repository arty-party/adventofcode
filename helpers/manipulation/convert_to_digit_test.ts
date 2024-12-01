import { assertEquals } from "@std/assert";
import { convertToDigit, findFirstAndLastDigit } from "./convert_to_digit.ts";

Deno.test("convertToDigit", async (t) => {
  await t.step("converts spelled numbers to digits", () => {
    assertEquals(convertToDigit("zero"), "0");
    assertEquals(convertToDigit("one"), "1");
    assertEquals(convertToDigit("two"), "2");
    assertEquals(convertToDigit("three"), "3");
    assertEquals(convertToDigit("four"), "4");
    assertEquals(convertToDigit("five"), "5");
    assertEquals(convertToDigit("six"), "6");
    assertEquals(convertToDigit("seven"), "7");
    assertEquals(convertToDigit("eight"), "8");
    assertEquals(convertToDigit("nine"), "9");
  });

  await t.step("handles mixed text and numbers", () => {
    assertEquals(convertToDigit("one2three"), "123");
    assertEquals(convertToDigit("abcone2threexyz"), "abc123xyz");
  });
});

Deno.test("findFirstAndLastDigit", async (t) => {
  await t.step("finds first and last digits in string", () => {
    assertEquals(findFirstAndLastDigit("one2three"), 13);
    assertEquals(findFirstAndLastDigit("seven5eight"), 78);
    assertEquals(findFirstAndLastDigit("abc1def2ghi"), 12);
  });

  await t.step("handles single digit", () => {
    assertEquals(findFirstAndLastDigit("five"), 55);
    assertEquals(findFirstAndLastDigit("7"), 77);
  });

  await t.step("handles no digits", () => {
    assertEquals(findFirstAndLastDigit("abc"), 0);
  });
});
