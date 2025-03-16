# mcpm - Instantly Generate a MCP Server

**mcpm** is a CLI tool leveraging the [MCP TypeScript SDK](https://github.com/modelcontextprotocol/sdk) to quickly scaffold and manage Model Context Protocol (MCP) server projects. With just a single command, you can create a fully functional MCP server and immediately connect it to Claude Code or your own LLM application.

## Features

- **Project Scaffolding:**  
  Use `mcpm init` to create a new, production-ready MCP server project.

- **Preconfigured Boilerplate:**  
  Generates a ready-to-run project including a sample MCP server with resource and tool examples.

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
```

Your MCP server is now ready to use with Claude Code.

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
> add the number 5 and the number 7
```

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
