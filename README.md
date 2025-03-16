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
  Templates for `package.json`, `tsconfig.json`, and a starter server file are easily adjustable.

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

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Write tests and ensure code quality (ESLint/Prettier recommended).
4. Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License.

## Support

If you encounter any issues or have questions, please open an issue in the [GitHub repository]([https://github.com/modelcontextprotocol/sdk](https://github.com/trevoruptain/mcpm)).
