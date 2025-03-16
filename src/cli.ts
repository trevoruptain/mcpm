#!/usr/bin/env node
import { Command } from "commander";
import { initCommand } from "./commands/init.js";

const program = new Command();

program
  .name("mcpm")
  .version("0.1.0")
  .description("CLI tool to scaffold and manage MCP servers");

program
  .command("init")
  .description("Initialize a new MCP server project")
  .option("-n, --name <project-name>", "Project name", "mcp-server")
  .action((options: { name: string }) => {
    initCommand(options);
  });

program.parse(process.argv);
