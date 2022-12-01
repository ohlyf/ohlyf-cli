#! /usr/bin/env node
import { program } from "commander";
import myHelp from "../lib/core/help.js";
import myCommander from "../lib/core/commander.js";

myHelp(program);

myCommander(program);

program.parse(process.argv);
