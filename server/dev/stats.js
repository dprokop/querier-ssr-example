const chalk = require('chalk');

const logStats = (result, heading) => {
  let maxTime = 0;
  result.stats.forEach((compilationStats) => {
    const compilationTime =compilationStats.endTime - compilationStats.startTime
    maxTime = compilationTime  > maxTime ? compilationTime : maxTime;
  })

  if(heading){
    console.log(heading);
  }

  console.log(chalk.cyan.bold('  Completed in:\t') + maxTime + 'ms' );
  console.log(chalk.cyan.bold('  App URL:\t') + 'http://localhost:3000\n');
}

module.exports = logStats;
