/** Adapted from 'mocha-suppress-logs/lib/log-capture' */
import * as util from 'util';

// debug & info == log; warn == error
export type LogLevel = 'trace' | 'debug' | 'info' | 'log' | 'warn' | 'error';
export const LOG_LEVELS = ['trace', 'debug', 'info', 'log', 'warn', 'error'];
const originalFunctions = LOG_LEVELS.map((level) => (console as any)[level]);

interface LogRecord {
  level: number;
}

// Refer to https://github.com/AleG94/mocha-suppress-logs for more hints
export class LogCapture {

  get(level?: LogLevel): string[] {
    return []
  }

  start() {
    //
  }

  stop() {
    //
  }

  reset() {
    //
  }
}

const logCapture = new LogCapture();
export default logCapture;
