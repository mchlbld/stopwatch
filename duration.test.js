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
    expect(duration.duration()).toBe(0);
  });

  test("millies (10ms)", () => {
    const start = [2, 10203040];
    const end = [2, 20203040];

    const duration = new Duration(start, end);

    expect(duration.millies).toBeCloseTo(10);
    expect(duration.seconds).toBe(0);
    expect(duration.minutes).toBe(0);
    expect(duration.hours).toBe(0);
    expect(duration.duration()).toBe(10);
  });

  test("seconds (1s)", () => {
    const start = [2, 10203040];
    const end = [3, 10203040];

    const duration = new Duration(start, end);

    expect(duration.millies).toBe(0);
    expect(duration.seconds).toBe(1);
    expect(duration.minutes).toBe(0);
    expect(duration.hours).toBe(0);
    expect(duration.duration()).toBe(1000);
  });

  test("minutes (2m)", () => {
    const start = [2, 10203040];
    const end = [122, 10203040];

    const duration = new Duration(start, end);

    expect(duration.millies).toBe(0);
    expect(duration.seconds).toBe(0);
    expect(duration.minutes).toBe(2);
    expect(duration.hours).toBe(0);
    expect(duration.duration()).toBe(120000);
  });

  test("hours (3h)", () => {
    const start = [2, 10203040];
    const end = [10802, 10203040];

    const duration = new Duration(start, end);

    expect(duration.millies).toBe(0);
    expect(duration.seconds).toBe(0);
    expect(duration.minutes).toBe(0);
    expect(duration.hours).toBe(3);
    expect(duration.duration()).toBe(1.08e7);
  });
});
