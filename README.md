# mcpm - MCP Server Scaffolding CLI

**Version:** 0.1.0  
**License:** MIT  
**NPM Package:** [@mcpkit/mcpm](https://www.npmjs.com/package/@mcpkit/mcpm)

## Overview

**mcpm**, the "Model Context Protocol Manager," is a CLI tool leveraging the [MCP TypeScript SDK](https://github.com/modelcontextprotocol/sdk) to quickly scaffold and manage Model Context Protocol (MCP) server projects. It automates tedious setup tasks, allowing you to focus on building features and integrating your server with LLM applications.

## Features

- **Project Scaffolding:**  
  Use `mcpm init` to create a new, production-ready MCP server project.

- **Preconfigured Boilerplate:**  
  Generates a ready-to-run project including a sample MCP server with resource and tool examples.

- **Customizable Templates:**  
  Templates for package.json, tsconfig.json, and a starter server file are easily adjustable.

- **Developer Friendly:**  
  Designed for Node.js and TypeScript developers, ensuring a smooth setup and development experience.

## Installation

### Via NPM

```bash
npm install -g @mcpkit/mcpm
```

## Quick Start

Initialize a new MCP server project:

```bash
mcpm init --name my-mcp-server
```

This creates a new directory named `my-mcp-server` with a basic MCP server project scaffold.

Navigate and install dependencies:

```bash
cd my-mcp-server
npm install
```

Build and run your server:

```bash
npm run build
npm start
```

Your MCP server will start using the default transport and be ready to process MCP messages.

## Project Structure

After running `mcpm init`, your project will include:

- **`src/server.ts`**: Starter MCP server file with example commands (e.g., an addition tool and a greeting resource).
- **`package.json`**: Preconfigured for the MCP SDK and TypeScript.
- **`tsconfig.json`**: Standard TypeScript configuration.

## Usage

The generated MCP server includes examples of:

- **Tools**: Example tool for basic operations (e.g., addition).
- **Resources**: Serving dynamic content such as greeting messages.
- **Prompts**: Predefined templates to facilitate LLM interactions.

Customize `src/server.ts` to add or modify tools, resources, and prompts as needed. For advanced usage, refer to the [MCP TypeScript SDK documentation](https://github.com/modelcontextprotocol/sdk).

## Connecting Your MCP Server to Claude Code

Once you've generated and started your MCP server, you can connect it to Claude Code to enhance its capabilities:

### Connect Your MCP Server to Claude Code

1. Add your MCP server to Claude Code:

```bash
# Basic syntax
$ claude mcp add <server-name> <command> [args...]

# Example: Adding your generated MCP server
$ claude mcp add my-mcp-server -- node dist/server.js

# If your server requires environment variables
$ claude mcp add my-mcp-server -e API_KEY=your_api_key -- node dist/server.js
```

2. Verify your server was added successfully:

```bash
$ claude mcp list
```

3. Start using your MCP server with Claude:

```bash
$ claude
> use the addition tool from my-mcp-server to add 5 and 7
```

### Advanced Configuration

You can also add your MCP server using JSON configuration:

```bash
$ claude mcp add-json my-mcp-server '{"type":"stdio","command":"node","args":["dist/server.js"],"env":{"DEBUG":"true"}}'
```

**Note:** When developing your MCP server, you may need to restart it after making changes. You can update the server configuration in Claude Code without removing and re-adding it.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Write tests and ensure code quality (ESLint/Prettier recommended).
4. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License.

## Support

If you encounter any issues or have questions, please open an issue in the [GitHub repository](<[https://github.com/trevoruptain/mcpm](https://github.com/trevoruptain/mcpm)>).
