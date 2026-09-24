import { describe, expect, it } from "vitest";

import { smokeTest } from "../src/index";

describe("package entry point", () => {
  it("runs the local package smoke test", () => {
    expect(smokeTest("portfolio")).toBe("Tika received: portfolio");
  });
});
