import { Duration } from "./index";

describe("Duration", () => {
  test("Same start and end", () => {
    const start = [184651, 160560150];
    const end = start;

    const duration = new Duration(start, end);

    expect(duration.millies).toBe(0);
    expect(duration.seconds).toBe(0);
    expect(duration.minutes).toBe(0);
    expect(duration.hours).toBe(0);
  });
});
