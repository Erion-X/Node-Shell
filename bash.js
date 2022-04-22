// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user typers in a line
// process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim(); // remove the newline

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
// });

process.stdin.on('data', (data) => {

  let cmd = data.toString().trim()
  if (cmd === 'pwd') {


  process.stdout.write(process.cwd());
}
process.stdout.write('\nprompt > ');
});

