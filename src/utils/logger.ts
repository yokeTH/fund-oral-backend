import { Logger, ILogObj } from 'tslog';
import { appendFileSync, existsSync, mkdirSync } from 'fs';

const logDir = 'logs/';
if (!existsSync(logDir)) {
  mkdirSync(logDir);
}

// const logTrans = (logObj: ILogObj) => {
//   const date = new Date();
//   const dir = 'logs/';
//   const filename = `${date.getUTCDate()}-${date.getUTCMonth()}-${date.getUTCFullYear()}.log`;
//   appendFileSync(`${dir}/${filename}`, `[${logObj.date}] ${logObj.logLevel}: ${logObj.argumentsArray}`);
// };

const logger = new Logger();

export default logger;
