import { describe, expect, it } from "vitest";

import * as tika from "../src/index";

describe("package entry point", () => {
  it("loads as a module", () => {
    expect(tika).toBeTypeOf("object");
  });
});
