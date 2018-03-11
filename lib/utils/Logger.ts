/**
 * Dummy util to remove the burden of disabling tslint for every console.log
 */

 // tslint:disable
class Logger {
  public log(params: any) {
    console.log(params);
  }
  public warn(params: any) {
    console.warn(params);
  }
  public error(params: any) {
    console.error(params);
  }
}

let loggerInstance: Logger;

const logger = () => {
  if (!loggerInstance) {
    loggerInstance = new Logger();
  }

  return loggerInstance;
}

export default logger;

export const log = (params: any) => logger().log(params);
export const warn = (params: any) => logger().warn(params);
export const error = (params: any) => logger().error(params);

// tslint:enable
