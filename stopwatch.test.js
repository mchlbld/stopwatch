import { Stopwatch } from "./index";

describe("Stopwatch", () => {
  test("Duration defined", (done) => {
    const stopwatch = new Stopwatch();
    stopwatch.start();
    setTimeout(() => {
      stopwatch.stop();
      const duration = stopwatch.duration();
      expect(duration.millies).toBeDefined();
      expect(duration.seconds).toBeDefined();
      expect(duration.minutes).toBeDefined();
      expect(duration.hours).toBeDefined();
      expect(duration.duration()).toBeGreaterThanOrEqual(100);
      done();
    }, 100);
  });

  test("stopping before starting throws error", () => {
    const stopwatch = new Stopwatch();
    expect(() => stopwatch.stop()).toThrowError("Stopwatch was not started");
  });

  test("duration without starting throws an error", () => {
    const stopwatch = new Stopwatch();
    expect(() => stopwatch.duration()).toThrowError(
      "Stopwatch was not started",
    );
  });

  test("duration without stopping throws an error", () => {
    const stopwatch = new Stopwatch();
    stopwatch.start();
    expect(() => stopwatch.duration()).toThrowError(
      "Stopwatch was not stopped",
    );
  });

  test("reset resets the stopwatch", (done) => {
    const stopwatch = new Stopwatch();
    stopwatch.start();
    setTimeout(() => {
      stopwatch.stop();
      stopwatch.reset();
      expect(stopwatch.startTime).toBeUndefined();
      expect(stopwatch.endTime).toBeUndefined();
      done();
    }, 100);
  });

  test("resume throws error when stopwatch is not stopped", () => {
    const stopwatch = new Stopwatch();
    stopwatch.start();
    expect(() => stopwatch.resume()).toThrowError("Stopwatch was not stopped");
  });

  test("resume throws error when stopwatch is started", () => {
    const stopwatch = new Stopwatch();
    expect(() => stopwatch.resume()).toThrowError("Stopwatch was not started");
  });

  test("lap works", (done) => {
    const stopwatch = new Stopwatch();
    stopwatch.start();
    setTimeout(() => {
      const lap1 = stopwatch.lap();
      expect(lap1.duration()).toBeGreaterThanOrEqual(100);
      const lap2 = stopwatch.lap();
      expect(lap2.duration()).toBeLessThan(100);
      done();
    }, 100);
  });
});
