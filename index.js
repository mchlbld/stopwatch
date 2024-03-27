export class Duration {
  constructor(startTime, endTime) {
    this.startTime = startTime;
    this.endTime = endTime;

    const milliesStart = this.toMillies(startTime);
    const milliesEnd = this.toMillies(endTime);

    this.millies = milliesEnd - milliesStart;
    this.seconds = Math.floor(this.millies / 1_000);
    this.minutes = Math.floor(this.millies / 1000 / 60);
    this.hours = Math.floor(this.millies / 1000 / 60 / 60);
  }

  toMillies([seconds, nanos]) {
    return seconds * 1_000 + nanos / 1_000_000;
  }

  toString() {
    return `${this.hours}h ${this.minutes}m ${this.seconds}s ${this.millies}ms`;
  }
}

export class Stopwatch {
  constructor() {}

  start() {
    this.startTime = process.hrtime();
    this.endTime = undefined;
  }

  stop() {
    if (!this.startTime) {
      throw new Error("Stopwatch was not started");
    }

    if (!this.endTime) {
      this.endTime = process.hrtime();
    } else {
      console.debug(
        "Stopwatch has already been stopped, not updating endtime.",
      );
    }
  }

  duration() {
    if (!this.startTime) {
      throw new Error("Stopwatch was not started");
    }
    if (!this.endTime) {
      throw new Error("Stopwatch was not stopped");
    }

    return new Duration(this.startTime, this.endTime);
  }

  reset() {
    this.startTime = undefined;
    this.endTime = undefined;
  }
}
