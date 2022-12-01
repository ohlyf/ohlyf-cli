import inquirer from "inquirer";
import config from "../../config.js";
import downloadFun from "./download.js";

const myAction = async function (project, args) {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "framework",
      choices: config.framework,
      message: "请选择你需要使用的框架",
    },
  ]);
  console.log(answer);
  // 下载代码
  downloadFun(config.frameworkUrl[answer.framework], project);
};

export default myAction;
