import { test, expect } from "bun:test";
import addBinary from "../addBinary.cjs";

test("addBinary(1, 2) returns a truthy value", () => {
  const results1 = addBinary(1, 2);
  expect(results1).toBeTruthy();
});

test("addBinary(1, 2) returns \"11\"", () => {
  const results1 = addBinary(1, 2);
  expect(results1).toBe("11");
});
