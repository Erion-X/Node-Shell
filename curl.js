
module.exports = function () {
  process.stdin.on("data", (data) => {
    let cmd = data.toString().trim();
    const commandArr = cmd.split(" ");

    if (commandArr[0] === "curl") {
      const request = require('request')
      request(commandArr[1], function (err, res, body) {
        if (err) {
          throw err;
        } else {
          process.stdout.write(body);
          process.stdout.write("\nprompt > ");
        }
      });
    }
  });
};


// request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log(body.url);
//   console.log(body.explanation);
// });
request('http://www.google.com', function (error, response, body) {
  // print the Content-Type header even if the server returned it as 'content-type' (lowercase)
  console.log('Content-Type is:', response.caseless.get('Content-Type'));
});
