module.exports = function () {
  process.stdin.on("data", (data) => {
    let cmd = data.toString().trim();
    const commandArr = cmd.split(" ");

    if (commandArr[0] === "cat") {
      const fs = require("fs");
      fs.readFile(commandArr[1], "utf8", (err, files) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(files);
          process.stdout.write("\nprompt > ");
        }
      });
    }
  });
};
