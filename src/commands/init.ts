import chalk from "chalk";
import * as fs from "fs";
import pkg from "handlebars";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const { compile } = pkg;

// Compute __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface InitOptions {
  name: string;
}

const templatesDir = join(__dirname, "../templates");

function generateFile(templateFile: string, destination: string, context: any) {
  const templatePath = join(templatesDir, templateFile);
  const templateContent = fs.readFileSync(templatePath, "utf8");
  const template = compile(templateContent);
  const output = template(context);
  fs.writeFileSync(destination, output);
  console.log(chalk.green(`Created ${destination}`));
}

export function initCommand(options: InitOptions) {
  const projectName = options.name;
  const targetDir = join(process.cwd(), projectName);

  if (fs.existsSync(targetDir)) {
    console.error(
      chalk.red(`Error: Directory "${projectName}" already exists.`)
    );
    process.exit(1);
  }

  // Create project directories
  fs.mkdirSync(targetDir);
  fs.mkdirSync(join(targetDir, "src"));

  // Generate package.json
  generateFile("package.json.hbs", join(targetDir, "package.json"), {
    projectName,
    version: "0.1.0",
  });

  // Generate tsconfig.json
  generateFile("tsconfig.json.hbs", join(targetDir, "tsconfig.json"), {});

  // Generate a starter MCP server file
  generateFile("server.ts.hbs", join(targetDir, "src", "server.ts"), {
    projectName,
  });

  // Generate README.md
  generateFile("README.md.hbs", join(targetDir, "README.md"), {
    projectName,
  });

  // Generate .gitignore
  generateFile(".gitignore.hbs", join(targetDir, ".gitignore"), {});

  // Generate test file
  generateFile("test.js.hbs", join(targetDir, "test.js"), {
    projectName,
  });

  console.log(
    chalk.blue(`\nMCP server project "${projectName}" has been created.`)
  );
  console.log(
    chalk.blue(
      'Run "npm install" and "npm run build" inside the project to get started.'
    )
  );
  console.log(
    chalk.blue(
      'After building, run "npm test" to verify that all MCP tools and resources are working correctly.'
    )
  );
}
