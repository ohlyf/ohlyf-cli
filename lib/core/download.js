import download from "download-git-repo";
import ora from "ora";
import chalk from "chalk";

const downloadFun = function (url, project) {
  const spinner = ora().start();
  spinner.text = "代码正在下载......";

  download(url, project, function (err) {
    if (!err) {
      spinner.succeed("代码下载成功");
      console.log(chalk.blue("Done!", chalk.bold("you run")));
      console.log(chalk.blue("cd" + project));
      console.log(chalk.blue("npm install"));
      console.log(chalk.blue("npm run dev"));
    } else {
      spinner.fail("代码下载失败");
    }
  });
};

export default downloadFun;
