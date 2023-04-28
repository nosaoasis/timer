const times = process.argv.slice(2);

const timerAlert = function (times) {
  if (times.length < 1) return;

  for (const time of times) {
    if (time < 0 || isNaN(time) || typeof time === "undefined") {
      continue;
    }

    setTimeout(() => {
      process.stdout.write("\x07");
    }, time * 1000);
  }
};

timerAlert(times);
