/**
 * Type of time retured by process.hrtime().
 */
export declare type Time = [number, number];

/**
 * Represents a duration of time.
 * The duration is calculated from the difference between two times.
 * The fields {@link millies}, {@link seconds}, {@link minutes} and {@link hours} are distinguished parts of the duration.
 * To get the total duration in milliseconds, use the {@link duration()) method.
 * @example The duration between 1:00:00.000 and 1:02:03.456 is represented 2 minutes, 3 seconds, and 456 milliseconds
 */
export declare class Duration {
  private startTime: Time;
  private endtime: Time;

  /**
   * Number of milliseconds in the duration.
   @returns {number} Millisecond part in the duration.
   */
  public millies: number;
  /**
   * Number of seconds in the duration.
   * @returns {number} Second part in the duration.
   */
  public seconds: number;
  /**
   * Number of minutes in the duration.
   * @returns {number} Minute part in the duration.
   */
  public minutes: number;
  /**
   * Number of hours in the duration.
   * @returns {number} Hour part in the duration.
   */
  public hours: number;

  /**
   * Returns the duration in milliseconds.
   */
  duration(): number;

  private toMillies(Time): number;

  /**
   * Returns a string representation of the duration.
   * Format: 'hh:mm:ss.mmm'
   */
  toString(): string;
}

/**
 * A stopwatch that can be started, stopped, resumed, and reset.
 */
export declare class Stopwatch {
  /**
   * Starts the stopwatch.
   */
  start(): void;
  /**
   * Stops the stopwatch.
   */
  stop(): void;
  /**
   * Returns the current duration of the stopwatch.
   * The stopwatch must be stopped to get the duration.
   * @returns {Duration} The duration betweent start and stop times.
   */
  duration(): Duration;
  /**
   * Resumes the stopwatch.
   */
  resume(): void;
  /**
   * Returns the current duration of the stopwatch without stopping it.
   * The stopwatch must be started to get the duration.
   * @returns {Duration} The duration between start and current times.
   */
  lap(): Duration;
  /**
   * Resets the stopwatch.
   */
  reset(): void;
}
