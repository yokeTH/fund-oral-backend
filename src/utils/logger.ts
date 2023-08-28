import { Logger, ILogObject } from 'tslog';
import { appendFileSync, existsSync, mkdirSync } from 'fs';

const logDir = 'logs/';
if (!existsSync(logDir)) {
  mkdirSync(logDir);
}

const logTrans = (logObj: ILogObject) => {
  const date = new Date();
  const dir = 'logs/';
  const filename = `${date.getUTCDate()}-${date.getUTCMonth()}-${date.getUTCFullYear()}.log`;
  appendFileSync(`${dir}/${filename}`, `[${logObj.date}] ${logObj.logLevel}: ${logObj.argumentsArray}`);
};

const logger = new Logger();
logger.attachTransport({
  silly: logTrans,
  debug: logTrans,
  trace: logTrans,
  info: logTrans,
  warn: logTrans,
  error: logTrans,
  fatal: logTrans,
});

export default logger;
