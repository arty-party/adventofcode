import { assertEquals } from "jsr:@std/assert";
import { containsDuplicate } from "./contains_duplicate.ts";

Deno.test("containsDuplicate - with duplicates", () => {
  assertEquals(containsDuplicate([1, 2, 3, 1]), true);
  assertEquals(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
});

Deno.test("containsDuplicate - without duplicates", () => {
  assertEquals(containsDuplicate([1, 2, 3, 4]), false);
  assertEquals(containsDuplicate([]), false);
});
