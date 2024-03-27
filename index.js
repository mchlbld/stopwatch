export class Duration {
  constructor(startTime, endTime) {
    if (!startTime || !endTime) {
      throw Error("startTime and endTime must be defined");
    }
    this.startTime = startTime;
    this.endTime = endTime;

    const milliesDiff = this.duration();
    this.millies = milliesDiff % 1000;
    this.seconds = Math.floor(milliesDiff / 1_000) % 60;
    this.minutes = Math.floor(milliesDiff / 1000 / 60) % 60;
    this.hours = Math.floor(milliesDiff / 1000 / 60 / 60);
  }

  duration() {
    const milliesStart = this.toMillies(this.startTime);
    const milliesEnd = this.toMillies(this.endTime);

    return Math.round(milliesEnd - milliesStart);
  }

  toMillies([seconds, nanos]) {
    return seconds * 1_000 + nanos / 1_000_000;
  }

  toString() {
    return `${this.hours}:${this.minutes}:${this.seconds}.${this.millies}`;
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

  resume() {
    if (!this.startTime) {
      throw new Error("Stopwatch was not started");
    }

    if (!this.endTime) {
      throw new Error("Stopwatch was not stopped");
    }

    const diff = process.hrtime(this.endTime);
    this.startTime = [this.startTime[0] + diff[0], this.startTime[1] + diff[1]];
    this.endTime = undefined;
  }

  lap() {
    const duration = new Duration(
      this.lastLap ?? this.startTime,
      process.hrtime(),
    );
    this.lastLap = process.hrtime();
    return duration;
  }

  reset() {
    this.startTime = undefined;
    this.endTime = undefined;
    this.lastLap = undefined;
  }
}
