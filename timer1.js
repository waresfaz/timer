let timer = process.argv.slice(2);

const alarm = function (input) {
  if (input.length === 0) {
    return;
  } 
  let filteredInput = input.filter(x => x > 0 && !Number.isNaN(x)); //isNaN
  console.log(filteredInput);
  for (let item of filteredInput) {
      setTimeout(() => process.stdout.write('\x07'), item * 1000);
    }
  }

alarm(timer);
